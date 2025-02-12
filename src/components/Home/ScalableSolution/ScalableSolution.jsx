import clsx from "clsx";
import classes from "./ScalableSolution.module.css";
import Header from "components/common/Header/Header";
import { Heading, Text } from "components/common";
import {
  collaborationImg,
  customerService,
  dataSecurityImg,
  integrationImg,
} from "images";

const ScalableSolution = () => {
  const solutions = [
    {
      img: integrationImg,
      title: "Integration",
      info: "Moogle Workspace, Black and QuickBoost",
    },
    {
      img: customerService,
      title: "Customer service",
      info: "Available 24 hours a day, 7 days a week",
    },
    {
      img: dataSecurityImg,
      title: "Top-tier data security",
      info: "Encryption and compliance",
    },
    {
      img: collaborationImg,
      title: "Collaboration",
      info: "Seamless team communication and project management",
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className={clsx(
        classes.container,
        "pattern",
        "container",
        "sectionPadding"
      )}
    >
      <Header
        center
        className={classes.header}
        title="Achieve More"
        heading="Scalable Solutions"
        info="Built to simplify your day-to-day operations, giving you time to focus on growth and innovation"
      />
      <div className={classes.solutions}>
        {solutions.map((item, i) => (
          <div className={classes.solution} key={i}>
            <img src={item.img} alt={item.title} className={classes.img} />{" "}
            <Heading xl2 lg className={classes.title}>
              {item.title}
            </Heading>
            <Text lg opacity50>
              {item.info}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ScalableSolution;
