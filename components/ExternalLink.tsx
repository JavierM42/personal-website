import { FC } from "react";

type Props = {
  href: string;
  children: string;
}

const ExternalLink: FC<Props> = ({ href, children }: Props) => (
  <a
    href={href}
    rel="noopener"
    target="_blank"
    className="underline"
  >
    {/* TODO external link icon thingy */}
    {children}
  </a>
);


export default ExternalLink;
