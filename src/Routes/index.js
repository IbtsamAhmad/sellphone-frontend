import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "../privacyPolicy";
import Home from "../home";
import Landing from "../pages/Landing";
import Recent from "../pages/Recent";
import Detail from "../pages/Detail";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Post from '../pages/Post';


const Routing = () => {
  return (
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/home" element={<Landing/>} />
          <Route path="/recent" element={<Recent/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/post" element={<Post/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routing