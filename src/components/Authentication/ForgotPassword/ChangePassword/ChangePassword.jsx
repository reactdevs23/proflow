import React from "react";
import classes from "./ChangePassword.module.css";

import { Button, Input } from "components/common";
import Header from "components/common/Header/Header";

const ChangePassword = ({
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
  onSavePassword,
}) => {
  return (
    <div className={classes.wrapper}>
      <Header
        xl3
        center
        heading="Set New Password"
        info="Make sure your password is enough strong to make your account more secure."
      />
      <div className={classes.inputWrapper}>
        <Input
          name="password"
          type="password"
          value={newPassword}
          setValue={setNewPassword}
          placeholder="New password"
        />
        <Input
          name="confirmPassword"
          type="password"
          value={confirmNewPassword}
          setValue={setConfirmNewPassword}
          placeholder="Confirm new password"
        />
      </div>{" "}
      <Button radiusSm wFull base onClick={onSavePassword}>
        Save Password
      </Button>
    </div>
  );
};

export default ChangePassword;
