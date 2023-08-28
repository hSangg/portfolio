import { motion, useScroll, useTransform } from "framer-motion";

import CircularImageSlider from "../../../components/CircularImageSlider";
import NormalLayout from "../../../components/Layout/NormalLayout";
import SuffleLetters from "../../../components/SuffleLetters";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [2, 5]);
  return (
    <>
      <CircularImageSlider />
      <div className="mt-[100vh]"> </div>
      <SuffleLetters text={"EOIEIEE"} />
      <motion.div className="h-[2000px]"></motion.div>
    </>
  );
};

export default Index;

Index.getLayout = NormalLayout;
