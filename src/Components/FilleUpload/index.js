import React, { useEffect, useState } from "react";

import {
  Button,
  message,
  Upload,
} from "antd";
import Plus from "../../assets/icons/Plus.svg";
import Browse from "../../assets/icons/Browse.svg";

const { Dragger } = Upload;

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

const dummyRequest = ({ file, onSuccess }) => {
  console.log("Dummy", file);
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const onDrop = (e) => {
  console.log("Dropped files", e.dataTransfer.files);
};

const onChange = (info) => {
  const { status } = info.file;
  // console.log("try", info.file.type)
  const isVideo =
    info.file.type === "video/mp4" || info.file.type === "video/mkv";
  if (!isVideo) {
    return false;
  }
  if (status !== "uploading") {
    console.log("here", info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const UploadPage = () => {
  return (
      <div className="upload-container">
        <h1>Pictures</h1>
        <Dragger
          listType="picture-card"
          onChange={onChange}
          onDrop={onDrop}
          beforeUpload={beforeUpload}
          showUploadList={true}
          customRequest={dummyRequest}
          multiple
          maxCount={4}
        >

         <img src={Plus} alt=""/>
          <p className="ant-upload-text">
         Upload
          </p>
      
        </Dragger>

        <Button type="primary" className= "browse-btn" icon={<img src={Browse} alt="browse"/>} >Browse</Button>
     
     
      </div>
  );
};

export default UploadPage;
