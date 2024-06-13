import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideEleven() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>That's nice and all, but it still doesn't work.</Paragraph>
      <Paragraph>
        The number of steps, and thus the amount of nested elements, has a known
        ceiling but isn't constant. Our <code>b ≠ 0</code> check is still
        missing, the algorithm runs <code>mod</code> over and over again with no
        regard for the condition.
      </Paragraph>
      <Paragraph>
        This casues the result to be wrong because if we don't stop at the right
        moment, on the next step <code>a mod 0</code> equals <code>0</code> and
        the result will be zero on all steps after that, too.
      </Paragraph>
      <Paragraph>
        How do we stop the recursion without access to an <code>if</code>{" "}
        statement? There are no conditional structures in CSS, right?
      </Paragraph>
    </Slide>
  );
}
