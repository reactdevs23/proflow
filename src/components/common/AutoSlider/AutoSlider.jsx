import React from "react";
import classes from "./AutoSlider.module.css";
import Marquee from "react-fast-marquee";
import clsx from "clsx";

const AutoSlider = ({ items }) => {
  return (
    <div className={clsx(classes.wrapper)}>
      <Marquee direction="left" autoFill={true} speed={20} pauseOnHover={true}>
        <div className={classes.items}>
          {items?.map((item, i) => (
            <a href={item?.logo} className={classes.item} key={i}>
              <img src={item?.logo} alt={item?.name} className={classes.img} />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AutoSlider;
