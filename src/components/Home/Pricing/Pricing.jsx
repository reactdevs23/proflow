import clsx from "clsx";
import classes from "./Pricing.module.css";

import Switch from "components/common/Switch/Switch";
import { useState } from "react";
import { Button, Heading, Text } from "components/common";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const data = [
    {
      title: "Starter",
      planFor: "Free for everyone",
      price: "Free",
      yearlyPrice: "Free",
      features: [
        "3 automation processes",
        "Access to core integrations",
        "Real-time analytics dashboard",
        "Basic customer support",
        "5 GB storage",
      ],
      button: "#",
    },
    {
      title: "Pro",
      isPopular: true,
      planFor: "For small teams",
      price: "$38",
      yearlyPrice: "$29",
      features: [
        "10 automation processes",
        "Core integrations + QuickBoost",
        "Real-time and advanced analytics",
        "Priority customer support",
        "50 GB storage",
      ],
      button: "#",
    },
    {
      title: "Business",
      planFor: "Ideal for growing",
      price: "$92",
      yearlyPrice: "$79",
      features: [
        "Unlimited automation processes",
        "All integrations, including custom",
        "Predictive analytics",
        "Dedicated account manager",
        "200 GB storage",
      ],
      button: "#",
    },
  ];

  return (
    <section
      className={clsx(classes.container, "container sectionPadding pattern")}
    >
      <div className={classes.topHeader}>
        <div className={classes.header}>
          <Text lg primitiveDefault className={classes.title}>
            Pricing
          </Text>
          <Heading xl4 className={classes.heading}>
            Find the Perfect Plan
          </Heading>
          <Text lg opacity50 className={classes.info}>
            Our platform adapts to your needs and helps you reach your goals
          </Text>
        </div>
        <div className={classes.toggleContainer}>
          <Switch isChecked={isYearly} setIsChecked={setIsYearly} />
          <Text lg opacity50>
            Yearly
          </Text>
          <Text className={classes.discount} lg opacity50>
            -20%
          </Text>
        </div>
      </div>

      <div className={classes.cards}>
        {data.map((item, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className={clsx(
              classes.card,
              item.isPopular && classes.popularCard
            )}
          >
            <div className={classes.heading}>
              <div className={classes.titleContainer}>
                <Text xl3>{item.title}</Text>
                {item.isPopular && (
                  <Text uppercase className={classes.popular} lg primitive0>
                    POPULAR
                  </Text>
                )}
              </div>
              <Text lg opacity50>
                {item.planFor}
              </Text>
            </div>
            <Heading xl4 className={classes.price}>
              {isYearly ? item.yearlyPrice : item.price}
              {item.price !== "Free" && (
                <span className={classes.duration}>/mo</span>
              )}
            </Heading>

            <div className={classes.features}>
              {item.features.map((feature, id) => (
                <Text lg opacity50 key={id} className={classes.feature}>
                  <FaCheck className={classes.icon} /> {feature}
                </Text>
              ))}
            </div>
            <Button base glow className={classes.button}>
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
