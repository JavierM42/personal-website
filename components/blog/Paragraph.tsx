import classNames from "classnames";
import { ReactNode } from "react";

const Paragraph = ({
  children,
  inCode,
  className,
}: {
  children: ReactNode;
  inCode?: boolean;
  className?: string;
}) => {
  return (
    <p
      className={classNames(
        "w-full max-w-lg text-justify",
        inCode && "my-1",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
