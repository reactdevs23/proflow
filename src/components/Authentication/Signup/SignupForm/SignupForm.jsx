import React, { useState } from "react";
import classes from "./SignupForm.module.css";

import { Link } from "react-router-dom";
import { Button, Input, Text } from "components/common";

import Header from "components/common/Header/Header";

const SignupForm = ({ setShowVerifyModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <div className={classes.formContainer}>
      <Header
        className={classes.header}
        heading="Join Proflow"
        info="Securely access your account and manage your finances with ease."
      />
      <div className={classes.inputWrapper}>
        <Input
          name="name"
          type="text"
          label="Name"
          value={name}
          setValue={setName}
          placeholder="Name "
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Email "
        />

        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />

        <Button
          onClick={() => {
            setShowVerifyModal(true);
            handleSubmit();
          }}
          type="submit"
          wFull
          base
          radiusSm
          className={classes.button}
        >
          Signup
        </Button>
      </div>

      <Text lg className={classes.needAnAccount}>
        Already have an account?
        <Link className={classes.link} to="/login">
          Login
        </Link>
      </Text>
    </div>
  );
};

export default SignupForm;
