import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "apis";
import { ILogin, IVertifyCode } from "types/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import serviceConfig from "config/service";

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: (user: ILogin) => {
      return authService.login(user);
    },
    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Thông tin tài khoản hoặc mật khẩu không chính xác",
      });
    },
  });
};

export const useForgetPassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (email: string) => {
      return authService.forgetPassword(email);
    },
    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Email không chính xác",
      });
    },
  });
};

export const useResetPassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: any) => {
      return authService.resetPassword(data);
    },
    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "Đổi mật khẩu không thành công",
      });
    },
  });
};

export const useVertifyCode = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: IVertifyCode) => {
      return authService.vertifyCode(data);
    },
    onError: () => {
      enqueueSnackbar({
        variant: "error",
        message: "OTP không chính xác",
      });
    },
  });
};

export const useInfo = () => {
  return useQuery({
    queryKey: ["info-user"],
    queryFn: () => authService.getUser(),
    placeholderData: keepPreviousData,
    gcTime: 1000 * 60 * 10,
  });
};
