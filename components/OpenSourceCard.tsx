import classNames from "classnames";
import { FC, ReactNode, useState } from "react";

type Props = {
  name: ReactNode;
  collapsedContent: string;
  expandedContent: ReactNode;
  techs: ReactNode[];
  cta: string;
  stripClass: string;
};

const OpenSourceCard: FC<Props> = ({
  name,
  collapsedContent,
  expandedContent,
  techs,
  cta,
  stripClass,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return isExpanded ? (
    <li className="px-4 py-4 shadow">
      <button onClick={() => setIsExpanded(false)}>
        <img src="/chevron-right.svg" className="h-6 rotate-90" />
      </button>
      <div className="font-bold text-md">{name}</div>
      {expandedContent}
      <div className="flex justify-end h-5 gap-2">{techs}</div>
    </li>
  ) : (
    <li className="shadow bg-surface" onClick={() => setIsExpanded(true)}>
      <div className={classNames("h-3", stripClass)} />
      <div className="px-4 py-2">
        <div className="font-bold text-md">{name}</div>
        {collapsedContent}
        <div className="flex justify-end">
          <button>{cta}</button>
        </div>
      </div>
    </li>
  );
};

export default OpenSourceCard;