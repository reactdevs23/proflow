import clsx from "clsx";
import classes from "./GetStarted.module.css";

import { Button, Heading, Text } from "components/common";
import { getStartImg } from "images";

const GetStarted = () => {
  return (
    <section className="sectionPadding" data-aos="fade-up">
      <div className={clsx(classes.container, "container pattern  ")}>
        <div className={classes.infoContainer}>
          <Text lg primitiveDefault className={classes.title}>
            Get Started
          </Text>
          <Heading xl4 className={classes.heading}>
            See Results in Just One Week!
          </Heading>
          <Text lg opacity50 className={classes.info}>
            We want every business to unlock its full potential
          </Text>
          <Button className={classes.button} to="sign-up">
            Sign Up for Free
          </Button>
        </div>

        <img src={getStartImg} alt="Get Start" className={classes.img} />
      </div>
    </section>
  );
};
export default GetStarted;
