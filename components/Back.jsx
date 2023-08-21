import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";

const Back = () => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onClick={() => {
        router.back();
      }}
      className="fixed z-auto top-10 cursor-pointer left-0 inline-flex items-center 
        justify-center bg-green-500 rounded-tr-full rounded-br-full"
    >
      <BiChevronLeft color="white" size={40} />
    </motion.div>
  );
};

export default Back;
