import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, message, Row, Col, Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import LoginAvatar from "../assets/icons/LoginAvatar.svg";
import SellPhone from "../assets/icons/SellPhone.svg";
import FB from "../assets/icons/FB.svg";
import Call from "../assets/icons/Call.svg";
import Google from "../assets/icons/Google.svg";
import GooglePlay from "../assets/images/google-play.svg";
import Apple from "../assets/images/apple-store.svg";
import LoginArrow from "../assets/icons/LoginArrow.svg";


import FloatInput from "../Components/FloatInput";
const {Link} = Typography


const Login = () => {
  const [form] = Form.useForm();
  const [validEmail,setValidEmail] = useState(false);


  const onFinish = async (values) => {
    console.log("values", values);
  };
  const onFinishFailed = async (values) => {
    console.log("values", values);
  };


  const emailChangeHandler = (e) => {
    // console.log("email value",e.target.value)
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = emailRegex.test(e.target.value);
    console.log("emailTest", emailTest);
    if (emailTest) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  return (
    <div className="login-page-container">
      <Row align="middle" className="login-row">
        <Col lg={11} offset={1} span={12}>
          <div className="login-col-one">
            <Image src={SellPhone} alt="" preview={false} className="sell-logo"/>
            <h1>Welcome back</h1>
            <p>Enter your details below</p>
            <Form
              name="basic"
              // initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form-container"
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
                onChange={emailChangeHandler}
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
              <div className="form-footer">
                    <Form.Item
                      // style={{ width: "100%" }}
                      name="remember"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value
                              ? Promise.resolve()
                              : Promise.reject(
                                  new Error("Please accept agreement")
                                ),
                        },
                      ]}
                    >
                      <Checkbox
                        className="termsCheckbox"
                        // onChange={onChangeCheck}
                      >
                      Remember me 
                      </Checkbox>
                    </Form.Item>
                    <Link href="/forget">
                     <p>   Forgot password?</p>
                    </Link>
                  </div>
                <Button type="primary"  block className={ validEmail ? "login-btn" : "disabled-btn"} htmlType="submit">
                  Login
                 </Button>
                 <p className="or">OR</p>
                 <div className="authentications-row">
                 <Button type="primary" className="authentication-btn">
                 <Image src={Call} alt="" preview={false} />Phone Number
                 </Button>
                 <Button type="primary" className="authentication-btn">
                 <Image src={Google} alt="" preview={false} />  Google
                 </Button>
                 <Button type="primary" className="authentication-btn">
                 <Image src={FB} alt="" preview={false} />   Facebook
                 </Button>
            
                 </div>
                 <p className="footer-line">Don’t have an account?<span><Link href="/signup">Sign up for free</Link></span></p>
            </Form>
            <div>

          <div className="login-footer">
            <img src={LoginArrow} alt="LoginArrow" className="loginArrow" />
            <p className="scan">Scan the <br/> QR to get the App</p>
    
            <img src={GooglePlay} alt="google" className="google" />
            <img src={Apple} alt="apple" className="apple" />
          </div>
            </div>
          </div>
        </Col>
        <Col lg={11} span={12} offset={1} className="login-col-two">
          <Image src={LoginAvatar} alt="" preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
