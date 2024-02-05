import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideSeven() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        We've sorted out the bouncing. Now, on to the colors.
      </Paragraph>
      <Paragraph>
        Well... colors are a bit harder. All four walls trigger a color change.
        It's not so easy to divide the color change into <i>x</i> and <i>y</i>{" "}
        if the color is supposed to change every time there's a collision with
        any of the four walls. We can't really do two independent animations as
        we did for movement, because there's a single <code>color</code>{" "}
        property.
      </Paragraph>
      {/* TODO animation words move into spoiler alert: we can */}
    </Slide>
  );
}
