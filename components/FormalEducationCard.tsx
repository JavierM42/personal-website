import { FC, ReactNode } from "react";

type Props = {
  name: string;
  content: ReactNode;
  dates: string;
  universityLogo: ReactNode;
};

const FormalEducationCard: FC<Props> = ({
  name,
  content,
  universityLogo,
  dates,
}: Props) => {
  return (
    <li className="px-4 py-2 shadow bg-surface">
      <div className="font-bold text-md">{name}</div>
      <div className="mb-4 text-xs font-medium text-outline">{dates}</div>
      {content}
    </li>
  );
};

export default FormalEducationCard;
