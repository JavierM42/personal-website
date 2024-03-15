import { CSSProperties } from "react";
import Slide from "../../../Slide";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideOne({ onNextSlide }: Props) {
  return (
    <Slide
      className="flex flex-col items-center justify-center gap-12"
      id="slide-1"
    >
      <h2 className="text-xl normal-case md:text-4xl text-on-surface">
        CSS Animated Gradient Button
      </h2>
      <button
        className="px-16 py-4 text-xl font-bold transition-all rounded-2xl shadow-lg text-on-surface gradient-button from-red-container to-green-container hover:scale-[1.05] hover:shadow-xl dark:shadow-black"
        style={
          {
            "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
          } as CSSProperties
        }
        onClick={onNextSlide}
      >
        Start reading
      </button>
    </Slide>
  );
}
