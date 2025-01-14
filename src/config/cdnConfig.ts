import axios from "axios";
import Cookies from "js-cookie";

const cdnConfig = axios.create({
  baseURL: "https://www.eviromet.com/files/v1",
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

cdnConfig.interceptors.response.use(
  async (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      //const access_token = await refreshAccessToken();
      const access_token = "";
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return cdnConfig(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default cdnConfig;
