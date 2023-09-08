import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  SiBehance,
  SiFacebook,
  SiFlickr,
  SiLinkedin,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const HomePage = () => {
  const router = useRouter();

  return (
    <motion.div className="flex flex-col justify-evenly items-center relative overflow-hidden">
      <motion.div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-28 justify-evenly mt-36 items-center relative">
        <motion.div className="lg:w-[800px] relative">
          <motion.div
            // initial={{ translateX: 500, opacity: 0 }}
            // whileInView={{ translateX: 0, opacity: 1 }}
            // transition={{ type: "spring", duration: 1 }}
            className="mt-[50px] text-2xl"
          >
            <div className="w-[300px] lg:w-full lg:text-left text-center">
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
                <Image
                  alt="fuguge"
                  width={"50px"}
                  height={"50px"}
                  src="/medal.png"
                />
              </figure>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-20 mb-20">
          <h1 className="font-bold text-2xl mb-2 text-center lg:text-left ">
            Following me
          </h1>
          <motion.ul
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1, transformOrigin: "top center" }}
            transition={{ type: "spring", duration: 0.5 }}
            className="flex flex-row sm:gap-5 lg:gap-2 lg:flex-col texl-xl opacity-80"
          >
            <motion.li
              onClick={() => {
                window.open("https://github.com/hSangg", "_blank");
              }}
              className="flex p-2 lg:p-0 cursor-pointer items-center gap-2"
            >
              <VscGithubInverted size="25px" />
              <div className="hidden lg:block">hSangg</div>
            </motion.li>

            <motion.li
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/m/in/cao-sang-b91b19226",
                  "_blank"
                );
              }}
              className="flex p-2 lg:p-0 cursor-pointer items-center gap-2"
            >
              <SiLinkedin size="25px" />

              <div className="hidden lg:block">Cao Sang</div>
            </motion.li>

            <motion.li
              onClick={() => {
                window.open(
                  "https://www.facebook.com/sangcanhcut/",
                  "_blank"
                );
              }}
              className="flex p-2 lg:p-0 cursor-pointer items-center gap-2"
            >
              <SiFacebook size="25px" />
              <div className="hidden lg:block">Sang_Hoai</div>
            </motion.li>

            <motion.li
              onClick={() => {
                window.open(
                  "https://www.behance.net/hoaisang",
                  "_blank"
                );
              }}
              className="flex p-2 lg:p-0 cursor-pointer items-center gap-2"
            >
              <SiBehance size="25px" />
              <div className="hidden lg:block">Cao Sang</div>
            </motion.li>

            <motion.li
              onClick={() => {
                window.open(
                  "https://www.flickr.com/photos/sangcanhcut/",
                  "_blank"
                );
              }}
              className="flex p-2 lg:p-0 cursor-pointer items-center gap-2"
            >
              <SiFlickr size="25px" />
              <div className="hidden lg:block">Sang Cao</div>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 60 }}
        viewport={{ once: false, amount: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-3  lg:left-0
       bg-gradient-to-b from-indigo-500 p-4 rounded-lg overflow-hidden"
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
