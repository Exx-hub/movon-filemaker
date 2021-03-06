import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header";

import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { Layout, Menu } from "antd";
import SearchModule from "../searchModule";
import TransactionModule from "../transactionModule";

import {
  PoweroffOutlined,
  SearchOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { config } from "../../config";

import LogOutModal from "../../components/Modal/logoutModal";

const { Content, Sider } = Layout;

function Home() {
  const history = useHistory();
  const location = useLocation();

  const [logoutVisible, setLogoutVisible] = useState(false);

  const { pathname } = location;

  console.log(pathname);

  const handleLogout = () => {
    // logout popup visible

    setLogoutVisible(true);
  };
  return (
    <>
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
                  icon={<SearchOutlined className="menu-icon" />}
                >
                  <span className="menu-label">Search</span>
                </Menu.Item>
                <Menu.Item
                  key={"/transaction"}
                  className="menu-item"
                  onClick={() => history.push("/transaction")}
                  icon={<FileDoneOutlined className="menu-icon" />}
                >
                  <span className="menu-label">Transaction</span>
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

      {/* LOGUTMODAL  */}

      <LogOutModal
        visible={logoutVisible}
        history={history}
        handleCancel={() => setLogoutVisible(false)}
        handleOk={() => setLogoutVisible(false)}
      />
    </>
  );
}

export default Home;
