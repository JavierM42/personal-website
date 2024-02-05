import classNames from "classnames";
import { ReactNode, forwardRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  transparent?: boolean;
  noPadding?: boolean;
};

const Slide = forwardRef<HTMLDivElement, Props>(
  ({ children, className, transparent = false, noPadding = false }, ref) => {
    return (
      <div
        className="flex items-center w-full h-screen max-w-4xl mx-auto snap-center"
        ref={ref}
      >
        <div
          className={classNames(
            "w-full shadow-xl -surface/40 md:aspect-[4/3] rounded-xl",
            !transparent && "bg-surface/40",
            !noPadding && "px-8 py-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Slide;
