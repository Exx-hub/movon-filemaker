import axios from "axios";
import { config } from "../config";
import { UserProfile } from "../utility";

const BASE_URL = config.BASE_URL;

const SearchAPI = {
  getAll: () => {
    return axios({
      method: "GET",
      //   url: `${BASE_URL}/transaction/list/search`,
      url: "https://www.cargomovon.com/server/api/v1/account/filemaker/transaction/list/search",
      headers: {
        "x-auth-deviceid": config.header.deviceId,
        "x-auth-devicetype": config.header.deviceType,
        "x-auth-token": UserProfile.getToken(),
      },
    });
  },

  getTransactionById: (ticketId) => {
    return axios({
      method: "GET",
      //   url: `${BASE_URL}/transaction/list/search`,
      url: `https://www.cargomovon.com/server/api/v1/account/filemaker/transaction/list/search?search=${ticketId}`,
      headers: {
        "x-auth-deviceid": config.header.deviceId,
        "x-auth-devicetype": config.header.deviceType,
        "x-auth-token": UserProfile.getToken(),
      },
    });
  },
};

export default SearchAPI;
