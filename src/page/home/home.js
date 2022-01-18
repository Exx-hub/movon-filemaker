import React from "react";
import "./home.css";
import Header from "../../components/Header";

import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { Layout, Menu } from "antd";
import SearchModule from "../searchModule";
import TransactionModule from "../transactionModule";

const { Content, Sider } = Layout;

function Home() {
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;

  console.log(pathname);
  return (
    <Layout className="home-page-container">
      <Header />

      <Layout className="home-body">
        <Sider width={240} className="home-sider">
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
