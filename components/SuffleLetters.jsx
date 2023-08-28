import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
const SuffleLetters = ({ text01, text02, imageName }) => {
  const ref = useRef(null);
  useEffect(() => {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      item.addEventListener("mouseenter", (event) => {
        const target = event.currentTarget;

        if (target.dataset.animating) {
          return;
        }

        target.dataset.animating = true;

        const words = target.querySelectorAll(".word");
        console.log(words);
        const originalWords = Array.from(words).map(
          (word) => word.textContent
        );

        let suffles = 0;
        const maxSuffles = 10;
        const intervalDuration = 500 / maxSuffles;
        const animationInterval = setInterval(() => {
          if (suffles >= maxSuffles) {
            clearInterval(animationInterval);
            words.forEach((word, index) => {
              word.textContent = originalWords[index];
              delete target.dataset.animating;
            });
          } else {
            words.forEach((word) => {
              const length = word.textContent.length;
              const suffedText = "";
              for (let i = 0; i < length; i++) {
                suffedText += getRandomCharacter();
              }
              word.textContent = suffedText;
              suffles++;
            });
          }
        }, intervalDuration);
      });
    });

    const getRandomCharacter = () => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return chars.charAt(Math.floor(chars.length * Math.random()));
    };
  }, []);

  return (
    <motion.div className="item flex text-8xl sm:text-9xl">
      <motion.div className="word">{text01}</motion.div>
      <motion.div ref={ref} className="relative img-suffle ">
        <Image
          layout="fill"
          loading="lazy"
          alt=""
          src={`/${imageName}`}
        />
      </motion.div>
      <motion.div className="word">{text02}</motion.div>
    </motion.div>
  );
};

export default SuffleLetters;
