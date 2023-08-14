import { motion } from "framer-motion";
import AboutMe from "../../components/AboutMe";
import ILiveInDormitory from "../../components/ILiveInDormitory";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <motion.div className="cursor-pointer flex items-center justify-center">
      <motion.div
        onClick={() => {
          router.back();
        }}
        className="fixed top-10 left-10 inline-flex items-center justify-center bg-green-500 rounded-full"
      >
        <BiChevronLeft color="white" size={40} />
      </motion.div>
      <motion.div className="lg:w-[1500px] pt-[500px]">
        <AboutMe />
        <ILiveInDormitory />
      </motion.div>
    </motion.div>
  );
};

export default Index;
