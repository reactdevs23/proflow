import clsx from "clsx";
import classes from "./ReadyToStart.module.css";
import { Button, Heading } from "components/common";

const ReadyToStart = () => {
  return (
    <div className={clsx(classes.container, "container  ")} data-aos="fade-up">
      <Heading xl3>Ready To Get Started?</Heading>
      <Button glow to="sign-up">
        Sign Up for Free
      </Button>
    </div>
  );
};
export default ReadyToStart;
