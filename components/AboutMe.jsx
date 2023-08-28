/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import {
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import { textAnimate } from "../util/framer_motion";
import Image from "next/image";
import BasicLayout from "./Layout/BasicLayout";

const AboutMe = () => {
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        className=" text-white relative  flex flex-col items-center lg:items-start"
      >
        <motion.h1
          variants={textAnimate}
          className="text-white text-5xl  mb-5 font-bold"
        >
          Một vài nét về mình ._.
        </motion.h1>

        <motion.h1
          variants={textAnimate}
          className="text-white text-4xl mb-5 text-justify "
        >
          Mình sinh ra và lớn lên ở xứ công tử
          <span className="text-blue-500"> Bạc Liêu</span> ✨, một nơi
          mà mình nhớ lại với những kỷ niệm về sông nước, lúc nhỏ cha
          mẹ mình làm nghề thu mua lúa gạo, cũng nhờ đó mà mình mang
          trong mình kí ức về những đêm ngủ lênh đênh trên sông nước,
          tuy là không nhiều nhưng mỗi lần ngủ vậy mình đều được mua
          cho nhiều bánh lắm đan xem những đêm đó là những lúc mình
          ngủ với ngoại, ngoại là người rất yêu thương mình, hay kể
          cho mình nghe về những chuyện lúc xưa để cho mình biết về
          ông bà, cha mẹ mình từng sống những lúc khó khăn như nào.
        </motion.h1>

        <br />
        <TransformWrapper initialScale={1} centerOnInit>
          <TransformComponent>
            {/* <motion.div className="w-full relative pt-[100%] ">
              <Image
                src={"/hoa_book.jpg"}
                layout="fill"
                loading="lazy"
                objectFit="contain"
                alt=""
                className="w-full h-full top-0 left-0 rounded-2xl"
              />
            </motion.div> */}
            <img
              src="/hoa_book.jpg"
              alt=""
              className="scale-[1] sm:scale-[0.9]"
            />
          </TransformComponent>
        </TransformWrapper>

        <motion.div className="w-full relative pt-[100%] ">
          <Image
            src={"/bulbfish_notebookie_02.jpg"}
            layout="fill"
            loading="lazy"
            objectFit="contain"
            alt=""
            className="w-full h-full top-0 left-0 rounded-2xl scale-[1] sm:scale-[0.9]"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMe;
