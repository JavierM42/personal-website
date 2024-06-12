import { Placement } from "@floating-ui/react";
import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import { FC, MouseEventHandler } from "react";
import WithTooltip from "./WithTooltip";

export type Props = {
  isOn: boolean;
  onClick?: MouseEventHandler;
  tooltip: string;
  tooltipPlacement: Placement;
  noIcon?: boolean;
};

const Switch: FC<Props> = ({
  isOn,
  onClick,
  tooltip,
  tooltipPlacement,
  noIcon,
}: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <WithTooltip text={tooltip} placement={tooltipPlacement}>
      <div
        className={classNames(
          "rounded-full flex shadow-lg shadow-tertiary-container w-[72px] p-1 cursor-pointer",
          {
            "justify-end interactive-bg-tertiary": isOn,
            "interactive-bg-surface bg-opacity-70 hover:bg-tertiary-container/50 active:bg-tertiary-container/60 dark:interactive-bg-tertiary-container":
              !isOn,
          }
        )}
        role="switch"
        aria-checked={isOn}
        onClick={onClick}
        aria-label="Toggle dark mode"
      >
        <motion.div
          role="presentation"
          layout="position"
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="w-8 h-8 p-1.5 rounded-full shadow-md bg-surface text-tertiary"
        >
          {!noIcon && (
            <motion.svg
              viewBox="-1 -1 12 12"
              className="stroke-current"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              transition={{ duration: 0.3 }}
              animate={
                shouldReduceMotion ? undefined : { rotate: isOn ? 180 : 0 }
              }
            >
              {/* < */}
              <path d="M2,3 l-2,2 l2,2" />
              {/* / */}
              <path d="M6,2 l-2,6" />
              {/* > */}
              <path d="M8,3 l2,2 l-2,2" />
            </motion.svg>
          )}
        </motion.div>
      </div>
    </WithTooltip>
  );
};

export default Switch;
