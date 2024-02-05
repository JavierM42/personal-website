import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideSix() {
  return (
    <Slide className="flex flex-col items-center">
      <CodeBlock isFirst>{`:root {`}</CodeBlock>
      <Paragraph inCode>
        Let's set our desired container and logo sizes, as well as the duration
        of the vertical animation, using CSS variables:
      </Paragraph>
      <CodeBlock>
        {`  --container-w: 320; /* no units! */
  --container-h: 180; /* no units! */
  --logo-w: 40px;
  --logo-h: 20px;
  --y-duration: 2s;`}
      </CodeBlock>
      <Paragraph inCode>
        The logo moves horizontally as fast as it does vertically, we calculate
        the horizontal duration based on our container's aspect ratio:
      </Paragraph>
      <CodeBlock>
        {`  --aspect: calc(var(--container-w) / var(--container-h));
  --x-duration: calc(var(--y-duration) * var(--aspect));
}`}
      </CodeBlock>
      <Paragraph inCode>
        We then animate <code>left</code> and <code>top</code> in a linear
        fashion, forever, alternating back and forth.
      </Paragraph>
      <CodeBlock isLast>
        {`.logo {
  animation:
    x var(—duration-y) linear infinite alternate,
    y var(—duration-y) linear infinite alternate;
}

@keyframes y {
  from { top: 0; }
  to { top: calc(100% - var(--logo-h)); }
}

@keyframes x {
  from { left: 0; }
  to { left: calc(100% - var(--logo-w)); }
}`}
      </CodeBlock>
    </Slide>
  );
}
