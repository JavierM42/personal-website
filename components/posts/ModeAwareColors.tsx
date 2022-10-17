import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ModeAwareColors() {
  const light = useAnimation();
  const dark = useAnimation();
  const darkTop = useAnimation();

  useEffect(() => {
    light.set({ x: "18%", y: "-18%" });
    dark.set({ x: "-18%", y: "18%" });
    darkTop.set({ x: "-18%", y: "18%", opacity: 0 });
  });

  const animate = async () => {
    light.start({
      x: "50%",
      y: "-50%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    darkTop.start({
      x: "-50%",
      y: "50%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    await dark.start({
      x: "-50%",
      y: "50%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    darkTop.set({ opacity: 1 });
    light.start({
      x: "32%",
      y: "-32%",
      transition: {
        duration: 0.9,
      },
    });
    darkTop.start({
      x: "-32%",
      y: "32%",
      transition: {
        duration: 0.9,
      },
    });
    await dark.start({
      x: "-32%",
      y: "32%",
      transition: {
        duration: 0.9,
      },
    });
    light.start({
      x: "0%",
      y: "0%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    darkTop.start({
      x: "0%",
      y: "0%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    await dark.start({
      x: "0%",
      y: "0%",
      transition: {
        duration: 1.2,
        delay: 1,
      },
    });
    darkTop.set({ opacity: 0 });
    light.start({
      x: "18%",
      y: "-18%",
      transition: {
        duration: 0.9,
      },
    });
    darkTop.start({
      x: "-18%",
      y: "18%",
      transition: {
        duration: 0.9,
      },
    });
    await dark.start({
      x: "-18%",
      y: "18%",
      transition: {
        duration: 0.9,
      },
    });
    animate();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="relative z-10 w-48 h-48">
      <svg
        stroke="currentColor"
        viewBox="0 0 100 100"
        className="absolute inset-0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <motion.polygon
          points="51,1 99,1 99,49 51,49"
          className="fill-on-primary-container stroke-primary"
          animate={dark}
        />
        <motion.polygon
          points="1,51 49,51 49,99, 1,99"
          className="fill-primary-container stroke-primary"
          animate={light}
        />
        <motion.polygon
          points="51,1 99,1 99,49 51,49"
          className="fill-on-primary-container stroke-primary"
          animate={darkTop}
        />
      </svg>
    </div>
  );
}
