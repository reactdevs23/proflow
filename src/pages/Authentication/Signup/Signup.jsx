import React, { useState } from "react";
import classes from "./Signup.module.css";
import clsx from "clsx";

import SignupForm from "components/Authentication/Signup/SignupForm/SignupForm";
import { heroImg } from "images";
import Header from "components/common/Header/Header";
import Verify from "components/Authentication/ForgotPassword/Verify/Verify";
import Modal from "components/common/Modal/Modal";
import SuccessModal from "components/Authentication/SuccessModal/SuccessModal";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  return (
    <>
      <section className={classes.wrapper}>
        <div className={clsx(classes.container, "container")}>
          <SignupForm setShowVerifyModal={setShowVerifyModal} />

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
      <Modal
        isActive={showVerifyModal}
        onClose={() => setShowVerifyModal(false)}
      >
        {step === 1 && <Verify setStep={setStep} />}
        {step === 2 && (
          <SuccessModal
            onClose={() => setShowVerifyModal(false)}
            setStep={setStep}
            heading="Verification Successfull"
            info=" Now you can Sign In"
          />
        )}
      </Modal>
    </>
  );
};

export default Signup;
