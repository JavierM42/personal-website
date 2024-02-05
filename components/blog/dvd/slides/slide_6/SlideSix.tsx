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
        {`  `}
        <span className="text-purple-dark">--container-w</span>
        {": "}
        <span className="text-primary-container-light">320</span>
        {"; "}
        <span className="text-outline">
          /* no units so we can do division */
        </span>
        {`\n  `}
        <span className="text-purple-dark">--container-h</span>
        {": "}
        <span className="text-primary-container-light">180</span>
        {"; "}
        <span className="text-outline">
          /* no units so we can do division */
        </span>
        {`\n  `}
        <span className="text-purple-dark">--logo-w</span>
        {": "}
        <span className="text-primary-container-light">40px</span>
        {`;\n  `}
        <span className="text-purple-dark">--logo-h</span>
        {": "}
        <span className="text-primary-container-light">20px</span>
        {`;\n  `}
        <span className="text-purple-dark">--y-duration</span>
        {": "}
        <span className="text-primary-container-light">2s</span>
        {`;`}
      </CodeBlock>
      <Paragraph inCode>
        The logo moves horizontally as fast as it does vertically, we calculate
        the horizontal duration based on our container's aspect ratio:
      </Paragraph>
      <CodeBlock>
        {`  `}
        <span className="text-purple-dark">--aspect</span>
        {": calc(var("}
        <span className="text-primary-container-light">--container-w</span>
        {") "}
        <span className="text-purple-dark">/</span>
        {" var("}
        <span className="text-primary-container-light">--container-h</span>
        {`));\n  `}
        <span className="text-purple-dark">--x-duration</span>
        {": calc(var("}
        <span className="text-primary-container-light">--y-duration</span>
        {") "}
        <span className="text-purple-dark">*</span>
        {" var("}
        <span className="text-primary-container-light">--aspect</span>
        {`));
}`}
      </CodeBlock>
      <Paragraph inCode>
        We then animate <code>left</code> and <code>top</code> in a linear
        fashion, forever, alternating back and forth.
      </Paragraph>
      <CodeBlock isLast>
        {`.logo {
  `}
        <span className="text-purple-dark">animation</span>
        {":\n    "}
        <span className="text-primary-container-light">x</span>
        {" var("}
        <span className="text-primary-container-light">--duration-x</span>
        {") "}
        <span className="text-primary-container-light">
          linear infinite alternate
        </span>
        {`,\n    `}
        <span className="text-primary-container-light">y</span>
        {" var("}
        <span className="text-primary-container-light">--duration-y</span>
        {") "}
        <span className="text-primary-container-light">
          linear infinite alternate
        </span>
        {`;\n}

@keyframes `}
        <span className="text-primary-container-light">y</span>
        {` {
  from { `}
        <span className="text-purple-dark">top</span>
        {`: `}
        <span className="text-primary-container-light">0</span>
        {`; }
  to { `}
        <span className="text-purple-dark">top</span>
        {`: calc(`}
        <span className="text-primary-container-light">100%</span>
        <span className="text-purple-dark"> - </span>
        {`var(`}
        <span className="text-primary-container-light">--logo-h</span>
        {`)); }
}

@keyframes `}
        <span className="text-primary-container-light">x</span>
        {` {
  from { `}
        <span className="text-purple-dark">left</span>
        {`: `}
        <span className="text-primary-container-light">0</span>
        {`; }
  to { `}
        <span className="text-purple-dark">left</span>
        {`: calc(`}
        <span className="text-primary-container-light">100%</span>
        <span className="text-purple-dark"> - </span>
        {`var(`}
        <span className="text-primary-container-light">--logo-w</span>
        {`)); }
}`}
      </CodeBlock>
    </Slide>
  );
}
