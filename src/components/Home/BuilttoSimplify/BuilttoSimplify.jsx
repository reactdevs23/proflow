import clsx from "clsx";
import classes from "./BuilttoSimplify.module.css";
import Header from "components/common/Header/Header";
import {
  automateKeyProcessIcon,
  designWithSimplicityIcon,
  getStartedQuicklyIcon,
  intutiveLayoutIcon,
  reduceHumanErrorIcon,
} from "images";
import { Text } from "components/common";

const BuilttoSimplify = () => {
  const data = [
    {
      icon: automateKeyProcessIcon,
      title: "Automate key processes",
      info: "Free up time and focus on what truly matters",
    },
    {
      icon: automateKeyProcessIcon,
      title: "Streamline workflows",
      info: "Eliminate bottlenecks and enhance productivity",
    },
    {
      icon: reduceHumanErrorIcon,
      title: "Reduce human error",
      info: "Minimize mistakes and improve accuracy",
    },
    {
      icon: getStartedQuicklyIcon,
      title: "Get started quickly",
      info: "Skip the complexity and dive straight into productivity",
    },
    {
      icon: designWithSimplicityIcon,
      title: "Designed with simplicity",
      info: "Enjoy a platform built with the user in mind",
    },
    {
      icon: intutiveLayoutIcon,
      title: "Intuitive layout",
      info: "Navigate with ease and confidence",
    },
  ];
  return (
    <section
      className={clsx(
        classes.container,
        "pattern",
        "container",
        "sectionPadding"
      )}
    >
      <Header
        className={classes.header}
        center
        xl3
        heading="Built To Simplify"
        info="Access to powerful automation and data analytics"
      />
      <div className={classes.cards}>
        {data?.map((item, i) => (
          <div className={classes.card} key={i}>
            <Text regular lg className={classes.title}>
              <img src={item.icon} alt="Icon" className={classes.icon} />{" "}
              {item.title}
            </Text>
            <Text lg opacity50>
              {item.info}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BuilttoSimplify;
