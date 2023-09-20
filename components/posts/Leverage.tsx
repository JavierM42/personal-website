import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function Leverage() {
  const cube = useAnimation();
  const lever = useAnimation();

  const animateLever = async () => {
    await lever.start({
      rotate: "-10deg",
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    });
    await lever.start({
      rotate: "25deg",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.9,
      },
    });
  };

  const animateCube = async () => {
    cube.start({
      y: ["0%", "-22%", "0%"],
      transition: {
        duration: 4,
        easings: ["easeInOut", "easeIn"],
      },
    });
    await cube.start({
      rotate: "98deg",
      transition: { duration: 4 },
    });
    cube.set({ rotate: "8deg" });
    animate();
  };

  const animate = () => {
    animateLever();
    animateCube();
  };

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldReduceMotion) {
      animate();
    }
  }, [shouldReduceMotion]);

  return (
    <div className="relative z-10 w-48 h-48">
      <svg
        stroke="currentColor"
        viewBox="0 0 100 100"
        className="absolute inset-0 stroke-primary fill-primary-container"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <motion.line
          x1="01"
          x2="70"
          y1="90"
          y2="90"
          style={{ originX: "50%", originY: "90%", rotate: "25deg" }}
          animate={lever}
        />
        <polygon points="45,99 50,90 55,99" fill="none" />
        <motion.polygon
          points="89,97 89,76 68,76 68,97"
          style={{ rotate: "8deg" }}
          animate={cube}
        />
      </svg>
    </div>
  );
}
