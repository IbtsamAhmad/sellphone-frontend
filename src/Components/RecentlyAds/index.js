import React, { useEffect } from "react";
import { Button } from "antd";
import OwlCarousel from "react-owl-carousel";
import SingleAd from "../SingleAd";
import axios from "axios";

const RecentAds = () => {
  //   useEffect(() => {
  //     let data;
  //     (async () => {
  //       try {
  //         data = await Promise.all([
  //           axios.post("https://mmc-admin.com/api/vehicle/years/makes/list/web/",
  //             {
  //             year: '2022',
  //             },
  //             {
  //               headers: {
  //                 withCredentials: true,
  //                 "Content-type": "application/json",
  //               },
  //             }
  //           ),
  //         ]);
  //         if (data) {
  //           console.log("data here update 1", data);
  //         }
  //       } catch (error) {
  //         console.log("error", error);
  //       } finally {
  //       }
  //     })();
  //   }, []);

  const recentAds = [
    {
      model: "Iphone xs Gold 128gb",
      company: "Iphone",
      city: "Lahore",
      price: "Rs 128,000",
      featured: false,
      image: "/assets/images/recentOne.png",
      link: "/",
    },
    {
      model: "Iphone 12 Blue 64gb",
      company: "Iphone",
      city: "Karachi",
      price: "Rs 228,000",
      featured: true,
      image: "/assets/images/recentTwo.png",
      link: "/",
    },
    {
      model: "Vivo Y15",
      company: "Vivo",
      city: "Islamabad",
      price: "Rs 28,000",
      featured: false,
      image: "/assets/images/recentThree.png",
      link: "/",
    },
    {
      model: "Iphone xs Gold 128gb",
      company: "Iphone",
      city: "Lahore",
      price: "Rs 128,000",
      featured: false,
      image: "/assets/images/recentFour.png",
      link: "/",
    },
    {
      model: "Samsung A10",
      company: "Samsung",
      city: "Multan",
      price: "Rs 38,000",
      featured: false,
      image: "/assets/images/recentTwo.png",
      link: "/",
    },
  ];
  const options ={
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
          items:3
        },
        1000:{
            items:4
        }
    }
}
  return (
    <div className="container recent-ads-container">
        <div className="recent-header">
          <h1 className="heading">Recently Posted Ads</h1>
          <Button className="viewAll-btn" type="primary">
            View All
          </Button>
        </div>
        <OwlCarousel
           {...options}
          className="owl-theme"
          loop={true}
          // center={true}
          margin={20}
          nav
          autoplay={false}
        
        >
          {recentAds.map((ad, i) => {
            return (
              <div className="item" key={i}>
                <SingleAd
                  key={i}
                  model={ad.model}
                  company={ad.company}
                  city={ad.city}
                  price={ad.price}
                  featured={ad.featured}
                  image={ad.image}
                  link={ad.link}
                />
              </div>
            );
          })}
        </OwlCarousel>

    </div>
  );
};

export default RecentAds;
