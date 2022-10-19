import { FC, ReactNode } from "react";

type Props = {
  name: string;
  content: ReactNode;
  dates: string;
};

const FormalEducationCard: FC<Props> = ({ name, content, dates }: Props) => {
  return (
    <li className="px-4 py-2 shadow dark:shadow-black/40 rounded-xl bg-surface">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="mb-4 text-xs font-medium text-outline">{dates}</div>
      {content}
    </li>
  );
};

export default FormalEducationCard;
