import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideSeven() {
  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <Paragraph>Can we implement the Euclidean Algorithm with CSS?</Paragraph>
      <Paragraph>
        The algorithm itself is quite simple, and there's both iterative and
        recursive implementations of it.
      </Paragraph>
      <Paragraph>
        Pseudocode for the recursive version looks like this:
      </Paragraph>
      <CodeBlock isFirst isLast>
        {`a ≥ b
function gcd(a, b)
  if b ≠ 0
    return gcd(b, a mod b)
  else
    return a`}
      </CodeBlock>
    </Slide>
  );
}
