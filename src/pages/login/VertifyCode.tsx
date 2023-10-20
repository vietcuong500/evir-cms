import { useVertifyCode } from "hooks/auth";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useToggle } from "react-use";
import { Button, Col, Row, Statistic } from "antd";
import { InputOTP } from "antd-input-otp";
import { useLoginAuth } from "./LoginLayout";

const { Countdown } = Statistic;

export const VerityOTP = (props: any) => {
  const { handleSendMail, account, setCurrentStep } = useLoginAuth();
  const [expired, setExpired] = useToggle(false);
  const { isPending, mutateAsync } = useVertifyCode();

  const { enqueueSnackbar } = useSnackbar();

  const [code, setCode] = useState<string[]>([]);

  const handleVertifyCode = async () => {
    const data = await mutateAsync({
      email: account.username,
      code: code.toString().replaceAll(",", ""),
    });
    if (data.code === 200) {
      setCurrentStep("reset_password");
    } else {
      enqueueSnackbar({
        message: "Mã OTP không hợp lệ",
        variant: "error",
      });
    }
  };
  return (
    <div>
      <div className="mt-6">
        <p className="text-lg font-semibold text-center text-neutral-900">
          OTP Veritification
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

        <InputOTP
          disabled={expired}
          value={code}
          onChange={(value: string[]) => setCode(value)}
        />
        <Button
          loading={isPending}
          onClick={handleVertifyCode}
          // onClick={() => setCurrentStep("reset_password")}
          disabled={expired}
          className="w-full mt-4"
          type="primary"
        >
          Vertify
        </Button>
      </div>
      <div className="mt-8 text-sm">
        <div>
          <p className="text-center">
            I dont receive a code
            <Button onClick={handleSendMail} type="link">
              resend
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};
