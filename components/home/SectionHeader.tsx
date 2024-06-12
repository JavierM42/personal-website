import { FC, ReactNode } from "react";

type Props = {
  id?: string;
  heading: string;
  count?: number;
  rightContent?: ReactNode;
};

export const SectionHeader: FC<Props> = ({
  id,
  heading,
  count,
  rightContent,
}) => {
  return (
    <h2
      id={id}
      className="relative pl-12 mb-8 space-x-4 scroll-mt-24 text-on-surface md:pl-0"
    >
      <span>{heading}</span>
      {count && <span className="text-sm text-on-surface/40"> ({count})</span>}
      {rightContent}
      <div
        role="presentation"
        className="absolute top-8 -left-6 lg:-left-20 text-[90px] lg:text-[180px] select-none -z-1 text-primary/10 whitespace-nowrap blur-sm pointer-events-none"
      >
        {heading}
      </div>
    </h2>
  );
};
