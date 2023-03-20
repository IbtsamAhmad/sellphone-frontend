import React from "react";
import { Col, Row } from "antd";
import Google from "../../assets/images/google-play.svg";
import Apple from "../../assets/images/apple-store.svg";
import BannerArrow from "../../assets/images/BannerArrow.svg";
const Banner = () => {
  return (
    <div className="container">
      <Row className="container banner-container">
        <Col lg={8}>
          <img
            src="/assets/images/phones.png"
            alt="Phones"
            className="phones"
          />
        </Col>
        <Col lg={14}>
          <h1 className="heading">Get The Sellphone App</h1>
          <h6 className="sub-text">
            Buy & Sell Mobile phone faster and better using our App
          </h6>
          <div className="banner-footer">
            <img src={BannerArrow} alt="bannerArrow" className="bannerArrow" />
            <p className="scan">Scan the QR to get the App</p>
            <img
              src="/assets/images/QrCode.png"
              alt="Phones"
              className="code"
            />
            <img src={Google} alt="google" className="google" />
            <img src={Apple} alt="apple" className="apple" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
