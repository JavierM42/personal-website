import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  name: ReactNode;
  content: string;
  cta: ReactNode;
  borderClass: string;
  className?: string;
  notes?: ReactNode;
};

const OpenSourceCard: FC<Props> = ({
  name,
  content,
  cta,
  borderClass,
  className,
  notes,
}: Props) => {
  return (
    <li className="relative">
      <div
        className={classNames(
          "absolute inset-0 rounded-2xl pointer-events-none",
          borderClass
        )}
        style={{
          mask: `
          linear-gradient(black 0 0) 0 0/100% 100% no-repeat subtract,
          radial-gradient(circle, rgb(0 0 0 / 1) 62%, rgb(0 0 0 / 0) 62%) 0 0/32px 32px no-repeat,
          radial-gradient(circle, rgb(0 0 0 / 1) 62%, rgb(0 0 0 / 0) 62%) 0 100%/32px 32px no-repeat,
          radial-gradient(circle, rgb(0 0 0 / 1) 62%, rgb(0 0 0 / 0) 62%) 100% 0/32px 32px no-repeat,
          radial-gradient(circle, rgb(0 0 0 / 1) 62%, rgb(0 0 0 / 0) 62%) 100% 100%/32px 32px no-repeat,
          linear-gradient(black 0 0) 14px 2px/calc(100% - 28px) calc(100% - 4px) no-repeat,
          linear-gradient(black 0 0) 2px 14px/calc(100% - 4px) calc(100% - 28px) no-repeat
          `,
          maskRepeat: "no-repeat",
        }}
      />
      <div
        className={classNames(
          "flex flex-col shadow-xl rounded-2xl bg-surface/40 overflow-clip border-white h-[212px]",
          className
        )}
      >
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
