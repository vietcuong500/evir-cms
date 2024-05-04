import { useQuery } from "@tanstack/react-query";
import serviceConfig from "config/service";
import { ILogin, IVertifyCode } from "types/auth";

const login = (data: ILogin) => {
  return serviceConfig.post("/auth/login", data).then((res) => res.data);
};

const forgetPassword = (email: string) => {
  return serviceConfig
    .post("/auth/forgot-password", {
      email,
    })
    .then((res) => res.data);
};

const vertifyCode = (data: IVertifyCode) => {
  return serviceConfig
    .post("/auth/verify-code-reset-password", data)
    .then((res) => res.data);
};

const resetPassword = (data: any) => {
  return serviceConfig
    .post("/auth/reset-password", data)
    .then((res) => res.data);
};

const getUser = () => {
  return serviceConfig.get("/user/me").then((res) => res.data);
};

const authService = {
  login,
  forgetPassword,
  vertifyCode,
  resetPassword,
  getUser,
};

export default authService;
