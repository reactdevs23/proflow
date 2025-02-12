import React, { useState } from "react";

import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import classes from "./Faq.module.css";

import clsx from "clsx";
import { Heading, Text } from "components/common";

const Faq = () => {
  const [active, setActive] = useState(3);
  const faqs = [
    {
      question: "What’s the price?",
      answer:
        "We offer flexible plans starting from $29/month for small teams. Find one that fits your needs in pricing page.",
    },
    {
      question: "Do I need technical skills to use ProFlow?",
      answer:
        "No! Our platform is designed to be user-friendly and requires no technical knowledge.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "You can start seeing improvements in efficiency and data insights within the first week.",
    },
    {
      question: "What integrations are available?",
      answer:
        "ProFlow integrates with Moogle Workspace, Black, QuickBoost, and other popular business tools. More integrations are being added regularly.",
    },
    {
      question: "Can I try it for free?",
      answer:
        "Yes! We offer a 14-day free trial so you can experience all the benefits before committing.",
    },
  ];
  return (
    <>
      <section className={clsx(classes.container, "container sectionPadding")}>
        <Heading xl5 className={classes.heading}>
          Quick Answers
        </Heading>
        <div className={classes.faqWrapper}>
          {faqs.map((items, index) => (
            <div
              className={classes.faqContainer}
              key={index}
              onClick={() => setActive(index)}
            >
              <div className={classes.questionWrapper}>
                <Heading regular xl3 className={classes.question}>
                  {items.question}
                </Heading>
                {active === index ? (
                  <FaCaretUp className={classes.icon} />
                ) : (
                  <FaCaretDown className={classes.icon} />
                )}
              </div>
              {active === index && (
                <Text opacity50 base className={classes.answer}>
                  {items.answer}
                </Text>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
