import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Back from "../../components/Back";
import Music from "../../components/Music";

const Index = () => {
  return (
    <motion.div className="mx-[100px] mt-[100px]">
      <Back />
      <Music />
    </motion.div>
  );
};

export default Index;
