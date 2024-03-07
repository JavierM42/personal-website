import X from "../../../public/x.svg";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CSSProperties, FC, useState } from "react";
import ThemePicker from "./ThemePicker";
import { SquareButton } from "../../SquareButton";

const TryDynamicColor: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-end w-full h-12 gap-2">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 -mt-1"
            >
              <ThemePicker />
            </motion.div>
            <SquareButton
              small
              tooltip="Close"
              label="Close"
              tooltipPlacement="right"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-4 h-4" />
            </SquareButton>
          </>
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
