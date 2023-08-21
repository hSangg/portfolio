import Back from "../../components/Back";
import { motion } from "framer-motion";
const BasicLayout = ({ children }) => {
  return (
    <motion.div
      className="
    zoom
    mx-[10px] lg:mx-[100px] mt-[10px] sm:mt-[100px] "
    >
      <Back />
      {children}
    </motion.div>
  );
};

export default BasicLayout;
