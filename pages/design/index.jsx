import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
import SGXua from "../../components/Design/SGXua";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <motion.div className="flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          router.back();
        }}
        className="fixed top-10 cursor-pointer left-0 inline-flex items-center 
        justify-center bg-green-500 rounded-tr-full rounded-br-full"
      >
        <BiChevronLeft color="white" size={40} />
      </motion.div>
      <motion.div className="mx-[75px]">
        <SGXua />
      </motion.div>
    </motion.div>
  );
};

export default Index;
