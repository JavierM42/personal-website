import { motion, useReducedMotion } from "framer-motion";

export default function Grids() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 w-48 h-48">
      <motion.div
        className="absolute rounded-full bg-primary w-[1.5%]"
        animate={
          shouldReduceMotion
            ? { top: "22%", left: "0%", height: "56%" }
            : {
                top: ["22%", "0%"],
                left: ["0%", "21.5%"],
                height: ["56%", "100%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
      <motion.div
        className="absolute rounded-full bg-primary w-[1.5%]"
        animate={
          shouldReduceMotion
            ? { top: "22%", left: "98.5%", height: "56%" }
            : {
                top: ["22%", "0%"],
                left: ["98.5%", "77%"],
                height: ["56%", "100%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
      <motion.div
        className="absolute rounded-md bg-primary-container"
        animate={
          shouldReduceMotion
            ? { top: "22%", left: "4%", width: "64%", height: "42%" }
            : {
                top: ["22%", "0%"],
                left: ["4%", "25%"],
                width: ["64%", "50%"],
                height: ["42%", "34%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
      <motion.div
        className="absolute rounded-md bg-primary-container"
        animate={
          shouldReduceMotion
            ? { top: "22%", left: "70%", width: "26%", height: "20%" }
            : {
                top: ["22%", "36%"],
                left: ["70%", "25%"],
                width: ["26%", "50%"],
                height: ["20%", "20%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
      <motion.div
        className="absolute rounded-md bg-primary-container"
        animate={
          shouldReduceMotion
            ? { top: "44%", left: "70%", width: "26%", height: "20%" }
            : {
                top: ["44%", "58%"],
                left: ["70%", "25%"],
                width: ["26%", "50%"],
                height: ["20%", "20%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
      <motion.div
        className="absolute rounded-md bg-primary-container"
        animate={
          shouldReduceMotion
            ? { top: "66%", left: "4%", width: "92%", height: "12%" }
            : {
                top: ["66%", "80%"],
                left: ["4%", "25%"],
                width: ["92%", "50%"],
                height: ["12%", "20%"],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                repeatDelay: 2,
                duration: 0.5,
              }
        }
      />
    </div>
  );
}
