import Link from "next/link";
import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoFacebook } from "react-icons/io";
import { SiFacebook, SiInstagram } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="flex justify-evenly h-screen items-center">
      <div className="lg:w-[800px] relative">
        <p className="text-2xl">
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
        </p>
      </div>

      <div>
        <h1 className="font-bold text-2xl mb-2">Following me</h1>
        <ul className="flex flex-col text-[20px] gap-3 opacity-80">
          <li className="flex items-center gap-2">
            <VscGithubInverted size="25px" />
            <a
              className="flex"
              href="https://github.com/hSangg"
              target="noopener"
            >
              hSangg
            </a>
          </li>

          <li className="flex items-center gap-2">
            <SiFacebook size="25px" />
            <a
              className="flex"
              href="https://github.com/hSangg"
              target="noopener"
            >
              Sang_Hoai
            </a>
          </li>

          <li className="flex items-center gap-2">
            <SiInstagram size="25px" />
            <a
              className="flex"
              href="https://www.instagram.com/h_sanggg/"
              target="noopener"
            >
              h_sanggg
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
