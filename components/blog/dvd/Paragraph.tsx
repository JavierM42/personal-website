import classNames from "classnames";
import { ReactNode } from "react";

const Paragraph = ({
  children,
  inCode,
}: {
  children: ReactNode;
  inCode?: boolean;
}) => {
  return (
    <p className={classNames("w-full max-w-lg text-justify", inCode && "my-1")}>
      {children}
    </p>
  );
};

export default Paragraph;
