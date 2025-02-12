import clsx from "clsx";
import classes from "./PowerfulAutomation.module.css";
import Header from "components/common/Header/Header";
import { automationImg, easyInterfaceImg, realtimeAnalyticsImg } from "images";
import React, { useState, useEffect } from "react";
import { Heading, Text } from "components/common";

const PowerfulAutomation = () => {
  const features = [
    {
      img: automationImg,
      title: "Automation",
      info: "Skip the busy work. Save time by automating key tasks.",
    },
    {
      img: easyInterfaceImg,
      title: "Easy interface",
      info: "Simple to use. Start working without long learning curves.",
    },
    {
      img: realtimeAnalyticsImg,
      title: "Real-time analytics",
      info: "Key data and reports — always at your fingertips.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
        center
        className={classes.header}
        title="Powerful Automation"
        heading="Helping Companies Manage Their Data"
        info="We believe that businesses of all sizes should have access to powerful automation and data analytics"
      />
      <div className={classes.featuresContainer}>
        <img
          src={features[activeIndex]?.img}
          alt={features[activeIndex]?.title}
          className={classes.img}
        />
        <div className={classes.features}>
          {features?.map((feature, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={clsx(classes.feature, {
                [classes.active]: i === activeIndex,
              })}
            >
              <Heading xl2 className={classes.title}>
                {feature.title}
              </Heading>
              <Text lg className={classes.info}>
                {feature.info}
              </Text>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default PowerfulAutomation;
