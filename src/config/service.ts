import axios from "axios";
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

const serviceConfig = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

serviceConfig.interceptors.request.use(
  (config: any) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const access_token = Cookies.get("access_token");
    if (access_token) {
      //kiem tra thoi gian token
      //refesh token neu het han
      config.headers = {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
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
  async (response) => {
    return response;
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
