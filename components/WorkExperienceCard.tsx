import { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";

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
        isExpanded
          ? ""
          : "flex items-center justify-between cursor-pointer h-14"
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
      {isExpanded ? (
        <>
          <div>{name}</div>
          <div className="text-xs font-medium text-center text-outline">
            {dates}
          </div>
          {content}
          <div className="flex justify-end h-5 gap-2">{techs}</div>
        </>
      ) : (
        <>
          <div className="flex items-center text-lg font-bold pl-11">
            {collapsedTitle}
          </div>
          <div>{name}</div>
        </>
      )}
    </li>
  );
};

export default WorkExperienceCard;
