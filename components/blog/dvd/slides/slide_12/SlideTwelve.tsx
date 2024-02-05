import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideTwelve() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        Thing is... we don't need smooth interpolation, we're using{" "}
        <code>step-start</code> timing!
      </Paragraph>
      <CodeBlock isFirst isLast>
        {`
@keyframes colorX {
  from { --color-x: 0; }
  20% { --color-x: 2; }
  40% { --color-x: 4; }
  60% { --color-x: 1; }
  80% { --color-x: 3; }
}

@keyframes colorY {
  from { --color-y: 0; }
  20% { --color-y: 2; }
  40% { --color-y: 4; }
  60% { --color-y: 1; }
  80% { --color-y: 3; }
}

.logo {
  animation:
    /* Movement animations omitted */
    colorX calc(var(--x-duration) * 5) step-start infinite,
    colorY calc(var(--y-duration) * 5) step-start infinite;
  color: hsl(calc(
    360deg / 25 * (var(--color-y) * 5 + var(--color-x))
  ) 100% 50%);
}`}
      </CodeBlock>
      <Paragraph>
        There's a total of <code>5x5=25</code> possible colors, equispaced hue
        values ranging from <code>0deg</code> when <code>--color-x</code> and{" "}
        <code>--color-y</code> are both <code>0</code> to <code>345.6deg</code>{" "}
        when they're both <code>4</code>.
      </Paragraph>
      <Paragraph>
        I could've used <code>0-1-2-3-4</code> for the variables, but if we
        increment in a star pattern (<code>0-2-4-1-3</code>), each color jump is
        a bit more noticeable.
      </Paragraph>
    </Slide>
  );
}
