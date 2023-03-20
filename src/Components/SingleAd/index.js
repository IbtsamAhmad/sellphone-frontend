import React from "react";
import { Image, Space, Typography, Form, Input, Button, Card  } from "antd";
const { Title, Paragraph, Link } = Typography;
const SingleAd = ({ model ,company ,city, price, featured, image, link}) => {
  return (
    <>
    <Link href="/detail">
    <Card className="single-adBlog">
     <img src={image} alt="" className="single-adImage"/>
      <h1 className="title">{model}</h1>
      <div className="single-adRow">
      <p className="ad-company">{company}</p>
      <p className="ad-city">{city}</p>
      </div>
      <div className="single-adFooter">
      <h1 className="ad-price">{price}</h1>
      <Button className="detail-btn">View Details</Button>
      </div>
      { featured ? <div className="featured-badge">Featured</div>: "" }
    </Card>
    </Link>
    </>


  );
};

export default SingleAd;
