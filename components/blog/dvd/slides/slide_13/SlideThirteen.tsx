import { CSSProperties, useState } from "react";
import DvdLogo from "../../DvdLogo";
import Slide from "../../Slide";
import styles from "../../dvd.module.css";
import classNames from "classnames";
import CodeBlock from "../../CodeBlock";
import Paragraph from "../../Paragraph";
import lcm from "compute-lcm";

export default function SlideThirteen() {
  const [containerWidth, setContainerWidth] = useState(480);
  const [containerHeight, setContainerHeight] = useState(360);
  const [logoWidthPercentage, setLogoWidthPercentage] = useState(25);
  const [speed, setSpeed] = useState(90);

  const logoHeight = Math.round(
    (containerWidth * logoWidthPercentage) / 100 / 2
  );
  const logoWidth = logoHeight * 2;

  const cycleTime =
    lcm(containerHeight - logoHeight, containerWidth - logoWidth) / speed;

  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph>Use the sliders to change the animation parameters.</Paragraph>
      <CodeBlock>
        {`  `}
        <span className="text-purple-dark">--container-w</span>
        {": "}
        <span className="text-primary-container-light">{containerWidth}</span>
        {"; "}
        <input
          type="range"
          min="50"
          max="500"
          className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
          value={containerWidth}
          onChange={(event) => setContainerWidth(parseInt(event.target.value))}
        />
        {`\n  `}
        <span className="text-purple-dark">--container-h</span>
        {": "}
        <span className="text-primary-container-light">{containerHeight}</span>
        {"; "}
        <input
          type="range"
          min="50"
          max="500"
          className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
          value={containerHeight}
          onChange={(event) => setContainerHeight(parseInt(event.target.value))}
        />
        {`\n  `}
        <span className="text-purple-dark">--logo-w</span>
        {": "}
        <span className="text-primary-container-light">
          {logoWidthPercentage}%
        </span>
        {"; "}
        <input
          type="range"
          min="1"
          max="99"
          className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
          value={logoWidthPercentage}
          onChange={(event) =>
            setLogoWidthPercentage(parseInt(event.target.value))
          }
        />
        {`\n  `}
        <span className="text-purple-dark">--speed</span>
        {": "}
        <span className="text-primary-container-light">{speed}</span>
        {`;`}
        <input
          type="range"
          min="1"
          max="200"
          className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
          value={speed}
          onChange={(event) => setSpeed(parseInt(event.target.value))}
        />
      </CodeBlock>
      <Paragraph>
        <i>Warning:</i> while you drag, the logo may flash rapidly.
      </Paragraph>
      <Paragraph>Corner hit every {cycleTime.toFixed(2)} seconds.</Paragraph>
      {/* TODO show corner hit countdown with CSS? */}
      <div
        className={classNames(
          styles.variables,
          styles.container,
          "border border-surface-light bg-surface/20"
        )}
        style={
          {
            "--container-width": containerWidth,
            "--container-height": containerHeight,
            "--logo-width": logoWidth,
            "--logo-height": logoHeight,
            "--speed": speed,
          } as CSSProperties
        }
      >
        <DvdLogo className={styles.logo} />
      </div>
    </Slide>
  );
}
