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

const imgAnimate = {
  offscreen: { scale: 0, opacity: 0 },
  onscreen: {
    scale: 1,
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
      className=" text-white relative"
    >
      <motion.h1
        variants={textAnimate}
        className="text-white text-5xl text-left mb-5 font-bold"
      >
        Sang muốn viết gì ?
      </motion.h1>

      <motion.h1
        variants={textAnimate}
        className="text-white text-3xl mb-5 "
      >
        Mình sinh ra và lớn lên ở xứ công tử{" "}
        <span className="text-blue-500">Bạc Liêu</span> ✨, một nơi mà
        mình nhớ lại với những kỷ niệm về sông nước, lúc nhỏ cha mẹ
        mình làm nghề thu mua lúa gạo, cũng nhờ đó mà mình mang trong
        mình kí ức về những đêm ngủ lênh đênh trên sông nước, tuy là
        không nhiều nhưng mỗi lần ngủ vậy mình đều được mua cho nhiều
        bánh lắm đan xem những đêm đó là những lúc mình ngủ với ngoại,
        ngoại là người rất yêu thương mình, hay kể cho mình nghe về
        những chuyện lúc xưa để cho mình biết về ông bà, cha mẹ mình
        từng sống những lúc khó khăn như nào.
      </motion.h1>

      <motion.h1 variants={textAnimate} className="text-white">
        Thiết kế
      </motion.h1>

      <motion.figure
        // initial={"offscreen"}
        // whileInView={"onscreen"}
        variants={imgAnimate}
        className="w-[500px] absolute top-[-250px] right-[-50px]"
      >
        <img src="./mekong.jpg" />
      </motion.figure>
    </motion.div>
  );
};

export default AboutMe;
