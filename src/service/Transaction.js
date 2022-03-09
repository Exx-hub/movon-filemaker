import axios from "axios";
import { config } from "../config";
import { UserProfile } from "../utility";

const BASE_URL = config.BASE_URL;

const Transaction = {
  getTransactionByRsNo: (rsNumber) => {
    return axios({
      method: "get",
      url: `https://www.cargomovon.com/server/api/v1/account/filemaker/transaction/${rsNumber}`,
      headers: {
        "x-auth-deviceid": config.header.deviceId,
        "x-auth-devicetype": config.header.deviceType,
        "x-auth-token": UserProfile.getToken(),
      },
    });
  },
};

export default Transaction;
