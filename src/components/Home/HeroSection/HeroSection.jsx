import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import { heroImg, ray } from "images";
import { Button, Heading, Text } from "components/common";
import clsx from "clsx";
import { MdChevronRight } from "react-icons/md";

const HeroImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const threshold = 200; // Scroll limit to reach final position
  let progress = 1 - Math.min(scrollY / threshold, 1); // Reverse progress from 1 to 0 based on scroll

  // Calculate the transform dynamically based on scroll position
  const transformValue =
    progress > 0
      ? `perspective(1700px) 
        translateX(${238.623 * progress}px) 
        translateY(${-100 * progress}px) 
        scale(${1 + 0.34089 * progress}) 
        rotate(${8.52224 * progress}deg) 
        rotateX(${4.26112 * progress}deg) 
        rotateY(${-21.3056 * progress}deg)`
      : "none"; // Reset transform when in final position

  const positionStyle = progress > 0 ? "static" : "static"; // Transition to static after threshold

  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <Text lg opacity50>
            <a href="#/" className={classes.whatsNew}>
              What's new in 2.3.0 <MdChevronRight />
            </a>
          </Text>
          <Heading xl6>Process Automation and Data Analytics</Heading>
          <Text xl2>Boost your business with simple tool</Text>
          <Button glow className={classes.button}>
            Sign Up for Free
          </Button>
        </div>
        <motion.img
          src={heroImg}
          alt="Hero"
          className={classes.heroImg}
          style={{
            transform: transformValue,

            position: positionStyle,
            opacity: 1,
            maxWidth: "1088px",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        />
      </div>
      <img src={ray} alt="#" className={classes.img} />
    </div>
  );
};

export default HeroImage;
