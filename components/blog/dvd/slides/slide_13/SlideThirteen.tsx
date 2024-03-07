import classNames from "classnames";
import lcm from "compute-lcm";
import { CSSProperties, useState } from "react";
import CodeBlock from "../../../CodeBlock";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import DvdLogo from "../../DvdLogo";
import styles from "../../dvd.module.css";

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
    lcm(containerHeight - logoHeight, containerWidth - logoWidth)! / speed;

  return (
    <Slide className="flex flex-col items-center justify-center">
      <Paragraph className="md:hidden">
        Sorry, the interactive experience is not available on smaller screens.
      </Paragraph>
      <div className="hidden md:contents">
        <Paragraph>
          Use the sliders to change the animation parameters.{" "}
        </Paragraph>
        <CodeBlock>
          {"  "}--container-w:{" "}
          <span className="hljs-number">{containerWidth}</span>
          {"; "}
          <input
            type="range"
            min="50"
            max="500"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={containerWidth}
            onChange={(event) =>
              setContainerWidth(parseInt(event.target.value))
            }
          />
          {`\n  `}--container-h:{" "}
          <span className="hljs-number">{containerHeight}</span>
          {"; "}
          <input
            type="range"
            min="50"
            max="500"
            className="float-right h-1 mt-1.5 rounded-full appearance-none w-44 focus:outline-none slider"
            value={containerHeight}
            onChange={(event) =>
              setContainerHeight(parseInt(event.target.value))
            }
          />
          {`\n  `}--logo-w:{" "}
          <span className="hljs-number">{logoWidthPercentage}%</span>
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
          {`\n  `}--speed: <span className="hljs-number">{speed}</span>
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
      </div>
    </Slide>
  );
}
