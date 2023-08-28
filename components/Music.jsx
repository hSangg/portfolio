/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { textAnimate_1 } from "../util/framer_motion";
import Image from "next/image";
const Music = () => {
  return (
    <motion.div>
      <motion.div className="flex flex-col sm:flex-row items-start gap-6">
        <motion.div className="">
          <motion.h1 className="font-bold text-5xl">
            Mình thích âm nhạc
          </motion.h1>
          <motion.p className="text-3xl min-w-[300px] mt-2 text-justify">
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
            alt="caset"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.5 }}
        className="grid grid-cols-2 xl:grid-cols-3  mt-20 gap-5"
      >
        <motion.div
          variants={textAnimate_1}
          className="music-item xl:col-span-2"
        >
          <iframe
            className=""
            src="https://open.spotify.com/embed/playlist/4ISyxeMOQgO46YQFupYpaj?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <h1 className="text-2xl">
            "Nhập môn sử dụng tai" playlist gồm những bài hát{" "}
            <i>"bắn"</i> nhất mà mình từng nghe, những con track làm
            nóng đôi tai, rất hype rất xuất
          </h1>
        </motion.div>

        <motion.div variants={textAnimate_1} className="music-item">
          <iframe
            src="https://open.spotify.com/embed/album/1vi1WySkgPGkbR8NnQzlXu?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <h1 className="text-2xl">
            Track "Thôi em đừng đi" trong này mình đã loop demo nó quá
            trời luôn, đến khi được release chính thức thì phải nói là
            quá xuất, nguyên album từ nhịp bass, trống 808 rất trip
            rất cuốn, một phần điểm cộng nữa là phần artwork từ nhà
            Fustic quáy chá
          </h1>
        </motion.div>

        <motion.div variants={textAnimate_1} className="music-item">
          <iframe
            src="https://open.spotify.com/embed/album/0LM9Cm43Sug8Hfpm84qmt6?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <h1 className="text-2xl">
            "Nhập môn sử dụng tai" playlist gồm những bài hát{" "}
            <i>"bắn"</i> nhất mà mình từng nghe, những con track làm
            nóng đôi tai, rất hype rất xuất
          </h1>
        </motion.div>

        <motion.div variants={textAnimate_1} className="music-item">
          <iframe
            src="https://open.spotify.com/embed/album/6fJZeGzS6omKzAKIQDC9MC?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <h1 className="text-2xl">
            "Nhập môn sử dụng tai" playlist gồm những bài hát{" "}
            <i>"bắn"</i> nhất mà mình từng nghe, những con track làm
            nóng đôi tai, rất hype rất xuất
          </h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Music;
