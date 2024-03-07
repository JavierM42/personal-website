import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InteractiveSurfaces() {
  const base = useAnimation();
  const state = useAnimation();
  const content = useAnimation();

  const animate = async () => {
    base.start({
      rotateX: "0deg",
      rotateZ: "0deg",
      y: "0%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    state.start({
      rotateX: "0deg",
      rotateZ: "0deg",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    await content.start({
      rotateX: "0deg",
      rotateZ: "0deg",
      y: "0",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    if (ref.current) {
      base.start({
        rotateX: "45deg",
        rotateZ: "45deg",
        y: "17%",
        transition: {
          duration: 1.2,
          delay: 1,
        },
      });
      state.start({
        rotateX: "45deg",
        rotateZ: "45deg",
        transition: {
          duration: 1.2,
          delay: 1,
        },
      });
      await content.start({
        rotateX: "45deg",
        rotateZ: "45deg",
        y: "-17%",
        transition: {
          duration: 1.2,
          delay: 1,
        },
      });
      if (ref.current) {
        animate();
      }
    }
  };

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldReduceMotion) {
      animate();
    }
  }, [shouldReduceMotion]);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative z-10 w-48 h-48" ref={ref}>
      <svg
        stroke="currentColor"
        viewBox="0 0 100 100"
        className="absolute inset-0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <motion.polygon
          points="26,26 26,74 74,74 74,26"
          className="fill-primary-container stroke-primary"
          style={{ rotateX: "45deg", rotateZ: "45deg", y: "17%" }}
          animate={base}
        />
        <motion.polygon
          points="26,26 26,74 74,74 74,26"
          className="fill-on-primary-container/[.16] stroke-primary"
          style={{ rotateX: "45deg", rotateZ: "45deg" }}
          animate={state}
        />
        <motion.circle
          r="14"
          cx="50"
          cy="50"
          className="fill-primary stroke-primary"
          style={{ rotateX: "45deg", rotateZ: "45deg", y: "-17%" }}
          animate={content}
        />
      </svg>
    </div>
  );
}
