import React, { useState } from "react";
import { Button, Form, Input, Radio, Select , Typography} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import OwlCarousel from "react-owl-carousel";
import CaretDown from "../../assets/icons/CaretDown.svg";
const { Option } = Select;
const { Link } = Typography
const Hero = () => {
  const [form] = Form.useForm();
  return (
    <div className="hero-container">
      <OwlCarousel
        className="owl-theme"
        loop={true}
        center={true}
        margin={0}
        nav
        items={1}
        autoplay={true}
      >
        <div className="item hero-item">
          <div className="overlay" />
          <img
            src="/assets/images/heroImage.png"
            alt=""
            className="hero-image"
          />
          <h1 className="title">
            Mobile Phone Prices in Pakistan Find your next mobile phone?
          </h1>
          <p className="sub-title">
            Mobilemall is an online mobile phone portal where you can discover
            latest and updated mobile prices in Pakistan.{" "}
          </p>
        </div>
        <div className="item hero-item">
          <div className="overlay" />
          <img
            src="/assets/images/heroImage.png"
            alt=""
            className="hero-image"
          />
          <h1 className="title">Slider Two</h1>
          <p className="sub-title">
            Mobilemall is an online mobile phone portal where you can discover
            latest and updated mobile prices in Pakistan.{" "}
          </p>
        </div>
        <div className="item hero-item">
          <div className="overlay" />
          <img
            src="/assets/images/heroImage.png"
            alt=""
            className="hero-image"
          />
          <h1 className="title">Slider Three</h1>
          <p className="sub-title">
            Mobilemall is an online mobile phone portal where you can discover
            latest and updated mobile prices in Pakistan.{" "}
          </p>
        </div>
      </OwlCarousel>
      <Form form={form} layout="vertical" className="search-form">
        <Form.Item
          name="brand"
          label="Brand"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Select placeholder="Brand"  suffixIcon={<img src={CaretDown} alt=""/>}>
            <Option value="Samsung">Samsung</Option>
            <Option value="IPhone">IPhone</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="model"
          label="Model"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Select placeholder="Model"  suffixIcon={<img src={CaretDown} alt=""/>}>
            <Option value="Iphone X">Iphone X</Option>
            <Option value="Iphone 13 Pro Max">Iphone 13 Pro Max</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="Price Range"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Select placeholder="Price"  suffixIcon={<img src={CaretDown} alt=""/>}>
            <Option value="10,000 - 20,000">10,000 - 20,000</Option>
            <Option value="20,000 -30,000">20,000 -30,000 </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Select placeholder="Location"  suffixIcon={ <img src={CaretDown} alt=""/>}>
            <Option value="Islamabad">Islamabad</Option>
            <Option value="Multan">Multan</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="condition"
          label="Condition"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Select placeholder="Condition"  
           suffixIcon={<img src={CaretDown} alt=""/>}
           >
            <Option value="used">used</Option>
            <Option value="New">New</Option>
          </Select>
        </Form.Item>

        <Form.Item style={{alignSelf:"flex-end", justifySelf:"flex-end"}}>
          <Link href="recent">
    
          <Button block type="primary" className="search-btn" icon={<SearchOutlined />}>Search</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Hero;
