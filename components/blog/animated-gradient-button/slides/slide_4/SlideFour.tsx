import classNames from "classnames";
import { motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import Switch from "../../../../Switch";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import styles from "./gradient.module.css";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideFour({ onNextSlide }: Props) {
  const [showInternals, setShowInternals] = useState(false);

  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        Let's start with the basic movement. We can't really do a gradient that
        indefinitely moves to the left, so we're going to fake it.
      </Paragraph>
      <Paragraph>
        We can define a repeating gradient as easily as we do a regular one with{" "}
        <code>repeating-linear-gradient</code>. I chose a pattern that starts
        and ends at the same <span className="bg-red-container">color</span>,
        with <span className="bg-purple-container">two</span>{" "}
        <span className="bg-green-container">stops</span> in between. This way,
        it will repeat smoothly.
      </Paragraph>
      <Paragraph>
        We animate an absolutely positioned element that's twice the desired
        width of the gradient (so the pattern repeats once). Since this pattern
        is wider than the button, two instances of it are enough for them to
        slide left until the second one reaches the starting position. Then, the
        animation starts over.
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
      <button className="grid w-64 h-16 my-4" onClick={onNextSlide}>
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
        <div className="w-64 h-16 col-start-1 row-start-1 rounded-2xl overflow-clip">
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
        </div>
        <span className="z-10 flex items-center justify-center w-64 h-16 col-start-1 row-start-1 text-xl font-bold text-center shadow-lg rounded-2xl dark:shadow-black">
          Next slide
        </span>
      </button>
    </Slide>
  );
}
