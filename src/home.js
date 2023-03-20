import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/images/logo.svg";
import SellIcon from "./assets/images/app-icon.svg";
import GooglePlay from "./assets/images/google-play.svg";
import AppleStore from "./assets/images/apple-store.svg";
import Rocket from "./assets/images/rocket.svg";
import Cloud from "./assets/images/cloud.jpg";
import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Snapchat from "./assets/images/Snapchat.png";
import Instagram from "./assets/images/instagram.svg";
import Linkedin from "./assets/images/linkedin.svg";
import Youtube from "./assets/images/youtube.svg";

import { Image, Space, Typography, Card, Form, Input, Button } from "antd";
const { Title, Paragraph, Link } = Typography;
function Home() {
  return (
    <>
      <div className="main-wrap">
        <div className="contaier">
          <div className="logo-wrap">
            <Link href="/home">
              <Image width={200} src={logo} preview={false} />
            </Link>
          </div>
          <div className="content-wrap">
            <div>
              <Title level={1}>
                We Are <br />
                <span>Launching Soon</span>
              </Title>
              <Paragraph className="availble-text">
                Will be available on
              </Paragraph>
              <Space className="appsLogo" size={15}>
                <Image
                  className="appLogo"
                  src={SellIcon}
                  preview={false}
                  width={60}
                />
                <Image src={GooglePlay} preview={false} width={200} />
                <Image src={AppleStore} preview={false} width={190} />
              </Space>
            </div>
            <div>
              <div className="rocket-box">
                <Image
                  className="cloud-img"
                  src={Cloud}
                  preview={false}
                  alt=""
                />
                <Image
                  className="rocket-img"
                  src={Rocket}
                  preview={false}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="footer-box">
            <div className="social-box">
              <Space size={28}>
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
              </Space>
              <Paragraph className="copy-right-txt">
                © Copyrights Sell Phone 2022 | All Rights Reserved |{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>
                 {/* |{" "}<Link>Terms of Use</Link>{" "} */}
              </Paragraph>
            </div>
            {/* <Card
              bordered={false}
              className="login-card"
              bodyStyle={{ maxWidth: 480, width: 480, padding: 0 }}
            >
              <Title level={5}>Get notified when we launch</Title>
              <Form
                // form={form}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                requiredMark={false}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    size="large"
                    prefix={<i className="icon-mail" />}
                  />
                </Form.Item>
                <Form.Item className="mb-0">
                  <Button
                    className="login-btn"
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Subscribe
                  </Button>
                </Form.Item>
              </Form>
            </Card> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
