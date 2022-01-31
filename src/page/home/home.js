import React from "react";
import "./home.css";
import Header from "../../components/Header";

import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { Layout, Menu } from "antd";
import SearchModule from "../searchModule";
import TransactionModule from "../transactionModule";

import { PoweroffOutlined } from "@ant-design/icons";
import { config } from "../../config";
import { logoutSuccess, UserProfile } from "../../utility";

const { Content, Sider } = Layout;

function Home() {
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;

  console.log(pathname);

  const handleLogout = () => {
    UserProfile.clearData();
    logoutSuccess();
    history.push("/");
  };
  return (
    <Layout className="home-page-container">
      <Header />

      <Layout className="home-body">
        <Sider width={240} className="home-sider">
          <div className="sider-container">
            <Menu selectedKeys={[pathname]}>
              <Menu.Item
                key={"/search"}
                className="menu-item"
                onClick={() => history.push("/search")}
              >
                Search
              </Menu.Item>
              <Menu.Item
                key={"/transaction"}
                className="menu-item"
                onClick={() => history.push("/transaction")}
              >
                Transaction
              </Menu.Item>
            </Menu>

            <div className="logout-div">
              <div className="logout-button" onClick={handleLogout}>
                <PoweroffOutlined /> Logout
              </div>
              <div>build {config.version.build}</div>
            </div>
          </div>
        </Sider>

        <Layout className="home-content">
          <Content>
            <Switch>
              <Route path="/search">
                <SearchModule />
              </Route>
              <Route path="/transaction">
                <TransactionModule />
              </Route>

              <Redirect from="/" to="/search" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
