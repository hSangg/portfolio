import { motion } from "framer-motion";
import Image from "next/image";
const Music = () => {
  return (
    <motion.div>
      <motion.div className="flex flex-col sm:flex-row items-start gap-6">
        <motion.div>
          <motion.h1 className="font-bold text-5xl">
            Mình thích âm nhạc
          </motion.h1>
          <motion.p className="text-3xl mt-2 text-justify">
            Mình biết đến âm nhạc từ hồi năm lớp 7, có thể nói cuộc
            sống của mình được tô điểm bởi âm nhạc rất nhiều, xưa mình
            biết đến design cũng từ âm nhạc mà ra. Lúc đầu thì tìm
            hiểu làm mấy video sóng nhạc đồ đồ đó rồi dần dần mình mới
            biết đến
            <b> PTS, AI, AE</b> rồi mày mò dùng đến giờ.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          }}
          className="relative mt-[30px] sm:mt-0 shrink-0 w-full sm:w-[500px] h-[400px] sm:h-[300px] "
        >
          <Image
            src={"/cassette_4.png"}
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Music;
