import axios from "axios";
import Cookies from "js-cookie";

const cdnConfig = axios.create({
  baseURL: "http://103.57.220.81:8081/",
});

cdnConfig.interceptors.request.use(
  (config: any) => {
    config.headers = {
      "Content-Type": "multipart/form-data",
    };
    const access_token = Cookies.get("access_token");
    if (access_token) {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "multipart/form-data",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default cdnConfig;
