import React from "react";
import classes from "./Switch.module.css";

const Switch = ({ isChecked, setIsChecked }) => {
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`${classes.switch} ${isChecked ? classes.checked : ""}`}
      onClick={handleToggle}
    >
      <div className={classes.slider}></div>
    </div>
  );
};

export default Switch;
