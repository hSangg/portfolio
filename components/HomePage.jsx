import Link from "next/link";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";
import { whileHoverItem } from "../util/framer_motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      className="flex justify-evenly h-screen items-center"
    >
      <motion.div
        whileHover={{
          scale: 1.5,
          background: "black",
          zIndex: 1,
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 1)",
          transition: { type: "spring", bounce: 0.4, duration: 1 },
        }}
        className="lg:w-[800px] relative"
      >
        <div className="text-2xl">
          Hy!{" "}
          <span className="border-b-2 border-indigo-500 italic font-[700]">
            Mình là Sang
          </span>
          , mình hiện là một sinh viên của UIT hay còn được gọi là{" "}
          <span className="text-purple-500 font-[700]">TIU =)</span>,
          một nơi mà mình nhận lại những kiến thức có thể phục vụ cho
          nghề nghiệp tương lai của mình . Mình là người hướng ngoại
          và khá thích đi ra ngoài với bạn bè. Đây sẽ là nơi mà mình
          chia sẽ <span className="text-green-500">-</span> về những
          thứ xung quanh mình <span>.-. </span>
          <figure className="inline-block absolute translate-y-[-5px] ">
            <img className="w-[50px]" src="./medal.png" />
          </figure>
        </div>
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
            <SiFacebook size="25px" />
            <Link href="https://github.com/hSangg">
              <a target="_blank">Sang_Hoai</a>
            </Link>
          </motion.li>

          <motion.li
            variants={whileHoverItem}
            className="flex items-center gap-2"
          >
            <SiInstagram size="25px" />
            <Link href="https://www.instagram.com/h_sanggg/">
              <a target="_blank">h_sanggg</a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default HomePage;
