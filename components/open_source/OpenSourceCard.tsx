import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  name: ReactNode;
  content: string;
  cta: ReactNode;
  stripClass: string;
  className?: string;
};

const OpenSourceCard: FC<Props> = ({
  name,
  content,
  cta,
  stripClass,
  className,
}: Props) => {
  return (
    <li
      className={classNames(
        "flex flex-col shadow-xl rounded-2xl bg-surface overflow-clip",
        className
      )}
    >
      <div className={classNames("h-3", stripClass)} />
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-4 text-lg font-bold">{name}</h3>
        <div className="flex-1">{content}</div>
        <div className="flex justify-end mt-6">{cta}</div>
      </div>
    </li>
  );
};

export default OpenSourceCard;
