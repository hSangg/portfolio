import React from "react";
import { motion } from "framer-motion";
import {
  imgAnimate,
  imgAnimate_1,
  textAnimate,
  textAnimate_1,
} from "../util/framer_motion";

const ILiveInDormitory = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div variants={textAnimate_1}>
        <div className="text-5xl font-bold ">Mình ở kí túc xá .</div>
      </motion.div>

      <motion.div className="flex">
        <motion.div className="mr-[auto] text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Omnis fuga, vel cumque atque possimus maxime aliquid unde
          earum minus quam enim delectus molestiae non consequatur
          commodi ea quod a. Debitis!
        </motion.div>
        <motion.div
          variants={imgAnimate_1}
          className="w-[900px] flex gap-2"
        >
          <img src="./family.jpg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ILiveInDormitory;
