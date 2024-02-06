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
        className={classNames(
          "flex items-center w-full min-h-screen snap-center bg-surface/40 md:bg-transparent"
        )}
        ref={ref}
      >
        <div
          className={classNames(
            "w-full md:shadow-xl md:aspect-[4/3] md:rounded-xl py-20",
            !transparent && "md:bg-surface/40",
            !noPadding && "px-8 md:py-4",
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
