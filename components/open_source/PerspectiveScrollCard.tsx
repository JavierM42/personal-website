import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FC, ReactNode, useRef } from "react";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

type Props = {
  children: ReactNode;
  y?: number;
};

const PerspectiveScrollCard: FC<Props> = ({ children, y = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const STRENGTH = 30;
  const dx = useTransform(
    () => -scrollYProgress.get() * STRENGTH + STRENGTH / 2
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-max"
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "flat",
      }}
    >
      <motion.div
        ref={ref}
        transition={spring}
        className="block w-full h-max"
        style={
          shouldReduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : { rotateX: dx, rotateY: y }
        }
      >
        <div
          className="block w-full h-max"
          style={{
            perspective: "1200px",
            transformStyle: "flat",
          }}
        >
          <motion.div
            transition={spring}
            className="block w-full h-max"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </motion.div>
          <motion.div
            className="block"
            initial={{ rotateY: 180 }}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: 0,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <div className="w-full h-max bg-surface" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PerspectiveScrollCard;
