import React from "react";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";

const FadeUp = ({ children }) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and a little below
    visible: {
      opacity: 1, // Fade in
      y: 0, // Move to normal position
      transition: { type: "spring", stiffness: 100, damping: 25 }, // Smooth spring animation
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      className={classes.textRevealing}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
