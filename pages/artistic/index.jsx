import { motion } from "framer-motion";
import Back from "../../components/Back";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import ImageCustom from "../../components/ImageCustom";
import { useRef, useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { useRouter } from "next/router";

const Index = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const router = useRouter();

  const handleOnclick = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setPlaying(!playing);
  };

  return (
    <motion.div className="mx-[100px] mt-[100px]">
      <Back />

      <motion.div className="p-10 border flex flex-col items-center border-white mb-10 border-opacity-25 ">
        <ImageCustom
          srcName={"line-star-artistic.jpg"}
          w={"1800px"}
          h={"300px"}
          objectFit="contain"
        />

        <motion.p className="self-start">aoeifjoaeifoiaejs</motion.p>
      </motion.div>

      <motion.div className="w-full flex justify-between mb-[50px]">
        {Array.from(Array(4), (i) => i).map((x) => (
          <>
            <motion.div
              key={x}
              initial={{ width: 0 }}
              whileInView={{
                width: "20%",
                transition: { type: "spring", duration: 1 },
              }}
              className=" h-[2px] bg-white"
            ></motion.div>
          </>
        ))}
      </motion.div>

      <motion.div className="">
        <Image
          alt=""
          loading="lazy"
          src={"/GFXPlugin.com.url@0.5x.png"}
          width={"2000px"}
          height={"700px"}
          objectFit="cover"
          style={{}}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: "spring", duration: 1 },
        }}
        className="relative flex flex-col sm:flex-row  
      border-2 border-opacity-20 border-white p-10
        gap-10 mt-10 lg:scale-75"
      >
        <motion.div className="absolute left-[50%] top-[100px] sm:top-[200px] scale-75 translate-x-[-50%] z-10 ">
          <ImageCustom
            srcName={"tape.png"}
            h={"500px"}
            w={"1000px"}
            objectFit="cover"
          />
        </motion.div>

        <motion.div className="flex-1">
          <motion.div className="relative">
            <Image
              alt=""
              loading="lazy"
              src={"/03_Cover_Plastic.png"}
              width={"1000px"}
              height={"1000px"}
              objectFit="cover"
              style={{}}
            />

            <motion.div
              onClick={() => {
                router.push("/artistic/music");
              }}
              className="text-button-linking"
            >
              <motion.h1 className="text-black font-bold">
                Vào Xem Liền
              </motion.h1>
            </motion.div>

            <motion.div
              onClick={() => handleOnclick()}
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <motion.div
                animate={{ opacity: 1 }}
                whileTap={{ opacity: 0, scale: 1.2, rotate: "90deg" }}
                transition={{ duration: 0.2 }}
              >
                {playing ? (
                  <BiPause size={"100px"} color="white" />
                ) : (
                  <BiPlay size={"100px"} color="white" />
                )}
              </motion.div>

              <audio
                ref={audioRef}
                loop
                src="/songs/allthesefeeling.mp3"
              />
            </motion.div>
          </motion.div>

          <motion.div>
            <motion.h1 className="text-header">
              Tớ mê âm nhạc
            </motion.h1>

            <motion.p className="text-paragraph">
              Trong này sẽ chứa những nghệ sĩ mình yêu thích, những
              bài hát <b>siêu hay siêu cháy</b>, từ những bài{" "}
              <b>
                <i>quẩy banh nóc tới nước mắt hai hàng</i>
              </b>{" "}
              {"{=}"}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1">
          <Image
            alt=""
            loading="lazy"
            src={"/Print-Distortion-Effect.jpg"}
            width={"1000px"}
            height={"1000px"}
            objectFit="cover"
            style={{}}
          />

          <motion.div
            onClick={() => {
              router.push("/artistic/design");
            }}
            className="text-button-linking"
          >
            <motion.h1 className="text-black font-bold">
              Vào Xem Liền
            </motion.h1>
          </motion.div>

          <motion.div>
            <motion.h1 className="text-header">
              Tớ thích thiết kế
            </motion.h1>
            <motion.p className="text-paragraph"></motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
