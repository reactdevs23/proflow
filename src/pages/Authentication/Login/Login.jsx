import React from "react";
import classes from "./Login.module.css";
import clsx from "clsx";
import LoginForm from "components/Authentication/LoginForm/LoginForm";
import { heroImg } from "images";
import Header from "components/common/Header/Header";

const Login = () => {
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <LoginForm />
        <div className={classes.imgContainer}>
          <Header
            xl3
            heading="Join over 50,000 users worldwide."
            info="Proflow is trusted for secure and seamless financial management. Join us and simplify your transactions today."
          ></Header>
          <img src={heroImg} alt="#" className={classes.img} />
        </div>
      </div>
    </section>
  );
};

export default Login;
