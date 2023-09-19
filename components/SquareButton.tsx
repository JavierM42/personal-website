import { Placement } from "@floating-ui/react";
import WithTooltip from "./WithTooltip";
import { motion } from "framer-motion";
import { FC, HTMLProps } from "react";
import classNames from "classnames";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  tooltip?: string;
  label: string;
  tooltipPlacement: Placement;
};

export const SquareButton: FC<Props> = ({
  tooltip,
  label,
  tooltipPlacement,
  className,
  ...props
}) => {
  return (
    <WithTooltip
      text={tooltip || label}
      placement={tooltipPlacement as Placement}
      offset={8}
    >
      <motion.button
        {...(props as any)}
        className={classNames(
          "flex items-center justify-center w-10 h-10 shadow-lg rounded-xl focus:outline-none hover:bg-primary-container/10 active:bg-primary-container/20 focus-visible:ring ring-primary-container text-primary backdrop-blur-sm shadow-primary-container transition-colors",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        aria-label={label}
      />
    </WithTooltip>
  );
};
