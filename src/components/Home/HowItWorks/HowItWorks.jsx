import clsx from "clsx";
import classes from "./HowItWorks.module.css";
import Header from "components/common/Header/Header";
import { launchImg, setupImg, signupImg } from "images";
import { Heading } from "components/common";
import { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      img: signupImg,
      title: "Create an account",
    },
    {
      img: setupImg,
      title: "Choose the tools",
    },
    {
      img: launchImg,
      title: "Automate your tasks",
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className={clsx(classes.container, "container pattern", "sectionPadding")}
    >
      <div className={classes.stepsContainer}>
        <Header
          className={classes.header}
          title="3 Easy Steps"
          heading="How It Works"
          info="We believe technology should work for you, not the other way around"
        />

        <div className={classes.steps}>
          {steps?.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={clsx(
                classes.step,
                activeStep === i && classes.activeStep
              )}
            >
              <Heading xl2>{step.title}</Heading>
            </button>
          ))}
        </div>
      </div>{" "}
      <img src={steps[activeStep].img} alt="#" className={classes.img} />
    </section>
  );
};
export default HowItWorks;
