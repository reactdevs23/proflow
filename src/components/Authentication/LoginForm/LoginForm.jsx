import React, { useState } from "react";
import classes from "./LoginForm.module.css";

import { Link } from "react-router-dom";
import { Button, Input, Text } from "components/common";

import Header from "components/common/Header/Header";
import ForgotPassword from "../ForgotPassword/ForgotPassword/ForgotPassword";

const LoginForm = () => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <>
      <div className={classes.formContainer}>
        <Header
          className={classes.header}
          heading="Welcome to Proflow"
          info="Securely access your account and manage your finances with ease."
        />
        <div className={classes.inputWrapper}>
          <Input
            type="email"
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Email "
          />
          <Input
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />

          <Button
            btnPrimary
            base
            transparent
            className={classes.forgotPasword}
            onClick={() => setShowForgotPasswordModal(true)}
          >
            Forgot Password
          </Button>
          <Button
            type="submit"
            wFull
            base
            radiusSm
            className={classes.button}
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </div>

        <Text lg className={classes.needAnAccount}>
          Don't have an account?
          <Link className={classes.link} to="/sign-up">
            Sign Up
          </Link>
        </Text>
      </div>
      <ForgotPassword
        isActive={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
      />
    </>
  );
};

export default LoginForm;
