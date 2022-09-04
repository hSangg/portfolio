import Link from "next/link";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-evenly h-screen items-center lg:w-[1500px]"
    >
      <div className="lg:w-[800px] relative">
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
          chia sẽ về bản thân{" "}
          <span className="text-green-500">-</span> 1 website mình xây
          dựng lúc rảnh <span>.-. </span>
          <figure className="inline-block absolute translate-y-[-5px] ">
            <img className="w-[50px]" src="./medal.png" />
          </figure>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl mb-2">Following me</h1>
        <ul className="flex flex-col text-[20px] gap-3 opacity-80">
          <li className="flex items-center gap-2">
            <VscGithubInverted size="25px" />
            <Link href="https://github.com/hSangg">
              <a target="_blank">hSangg</a>
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <SiFacebook size="25px" />
            <Link href="https://github.com/hSangg">
              <a target="_blank">Sang_Hoai</a>
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <SiInstagram size="25px" />
            <Link href="https://www.instagram.com/h_sanggg/">
              <a target="_blank">h_sanggg</a>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default HomePage;
