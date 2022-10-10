import { FC, ReactNode, useState } from "react";
import classNames from "classnames";

type Props = {
  name: ReactNode;
  collapsedTitle: string;
  content: ReactNode;
  collapsedClass: string;
  expandedClass: string;
  dates: string;
  techs: ReactNode[];
};

const WorkExperienceCard: FC<Props> = ({
  name,
  collapsedTitle,
  content,
  collapsedClass,
  expandedClass,
  dates,
  techs,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return isExpanded ? (
    <li className={classNames("px-4 py-4 shadow", expandedClass)}>
      <button onClick={() => setIsExpanded(false)}>
        <img src="/chevron-right.svg" className="h-6 rotate-90" />
      </button>
      <div>{name}</div>
      <div className="text-xs font-medium text-center text-outline">
        {dates}
      </div>
      {content}
      <div className="flex justify-end h-5 gap-2">{techs}</div>
    </li>
  ) : (
    <li
      className={classNames(
        "flex items-center justify-between px-4 py-2 shadow cursor-pointer h-14",
        collapsedClass
      )}
      onClick={() => setIsExpanded(true)}
    >
      <div className="flex items-center text-lg font-bold">
        <img src="/chevron-right.svg" className="h-6" />
        {collapsedTitle}
      </div>
      <div>{name}</div>
    </li>
  );
};

export default WorkExperienceCard;
