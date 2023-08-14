import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
import SGXua from "../../components/Design/SGXua";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <motion.div className="flex items-center justify-center">
      <motion.div
        onClick={() => {
          router.back();
        }}
        className="fixed top-10 left-10 inline-flex items-center justify-center bg-green-500 rounded-full"
      >
        <BiChevronLeft color="white" size={40} />
      </motion.div>
      <motion.div className="lg:w-[1500px]">
        <SGXua />
      </motion.div>
    </motion.div>
  );
};

export default Index;
