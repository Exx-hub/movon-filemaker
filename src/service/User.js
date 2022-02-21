import axios from "axios";
import { config } from "../config";

const BASE_URL = config.BASE_URL;

const User = {
  login: (username, password) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/auth/login`,
      //   url: `https://cargomovon.com/server/api/v1/filemaker/auth/login`,
      data: {
        adminId: username,
        password,
      },
      headers: {
        "x-auth-deviceid": config.header.deviceId,
        "x-auth-devicetype": config.header.deviceType,
      },
    });
  },
};

export default User;
