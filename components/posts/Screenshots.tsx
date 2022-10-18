import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Screenshots() {
  const shutter = useAnimation();
  const picture = useAnimation();
  const top = useAnimation();
  const bottom = useAnimation();
  // const lever = useAnimation();

  // useEffect(() => {
  //   cube.set({ rotate: "8deg" });
  // lever.set({ originX: "50%", originY: "90%", rotate: "25deg" });
  // }, []);

  useEffect(() => {
    top.set({ y: "-24%" });
    bottom.set({ y: "24%" });
  });

  const animateShutter = async () => {
    await shutter.start({
      y: "3%",
      transition: {
        duration: 0.1,
        delay: 1,
      },
    });
    await shutter.start({
      y: "0%",
      transition: {
        duration: 0.3,
      },
    });
  };

  const animatePicture = async () => {
    await picture.start({
      opacity: 0,
      transition: {
        duration: 0,
        delay: 1.2,
      },
    });
    await picture.start({
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.1,
      },
    });
    animate();
  };

  const animateFrame = async () => {
    bottom.start({
      y: "0%",
      transition: {
        duration: 0.1,
        delay: 1.1,
      },
    });
    await top.start({
      y: "0%",
      transition: {
        duration: 0.1,
        delay: 1.1,
      },
    });
    bottom.start({
      y: "24%",
      transition: {
        duration: 0.15,
      },
    });
    await top.start({
      y: "-24%",
      transition: {
        duration: 0.15,
      },
    });
  };

  const animate = () => {
    animateShutter();
    animatePicture();
    animateFrame();
  };

  useEffect(() => {
    animate();
  }, []);

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
          <clipPath id="frame">
            <polygon points="8,26 72,26 72,74, 8,74" />
          </clipPath>
        </defs>
        {/* shutter */}
        <motion.path
          d="M 77 20 l 0 -4 l 15 0 l 0 4"
          fill="none"
          animate={shutter}
        />
        {/* camera */}
        <path d="M 2 80 l 96 0 l 0 -60 l -96 0 z" className="fill-surface" />
        {/* controls */}
        <circle r="8" cx="85" cy="60" fill="none" />
        <circle r="4" cx="85" cy="60" fill="none" />
        {/* picture */}
        <polygon points="8,26 72,26 72,74, 8,74" />
        <motion.g animate={picture}>
          <path
            d="M 8 74 l 0 -14 l 15 -15 l 10 10 l 5 -5 l 24 24"
            className="fill-surface"
          />
          <circle r="7" cx="54" cy="40" className="fill-surface" />
        </motion.g>
        <g clipPath="url(#frame)">
          <motion.polygon
            points="8,26 72,26 72,50, 8,50"
            className="fill-surface"
            animate={top}
          />
          <motion.polygon
            points="8,50 72,50 72,74, 8,74"
            className="fill-surface"
            animate={bottom}
            mask="url(#mask)"
          />
        </g>
        <polygon points="8,26 72,26 72,74, 8,74" fill="none" />
      </svg>
    </div>
  );
}
