import clsx from "clsx";
import classes from "./Testimonials.module.css";
import Header from "components/common/Header/Header";
import { alex, beginLogo } from "images";
import React, { useState, useEffect } from "react";
import { Text } from "components/common";

const Testimonials = () => {
  const testimonials = [
    {
      img: alex, // No longer used in JSX directly
      title:
        "We cut our working time by 30% with ProFlow. Automation has improved our efficiency dramatically.",
      description: ["Alex", "Operations Manager", "GreenTech Solutions"],
    },
    {
      img: alex,
      title:
        "Our workflow has never been smoother. The automation tools saved us hours of manual work!",
      description: ["Sophia", "Project Lead", "Tech Innovations"],
    },
  ];
  const partnersTestimonials = [
    {
      logo: beginLogo,
      title:
        "Saved us hours every week, and the insights from the analytics tools have helped us make better decisions",
      description: ["Sarah", "Begin"],
    },
    {
      title:
        "Customization options allowed us to tailor it perfectly to our processes",
      description: ["David", "TechNova"],
    },
    {
      title:
        "They’re available anytime we need help and always go the extra mile",
      description: ["Rachel", "GreenWave"],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changeIndex();
    }, 5000); // Auto-change every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const changeIndex = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0
    );
    setActiveLineIndex((prevLineIndex) =>
      prevLineIndex + 1 < testimonials.length ? prevLineIndex + 1 : 0
    );
  };

  const handleClick = () => {
    changeIndex(); // Change index on click
  };

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
        title="Testimonials"
        heading="From Startups To Enterprises"
        info="Our platform is built to handle your business needs with speed and precision"
      />

      <div
        className={clsx(classes.testimonialContainer)}
        onClick={handleClick}
        style={{ backgroundImage: `url(${testimonials[activeIndex].img})` }}
      >
        {/* Use a div for the image instead of an img tag */}

        <div className={classes.infoContainer}>
          <Text xl3 primitive0 className={classes.title}>
            {testimonials[activeIndex].title}
          </Text>
          <Text lg className={classes.info}>
            - {testimonials[activeIndex].description.join(", ")}
          </Text>
        </div>
        <div className={classes.lineContainer}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={clsx(classes.line, {
                [classes.active]: index === activeLineIndex, // Apply active class
              })}
            ></div>
          ))}
        </div>
      </div>

      <div className={classes.testimonials}>
        {partnersTestimonials?.map((testimonial, i) => (
          <div
            className={clsx(
              classes.testimonial,
              "pattern",
              i === 0 && classes.firstIndex
            )}
            key={i}
          >
            {testimonial.logo && (
              <img src={testimonial.logo} alt="#" className={classes.logo} />
            )}

            <Text xl2 primitive0 className={classes.title}>
              {testimonial.title}
            </Text>
            <Text lg opacity50 className={classes.info}>
              - {testimonial.description.join(", ")}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
