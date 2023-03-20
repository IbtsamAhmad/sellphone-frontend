import React, { useState, useCallback } from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Divider,
  Avatar,
  Button,
  Form,
  Select,
} from "antd";
import Header from "../Components/Navbar/index";
import Footer from "../Components/Footer";
import FloatInput from "../Components/FloatInput";
import FloatSelect from "../Components/FloatInput/FloatSelect";
import FilleUpload from "../Components/FilleUpload";
import FloatMessage from "../Components/FloatInput/FloatMessage";
import Post from "../assets/icons/Post.svg";

const { Option } = Select;

function PostPage() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("values", values);
  };
  const onFinishFailed = async (values) => {
    console.log("values", values);
  };

  return (
    <div className="App">
      <Header />
      <div className="container post-page-container">
        <Row>
          <Col lg={19} offset={1} className="post-form-column">
            <h1>
              <img src={Post} />
              Post An Ad
            </h1>

            <h2>Ad Details</h2>
            <Form
              name="signup"
              // initialValues={initialValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="post-form-container"
              form={form}
            >
              <Row>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="brand"
                    rules={[
                      {
                        required: true,
                        message: "Please select your brand!",
                      },
                    ]}
                  >
                    <FloatSelect placeholder="Brand" label="Brand">
                      <Option value="Samsung">Samsung</Option>
                      <Option value="Oppo">Oppo</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="model"
                    rules={[
                      {
                        required: true,
                        message: "Please select your model!",
                      },
                    ]}
                  >
                    <FloatSelect placeholder="Model" label="Model">
                      <Option value="A10">A10</Option>
                      <Option value="A50">A50</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="storage"
                    rules={[
                      {
                        required: true,
                        message: "Please select storage!",
                      },
                    ]}
                  >
                    <FloatSelect placeholder="Storage" label="Storage">
                      <Option value="20">20 GB</Option>
                      <Option value="50">50 gb</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="battery"
                    rules={[
                      {
                        required: true,
                        message: "Please select battery Health!",
                      },
                    ]}
                  >
                    <FloatSelect
                      placeholder="Battery health"
                      label="Battery health"
                    >
                      <Option value="100">100%</Option>
                      <Option value="90">90%</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="condition"
                    rules={[
                      {
                        required: true,
                        message: "Please select phone condition!",
                      },
                    ]}
                  >
                    <FloatSelect placeholder="Condition" label="Condition">
                      <Option value="10">10</Option>
                      <Option value="9">9</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="color"
                    rules={[
                      {
                        required: true,
                        message: "Please select phone color!",
                      },
                    ]}
                  >
                    <FloatSelect placeholder="Color" label="Color">
                      <Option value="Red">Red</Option>
                      <Option value="Black">Black</Option>
                    </FloatSelect>
                  </Form.Item>
                </Col>
              </Row>

              <FilleUpload />
              
              <Row>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Please enter price!",
                      },
                    ]}
                  >
                    <FloatInput
                      type="number"
                      label="Price"
                      placeholder="Enter Price"
                      name="price"
                    />
                  </Form.Item>
                </Col>
                <Col lg={11} offset={1}>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please enter description!",
                      },
                    ]}
                  >
                    <FloatMessage
                      label="Description"
                      type="message"
                      placeholder="Enter Description"
                      name="description"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div className="postBtn-container">
                <Button className="reset-btn">Reset</Button>
                <Button className="publish-btn"  htmlType="submit">Publish</Button>
              </div>
            </Form>
          </Col>
          <Col lg={3} offset={1}>
            <div className="ads-container">
              <img src="/assets/images/center.png" alt="" />
            </div>
          </Col>
        </Row>
        <div style={{ marginBottom: "5rem" }} />
        <Footer />
      </div>
    </div>
  );
}

export default PostPage;
