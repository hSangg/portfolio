import { motion } from "framer-motion";
import { textAnimate_2 } from "../util/framer_motion";

const Fav = () => {
  const list_banner = ["hnvd", "cbsg", "txcm", "tn"];

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
      className=""
    >
      <motion.div
        variants={textAnimate_2}
        className="text-5xl mt-2 mb-1 font-bold"
      >
        Mình thích thiết kế.
      </motion.div>
      <motion.p variants={textAnimate_2} className="text-2xl mb-5">
        Mình đang thực hiện 1 dự án thiết kế lại biển hiệu và các
        poster, banner theo phong cách sài gòn xưa
      </motion.p>

      <motion.div className="flex gap-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.img src="../des.png" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.img src="../bxeo.png" />
        </motion.div>
      </motion.div>

      {list_banner.map((x) => (
        <>
          <motion.div
            key={x}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-3"
          >
            <motion.img src={`../${x}.png`} />
          </motion.div>
        </>
      ))}
    </motion.div>
  );
};

export default Fav;
