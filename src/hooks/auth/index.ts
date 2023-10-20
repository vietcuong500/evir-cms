import { useMutation } from "@tanstack/react-query";
import { authService } from "apis";
import { ILogin, IVertifyCode } from "types/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

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
  return useMutation({
    mutationFn: (email: string) => {
      return authService.forgetPassword(email);
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return authService.resetPassword(data);
    },
  });
};

export const useVertifyCode = () => {
  return useMutation({
    mutationFn: (data: IVertifyCode) => {
      return authService.vertifyCode(data);
    },
  });
};
