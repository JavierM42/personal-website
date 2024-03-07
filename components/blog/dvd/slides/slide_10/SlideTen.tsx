import classNames from "classnames";
import CodeBlock from "../../../CodeBlock";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import styles from "./bad.module.css";

export default function SlideTen() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        In most cases, animating a CSS variable is about as useful as animating
        any non-interpolable property such as <code>display</code> or{" "}
        <code>visibility</code>.
      </Paragraph>
      <CodeBlock
        isFirst
        isLast
        code={`.animate-width-variable {
  width: calc(var(--width) * 1%);
  animation: frames 1s linear infinite alternate;
}

@keyframes frames {
  from { --width: 10; }
  to { --width: 100;
}`}
      />
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
