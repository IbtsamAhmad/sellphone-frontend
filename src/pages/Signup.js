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
  Steps,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";

import SignupAvatar from "../assets/icons/SignupAvatar.svg";
import SellPhone from "../assets/icons/SellPhone.svg";
import FB from "../assets/icons/FB.svg";
import Call from "../assets/icons/Call.svg";
import Google from "../assets/icons/Google.svg";
import GooglePlay from "../assets/images/google-play.svg";
import Apple from "../assets/images/apple-store.svg";
import LoginArrow from "../assets/icons/LoginArrow.svg";

import FloatInput from "../Components/FloatInput";
import FloatSelect from "../Components/FloatInput/FloatSelect";
import ImageUpload from "../Components/imageUpload";
const { Link } = Typography;
const { Step } = Steps;
const { Option } = Select;

const SignUp = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const onFinish = async (values) => {
    console.log("values", values);
  };
  const onFinishFailed = async (values) => {
    console.log("values", values);
  };
  const next = () => {
    setCurrent(1);
  };
  const prev = () => {
    setCurrent(0);
  };

  const emailContent = (
    <div>
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
      <Form.Item
        name="password"
        //hasFeedback
        //validateStatus={passwordStatus}
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <FloatInput
          label="Password"
          placeholder="Enter Password"
          name="password"
          iconRender
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        //hasFeedback
        //validateStatus={passwordStatus}
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <FloatInput
          label="Confirm Password"
          placeholder="Confirm Password"
          name="password"
          iconRender
        />
      </Form.Item>
    </div>
  );
  const informationContent = (
    <div>
      <ImageUpload />
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
        ]}
      >
        <FloatInput
          label="Full Name"
          placeholder="Full Name"
          name="Full Name"
          //onChange={emailChangeHandler}
        />
      </Form.Item>
      <Form.Item
        name="country"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
        ]}
      >
        <FloatSelect placeholder="Country" label="Country">
          <Option value="Pakistan">Pakistan</Option>
          <Option value="India">India</Option>
        </FloatSelect>
      </Form.Item>

      <Form.Item
        name="city"
        rules={[
          {
            required: true,
            message: "Please enter your city",
          },
        ]}
      >
        <FloatSelect placeholder="City" label="City">
          <Option value="Lahore">Lahore</Option>
          <Option value="Karachi">Karachi</Option>
          <Option value="Islamabad">Islamabad</Option>
        </FloatSelect>
      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: "Please enter your address",
          },
        ]}
      >
        <FloatInput label="Address" placeholder="Address" name="Address" />
      </Form.Item>
      <Form.Item
        name="Phone"
        rules={[
          {
            required: true,
            message: "Please enter your Phone Number",
          },
        ]}
      >
        <FloatInput
          type="number"
          label="Phone Number"
          placeholder="Phone Number"
          name="Phone Number"
        />
      </Form.Item>
      <Form.Item
        // style={{ width: "100%" }}
        name="remember"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Please accept agreement")),
          },
        ]}
      >
        <Checkbox
          className="termsCheckbox"
          // onChange={onChangeCheck}
        >
          By creating an account, you agree to our
          <Link href="/privacy-policy">Term & Conditions</Link>
        </Checkbox>
      </Form.Item>
    </div>
  );
  const data = [
    { id: "100", name: "Email", content: emailContent },
    { id: "101", name: "Personal Information", content: informationContent },
  ];

  return (
    <div className="login-page-container">
      <Row align="middle" className="login-row">
        <Col lg={11} offset={1} span={12}>
          <div className="login-col-one">
            <Image
              src={SellPhone}
              alt=""
              preview={false}
              className="sell-logo"
            />
            <h1>Create new account</h1>
            <p>Please enter your details</p>
            <Steps size="small" current={current}>
              {data.map((item, index) => (
                <Step key={index} title={item.name} />
              ))}
            </Steps>

            <Form
              name="signup"
              // initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form-container"
              form={form}
            >
              <div className="steps-content">{data[current].content}</div>
              {current === 0 ? (
                <Button
                  type="primary"
                  block
                  className="login-btn"
                  onClick={() => next()}
                >
                  Next
                </Button>
              ) : (
                <Button
                  style={{ marginBottom: "40px" }}
                  type="primary"
                  block
                  className="login-btn"
                  // htmlType="submit"
                  // onClick={() => prev()}
                >
                  Create Account
                </Button>
              )}
            </Form>
            {current === 0 ? (
              <div>
                <p className="or">OR</p>
                <div className="authentications-row">
                  <Button type="primary" className="authentication-btn">
                    <Image src={Call} alt="" preview={false} />
                    Phone Number
                  </Button>
                  <Button type="primary" className="authentication-btn">
                    <Image src={Google} alt="" preview={false} /> Google
                  </Button>
                  <Button type="primary" className="authentication-btn">
                    <Image src={FB} alt="" preview={false} /> Facebook
                  </Button>
                </div>
                <p className="footer-line">
                  Already have an account?
                  <span>
                    <Link href="/login">Sign in</Link>
                  </span>
                </p>
                <div className="login-footer">
                  <img
                    src={LoginArrow}
                    alt="LoginArrow"
                    className="loginArrow"
                  />
                  <p className="scan">
                    Scan the <br /> QR to get the App
                  </p>

                  <img src={GooglePlay} alt="google" className="google" />
                  <img src={Apple} alt="apple" className="apple" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col lg={11} span={12} offset={1} className="login-col-two">
          <Image src={SignupAvatar} alt="" preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
