import { Placement } from "@floating-ui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, MouseEventHandler } from "react";
import WithTooltip from "./WithTooltip";

export type Props = {
  isOn: boolean;
  onClick?: MouseEventHandler;
  tooltip: string;
  tooltipPlacement: Placement;
};

const Switch: FC<Props> = ({
  isOn,
  onClick,
  tooltip,
  tooltipPlacement,
}: Props) => {
  return (
    <WithTooltip text={tooltip} placement={tooltipPlacement}>
      <div
        className={classNames(
          "rounded-full flex shadow-lg shadow-tertiary-container w-[72px] p-1 cursor-pointer",
          {
            "justify-end interactive-bg-tertiary": isOn,
            "interactive-bg-surface hover:bg-tertiary-container active:bg-tertiary-container-press":
              !isOn,
          }
        )}
        role="switch"
        aria-checked={isOn}
        onClick={onClick}
      >
        <motion.div
          role="presentation"
          layout="position"
          transition={{ duration: 0.3 }}
          className="w-8 h-8 p-1.5 rounded-full shadow-md bg-surface dark:bg-surface-hover text-tertiary"
        >
          <motion.svg
            viewBox="-1 -1 12 12"
            className="stroke-current"
            stroke-width={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{ duration: 0.3 }}
            animate={{ rotate: isOn ? 180 : 0 }}
          >
            {/* open */}
            <path d="M2,3 l-2,2 l2,2" />
            {/* slash */}
            <path d="M6,2 l-2,6" />
            {/* close */}
            <path d="M8,3 l2,2 l-2,2" />
          </motion.svg>
        </motion.div>
      </div>
    </WithTooltip>
  );
};

export default Switch;
