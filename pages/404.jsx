import { motion } from "framer-motion";
import NormalLayout from "../components/Layout/NormalLayout";
import Image from "next/image";
const Custom404 = () => {
  return (
    <motion.div className="flex items-center justify-center fixed inset-4 sm:inset-16 lg:inset-24 xl:inset-28">
      <Image
        src={"/404.jpg"}
        layout="fill"
        alt=""
        objectFit="contain"
      />
    </motion.div>
  );
};

export default Custom404;
Custom404.getLayout = NormalLayout;
