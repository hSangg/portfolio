import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Back from "../../components/Back";

const Index = () => {
  return (
    <motion.div className="flex items-center justify-center">
      <Back />
    </motion.div>
  );
};

export default Index;
