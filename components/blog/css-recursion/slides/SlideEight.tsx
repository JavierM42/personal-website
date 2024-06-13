import ExternalLink from "../../../ExternalLink";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideEight() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>
        There's no such thing as arbitrary recursion in CSS, since you can't
        even define functions. Given two <em className="italic">arbitrary</em>{" "}
        integers, getting the GCD is not feasible. However, if we look a little
        further, the numbers in our use case are not entirely aribtrary.
      </Paragraph>
      <Paragraph>
        We can take advantage of a{" "}
        <ExternalLink href="https://en.wikipedia.org/wiki/Euclidean_algorithm?useskin=vector#Worst-case">
          mathematical proof
        </ExternalLink>{" "}
        that states that the number of steps for the euclidean algorithm can
        never be more than five times the number of digits in the smaller number{" "}
        <code>b</code>.
      </Paragraph>
      <Paragraph>
        If there's an upper bound to the screen dimensions (and there is), we
        know the maximum number of steps we might need.
      </Paragraph>
      <Paragraph>Why does that help us?</Paragraph>
    </Slide>
  );
}
