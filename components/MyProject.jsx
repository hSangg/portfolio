import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Folder from "./Folder";
const dataFolder = [
  {
    name: "Tình yêu có nghĩa là gì",
    link: "",
  },
  {
    name: "????????",
    link: "???????",
  },
  {
    name: "????????",
    link: "???????",
  },

  {
    name: "????????",
    link: "???????",
  },
];

const MyProject = () => {
  let mouseX = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        console.log(e.pageX);
      }}
      className="flex"
    >
      {dataFolder.map(({ name, link }, index) => (
        <Folder mouseX={mouseX} name={name} src={link} key={index} />
      ))}
    </motion.div>
  );
};

export default MyProject;
