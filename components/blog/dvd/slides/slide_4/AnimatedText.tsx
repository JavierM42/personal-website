import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

const AnimatedText = ({
  slideRef,
  containerRef,
  finalOffset,
}: {
  slideRef: RefObject<HTMLDivElement>;
  containerRef: RefObject<HTMLDivElement>;
  finalOffset: number;
}) => {
  const { scrollYProgress: exitProgress } = useScroll({
    target: slideRef,
    container: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(exitProgress, [0, 1], [0, finalOffset]);

  return <motion.div style={{ y }}>Can we divide it further?</motion.div>;
};

export default AnimatedText;
