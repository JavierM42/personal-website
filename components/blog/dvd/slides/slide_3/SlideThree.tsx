import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideThree() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        Five minutes later, my mind had already wandered into{" "}
        <span className="italic">
          ”how would I animate the bouncing DVD logo”
        </span>{" "}
        territory.
      </Paragraph>
      <Paragraph>
        My first thought was that Javascript was required to figure out when the
        collisions with the edges of the screen would happen, otherwise I would
        not be able to change the color.
      </Paragraph>
      <Paragraph>
        Thus, I set out to prove myself wrong. In this article I'll go through
        my thought process and how I got it to work with just HTML and CSS.
      </Paragraph>
    </Slide>
  );
}
