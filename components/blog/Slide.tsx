import classNames from "classnames";
import { HTMLProps, ReactNode, forwardRef } from "react";

type Props = Pick<HTMLProps<HTMLDivElement>, "id"> & {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  transparent?: boolean;
  noPadding?: boolean;
};

const Slide = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      containerClassName,
      transparent = false,
      noPadding = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={classNames(
          "flex items-center w-full min-h-screen snap-center bg-surface/40 md:bg-transparent pt-16 pb-2",
          containerClassName
        )}
        ref={ref}
        {...props}
      >
        <div
          className={classNames(
            "w-full md:shadow-xl md:aspect-[4/3] md:rounded-xl py-20",
            !transparent && "md:bg-surface/40",
            !noPadding && "px-8 md:py-6",
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
