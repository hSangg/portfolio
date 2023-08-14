import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  SiBehance,
  SiFacebook,
  SiFlickr,
  SiLinkedin,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { whileHoverItem } from "../util/framer_motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      className="flex justify-evenly h-screen items-center relative"
    >
      <motion.div className="flex flex-col sm:flex-row sm:gap-[150px] justify-evenly h-screen items-center relative">
        <motion.div
          whileHover={{
            scale: 1.5,
            background: "black",
            zIndex: 1,
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 1)",
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          }}
          className="sm:w-[800px] relative"
        >
          <motion.div className="text-3xl  mt-[50px] sm:text-2xl">
            <div className="w-[600px] sm:w-full">
              Hy!{" "}
              <span className="border-b-2 border-indigo-500 italic font-[700]">
                Mình là Sang
              </span>
              , mình hiện là một sinh viên của UIT hay còn được gọi là{" "}
              <span className="text-purple-500 font-[700]">
                TIU =)
              </span>
              , một nơi mà mình nhận lại những kiến thức có thể phục
              vụ cho nghề nghiệp tương lai của mình . Mình là người
              hướng ngoại và khá thích đi ra ngoài với bạn bè. Đây sẽ
              là nơi mà mình chia sẽ{" "}
              <span className="text-green-500">-</span> về những thứ
              xung quanh mình <span>.-. </span>
              <figure className="inline-block absolute translate-y-[-5px] ">
                <img className="w-[50px]" src="./medal.png" />
              </figure>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <h1 className="font-bold text-2xl mb-2">Following me</h1>
          <motion.ul
            whileHover={"onHover"}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="flex flex-col text-[20px] gap-3 opacity-80"
          >
            <motion.li
              variants={whileHoverItem}
              className="flex items-center gap-2"
            >
              <VscGithubInverted size="25px" />
              <Link href="https://github.com/hSangg">
                <a target="_blank">hSangg</a>
              </Link>
            </motion.li>

            <motion.li
              variants={whileHoverItem}
              className="flex items-center gap-2"
            >
              <SiLinkedin size="25px" />
              <Link href="https://www.linkedin.com/m/in/cao-sang-b91b19226">
                <a target="_blank">Cao Sang</a>
              </Link>
            </motion.li>

            <motion.li
              variants={whileHoverItem}
              className="flex items-center gap-2"
            >
              <SiFacebook size="25px" />
              <Link href="https://github.com/hSangg">
                <a target="_blank">Sang_Hoai</a>
              </Link>
            </motion.li>

            <motion.li
              variants={whileHoverItem}
              className="flex items-center gap-2"
            >
              <SiBehance size="25px" />
              <Link href="https://www.behance.net/hoaisang">
                <a target="_blank">Cao Sang</a>
              </Link>
            </motion.li>

            <motion.li
              variants={whileHoverItem}
              className="flex items-center gap-2"
            >
              <SiFlickr size="25px" />
              <Link href="https://www.flickr.com/photos/sangcanhcut/">
                <a target="_blank">Sang Cao</a>
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 60 }}
        viewport={{ once: false, amount: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-3  sm:left-0
       bg-gradient-to-b from-indigo-500 p-4 rounded-lg"
      >
        <motion.li className="flex mb-2 align-middle gap-2">
          <MdPhone size={20} color="white" />
          <div className="font-semibold">+84944552050</div>
        </motion.li>

        <motion.li className="flex mb-2 align-middle gap-2">
          <MdEmail size={20} color="white" />
          <div className="font-semibold">hoai.sang050@gmail</div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default HomePage;
