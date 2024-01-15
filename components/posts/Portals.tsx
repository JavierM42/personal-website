import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function Portals() {
  const cube1 = useAnimation();
  const cube2 = useAnimation();

  useEffect(() => {
    cube2.set({ x: "-50%" });
  }, []);

  const animateCube1 = async () => {
    await cube1.start({
      x: "50%",
      transition: {
        duration: 2,
        delay: 1,
      },
    });
    await cube1.start({
      x: "0%",
      transition: {
        duration: 2,
        delay: 1,
      },
    });
  };

  const animateCube2 = async () => {
    await cube2.start({
      x: "0%",
      transition: {
        duration: 2,
        delay: 1,
      },
    });
    await cube2.start({
      x: "-50%",
      transition: {
        duration: 2,
        delay: 1,
      },
    });
    animate();
  };

  const animate = () => {
    animateCube1();
    animateCube2();
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
        <defs>
          <clipPath id="top">
            <path
              d="M 90 5 a 4 20 0 0 1 0 40 l -50 0 l 0 -40 z"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="bottom">
            <path
              d="M 10 55 a 4 20 0 0 0 0 40 l 50 0 l 0 -40 z"
              strokeWidth="0"
            />
          </clipPath>
        </defs>
        <motion.ellipse cx="90" cy="25" rx="4" ry="20" fill="none" />
        <g clipPath="url(#top)">
          <motion.polygon
            points="50,10 80,10 80,40 50,40"
            className="fill-primary-container"
            animate={cube1}
          />
        </g>
        <path d="M 90 5 a 4 20 0 0 1 0 40" fill="none" />

        <motion.ellipse cx="10" cy="75" rx="4" ry="20" fill="none" />
        <g clipPath="url(#bottom)">
          <motion.polygon
            points="20,60 50,60 50,90 20,90"
            className="fill-primary-container"
            animate={cube2}
          />
        </g>
        <path d="M 10 55 a 4 20 0 0 0 0 40" fill="none" />
      </svg>
    </div>
  );
}
