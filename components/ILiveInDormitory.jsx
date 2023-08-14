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
      transition={{ staggerChildren: 0.5 }}
      className="mb-[200px]"
    >
      <motion.div variants={textAnimate_1}>
        <motion.div className="text-5xl font-bold ">
          Mình ở kí túc xá . (2021 - present)
        </motion.div>

        <motion.p className="text-3xl mt-5" variants={textAnimate_2}>
          {" "}
          Mình chọn ở kí túc xá một phần là vì nó rẻ, phần còn lại là
          mình rất ham dui. Được nghe review là nếu thời sinh viên mà
          chưa từng ở kí túc xá thì đã mất đi 50% thanh xuân rồi
        </motion.p>
      </motion.div>

      <motion.div
        variants={imgAnimate_1}
        className="flex justify-center items-center flex-col mt-5 lg:flex-row"
      >
        <motion.div className="w-[700px] lg:h-[500px]">
          <motion.img src="./kitucxa.jpg" className="rounded-lg" />
        </motion.div>

        <motion.div className="w-[700px] lg:h-[500px]">
          <motion.img src="./family.jpg" className="rounded-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ILiveInDormitory;
