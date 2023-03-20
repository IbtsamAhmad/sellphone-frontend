import React from 'react'
import Navbar from "../Components/Navbar";
import Brands from "../Components/Brands"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import Hero from '../Components/Hero';
import RecentAds from '../Components/RecentlyAds';
import FeaturedAds from '../Components/FeaturedAds';

const Landing = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <FeaturedAds/>
     <RecentAds/>
     <Brands/>
     <Banner/>
     <Footer/>
    </div>
  )
}

export default Landing