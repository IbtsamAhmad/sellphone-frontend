import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../../src/Components/Footer/index";
import RecentlyAds from "../Components/RecentlyAds";
import { Row, Col, Typography, Image, Divider, Avatar, Button } from "antd";
import OwlCarousel from "react-owl-carousel";

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
import { UserOutlined } from "@ant-design/icons";
import MapPin from "../../src/assets/icons/MapPin.svg";
import Contact from "../../src/assets/icons/Contact.svg";
import Share from "../../src/assets/icons/Share.svg";
const { Link } = Typography;

const Detail = () => {
  const [blog, setBlog] = useState({
    id: 1,
    name: "Zubair Shafi",
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
    contact: "+92 306 6858144",
  });
  const productImages = [
    {
      image: "/assets/images/1.jpg",
    },
    {
      image: "/assets/images/2.jpg",
    },

    {
      image: "/assets/images/3.jpg",
    },

    {
      image: "/assets/images/4.jpg",
    },

    {
      image: "/assets/images/5.jpg",
    },
    {
      image: "/assets/images/6.jpg",
    },

    {
      image: "/assets/images/7.jpg",
    },

    {
      image: "/assets/images/8.jpg",
    },

    {
      image: "/assets/images/9.jpg",
    },

    {
      image: "/assets/images/10.jpg",
    },

    {
      image: "/assets/images/11.jpg",
    },
    {
      image: "/assets/images/12.jpg",
    },
  ];
  const [displayImage, setDisplayImage] = useState("/assets/images/1.jpg");
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  const webLink = `https://api.whatsapp.com/send/?phone=${923024666796}&text=Hey%21+Is+the+Phone+available%3F&type=phone_number&app_absent=0`;
  const content = "Hey I saw your Ad on Sell Phone. Is it available?";
  return (
    <>
      <Navbar />
      <div className="container detail-page-container">
        <Row>
          <Col lg={10} offset={0}>
            <div className="images-gallery-container">
              <Image
                className="display-image"
                src={displayImage}
                alt=""
                preview={false}
              />
              <div className="gallery-carousel-container">
                <OwlCarousel
                  {...options}
                  className="owl-theme"
                  loop={true}
                  // center={true}
                  margin={5}
                  nav
                  autoplay={false}
                >
                  {productImages.map((item, i) => {
                    return (
                      <div
                        className="item gallery-item"
                        key={i}
                        onClick={() => {
                          setDisplayImage(item.image);
                        }}
                      >
                        <img src={item.image} alt="" />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
              <div className="share-buttons">
                <Image
                  preview={false}
                  className="share-icon"
                  src={Share}
                ></Image>
                <span className="share">Share</span>
                <FacebookMessengerShareButton
                  url="https://www.youtube.com/"
                  quote="link"
                  className="share-button"
                >
                  <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>

                <LinkedinShareButton
                  url="https://www.youtube.com/"
                  quote="link"
                  className="share-button"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <TwitterShareButton
                  url="https://www.youtube.com/"
                  quote="link"
                  className="share-button"
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <FacebookShareButton
                  url="https://www.youtube.com/"
                  quote="link"
                  className="share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={content}
                  // quote="link"
                  className="share-button"
                  quote="Is it available?"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <div>
                  {" "}
                  <Link href={webLink} target="_blank">
                    Whatsapp User
                  </Link>
                  {/* <a href="https://api.whatsapp.com/send/?phone=923024666796&text=Hey%21+Is+the+Phone+available%3F&type=phone_number&app_absent=0" target="_blank">a tag</a> */}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9} offset={1}>
            <div className="ad-content-container">
              <div className="ad-content-header">
                <h1>{blog.model}</h1>
                <p>Published Date: {blog.date}</p>
              </div>
              <h2 className="ad-price">{blog.price}</h2>
              <div className="ad-profile-container">
                <div className="content-overlay">
                  <div>
                    <Button className="login-btn">Login</Button>
                    <span>OR</span>
                    <Button className="signup-btn">Signup</Button>
                  </div>
                  <p>to view seller details</p>
                </div>
                <img src="/assets/images/user.png" />
                {/* <Avatar size="large" icon={<UserOutlined />} /> */}
                <div className="profile-col-one">
                  <div className="profile-row-one">
                    <h1 className="profile-name">{blog.name}</h1>
                    <p className="view"> View other ads</p>
                  </div>
                  <div className="profile-row-two">
                    <p>Member Since SEP 2021</p>
                    <p>
                      <Image src={MapPin} alt="" preview={false} /> Lahore,
                      Pakistan
                    </p>
                  </div>
                  <div className="profile-buttons">
                    <Button className="contact-btn">
                      <Image src={Contact} alt="" preview={false} />
                      {blog.contact}
                    </Button>
                    <Button className="whatsapp-btn">
                      {" "}
                      <Image src={Contact} alt="" preview={false} />
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>

              <div className="ad-detail-lists">
                <div className="ad-list">
                  <p>Ad ID</p>
                  <p>: #12458</p>
                </div>
                <div className="ad-list">
                  <p>Storage</p>
                  <p>: 256 GB</p>
                </div>
                <div className="ad-list">
                  <p>Battery health</p>
                  <p>: 99%</p>
                </div>
                <div className="ad-list">
                  <p>Condition</p>
                  <p>: 9/10</p>
                </div>
                <div className="ad-list">
                  <p>Color</p>
                  <p>: Gold</p>
                </div>
                <div className="ad-list">
                  <p>Description</p>
                  <p>
                    : Pure breed Shih Tzu. Good body structure. With MKA cert
                    and Microchip. Father from champion lineage.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} offset={1}>
            <div className="ads-container">
              <img src="/assets/images/center.png" alt="" />
            </div>
          </Col>
        </Row>
        <RecentlyAds />
        <div style={{ marginBottom: "5rem" }} />
        <Footer />
      </div>
    </>
  );
};

export default Detail;
