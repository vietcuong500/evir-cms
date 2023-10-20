import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "antd";
import { useForgetPassword } from "hooks/auth";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoginAuth } from "./LoginLayout";
import * as yup from "yup";
import { authService } from "apis";
import HelperText from "components/HelperText/HelperText";

export const SendMail = (props: any) => {
  const { account, setAccount, setCurrentStep } = useLoginAuth();

  const { loadingSendMail, handleSendMail } = useLoginAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: account.username,
    },
    resolver: yupResolver(
      yup.object({
        email: yup.string().required(),
      })
    ),
  });

  return (
    <div>
      <div className="mt-6">
        <div className="">
          <label
            className="mb-1 inline-block text-sm font-medium text-neutral-950"
            htmlFor="name"
          >
            Email
          </label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <div>
                <Input
                  id="name"
                  placeholder="Email"
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
                  error={!!errors["email"]}
                  message={errors["email"]?.message}
                />
              </div>
            )}
          />
        </div>

        <Button
          loading={loadingSendMail}
          disabled={!isValid}
          //onClick={() => setCurrentStep("vertify")}
          onClick={handleSubmit((data) => handleSendMail(data.email))}
          className="w-full mt-6"
          type="primary"
        >
          Send mail
        </Button>
      </div>
      <div className="mt-8 text-sm">
        <div>
          <p className="text-center">
            You have account
            <Button onClick={() => setCurrentStep("login")} type="link">
              Sign in
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};
