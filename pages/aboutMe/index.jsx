import { motion } from "framer-motion";
import AboutMe from "../../components/AboutMe";
import ILiveInDormitory from "../../components/ILiveInDormitory";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <motion.div className="">
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          router.back();
        }}
        className="fixed z-10 cursor-pointer top-10 inline-flex
         items-center justify-center bg-green-500 rounded-tr-full rounded-br-full"
      >
        <BiChevronLeft color="white" size={40} />
      </motion.div>
      <motion.div className="pt-[500px] mx-10 lg:mx-[50px]">
        <AboutMe />
        <ILiveInDormitory />
      </motion.div>
    </motion.div>
  );
};

export default Index;
