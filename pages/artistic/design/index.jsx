import { motion, useScroll, useTransform } from "framer-motion";

import CircularImageSlider from "../../../components/CircularImageSlider";

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

// Index.getLayout = BasicLayout;
