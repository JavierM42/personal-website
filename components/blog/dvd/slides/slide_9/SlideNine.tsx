import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideNine() {
  return (
    <Slide className="flex flex-col items-center">
      <Paragraph>
        If we only needed to change colors when the logo hits the top or bottom
        walls, we could do this:
      </Paragraph>
      <CodeBlock isFirst />
      <Paragraph inCode>
        First, define keyframes to change color at regular intervals, five of
        them in this case. I'm using the HSL color spectrum (more on that
        later).
      </Paragraph>
      <CodeBlock>
        {`@keyframes colorY {
  from { background: hsl(0deg 100% 50%); }
  20% { background: hsl(72deg 100% 50%); }
  40% { background: hsl(144deg 100% 50%); }
  60% { background: hsl(216deg 100% 50%); }
  80% { background: hsl(288deg 100% 50%); }
}
            `}
      </CodeBlock>
      <Paragraph inCode>
        Then we just need to add a new animation with the appropriate duration
        and the <code>step-start</code> timing function so the values are not
        interpolated.
      </Paragraph>
      <CodeBlock isLast>
        {`.logo {
  animation:
    x var(—duration-y) linear infinite alternate,
    y var(—duration-y) linear infinite alternate;
    colorY calc(var(--y-duration) * 5) step-start infinite;
}
            `}
      </CodeBlock>
      {/* TODO demo */}
      <Paragraph>But... how can we do this for all four walls?</Paragraph>
    </Slide>
  );
}
