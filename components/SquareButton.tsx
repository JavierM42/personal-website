import { Placement } from "@floating-ui/react";
import classNames from "classnames";
import { FC, HTMLProps } from "react";
import WithTooltip from "./WithTooltip";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  tooltip?: string;
  label: string;
  tooltipPlacement: Placement;
  small?: boolean;
};

export const SquareButton: FC<Props> = ({
  tooltip,
  label,
  tooltipPlacement,
  className,
  small = false,
  ...props
}) => {
  return (
    <WithTooltip
      text={tooltip || label}
      placement={tooltipPlacement as Placement}
      offset={8}
    >
      <button
        {...(props as any)}
        className={classNames(
          "flex items-center justify-center shadow-lg focus:outline-none bg-surface/40 hover:bg-surface/60 active:bg-surface/70 focus-visible:ring ring-primary-container text-primary shadow-primary-container transition-colors",
          small ? "w-6 h-6 rounded-md" : "w-10 h-10 rounded-xl",
          className
        )}
        aria-label={label}
      />
    </WithTooltip>
  );
};
