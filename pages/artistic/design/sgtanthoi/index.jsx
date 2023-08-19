import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SGXua from "../../../../components/Design/SGXua";
import Back from "../../../../components/Back";

const Index = () => {
  const router = useRouter();
  return (
    <motion.div className="flex items-center justify-center">
      <Back />
      <motion.div className="mx-[75px]">
        <SGXua />
      </motion.div>
    </motion.div>
  );
};

export default Index;
