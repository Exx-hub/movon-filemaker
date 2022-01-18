import React, { useState } from "react";
import "./login.css";

import logo from "../../assets/images/logo.png";
import city from "../../assets/images/city.png";
import city2 from "../../assets/images/city2.png";

import { config } from "../../config";

import { Image, Form, Input, Button, Space, Spin } from "antd";
import { UserProfile } from "../../utility";
import { useHistory } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);

  const history = useHistory();

  React.useEffect(() => {
    if (UserProfile.getCredential()) {
      history.push("/");

      // onFinish, userid and pass will be sent to server and if correct credentials, server will return data with the response.
      // user data and token will be saved in localstorate with key "credential". then state will be changed to loading false,
      // that state change will trigger this userEffect, checking if there is value for credential, will change url to "/"
      // window.location.replace("/");
    }
  }, [history]);

  const onFinish = () => {
    setIsLoading(true);

    // login api here!!!
    // add alerts/notifications

    // console.log(username, password);

    setTimeout(() => {
      setIsLoading(false);
      alert("login success");

      // hardcoded setting of creds in localstorage w/out api
      UserProfile.setCredential({
        user: { name: username },
        token: password,
      });

      setTimeout(() => {
        history.push("/");
      }, 1000);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <Image preview={false} className="logo" src={logo} alt="" />
      </div>
      <div className="login-form-container">
        <Form className="login-form" onFinish={onFinish}>
          <Form.Item
            style={{ margin: 0, marginBottom: 15 }}
            name="username"
            rules={[{ required: true, message: "Username is required!" }]}
          >
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{ padding: 10 }}
            />
          </Form.Item>
          <Form.Item
            style={{ margin: 0, marginBottom: 25 }}
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              style={{ padding: 10 }}
            />
          </Form.Item>
          <Button className="login-btn" htmlType="submit" disabled={isLoading}>
            {isLoading && (
              <div className="login-button-spinner">
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: 24, color: "#333" }}
                      spin
                    />
                  }
                />
              </div>
            )}
            LOGIN
          </Button>
        </Form>
      </div>
      <div className="version-div">
        <span className="version">
          2021 © MovOn {config.version.environment} v{config.version.build}
        </span>
      </div>
      <div className="building-div">
        <Image preview={false} src={city} alt="" />
        <Image preview={false} src={city2} alt="" />
      </div>
    </div>
  );
}

export default Login;

// button #199475
