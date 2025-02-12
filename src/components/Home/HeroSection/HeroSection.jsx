import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import { heroImg, ray } from "images";
import { Button, Heading, Text } from "components/common";
import clsx from "clsx";
import { MdChevronRight } from "react-icons/md";
import TextReveal from "components/common/TextReveal/TextReveal";

const HeroImage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (imgContainerRef.current) {
        const width = imgContainerRef.current.offsetWidth;
        // Calculate the height based on the aspect ratio
        const newHeight = width / (1088 / 511.8);
        setImgHeight(newHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial height calculation on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const threshold = 200; // Scroll limit to reach final position
  let progress = 1 - Math.min(scrollY / threshold, 1); // Reverse progress from 1 to 0 based on scroll

  // Calculate the transform dynamically based on scroll position
  const transformValue =
    progress > 0
      ? `perspective(1700px) 
        translateX(${560 * progress}px) 
        translateY(${-340 * progress}px) 
        scale(${1 + 0.30489 * progress}) 
        rotate(${20 * progress}deg) 
        rotateX(${10 * progress}deg) 
        rotateY(${-50 * progress}deg)`
      : "none"; // Reset transform when in final position

  const positionStyle = progress > 0 ? "absolute" : "absolute"; // Transition to static after threshold

  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <Text lg opacity50>
            <a href="#/" className={classes.whatsNew} data-aos="fade-up">
              What's new in 2.3.0 <MdChevronRight />
            </a>
          </Text>
          <Heading xl6>
            <TextReveal text="Process Automation and Data Analytics" />
          </Heading>
          <Text xl2>
            <TextReveal text="Boost your business with simple tool" />
          </Text>
          <Button
            dataAos="fade-up"
            glow
            className={classes.button}
            to="sign-up"
          >
            Sign Up for Free
          </Button>
        </div>
        <div
          className={classes.imgContainer}
          ref={imgContainerRef}
          style={{ height: `${imgHeight}px` }}
        >
          <motion.img
            src={heroImg}
            alt="Hero"
            className={classes.heroImg}
            style={{
              transform: transformValue,
              position: positionStyle,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
          />
        </div>
      </div>
      <img src={ray} alt="#" className={classes.img} />
    </div>
  );
};

export default HeroImage;
