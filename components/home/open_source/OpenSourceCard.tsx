import classNames from "classnames";
import { CSSProperties, FC, ReactNode } from "react";

export const OPEN_SOURCE_CARD_WIDTH = 424;

type Props = {
  name: ReactNode;
  content: string;
  cta: ReactNode;
  gradientColorStops: string;
  className?: string;
  notes?: ReactNode;
};

const OpenSourceCard: FC<Props> = ({
  name,
  content,
  cta,
  gradientColorStops,
  className,
  notes,
}: Props) => {
  return (
    <li
      className={classNames(
        "gradient-border bg-surface/40 shadow-xl [&>*]:whitespace-normal snap-center shadow-primary-container/40 first:ml-12 last:mr-12 lg:first:ml-0 lg:last:mr-0 mx-1.5 sm:mx-6 w-[424px] max-w-[calc(100vw-42px)] flex-shrink-0",
        gradientColorStops
      )}
      style={
        {
          "--border-width": "2px",
          "--border-radius": "16px",
          "--border-gradient":
            "linear-gradient(to right, var(--tw-gradient-stops))",
        } as CSSProperties
      }
    >
      <div className={classNames("flex flex-col overflow-clip", className)}>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="mb-4 text-lg font-bold">{name}</h3>
          <div className="flex-1">{content}</div>
          <div className="flex justify-end mt-6">{cta}</div>
        </div>
      </div>
      {notes}
    </li>
  );
};

export default OpenSourceCard;
