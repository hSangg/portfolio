import { motion } from "framer-motion";
import Music from "../../../components/Music";
import Back from "../../../components/Back";

const Index = () => {
  return (
    <motion.div className="mx-[100px] mt-[100px]">
      <Back />
      <Music />
    </motion.div>
  );
};

export default Index;
