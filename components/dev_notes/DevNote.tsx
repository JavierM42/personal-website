import { FC, ReactNode, useState } from "react";
import { useDevNotesState } from "./useDevNotesState";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className: string;
};

export const DevNote: FC<Props> = ({ children, className }) => {
  const showDevNotes = useDevNotesState();
  const [isExpanded, setIsExpanded] = useState(false);

  return showDevNotes ? (
    <div
      className={classNames("group text-sm z-30 origin-top-right", className)}
    >
      <div className="relative w-full h-full">
        <button
          className={classNames(
            "absolute w-7 h-7 p-1 transition-all rounded-full shadow-lg shadow-tertiary-container interactive-bg-tertiary -top-2 -right-2 z-30",
            isExpanded && "opacity-0 group-hover:opacity-100"
          )}
          onClick={() => setIsExpanded((value) => !value)}
        >
          <motion.svg
            viewBox="-1 -1 12 12"
            className="stroke-current"
            stroke-width={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isExpanded ? "minus" : "code"}
          >
            {/* open */}
            <motion.path
              d="M2,3 l-2,2 l2,2"
              variants={{
                minus: { opacity: 0, x: 2 },
                code: { opacity: 1, x: 0 },
              }}
            />
            {/* slash */}
            <motion.path
              d="M6,2 l-2,6"
              variants={{
                minus: { rotate: 71.56505 },
                code: { rotate: 0 },
              }}
            />
            {/* close */}
            <motion.path
              d="M8,3 l2,2 l-2,2"
              variants={{
                minus: { opacity: 0, x: -2 },
                code: { opacity: 1, x: 0 },
              }}
            />
          </motion.svg>
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="w-full h-full p-4 origin-top-right rounded shadow-xl bg-tertiary-container"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  ) : null;
};
