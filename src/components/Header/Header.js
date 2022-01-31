import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import { UserOutlined } from "@ant-design/icons";

import { Menu, Dropdown, Layout, Image } from "antd";
import { config } from "../../config";
import { UserProfile } from "../../utility";
import { useHistory } from "react-router-dom";
const { Header } = Layout;

function _Header() {
  const history = useHistory();
  return (
    <Header className="home-header">
      <div className="home-header-logo" onClick={() => history.push("/")}>
        <Image preview={false} className="header-logo" src={logo} alt="" />
      </div>
      <div className="welcome-message-div">
        <UserOutlined className="user-icon" />{" "}
        <span className="welcome-message">
          Welcome, {UserProfile.getName()}!
        </span>
      </div>
    </Header>
  );
}

export default _Header;
