import ExternalLink from "../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFive() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>How did I build this timer?</Paragraph>
      <Paragraph>Essentially, there's two problems I had to solve:</Paragraph>
      <ol className="max-w-md space-y-6 list-disc">
        <li>
          Building a countdown: There's an{" "}
          <ExternalLink href="https://css-tricks.com/exploring-property-and-its-animating-powers/#aa-straight-up-numbering">
            excellent article
          </ExternalLink>{" "}
          at CSS tricks that explains how to leverage <code>@property</code>{" "}
          animations and <code>counter-reset</code> to build a timer.
        </li>
        <li>
          Calculating the corner hit cycle time: this is definitely the main
          challenge, as I wanted to do it without any JavaScript. Let's get to
          it.
        </li>
      </ol>
    </Slide>
  );
}
