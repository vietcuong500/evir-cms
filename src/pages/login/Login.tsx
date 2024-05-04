import { Button, Input } from "antd";
import { authService } from "apis";
import { useLogin } from "hooks/auth";
// import { login } from "apis/Auth/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "types/auth";
import Cookies from "js-cookie";
import { useLoginAuth } from "./LoginLayout";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HelperText from "components/HelperText/HelperText";
import { useSnackbar } from "notistack";

const accountSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const { setCurrentStep, account, setAccount } = useLoginAuth();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: account.username,
      password: account.password,
    },
    resolver: yupResolver(accountSchema),
    mode: "onChange",
  });
  const { isPending, mutateAsync: onLogin } = useLogin();

  const handleLogin = handleSubmit(async (account) => {
    const data = await onLogin(account);
    if (data.code === 200) {
      Cookies.set("user", data.data);
      Cookies.set("access_token", data.data.token);
      navigate("/");
    }
  });
  const handleForgetPassword = () => setCurrentStep("send_mail");
  return (
    <div className="">
      <div className="mr-auto mt-6">
        <div className="">
          <label
            className="mb-1 inline-block text-sm font-medium text-neutral-950"
            htmlFor="name"
          >
            Username
          </label>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <div>
                <Input
                  id="name"
                  placeholder="Username"
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    setAccount({
                      ...account,
                      username: e.target.value,
                    });
                  }}
                />
                <HelperText
                  error={!!errors["username"]}
                  message={errors["username"]?.message}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full mt-4">
          <label
            className="mb-1 inline-block text-sm font-medium text-neutral-950"
            htmlFor="password"
          >
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                />
                <HelperText
                  error={!!errors["password"]}
                  message={errors["password"]?.message}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full flex justify-end">
          <Button
            onClick={handleForgetPassword}
            className="ml-auto"
            type="link"
          >
            Forget password
          </Button>
        </div>

        <Button
          loading={isPending}
          disabled={!isValid}
          onClick={handleLogin}
          className="w-full mt-6"
          type="primary"
        >
          Login
        </Button>
      </div>

      <div className="mt-8 text-sm">
        <div>
          <p>
            Dont you have account?
            <Button type="link">Create your account</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
