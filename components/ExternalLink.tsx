import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ExternalLink: FC<Props> = ({ href, children, className }: Props) => (
  <a
    href={href}
    rel="noopener"
    target="_blank"
    className={classNames(className, "underline")}
  >
    {children}
  </a>
);

export default ExternalLink;
