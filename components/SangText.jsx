import { motion } from "framer-motion";
import Image from "next/image";
const SangText = () => {
  return (
    <motion.div
      initial={{ y: "-50px", opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.5, duration: 1 },
      }}
      className="flex items-center justify-center "
    >
      <Image
        src="/sang.jpg"
        width="1300px"
        height="500px"
        objectFit="contain"
        loading="lazy"
        alt=""
      />
    </motion.div>
  );
};

export default SangText;
