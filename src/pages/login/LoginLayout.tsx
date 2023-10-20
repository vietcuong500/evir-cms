import { useForgetPassword } from "hooks/auth";
import { useSnackbar } from "notistack";
import React, { createContext, useContext, useState } from "react";
import { ILogin } from "types/auth";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import { SendMail } from "./SendMail";
import { VerityOTP } from "./VertifyCode";

const LoginContext = createContext({} as any);

function LoginLayout() {
  const { enqueueSnackbar } = useSnackbar();

  const [account, setAccount] = useState<ILogin>({
    username: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState<
    "send_mail" | "vertify" | "reset_password" | "login"
  >("login");

  const { isPending: loadingSendMail, mutateAsync: sendMail } =
    useForgetPassword();

  const handleSendMail = async (email?: string) => {
    const data = await sendMail(email || account.username);
    if (data.code === 200) {
      setCurrentStep("vertify");
    } else {
      enqueueSnackbar({
        message: "Email không chính xác",
        variant: "error",
      });
    }
  };
  return (
    <LoginContext.Provider
      value={{
        account,
        currentStep,
        setCurrentStep,
        setAccount,
        loadingSendMail,
        handleSendMail,
      }}
    >
      <div className="bg-white w-screen h-screen">
        <div className="flex h-full">
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-80">
              <p className="text-xl font-medium">Hey, hello</p>
              <p className="text-neutral-900 mt-1 text-sm">
                Please log into your portal
              </p>

              <div className="w-full">
                {currentStep === "vertify" ? (
                  <VerityOTP />
                ) : currentStep === "reset_password" ? (
                  <ResetPassword />
                ) : currentStep === "login" ? (
                  <Login />
                ) : (
                  <SendMail />
                )}
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full bg-indigo-800 rounded-tl-3xl rounded-bl-3xl"></div>
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export const useLoginAuth = () => useContext(LoginContext);

export default LoginLayout;
