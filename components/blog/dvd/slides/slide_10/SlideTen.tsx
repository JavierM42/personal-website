import Slide from "../../Slide";
import Paragraph from "../../Paragraph";
import CodeBlock from "../../CodeBlock";
import styles from "./bad.module.css";
import classNames from "classnames";

export default function SlideTen() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        In most cases, animating a CSS variable is about as useful as animating
        any non-interpolable property such as <code>display</code> or{" "}
        <code>visibility</code>.
      </Paragraph>
      <CodeBlock isFirst isLast>
        {`.animate-width-variable {
  `}
        <span className="text-purple-dark">width</span>
        {": calc(var("}
        <span className="text-primary-container-light">--width</span>{" "}
        <span className="text-purple-dark">* </span>
        <span className="text-primary-container-light">1%</span>
        {");\n  "}
        <span className="text-purple-dark">animation</span>
        {": "}
        <span className="text-primary-container-light">
          frames 1s linear infinite alternate
        </span>
        {";\n}\n\n"}
        {`@keyframes `}
        <span className="text-primary-container-light">frames</span>
        {` {
  from { `}
        <span className="text-purple-dark">--width</span>
        {`: `}
        <span className="text-primary-container-light">10</span>
        {`; }
  to { `}
        <span className="text-purple-dark">--width</span>
        {`: `}
        <span className="text-primary-container-light">100</span>
        {`;\n}`}
      </CodeBlock>

      <Paragraph>This is the result:</Paragraph>

      <div className="w-48 h-4 mb-4 border rounded-sm border-primary">
        <div
          className={classNames(
            styles["do-not-do-this"],
            "h-full bg-primary/80"
          )}
        />
      </div>

      <Paragraph>
        As you can see, it's not a smooth one. It just goes from one value to
        the next with no interpolation.
      </Paragraph>
    </Slide>
  );
}
