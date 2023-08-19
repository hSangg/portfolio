import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0, transform: "scale(0)" }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 15,
        stiffness: 300,
      }}
      style={{
        width: "200px",
        height: "100px",
        background:
          "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        padding: "16px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transformOrigin: "center", // Set the origin for transformations
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        whiteSpace: "nowrap",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: "matrix(1, 2, 3, 4, 5, 6)", // Example of a transform
      }}
    >
      <p style={{ margin: 0 }}>
        This is a 3D sticky note with transform effects!
      </p>
    </motion.div>
  );
};

export default Index;
