import DvdScreensaverWithAxes from "../../DvdScreensaverWithAxes";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFive() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      {/* TODO animate from previous slide */}
      <Paragraph>Can we divide it further?</Paragraph>
      <Paragraph>
        The bouncing movement can be split off into separate movements across
        the horizontal and vertical axes.
      </Paragraph>
      <DvdScreensaverWithAxes />
      <Paragraph>
        That's broken down enough to animate. Let's write some code!
      </Paragraph>
    </Slide>
  );
}
