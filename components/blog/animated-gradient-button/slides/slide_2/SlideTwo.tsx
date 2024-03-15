import { CSSProperties } from "react";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideTwo({ onNextSlide }: Props) {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        I recently built this button for the site's homepage.
      </Paragraph>
      <Paragraph>
        Getting this litle interaction right took way longer than I expected.
        Thus, here I am, writing a step by step walkthrough in an attempt to
        find some extra value value in the time I spent.
      </Paragraph>
      <button
        className="px-16 py-4 text-xl font-bold transition-all rounded-2xl shadow-lg text-on-surface gradient-button from-red-container to-green-container hover:scale-[1.05] hover:shadow-xl dark:shadow-black"
        style={
          {
            "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
          } as CSSProperties
        }
        onClick={onNextSlide}
      >
        Next slide
      </button>
    </Slide>
  );
}
