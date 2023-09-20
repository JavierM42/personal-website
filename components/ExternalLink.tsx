import classNames from "classnames";
import { FC, ReactNode } from "react";
import WithTooltip from "./WithTooltip";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

const ExternalLink: FC<Props> = ({
  href,
  children,
  className,
  label,
}: Props) => (
  <WithTooltip text={label || null}>
    <a
      href={href}
      rel="noopener"
      target="_blank"
      className={classNames(className, "underline")}
      aria-label={label}
    >
      {children}
    </a>
  </WithTooltip>
);

export default ExternalLink;
