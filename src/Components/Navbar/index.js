import React , {useState} from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import logo from "../../assets/images/logo.svg";

 const Navbar = () =>  {
  const [visible,setVisible] =  useState(false)
 const showDrawer = () => {
     setVisible(!visible)
  };

 const onClose = () => {
    setVisible(false)
  };


  return (
    <nav className="nav-container">
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
    <Button className="barsMenu" type="primary" onClick={ () => showDrawer()}>
        <span className="barsBtn"></span>
      </Button>
    <div className="menu-container">
      <LeftMenu />
      <Drawer
        className="myDrawer"
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <LeftMenu />
        <RightMenu />
      </Drawer>
    </div>
  </nav>
  )
}

export default Navbar;

