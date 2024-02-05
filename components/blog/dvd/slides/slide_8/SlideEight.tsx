import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideEight() {
  return (
    <Slide className="flex flex-col items-center">
      <Paragraph>
        If we only needed to change colors when the logo hits the left or right
        walls, we could use this idea:
      </Paragraph>
      <CodeBlock isFirst />
      <Paragraph inCode>
        First, define keyframes to change color at regular intervals, five of
        them in this case. I'm using equispaced hue values on the HSL color
        spectrum.
      </Paragraph>
      <CodeBlock>
        {`@keyframes `}
        <span className="text-primary-container-light">colorX</span>
        {` {
  from { `}
        <span className="text-purple-dark">background</span>
        {`: hsl(`}
        <span className="text-primary-container-light">0deg 100% 50%</span>
        {`); }
  20% { `}
        <span className="text-purple-dark">background</span>
        {`: hsl(`}
        <span className="text-primary-container-light">72deg 100% 50%</span>
        {`); }
  40% { `}
        <span className="text-purple-dark">background</span>
        {`: hsl(`}
        <span className="text-primary-container-light">144deg 100% 50%</span>
        {`); }
  60% { `}
        <span className="text-purple-dark">background</span>
        {`: hsl(`}
        <span className="text-primary-container-light">216deg 100% 50%</span>
        {`); }
  80% { `}
        <span className="text-purple-dark">background</span>
        {`: hsl(`}
        <span className="text-primary-container-light">288deg 100% 50%</span>
        {`); }
}`}
      </CodeBlock>
      <Paragraph inCode>
        Then we just need to add a new animation with the appropriate duration
        and the <code>step-start</code> timing function so the value "jumps"
        once every <code>--duration-x</code>.
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
        {`,\n    `}
        <span className="text-primary-container-light">colorX</span>
        {" calc(var("}
        <span className="text-primary-container-light">--duration-x</span>
        {") "}
        <span className="text-purple-dark">* </span>
        <span className="text-primary-container-light">5</span>
        {") "}
        <span className="text-primary-container-light">
          step-start infinite
        </span>
        {`;\n}`}
      </CodeBlock>
      <Paragraph>But... how can we do this for all four walls?</Paragraph>
    </Slide>
  );
}
