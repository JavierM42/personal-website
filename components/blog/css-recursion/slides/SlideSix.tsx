import ExternalLink from "../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideSix() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        From the article I linked earlier, the formula for the corner hit cycle
        time is <code>lcm(a, b) / speed</code>, where <code>a</code> is the
        screen width minus the logo width and <code>b</code> is the screen
        height minus the logo height.
      </Paragraph>
      <Paragraph>
        <code>lcm(a, b)</code> (lowest common multiple of <code>a</code> and{" "}
        <code>b</code>) can be expressed as <code>a * b / gcd(a, b)</code>,
        where <code>gcd</code> stands for{" "}
        <em className="italic">Greatest Common Divisor</em>.
      </Paragraph>
      <Paragraph>
        That's good, we've distilled our corner hit cycle problem into the GCD
        problem. However, calculating the greatest common divisor of two
        integers is a{" "}
        <ExternalLink href="https://en.wikipedia.org/wiki/Greatest_common_divisor?useskin=vector#Complexity">
          complex problem
        </ExternalLink>
        , usually solved through the Euclidean Algorithm.
      </Paragraph>
    </Slide>
  );
}
