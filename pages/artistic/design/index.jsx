import { motion, useScroll, useTransform } from "framer-motion";

import CircularImageSlider from "../../../components/CircularImageSlider";
import NormalLayout from "../../../components/Layout/NormalLayout";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [2, 5]);
  return (
    <>
      <CircularImageSlider />
      <motion.div className="h-[2000px]"></motion.div>
    </>
  );
};

export default Index;

Index.getLayout = NormalLayout;
