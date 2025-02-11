import React, { useState } from "react";
import classes from "./Verify.module.css";
import OTPInput from "otp-input-react";

import clsx from "clsx";
import { Button } from "components/common";
import Header from "components/common/Header/Header";

const Verify = ({ setStep }) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);

  return (
    <div className={classes.wrapper}>
      <Header
        center
        xl3
        heading="Verify Your Identity"
        info="Enter your verification code. We sent a 6 digit verification code to your email."
      />
      <div className={classes.container}>
        <div className={clsx(classes.inputs, classes.noResendInputs)}>
          <OTPInput
            inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
        </div>

        {otpInvalid && (
          <div className={classes.helperError}>
            Please enter valid verification code.
          </div>
        )}

        <Button
          onClick={(e) => {
            setStep((prev) => prev + 1);
          }}
          radiusSm
          wFull
          base
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Verify;
