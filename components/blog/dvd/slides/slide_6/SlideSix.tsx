import CodeBlock from "../../../CodeBlock";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";

export default function SlideSix() {
  return (
    <Slide className="flex flex-col items-center">
      <CodeBlock
        isFirst
        code={`
:root {
}
`}
        end={(value) => value.indexOf("}")}
      />
      <Paragraph inCode>
        Let's set our desired container and logo sizes, as well as the animation
        speed, using CSS variables:
      </Paragraph>
      <CodeBlock
        code={`
:root {
  --container-w: 320; /* no units so we can do division */
  --container-h: 180;
  --logo-w: 40;
  --logo-h: 20;
  --speed: 90; /* pixels per second */
}`}
        start={(value) => value.indexOf("{") + 2}
        end={(value) => value.indexOf("}")}
      />
      <Paragraph inCode>
        We can easily calculate how long it takes for the logo to move through
        the screen, both horizontally and vertically.
      </Paragraph>
      <CodeBlock
        code={`
:root {
  --duration-x: calc(
    (var(--container-w) - var(--logo-w)) / var(--speed) * 1s
  );
  --duration-y: calc(
    (var(--container-h) - var(--logo-h)) / var(--speed) * 1s
  );
}`}
        start={(value) => value.indexOf("{") + 2}
      />
      <Paragraph inCode>
        Assume the container element has <code>relative</code> positioning and
        the appropriate size. We then set the properties for the logo and
        animate <code>left</code> and <code>top</code> in a linear fashion,
        forever, alternating back and forth.
      </Paragraph>
      <CodeBlock
        isLast
        code={`.logo {
  position: absolute;
  width: calc(var(--logo-w) * 1px);
  height: calc(var(--logo-h) * 1px);
  animation:
    x var(--duration-x) linear infinite alternate,
    y var(--duration-y) linear infinite alternate;
}

@keyframes x {
  from { left: 0; }
  to { left: calc(100% - var(--logo-w)); }
}

@keyframes y {
  from { top: 0; }
  to { top: calc(100% - var(--logo-h)); }
}`}
      />
    </Slide>
  );
}
