import ExternalLink from "../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwo() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        You're still here? A brave one, I see. Let's get going.
      </Paragraph>
      <Paragraph>
        As a fun extra for my DVD screensaver article, I built a corner hit
        calculator that applies{" "}
        <ExternalLink href="https://lostmathlessons.blogspot.com/2016/03/bouncing-dvd-logo.html">
          a mathematical formula
        </ExternalLink>{" "}
        to calculate how often the bouncing logo hits a corner of the screen.
      </Paragraph>
      <Paragraph>
        However, I didn't want to stop at the formula, I wanted a working
        CSS-only corner hit <em className="italic">timer</em>.
      </Paragraph>
      <Paragraph>
        I played with a few ideas, but browser support simply wasn't there yet.
        My solution dropped too many frames due to performance issues.
      </Paragraph>
      <Paragraph>
        That's until Chrome 125 came along with support for the CSS{" "}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/mod">
          mod
        </ExternalLink>{" "}
        function, and now we're here. See the timer live on the next slide!
      </Paragraph>
    </Slide>
  );
}
