import UserProfileClass from "./userProfile";

import { notification } from "antd";

const UserProfile = new UserProfileClass();

const loginSuccessPrompt = () => {
  const args = {
    message: "LOGIN SUCCESS",
    description: "Logged-in Successfully",
    duration: 2,
  };

  notification.success(args);
};

const loginFailedPrompt = () => {
  const args = {
    message: "LOGIN FAILED",
    description: "Incorrect Username/Password",
    duration: 2,
  };

  notification.error(args);
};

const logoutSuccess = () => {
  const args = {
    message: "LOGOUT SUCCESS",
    description: "Logged-out Successfully",
    duration: 2,
  };

  notification.success(args);
};

export { UserProfile, loginSuccessPrompt, loginFailedPrompt, logoutSuccess };
