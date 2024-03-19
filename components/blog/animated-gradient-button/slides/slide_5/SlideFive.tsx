import classNames from "classnames";
import { motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import Switch from "../../../../Switch";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import styles from "../slide_4/gradient.module.css";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideFive({ onNextSlide }: Props) {
  const [showInternals, setShowInternals] = useState(false);

  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        Now, we can focus on the hover effect: when the mouse is over the
        button, the animation should move faster and in the opposite direction.
      </Paragraph>
      <Paragraph>
        On hover, we replace the <code>animation</code> property with a shorter
        duration, add <code>reverse</code>, and we're done... right?
      </Paragraph>
      <Paragraph>
        Well... no. Test it out before toggling the overflow on and try to
        figure out what's happening.
      </Paragraph>
      <div className="flex items-center gap-4">
        <div className="font-bold">Show overflow</div>
        <Switch
          isOn={showInternals}
          tooltip=""
          tooltipPlacement={"top"}
          onClick={() => setShowInternals((value) => !value)}
          noIcon
        />
      </div>
      <button
        className={classNames("my-4 grid w-64 h-16", styles.awfulHover)}
        onClick={onNextSlide}
      >
        <motion.div
          className={classNames(
            styles.dualCycleGradient,
            "row-start-1 col-start-1 from-red-container to-green-container w-[768px] h-24 -mt-4 flex justify-center"
          )}
          style={
            {
              "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
            } as CSSProperties
          }
          animate={{
            opacity: showInternals ? 1 : 0,
          }}
        >
          <div className="w-px h-3 bg-on-surface/50" />
        </motion.div>
        <span className="w-64 h-16 col-start-1 row-start-1 rounded-2xl overflow-clip">
          <div
            className={classNames(
              styles.dualCycleGradient,
              "from-red-container to-green-container w-[768px] h-24 -mt-4"
            )}
            style={
              {
                "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
              } as CSSProperties
            }
          />
        </span>
        <span className="z-10 flex items-center justify-center w-64 h-16 col-start-1 row-start-1 text-xl font-bold text-center shadow-lg rounded-2xl dark:shadow-black">
          Next slide
        </span>
      </button>
      <Paragraph className={showInternals ? "" : "opacity-0"}>
        The animations replace each other. The new one interrupts the one that's
        running, resulting in these awful jumps.
      </Paragraph>
    </Slide>
  );
}
