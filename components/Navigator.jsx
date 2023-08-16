import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const Navigator = () => {
  const { scrollYProgress } = useScroll();
  const x_aboutme = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x_design = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const x_image = useTransform(scrollYProgress, [0, 100], [0, 100]);
  const router = useRouter();

  const variants = {
    normal: { scale: 0, filter: "brightness(0%)" },
    view: { scale: 1, filter: "brightness(100%)" },
    hover: { scale: 1.2, filter: "brightness(150%)" },
  };

  return (
    <motion.div className="relative h-screen min-w-[900px]">
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
        absolute top-[20px] right-0
        inline-flex cursor-pointer
      px-5 py-2 rounded-2xl items-center gap-5
      text-5xl bg-gradient-to-r from-gray-900 z-10"
      >
        <motion.figure>
          <Image
            src="/location-iso-color.png"
            width={40}
            height={40}
            alt="location-iso-color"
          />
        </motion.figure>
        <motion.p className="text-xl">Cuộc sống cụa mình ?</motion.p>
      </motion.div>

      <motion.div
        initial="normal"
        whileHover="hover"
        whileInView="view"
        variants={variants}
        onClick={() => {
          router.push("/artistic");
        }}
        style={{ x: x_design }}
        className="
        absolute top-[90px] left-0
        inline-flex cursor-pointer flex-row-reverse	
        px-5 py-2 rounded-2xl items-center gap-5
      text-5xl bg-gradient-to-l from-black z-10"
      >
        <Image
          src="/picture-iso-color.png"
          width={40}
          height={40}
          alt="picture-iso-color"
        />

        <motion.p className="text-xl">
          Mình thích nghệ thuật ?
        </motion.p>
      </motion.div>

      <motion.div className="absolute h-[600px] left-0 right-0 z-0">
        <Image
          src="/bg_crack.jpg"
          style={{ borderRadius: "10px" }}
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* <motion.figure
        style={{
          scale: x_image,
          transformOrigin: 500,
          opacity: x_image,
        }}
        className="absolute right-0 top-[250px] z-0"
      >
        <Image
          src="/03_Cover_Plastic.png"
          width={500}
          height={500}
          alt="03_Cover_Plastic"
        />
      </motion.figure> */}
    </motion.div>
  );
};

export default Navigator;