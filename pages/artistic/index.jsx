import { motion } from "framer-motion";
import Back from "../../components/Back";
import Image from "next/image";

const Index = () => {
  return (
    <motion.div className="mx-[100px] mt-[100px]">
      <Back />
      <motion.div className="">
        <Image
          loading="lazy"
          src={"/GFXPlugin.com.url@0.5x.png"}
          width={"2000px"}
          height={"700px"}
          objectFit="cover"
          style={{ borderRadius: "50px" }}
        />
      </motion.div>
      <motion.div className="flex flex-col sm:flex-row gap-10 mt-10">
        <motion.div className="am nhac p-10 bg-opacity-50 bg-red-900 rounded-[50px]">
          <Image
            loading="lazy"
            src={"/03_Cover_Plastic.png"}
            width={"1000px"}
            height={"1000px"}
            objectFit="cover"
            style={{ borderRadius: "30px" }}
          />

          <motion.div>
            <motion.h1 className="text-4xl font-[800] mt-[150px]">
              Tớ mê âm nhạc
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="am nhac p-10 bg-red-900 rounded-[50px]">
          <Image
            loading="lazy"
            src={"/03_Cover_Plastic.png"}
            width={"1000px"}
            height={"1000px"}
            objectFit="cover"
            style={{ borderRadius: "30px" }}
          />

          <motion.div>
            <motion.h1 className="text-4xl font-[800] mt-[150px]">
              Tớ mê âm nhạc
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
