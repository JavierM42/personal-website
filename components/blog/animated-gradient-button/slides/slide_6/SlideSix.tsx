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

export default function SlideSix({ onNextSlide }: Props) {
  const [showInternals, setShowInternals] = useState(false);

  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        We can solve this by leveraging the <code>animation-play-state</code>{" "}
        CSS rule: we can play or pause animations based on hover state. We
        define not one but two animations on the moving element. The second one
        we keep paused, except when hovering.
      </Paragraph>
      <Paragraph>
        Because we have two transforms now, the gradient could move at most
        twice the length of the pattern to the side instead of just one. To
        accomodate this, we make our moving element larger, spanning three
        instances of the pattern.
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
        className={classNames("grid w-64 h-16 my-4", styles.goodHover)}
        onClick={onNextSlide}
      >
        <motion.div
          className={classNames(
            styles.tripleCycleGradient,
            "row-start-1 col-start-1 from-red-container to-green-container w-[1152px] h-24 -mt-4 pointer-events-none flex justify-between relative"
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
          <div
            className={classNames(
              "flex items-end justify-between",
              styles.tripleCycleGradientMarker
            )}
          >
            <div className="w-px h-8 -mb-5 bg-on-surface/50" />
            <div className="-mb-6 text-sm font-normal">
              The base animation moves within this segment
            </div>
            <div className="w-px h-8 -mb-5 bg-on-surface/50" />
          </div>
          <div className="flex flex-col justify-between w-px h-full" />
          <div className="w-px h-3 bg-on-surface/50" />
          <div className="w-px h-3 bg-on-surface/50" />
          <div className="flex flex-col justify-between w-px h-full" />
        </motion.div>
        <span className="w-64 h-16 col-start-1 row-start-1 rounded-2xl overflow-clip">
          <div
            className={classNames(
              styles.tripleCycleGradient,
              "row-start-1 col-start-1 from-red-container to-green-container w-[1152px] h-24 -mt-4 pointer-events-none"
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
    </Slide>
  );
}
