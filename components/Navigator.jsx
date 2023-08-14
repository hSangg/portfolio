import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const Navigator = () => {
  const { scrollYProgress } = useScroll();
  const x_aboutme = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x_design = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const router = useRouter();

  const variants = {
    normal: { scale: 0, filter: "brightness(0%)" },
    view: { scale: 1, filter: "brightness(100%)" },
    hover: { scale: 1.2, filter: "brightness(150%)" },
  };

  return (
    <motion.div className="relative h-screen">
      <motion.div
        initial="normal"
        whileHover="hover"
        whileInView="view"
        variants={variants}
        onClick={() => {
          router.push("/aboutMe");
        }}
        style={{ x: x_aboutme }}
        className="
        absolute top-0 right-0
        inline-flex cursor-pointer
      p-5 rounded-2xl items-center gap-5
      text-5xl bg-gradient-to-r from-orange-900"
      >
        <motion.figure>
          <Image
            src="/location-iso-color.png"
            width={40}
            height={40}
            alt="location-iso-color"
          />
        </motion.figure>
        <motion.p className="text-2xl">Cuộc sống cụa mình ?</motion.p>
      </motion.div>

      <motion.div
        initial="normal"
        whileHover="hover"
        whileInView="view"
        variants={variants}
        onClick={() => {
          router.push("/design");
        }}
        style={{ x: x_design }}
        className="
        absolute top-[120px] left-0
        inline-flex cursor-pointer flex-row-reverse	
      p-5 rounded-2xl items-center gap-5
      text-5xl bg-gradient-to-l from-blue-900"
      >
        <motion.figure>
          <Image
            src="/picture-iso-color.png"
            width={40}
            height={40}
            alt="picture-iso-color"
          />
        </motion.figure>
        <motion.p className="text-2xl">Thiết kế cụa mình ?</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Navigator;
