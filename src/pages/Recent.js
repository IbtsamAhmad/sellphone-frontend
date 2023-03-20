import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Layout,
  Menu,
  Row,
  Col,
  Pagination,
  List,
  Typography,
  Image,
  Select,
  Checkbox,
  Collapse,
  Divider,
  Slider,
  Switch,
  InputNumber,
  Popover,
  Button,
} from "antd";
import BatteryHealth from "../../src/assets/icons/BatteryHealth.svg";
import Color from "../../src/assets/icons/Color.svg";
import Condition from "../../src/assets/icons/Condition.svg";
import Memory from "../../src/assets/icons/Memory.svg";
import Contact from "../../src/assets/icons/Contact.svg";
import Share from "../../src/assets/icons/Share.svg";
import Liked from "../../src/assets/icons/Liked.svg";
import Reset from "../../src/assets/icons/Reset.svg";
// import Center from "/assets/images/center.png";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import Footer from "../../src/Components/Footer/index";
const { Link } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

const Recent = () => {
  const data = [
    {
      id: 1,
      name: "Johnson",
      img: "/assets/images/recentOne.png",
      price: "Rs 128,000",
      company: "Apple",
      model: "iPhone XS",
      batterHealth: "100%",
      storage: "128GB",
      color: "Midnight Green",
      condition: "10/10",
      phone: "+92 30289891891",
      location: "Lahore, Pakistan",
      date: "12 March 2021",
      liked: false,
    },
    {
      id: 2,
      name: "Johnson",
      img: "/assets/images/recentTwo.png",
      price: "Rs 28,000",
      company: "Vivo",
      model: "iPhone XS",
      batterHealth: "100%",
      storage: "128GB",
      color: "Midnight Green",
      condition: "10/10",
      phone: "+92 30289891891",
      location: "Lahore, Pakistan",
      date: "12 March 2021",
      liked: false,
    },
    {
      id: 3,
      name: "Johnson",
      img: "/assets/images/recentThree.png",
      price: "Rs 128,000",
      company: "Apple",
      model: "iPhone XS",
      batterHealth: "100%",
      storage: "128GB",
      color: "Midnight Green",
      condition: "10/10",
      phone: "+92 30289891891",
      location: "Lahore, Pakistan",
      date: "12 March 2021",
      liked: false,
    },
    {
      id: 4,
      name: "Johnson",
      img: "/assets/images/recentFour.png",
      price: "Rs 128,000",
      company: "Apple",
      model: "iPhone XS",
      batterHealth: "100%",
      storage: "128GB",
      color: "Midnight Green",
      condition: "10/10",
      phone: "+92 30289891891",
      location: "Lahore, Pakistan",
      date: "12 March 2021",
      liked: false,
    },
  ];
  const [inputValue, setInputValue] = useState([10000, 100000]);
  // const onChange = (newValue) => {

  // };
  const onChangeFilters = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };


  const onChangeSlider = (value) => {
    console.log("onChange: ", value);
    setInputValue(value);
  };
  const onChangeMin = (value) => {
    let curr = [...inputValue];
    curr[0] = value;
    setInputValue(curr);
  };
  const onChangeMax = (value) => {
    //  console.log('onChange: ', value);
    let curr = [...inputValue];
    curr[1] = value;
    //  console.log("curr", curr)
    setInputValue(curr);
  };
 
  const content = (
    <div className="buttons">
    
      <FacebookMessengerShareButton
        url="https://www.youtube.com/"
        quote="link"
        className="Demo__some-network__share-button"
      >
        <FacebookMessengerIcon size={32} round={true} />
      </FacebookMessengerShareButton>

      <LinkedinShareButton
        url="https://www.youtube.com/"
        quote="link"
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>

      <TwitterShareButton
        url="https://www.youtube.com/"
        quote="link"
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <FacebookShareButton
        url="https://www.youtube.com/"
        quote="link"
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url="https://www.youtube.com/"
        quote="link"
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>     
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container recent-page-container">
        <Row>
          <Col lg={4}>
            <div className="filters-container">
              <div className="filters-header">
                <h1>Filters</h1>
                <div className="filter-reset">
                  <Image preview={false} src={Reset} alt="" />
                  <span>Reset</span>
                </div>
              </div>
              <Collapse accordion defaultActiveKey={["1"]}>
                <Panel header="City" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="Lahore">Lahore</Checkbox>
                    <Checkbox value="Karachi">Karachi</Checkbox>
                    <Checkbox value="Islamabad">Islamabad</Checkbox>
                    <Checkbox value="Rawalpindi">Rawalpindi</Checkbox>
                    <Checkbox value="Multan">Multan</Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />

              <Collapse accordion>
                <Panel header="Brands" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="Iphone">Iphone</Checkbox>
                    <Checkbox value="Samsung">Samsung</Checkbox>
                    <Checkbox value="OPPO">OPPO</Checkbox>
                    <Checkbox value="Vivo">Vivo</Checkbox>
                    <Checkbox value="Xiomi">Xiomi</Checkbox>
                    <Checkbox value="Realme">Realme</Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />
              <Collapse accordion>
                <Panel header="Model" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="iPhone X">iPhone X</Checkbox>
                    <Checkbox value="iPhone XR">iPhone XR</Checkbox>
                    <Checkbox value="iPhone XS">iPhone XS</Checkbox>
                    <Checkbox value="iPhone 11">iPhone 11</Checkbox>
                    <Checkbox value="iPhone 11 Pro max">
                      iPhone 11 pro Max
                    </Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />
              <Collapse accordion>
                <Panel header="Price" key="3">
                  <Slider
                    onChange={onChangeSlider}
                    min={0}
                    max={1000000}
                    range
                    step={5000}
                    value={inputValue}
                  />
                  <div className="pricing">
                    <p>
                      {inputValue[0] / 1000 > 100
                        ? `${(inputValue[0] / 100000).toFixed(1)} lac`
                        : `${(inputValue[0] / 1000).toFixed(1)} k`}
                    </p>
                    <p>
                      {inputValue[1] / 1000 > 100
                        ? `${(inputValue[1] / 100000).toFixed(1)} lac`
                        : `${(inputValue[1] / 1000).toFixed(1)} k`}
                    </p>
                  </div>
                  <InputNumber
                    min={0}
                    max={1000000}
                    step={1000}
                    value={inputValue[0]}
                    onChange={onChangeMin}
                  />
                  <InputNumber
                    min={0}
                    max={1000000}
                    step={1000}
                    value={inputValue[1]}
                    onChange={onChangeMax}
                  />
                </Panel>
              </Collapse>
              <Divider />
              <Collapse accordion>
                <Panel header="Screen Size" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="iPhone 12">iPhone 12</Checkbox>
                    <Checkbox value="5 inches">5 inches</Checkbox>
                    <Checkbox value="5.5 inches">5.5 inches</Checkbox>
                    <Checkbox value="6 inches">6 inches</Checkbox>
                    <Checkbox value="6.5 inches">6.5 inches</Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />
              <Collapse accordion>
                <Panel header="Weight" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="200 grams">200 grams</Checkbox>
                    
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />
              <Collapse accordion>
                <Panel header="RAM" key="1">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="200 MB">512 MB</Checkbox>
                    <Checkbox value="1 GB">1 GB</Checkbox>
                    <Checkbox value="2 GB">2 GB</Checkbox>
                    <Checkbox value="3 GB">3 GB</Checkbox>
                    
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />

              <Collapse accordion>
                <Panel header="Storage" key="2">
                  <Checkbox.Group onChange={onChangeFilters}>
                    <Checkbox value="8">8gb</Checkbox>
                    <Checkbox value="16">16gb</Checkbox>
                    <Checkbox value="32">32gb</Checkbox>
                    <Checkbox value="64">64gb</Checkbox>
                    <Checkbox value="128">128gb</Checkbox>
                    <Checkbox value="256">256gb</Checkbox>
                    <Checkbox value="512">512gb</Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />


              <Collapse accordion>
                <Panel header="Colors" key="2">
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChangeFilters}
                  >
                    <Checkbox value="Red">
                      <div className="color-ball ball-red" /> Red
                    </Checkbox>
                    <Checkbox value="Apricot">
                      <div className="color-ball ball-apricot" /> Apricot
                    </Checkbox>
                    <Checkbox value="Black">
                      <div className="color-ball ball-black" /> Black
                    </Checkbox>
                    <Checkbox value="Black & White">
                      <div className="color-ball ball-bw" /> Black & White
                    </Checkbox>
                    <Checkbox value="Silver">
                      <div className="color-ball ball-silver" /> Silver
                    </Checkbox>
                    <Checkbox value="Tan">
                      <div className="color-ball ball-tan" /> Tan
                    </Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Divider />

              
              <Collapse accordion>
                <Panel header="Condition" key="2">
                  <Checkbox.Group onChange={onChangeFilters}>
                    <Checkbox value="10/10">10/10</Checkbox>
                    <Checkbox value="09/10">09/10</Checkbox>
                    <Checkbox value="08/10">08/10</Checkbox>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col lg={15} offset={1}>
            <h1 className="heading">Used Phones</h1>
            <p className="sub-heading">Showing 1 - 25 of 82886 Ads</p>
            <List
              className=""
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <Link href="/detail">
                  <div className="list-item-body">
                    <div className="share">
                      <Popover content={content} title={null} trigger="hover">
                        <div className="share-icon">
                          <Image preview={false} size={20} src={Share}></Image>
                        </div>
                      </Popover>

                      <span>Share</span>
                      <Image preview={false} size={20} src={Liked}></Image>
                    </div>
                    <div className="list-col-one">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="list-col-two">
                      <h2 className="list-price">{item.price}</h2>
                      <p>
                        {item.company} <span>{item.model}</span>
                      </p>
                      <div className="list-features">
                        <div className="feature">
                          {" "}
                          <Image
                            preview={false}
                            size={20}
                            src={BatteryHealth}
                          ></Image>
                          {item.batterHealth}
                        </div>
                        <div className="feature">
                          {" "}
                          <Image preview={false} size={20} src={Memory}></Image>
                          {item.storage}
                        </div>
                        <div className="feature">
                          {" "}
                          <Image preview={false} size={20} src={Color}></Image>
                          {item.color}
                        </div>
                        <div className="feature">
                          {" "}
                          <Image
                            preview={false}
                            size={20}
                            src={Condition}
                          ></Image>
                          {item.condition}
                        </div>
                        <div className="feature">
                          {" "}
                          <Image
                            preview={false}
                            size={20}
                            src={Contact}
                          ></Image>
                          Call Seller
                        </div>
                      </div>
                      <div className="list-footer">
                        <p>{item.location}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            />
            <div className="pagination-container">
              <Pagination data={data} defaultCurrent={1} total={50} />
            </div>
          </Col>
          <Col lg={3} offset={1}>
            <div className="ads-container">
              <img src="/assets/images/center.png" alt="" />
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
};

export default Recent;
