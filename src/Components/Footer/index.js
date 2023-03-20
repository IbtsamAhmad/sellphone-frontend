import React from "react";
import { Col, Row, Container, Input, Image, Typography, Space } from "antd";
import Avento from "../../assets/images/Avento.png";
import { SettingOutlined } from "@ant-design/icons";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Snapchat from "../../assets/images/Snapchat.png";
import Instagram from "../../assets/images/instagram.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Youtube from "../../assets/images/youtube.svg";
const { Title, Paragraph, Link } = Typography;
const { Search } = Input;

const Subscribe = () => {
  return <div>Subscribe</div>;
};

const Footer = () => {
  return (
    <div className="container footer-container">
      <Row>
        <Col span={6} lg={5} md={12} sm={24} xs={24}>
          <h2>Phones by brand</h2>
          <ul className="footer-list">
            <li>
              <a className="footer-link" href="/">
                Apple
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Samsung
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Vivo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Oppo
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                One plus
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Motorolla
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                LG
              </a>
            </li>
          </ul>
        </Col>
        <Col span={6} lg={5} md={12} sm={24} xs={24}>
          <h2>Phones by city</h2>
          <ul className="footer-list">
            <li>
              <a className="footer-link" href="/">
                Phones in Karachi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Lahore
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Islamabad
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Rawalpindi
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Peshawar
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Faisalabad
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Multan
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Gujranwala
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Phones in Sialkot
              </a>
            </li>
          </ul>
        </Col>
        <Col span={6} lg={5} md={12} sm={24} xs={24}>
          <h2>Phones by price</h2>
          <ul className="footer-list">
            <li>
              <a className="footer-link" href="/">
                More than 10,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 20,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 30,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 40,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 50,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 60,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 70,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 80,000
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                More than 100,000
              </a>
            </li>
          </ul>
        </Col>
        <Col span={6} lg={4} md={12} sm={24} xs={24}>
          <h2>Phones by storage</h2>
          <ul className="footer-list">
            <li>
              <a className="footer-link" href="/">
                16GB
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                32GB
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                64GB
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                128GB
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                256GB
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                1TB
              </a>
            </li>
          </ul>
        </Col>
        <Col span={6} lg={5} md={12} sm={24} xs={24}>
          <h2>Phones by storage</h2>
          <img src={Avento} alt="" className="footer-logo" />
          <h2>Get Notified</h2>
          <Input
            className="footer-input"
            placeholder="Subscribe"
            addonAfter={<Subscribe />}
          />
          {/* <Search placeholder="input search text" enterButton="Search" size="large" loading /> */}
        </Col>
      </Row>
      <Row className="footer-icons-row">
        <Col span={6} lg={14} md={10} sm={24} xs={24}>
          <span className="copyRight-text">
            © Copyrights Sell Phone 2022 | All Rights Reserved |{" "}
          </span>

          <Link href="/privacy-policy">Privacy Policy</Link>
        </Col>
        <Col span={6} lg={10} md={10} sm={24} xs={24}  className="icons">
          <Link
            className="link"
            href="https://www.facebook.com/sellphoneapp"
            target="_blank"
          >
            <Image preview={false} size={20} src={Facebook}></Image>
          </Link>
          <Link
            className="link"
            href="http://twitter.com/SellPhoneapp"
            target="_blank"
          >
            <Image preview={false} src={Twitter}></Image>
          </Link>
          <Link
            className="link"
            href="https://t.snapchat.com/nlRoaPQM"
            target="_blank"
          >
            <Image
              className="snap-chat"
              preview={false}
              size={10}
              src={Snapchat}
            ></Image>
          </Link>

          <Link
            className="link"
            href="https://instagram.com/thesellphone/"
            target="_blank"
          >
            <Image preview={false} size={20} src={Instagram}></Image>
          </Link>
          <Link
            className="link"
            href="https://www.linkedin.com/company/sell-phone/"
            target="_blank"
          >
            <Image preview={false} size={18} src={Linkedin}></Image>
          </Link>
          <Link
            className="link"
            href="https://www.youtube.com/channel/UCgkRCB--vrXv8us7ZC16Tng"
            target="_blank"
          >
            <Image preview={false} size={21} src={Youtube}></Image>
          </Link>
        </Col>
      </Row>

      {/* <div style={{ marginTop: "5rem" }}>Here</div> */}
    </div>
  );
};

export default Footer;
