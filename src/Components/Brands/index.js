import React, { useEffect } from "react";
import { Col, Row, Container, Typography } from "antd";
import OwlCarousel from "react-owl-carousel";
import Apple from "../../assets/icons/Apple.svg";
import Huawei from "../../assets/icons/Huawei.svg";
import LG from "../../assets/icons/LG.svg";
import Nokia from "../../assets/icons/Nokia.svg";
import Oppo from "../../assets/icons/Oppo.svg";
import Samsung from "../../assets/icons/Samsung.svg";
import Vivo from "../../assets/icons/Vivo.svg";
import Motorola from "../../assets/icons/Motorola.svg";

const { Link } = Typography;
const Brands = () => {
  return (
    <div className="brands-container">
      <div className="container">
        <h1 className="heading">Top Brands</h1>
        <OwlCarousel
          className="owl-theme"
          loop={false}
          center={true}
          margin={30}
          nav
          items={1}
          autoplay={false}
        >
          <div className="item">
            <Row gutter={[16, 16]} className="brands-row">
              <Col span={6} lg={6} md={12} sm={12} xs={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Apple} alt="" className="brand" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Samsung} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Huawei} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Motorola} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Nokia} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Oppo} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={Vivo} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
              <Col xs={12} span={6} lg={6} md={12} sm={12}>
                <Link href="/recent">
                  <div className="brand-col">
                    <img src={LG} alt="" className="brand size" />
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="item">Item 2</div>
          <div className="item">item 3</div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Brands;
