import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import HomePage from "../components/HomePage";
import { use } from "framer-motion";
import { useFollowPointer } from "../useHooks/useFollowPointer";
import ILiveInDormitory from "../components/ILiveInDormitory";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <div className="bg-black overflow-hidden">
        <motion.div
          ref={ref}
          className="w-10 h-10 bg-green-400 rounded-full"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 15,
            restDelta: 0.001,
          }}
        />

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-green-500 h-1 origin-left"
        />

        <div className="flex items-center justify-center">
          <div className="lg:w-[1500px]">
            <HomePage />
            <AboutMe />
            <ILiveInDormitory />
          </div>
        </div>
      </div>
    </>
  );
}
