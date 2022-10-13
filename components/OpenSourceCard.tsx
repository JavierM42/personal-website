import classNames from "classnames";
import { FC, ReactNode, useState } from "react";

type Props = {
  name: ReactNode;
  content: string;
  expandedContent?: ReactNode;
  cta: ReactNode;
  stripClass: string;
};

const OpenSourceCard: FC<Props> = ({
  name,
  content,
  expandedContent,
  cta,
  stripClass,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="shadow bg-surface">
      <div className={classNames("h-3", stripClass)} />
      <div className="px-4 pt-2 pb-4">
        <div className="mb-2 font-bold text-md">{name}</div>
        {content}
        {isExpanded ? (
          <>
            <button onClick={() => setIsExpanded(false)}>
              <img src="/chevron-right.svg" className="h-6 rotate-90" />
            </button>
            {expandedContent}
          </>
        ) : (
          <div
            className="flex justify-end mt-6"
            onClick={expandedContent ? () => setIsExpanded(true) : undefined}
            // TODO click handler should not be on div
          >
            {cta}
          </div>
        )}
      </div>
    </li>
  );
};

export default OpenSourceCard;
