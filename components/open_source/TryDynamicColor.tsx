import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CSSProperties, FC, useState } from "react";
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
          <motion.button
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-6 py-3 text-sm font-bold transition-all rounded-lg shadow text-on-surface gradient-button from-red-container to-green-container hover:scale-[1.02] hover:shadow-md dark:shadow-black"
            onClick={() => setIsExpanded(true)}
            style={
              {
                "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
              } as CSSProperties
            }
          >
            Try it, live on this page
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TryDynamicColor;
