import { useResetPassword } from "hooks/auth";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "react-use";
import { useLoginAuth } from "./LoginLayout";
import { Button, Col, Input, Row, Statistic } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HelperText from "components/HelperText/HelperText";

const { Countdown } = Statistic;

const ResetPassword = (props: any) => {
  const { account, setAccount, setCurrentStep } = useLoginAuth();
  const [expired, setExpired] = useToggle(false);
  const { enqueueSnackbar } = useSnackbar();

  const { isPending, mutateAsync } = useResetPassword();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
      })
    ),
  });

  const handleResetPassword = handleSubmit(async (data) => {
    const res = await mutateAsync({
      email: account.username,
      password: data.password,
    });

    if (res.code === 200) {
      setAccount({
        ...account,
        password: data.password,
      });
      setCurrentStep("login");
    } else {
      enqueueSnackbar({
        message: "Đã xảy ra lỗi. Vui lòng thử lại",
        variant: "error",
      });
    }
  });

  return (
    <div>
      <div className="mt-6">
        <p className="text-lg font-semibold text-center text-neutral-900">
          Reset password
        </p>
        <p className="text-sm text-neutral-800 text-center mb-2">
          We have send an OTP on give email
        </p>

        {expired ? (
          <p className="text-sm text-center text-red-500 font-medium mb-4">
            Time has expried
          </p>
        ) : (
          <Countdown
            value={Date.now() + 5 * 60 * 1000}
            className="!mb-4 !text-center !text-sm !text-green-600"
            valueStyle={{
              fontSize: "14px",
              color: "rgb(22, 163, 74)",
              fontWeight: 600,
            }}
            onFinish={() => setExpired()}
          />
        )}

        <div className="">
          <label
            className="mb-1 inline-block text-sm font-medium text-neutral-950"
            htmlFor="name"
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
                  id="name"
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
        <div className="mt-4">
          <label
            className="mb-1 inline-block text-sm font-medium text-neutral-950"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <div>
                <Input
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  value={value}
                  onChange={onChange}
                />
                <HelperText
                  error={!!errors["confirmPassword"]}
                  message={errors["confirmPassword"]?.message}
                />
              </div>
            )}
          />
        </div>

        <Button
          onClick={handleResetPassword}
          loading={isPending}
          disabled={expired || !isValid}
          className="w-full mt-4"
          type="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
