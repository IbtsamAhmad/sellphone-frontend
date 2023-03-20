import { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Row,
  Col,
  Image,
  Typography,
} from "antd";
//import { useNavigate } from "react-router-dom";
import ForgotAvatar from "../assets/icons/ForgotAvatar.svg";
import SellPhone from "../assets/icons/SellPhone.svg";
// import FB from "../assets/icons/FB.svg";
// import Call from "../assets/icons/Call.svg";
// import Google from "../assets/icons/Google.svg";
import GooglePlay from "../assets/images/google-play.svg";
import Apple from "../assets/images/apple-store.svg";
import LoginArrow from "../assets/icons/LoginArrow.svg";
import FloatInput from "../Components/FloatInput";
//const { Link } = Typography;

const Forgot = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("values", values);
  };
  const onFinishFailed = async (values) => {
    console.log("values", values);
  };
  return (
    <div className="forgot-page-container">
      <Row align="middle" className="forgot-row">
        <Col lg={11} offset={1} span={12}>
          <div className="forgot-col-one">
            <Image
              src={SellPhone}
              alt=""
              preview={false}
              className="sell-logo"
            />
            <h1>Forgot Password?</h1>
            <p>Please enter your registered email</p>
            <Form
              name="basic"
              // initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="forgot-form-container"
              form={form}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter your email",
                  },
                ]}
              >
                <FloatInput
                  label="Username/Email"
                  placeholder="Username/Email"
                  name="email"
                  //onChange={emailChangeHandler}
                />
              </Form.Item>
              <Button
                type="primary"
                block
                className="login-btn"
                htmlType="submit"
              >
                Submit
              </Button>
              <Button
                type="primary"
                block
                className="cancel-btn"
              >
                Cancel
              </Button>
            </Form>
            <div>
              <div className="forgot-footer">
                <img src={LoginArrow} alt="LoginArrow" className="loginArrow" />
                <p className="scan">
                  Scan the <br /> QR to get the App
                </p>

                <img src={GooglePlay} alt="google" className="google" />
                <img src={Apple} alt="apple" className="apple" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={11} span={12} offset={1} className="forgot-col-two">
          <Image src={ForgotAvatar} alt="" preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Forgot;
