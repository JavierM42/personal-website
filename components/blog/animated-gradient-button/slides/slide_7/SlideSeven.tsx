import classNames from "classnames";
import { CSSProperties } from "react";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import styles from "../slide_4/gradient.module.css";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideSeven({ onNextSlide }: Props) {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        The remaining button styles are simple:{" "}
        <code>transition-property: all</code> and a subtle scale transform on
        hover, as well as a larger shadow.
      </Paragraph>
      <button
        className={classNames(
          "grid w-64 h-16 overflow-clip rounded-2xl shadow-lg dark:shadow-black transition-all hover:scale-[1.05] hover:shadow-xl",
          styles.goodHover
        )}
        onClick={onNextSlide}
      >
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
        <span className="z-10 flex items-center justify-center w-64 h-16 col-start-1 row-start-1 text-xl font-bold text-center">
          Next slide
        </span>
      </button>
    </Slide>
  );
}
