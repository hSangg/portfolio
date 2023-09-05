import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const Folder = ({ name, src, mouseX, ...rest }) => {
  const router = useRouter();
  const ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };

    return val - bounds.x - bounds.width / 2;
  });

  let width = useTransform(distance, [-200, 0, 200], [70, 100, 70]);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={() => {
        router.push(src);
      }}
      {...rest}
    >
      <Image
        src={"/foldericon.png"}
        width={"150px"}
        height={"117px"}
        objectFit="contain"
        className="scale-[1.2]"
        loading="lazy"
      />
      <motion.h1 className="text-center w-[150px] text-xl -translate-y-3 font-sem">
        {name}
      </motion.h1>
    </motion.div>
  );
};

export default Folder;
