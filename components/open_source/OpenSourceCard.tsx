import classNames from "classnames";
import { FC, ReactNode } from "react";

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
        "gradient-border bg-surface/40 shadow-xl h-[212px]",
        gradientColorStops
      )}
      style={
        {
          "--border-width": "2px",
          "--border-radius": "16px",
          "--border-gradient":
            "linear-gradient(to right, var(--tw-gradient-stops))",
        } as any
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
