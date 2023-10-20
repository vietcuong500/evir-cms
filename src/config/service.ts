import axios from "axios";
import Cookies from "js-cookie";

const serviceConfig = axios.create({
  baseURL: "http://103.57.220.81:8082/api/v1",
});

serviceConfig.interceptors.response.use(
  (config) => {
    config.headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    const access_token = Cookies.get("accessToken");
    if (access_token) {
      //kiem tra thoi gian token
      //refesh token neu het han
      config.headers = {
        Authorization: `Bearer ${access_token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

serviceConfig.interceptors.response.use(
  async (reponse) => {
    return reponse;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      //const access_token = await refreshAccessToken();
      const access_token = "";
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return serviceConfig(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default serviceConfig;
