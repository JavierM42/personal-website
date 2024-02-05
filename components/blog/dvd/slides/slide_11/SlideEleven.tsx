import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideEleven() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        Thing is... we don't need smooth interpolation, we're using{" "}
        <code>step-start</code> timing anyway.
      </Paragraph>
      <CodeBlock isFirst isLast>
        {`@keyframes `}
        <span className="text-primary-container-light">colorX</span>
        {` {
  from { `}
        <span className="text-purple-dark">--color--x</span>
        {`: hsl(`}
        <span className="text-primary-container-light">0</span>
        {`); }
  20% { `}
        <span className="text-purple-dark">--color-x</span>
        {`: hsl(`}
        <span className="text-primary-container-light">2</span>
        {`); }
  40% { `}
        <span className="text-purple-dark">--color-x</span>
        {`: hsl(`}
        <span className="text-primary-container-light">4</span>
        {`); }
  60% { `}
        <span className="text-purple-dark">--color-x</span>
        {`: hsl(`}
        <span className="text-primary-container-light">1</span>
        {`); }
  80% { `}
        <span className="text-purple-dark">--color-x</span>
        {`: hsl(`}
        <span className="text-primary-container-light">3</span>
        {`); }
}\n\n`}
        {`@keyframes `}
        <span className="text-primary-container-light">colorY</span>
        {` {
  from { `}
        <span className="text-purple-dark">--color-y</span>
        {`: hsl(`}
        <span className="text-primary-container-light">0</span>
        {`); }
  20% { `}
        <span className="text-purple-dark">--color-y</span>
        {`: hsl(`}
        <span className="text-primary-container-light">2</span>
        {`); }
  40% { `}
        <span className="text-purple-dark">--color-y</span>
        {`: hsl(`}
        <span className="text-primary-container-light">4</span>
        {`); }
  60% { `}
        <span className="text-purple-dark">--color-y</span>
        {`: hsl(`}
        <span className="text-primary-container-light">1</span>
        {`); }
  80% { `}
        <span className="text-purple-dark">--color-y</span>
        {`: hsl(`}
        <span className="text-primary-container-light">3</span>
        {`); }
}\n\n`}
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
        {`,\n    `}
        <span className="text-primary-container-light">colorY</span>
        {" calc(var("}
        <span className="text-primary-container-light">--duration-y</span>
        {") "}
        <span className="text-purple-dark">* </span>
        <span className="text-primary-container-light">5</span>
        {") "}
        <span className="text-primary-container-light">
          step-start infinite
        </span>
        {`;\n  `}
        <span className="text-purple-dark">color</span>
        {`:\n    hsl(calc(\n      `}
        <span className="text-primary-container-light">360</span>
        <span className="text-purple-dark"> / </span>
        <span className="text-primary-container-light">25</span>
        <span className="text-purple-dark"> * </span>
        {"(var("}
        <span className="text-primary-container-light">--color-y</span>
        {")"}
        <span className="text-purple-dark"> * </span>
        <span className="text-primary-container-light">5</span>
        <span className="text-purple-dark"> + </span>
        {"var("}
        <span className="text-primary-container-light">--color-x</span>
        {"))\n    ) "}
        <span className="text-primary-container-light">100% 50%</span>
        {`);\n}`}
      </CodeBlock>
      <Paragraph>
        There's a total of <code>5x5=25</code> possible colors, equispaced hue
        values ranging from <code>0deg</code> when <code>--color-x</code> and{" "}
        <code>--color-y</code> are both <code>0</code>, to <code>345.6deg</code>{" "}
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
