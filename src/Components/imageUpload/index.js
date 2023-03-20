  import { message, Upload, Button, Image } from "antd";
  import React, { useState, useRef } from "react";
  import axios from "axios";
  import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
  import Avatar from "../../assets/icons/Avatar.svg";

  const getBase64 = (img, callback) => {
    
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  
  const ImageUpload = ({ setPublicUrl }) => {
    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(false);
   
    
    const handleChange = async (info) => {
      console.log("onChange", info);
      if (info.file.status === "uploading") {
        setLoading(true);
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (url) => {
          console.log("url", url);
          setImageUrl(url);
        });
      }

    };
  
    const dummyRequest = ({ file, onSuccess }) => {
      console.log("Dummy", file);
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };

    const uploadButton = (
        <div className="upload-placeholder">
          {loading ? <LoadingOutlined /> :  <Image src={Avatar} className="avatar" preview={false} style={{width:"45px"}}/>}
         
        </div>
      );
    
    return (
      <>
        <Upload
        multiple
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={dummyRequest}

    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
      </>
    );
  };
  
  export default ImageUpload;
  