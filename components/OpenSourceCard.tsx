import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  name: ReactNode;
  content: string;
  cta: ReactNode;
  stripClass: string;
};

const OpenSourceCard: FC<Props> = ({
  name,
  content,
  cta,
  stripClass,
}: Props) => {
  return (
    <li className="flex flex-col shadow bg-surface">
      <div className={classNames("h-3", stripClass)} />
      <div className="flex flex-col flex-1 px-4 pt-2 pb-4">
        <div className="mb-2 font-bold text-md">{name}</div>
        <div className="flex-1">{content}</div>
        <div className="flex justify-end mt-6">{cta}</div>
      </div>
    </li>
  );
};

export default OpenSourceCard;
