import { motion } from "framer-motion";
import React from "react";
import {
  imgAnimate_1,
  textAnimate_1,
  textAnimate_2,
} from "../util/framer_motion";

const ILiveInDormitory = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      // viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.5 }}
      className="mb-[200px]"
    >
      <motion.div variants={textAnimate_1}>
        <div className="text-5xl font-bold ">
          Mình ở kí túc xá . (2021 - present)
        </div>
      </motion.div>

      <motion.div className="flex">
        <motion.div className="mr-[auto] text-2xl w-[1500px] mt-5">
          <motion.p variants={textAnimate_2}>
            {" "}
            Mình chọn ở kí túc xá một phần là vì nó rẻ, phần còn lại
            là mình rất ham dui. Được nghe review là nếu thời sinh
            viên mà chưa từng ở kí túc xá thì đã mất đi 50% thanh xuân
            rồi
          </motion.p>
          <motion.div
            variants={imgAnimate_1}
            className="w-[1000px] mt-5 mr-5 border-x border-white "
          >
            <img src="./kitucxa.jpg" />
          </motion.div>
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
