import React from "react";
import { motion, Variants } from "framer-motion";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const AboutMe = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.5 }}
      className="text-5xl text-white"
    >
      <motion.h1
        variants={textAnimate}
        className="text-white text-left"
      >
        Cố Lên
      </motion.h1>

      <motion.h1 variants={textAnimate} className="text-white">
        Em 🌷
      </motion.h1>

      <motion.h1 variants={textAnimate} className="text-white">
        Nhé 🔥
      </motion.h1>
    </motion.div>
  );
};

export default AboutMe;
