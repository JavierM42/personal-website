import Slide from "../../Slide";
import Paragraph from "../../Paragraph";
import CodeBlock from "../../CodeBlock";
import styles from "./bad.module.css";
import classNames from "classnames";

export default function SlideEleven() {
  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>
        In most cases, animating a CSS variable is about as useful as animating
        any non-interpolable property such as <code>display</code> or{" "}
        <code>visibility</code>.
      </Paragraph>
      <CodeBlock isFirst isLast>
        {`
.animate-width-variable {
  width: calc(var(--width) * 1%);
  animation: frames 1s linear infinite alternate;
}

@keyframes frames {
  from { --width: 10; }
  to { --width: 100; }
}
            `}
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
        As you can see, it's not a smooth one. It just jumps from one value to
        the next.
      </Paragraph>
    </Slide>
  );
}
