import { FC } from "react";

type Props = {
  id?: string;
  heading: string;
  count?: number;
};

export const SectionHeader: FC<Props> = ({ id, heading, count }) => {
  return (
    <h2
      id={id}
      className="relative pl-12 mb-8 scroll-mt-24 text-on-surface md:pl-0"
    >
      {heading}
      {count && <span className="text-sm text-on-surface/40"> ({count})</span>}
      <div
        role="presentation"
        className="absolute top-8 -left-6 lg:-left-20 text-[90px] lg:text-[180px] select-none -z-1 text-primary/10 whitespace-nowrap blur-sm"
      >
        {heading}
      </div>
    </h2>
  );
};
