import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const scale = useTransform(y, [-200, 200], [0.8, 1.2]);
  const dragConstraintsRef = useRef(null);

  return (
    <motion.div
      ref={dragConstraintsRef}
      className="relative w-full h-screen"
    >
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#007bff",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
          position: "absolute",
        }}
      >
        Drag me!
      </motion.div>
    </motion.div>
  );
};

export default Index;
