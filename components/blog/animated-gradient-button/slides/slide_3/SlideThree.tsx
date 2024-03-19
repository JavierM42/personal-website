import ExternalLink from "../../../../ExternalLink";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";

type Props = {
  onNextSlide?: () => void;
};

export default function SlideThree({ onNextSlide }: Props) {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        This all started because I needed to come up with an eye-catching button
        to showcase the{" "}
        <ExternalLink href="https://tailwind-material-colors-docs.vercel.app/">
          tailwind-material-colors
        </ExternalLink>{" "}
        library.
      </Paragraph>
      <Paragraph>
        Since the library is color-related, I wanted something colorful. But
        color alone would not grab enough attention, so I figured I should add
        some motion.
      </Paragraph>
      <Paragraph>
        I then imagined a button with a gradient background that slowly cycled
        horizontally. When hovered, the gradient would cycle faster and in the
        opposite direction.
      </Paragraph>
      <Paragraph>
        Starting with this empty button, how do we build the rest? If possible,
        with no JavaScript...
      </Paragraph>
      <button
        className="px-16 py-4 text-xl font-bold shadow-lg rounded-2xl text-on-surface dark:shadow-black"
        onClick={onNextSlide}
      >
        Next slide
      </button>
    </Slide>
  );
}
