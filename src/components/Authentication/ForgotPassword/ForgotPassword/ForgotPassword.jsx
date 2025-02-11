import React, { useState } from "react";
import classes from "./ForgotPassword.module.css";
import ChangePassword from "../ChangePassword/ChangePassword";

import Verify from "components/Authentication/ForgotPassword/Verify/Verify";
import Modal from "components/common/Modal/Modal";
import SuccessModal from "../../SuccessModal/SuccessModal";

const ForgotPassword = ({ isActive, onClose }) => {
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <Modal isActive={isActive} onClose={onClose} heading="Change Password">
      <section className={classes.wrapper}>
        <form action="" className={classes.form}>
          {step === 1 && <Verify setStep={setStep} onVerify={() => {}} xl2 />}
          {step === 2 && (
            <ChangePassword
              setStep={setStep}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmNewPassword={confirmNewPassword}
              setConfirmNewPassword={setConfirmNewPassword}
              onSavePassword={() => {
                setStep((prev) => prev + 1);
              }}
            />
          )}
          {step === 3 && (
            <SuccessModal
              heading="Your password has been successfully reset!"
              info=" You can now login with your new password, if you encounter any issues,please contact support."
              onClose={onClose}
              setStep={setStep}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmNewPassword={confirmNewPassword}
              setConfirmNewPassword={setConfirmNewPassword}
            />
          )}
        </form>
      </section>
    </Modal>
  );
};

export default ForgotPassword;
