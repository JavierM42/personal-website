import classNames from "classnames";
import { FC, ReactNode } from "react";
import WithTooltip from "./WithTooltip";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  tooltip?: string;
};

const ExternalLink: FC<Props> = ({
  href,
  children,
  className,
  tooltip,
}: Props) => (
  <WithTooltip text={tooltip || null}>
    <a
      href={href}
      rel="noopener"
      target="_blank"
      className={classNames(className, "underline")}
    >
      {children}
    </a>
  </WithTooltip>
);

export default ExternalLink;
