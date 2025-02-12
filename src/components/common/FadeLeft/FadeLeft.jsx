import React from "react";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";

const FadeUpFadeLeft = ({ children }) => {
  const fadeUpLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpLeftVariants}
      className={classes.textRevealing}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpFadeLeft;
