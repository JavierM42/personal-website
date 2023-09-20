import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FC, useState } from "react";
import ThemePicker from "./ThemePicker";

const TryDynamicColor: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-end w-full h-12">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? "0%" : "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            className="w-full"
          >
            <ThemePicker />
          </motion.div>
        ) : (
          // TODO transition colors
          <motion.button
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-6 py-3 text-sm font-bold rounded-lg shadow text-on-surface bg-gradient-to-r from-red-container to-green-container via-purple-container hover:from-red-container-hover hover:to-green-container-hover hover:via-purple-container-hover"
            onClick={() => setIsExpanded(true)}
          >
            Try it, live on this page
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TryDynamicColor;
