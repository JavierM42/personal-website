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
      <div
        className={classNames(
          "flex items-center h-10",
          isExpanded ? "justify-center" : "justify-between"
        )}
      >
        {!isExpanded && (
          <div className="flex items-center text-lg font-bold pl-11">
            {collapsedTitle}
          </div>
        )}
        <div>{name}</div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="overflow-clip"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              collapsed: { opacity: 0, height: 0 },
              expanded: { opacity: 1, height: "auto" },
            }}
          >
            <div className="text-xs font-medium text-center text-outline">
              {dates}
            </div>
            {content}
            <div className="flex justify-end h-5 gap-2">{techs}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default WorkExperienceCard;
