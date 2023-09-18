import { FC } from "react";

type Props = {
  id?: string;
  heading: string;
};

export const SectionHeader: FC<Props> = ({ id, heading }) => {
  return (
    <h2 id={id} className="relative mb-8 scroll-mt-24 text-on-surface">
      {heading}
      <div
        role="presentation"
        className="absolute top-8 -left-6 lg:-left-20 text-[90px] lg:text-[180px] select-none -z-1 text-primary/10 whitespace-nowrap blur-sm"
      >
        {heading}
      </div>
    </h2>
  );
};
