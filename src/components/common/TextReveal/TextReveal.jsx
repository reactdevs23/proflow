import React from "react";
import { motion } from "framer-motion";

const TextReveal = ({ text }) => {
  const letterVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.03, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <motion.div initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.span key={index} custom={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
