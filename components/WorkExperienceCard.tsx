import { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  name: ReactNode;
  collapsedTitle: string;
  content: ReactNode;
  collapsedClass: string;
  buttonClass: string;
  expandedClass: string;
  dates: string;
  techs: ReactNode[];
  primaryColor: string;
};

const WorkExperienceCard: FC<Props> = ({
  name,
  collapsedTitle,
  content,
  collapsedClass,
  buttonClass,
  expandedClass,
  dates,
  techs,
  primaryColor,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = () => {
    updateTheme({ primary: primaryColor }, "class");
    setIsExpanded(true);
  };

  const handleClose = () => {
    updateTheme({ primary: "#0000ab" }, "class");
    setIsExpanded(false);
  };

  return (
    <li
      className={classNames(
        "relative p-2 shadow",
        isExpanded ? expandedClass : collapsedClass,
        !isExpanded && "cursor-pointer"
      )}
      onClick={isExpanded ? undefined : handleOpen}
    >
      <button
        onClick={handleClose}
        className={classNames(
          "absolute left-2 top-2 rounded-md p-2",
          isExpanded ? buttonClass : "pointer-events-none"
        )}
      >
        <img
          src="/chevron-right.svg"
          className={classNames(
            "h-6 transition-transform",
            isExpanded && "rotate-90"
          )}
        />
      </button>
      <motion.div
        className="grid grid-cols-1 grid-rows-1"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={{
          expanded: { height: 60 },
          collapsed: { height: 40 },
        }}
      >
        <AnimatePresence>
          {!isExpanded && (
            <div className="flex items-center w-full h-full col-start-1 row-start-1 pl-11">
              <motion.div
                className="text-lg font-bold"
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={{
                  collapsed: { opacity: 0, y: "-25%" },
                  expanded: { opacity: 1, y: "0%" },
                }}
              >
                {collapsedTitle}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <div className="relative w-full h-full col-start-1 row-start-1 pointer-events-none">
          <motion.div
            className="absolute px-2 top-1/2"
            animate={isExpanded ? "center" : "right"}
            variants={{
              center: { scale: 1.3, right: "50%", x: "50%", y: "-50%" },
              right: { right: "0%", x: "0%", y: "-50%" },
            }}
          >
            {name}
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="px-12 overflow-clip"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              collapsed: { opacity: 0, height: 0 },
              expanded: { opacity: 1, height: "auto" },
            }}
          >
            <div className="mb-4 text-xs font-medium text-center text-outline">
              {dates}
            </div>
            {content}
            <div className="flex justify-end h-5 gap-2 mt-8">{techs}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default WorkExperienceCard;
