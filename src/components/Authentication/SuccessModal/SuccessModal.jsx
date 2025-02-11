import React from "react";
import classes from "./SuccessModal.module.css";
// import { checkEmailImg } from "images";
import { Button } from "components/common";
import Header from "components/common/Header/Header";
import { successImg } from "images";
const SuccessModal = ({ onClose, setStep, heading, info }) => {
  return (
    <div className={classes.wrapper}>
      <img src={successImg} alt="#" className={classes.img} />

      <Header center xl3 heading={heading} info={info} />
      <div
        onClick={() => {
          onClose();
          setStep(1);
        }}
      >
        <Button radiusSm wFull base to="/login">
          Return to Login
        </Button>
      </div>
    </div>
  );
};

export default SuccessModal;
