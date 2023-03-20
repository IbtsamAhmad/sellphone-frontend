import React from "react";
import { Menu, Grid, Button } from "antd";
import PostIcon from "../../assets/icons/PostIcon.svg";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <div className="list-container">
      <ul>
        <li>
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Phones
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            About Us
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Sell Phone
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Contact Us
          </a>
        </li>
      </ul>
      <a href="/post">
        <Button type="primary">
          Post an Ad <img src={PostIcon} alt="post" />
        </Button>
      </a>
    </div>
    // <Menu mode={md ? "horizontal" : "inline"}>
    //   <Menu.Item key="home">
    //     <a href="/">Home</a>
    //   </Menu.Item>
    //   <Menu.Item key="phones">
    //     <a href="/">Phones</a>
    //   </Menu.Item>
    //   <Menu.Item key="about">
    //     <a href="/">About Us</a>
    //   </Menu.Item>
    //   <Menu.Item key="sell">
    //     <a href="/">Sell Phone</a>
    //   </Menu.Item>
    //   {/* <SubMenu key="sub1" title={<span>Blogs</span>}>
    //     <MenuItemGroup title="Item 1">
    //       <Menu.Item key="setting:1">Option 1</Menu.Item>
    //       <Menu.Item key="setting:2">Option 2</Menu.Item>
    //     </MenuItemGroup>
    //     <MenuItemGroup title="Item 2">
    //       <Menu.Item key="setting:3">Option 3</Menu.Item>
    //       <Menu.Item key="setting:4">Option 4</Menu.Item>
    //     </MenuItemGroup>
    //   </SubMenu> */}
    //   <Menu.Item key="contact">
    //     <a href="/">Contact Us</a>
    //   </Menu.Item>
    //   <Menu.Item key="">
    //
    //   </Menu.Item>
    // </Menu>
  );
};

export default LeftMenu;
