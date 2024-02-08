import classNames from "classnames";
import styles from "./dvd.module.css";
import { CSSProperties } from "react";

const ColorAnimation = ({
  width = 320,
  height = 240,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div className="flex items-center justify-center" style={{ width, height }}>
      <div className="h-full border-2 rounded-full w-fit border-surface-light">
        <div
          className={classNames(
            "gradient-border h-full aspect-square flex items-center justify-center relative shadow-xl"
          )}
          style={
            {
              "--border-width": "10%",
              "--border-radius": "50%",
              "--border-gradient":
                "conic-gradient(in hsl longer hue, hsl(0deg 100% 50%), hsl(360deg 100% 50))",
            } as CSSProperties
          }
        >
          <div className="flex items-center justify-center w-4/5 border-2 rounded-full h-4/5 border-surface-light">
            <div
              className={classNames(
                "rounded-full w-2/3 h-2/3 border-2 border-surface-light shadow-xl",
                styles.logoColor
              )}
              style={{ transitionDuration: "0s" }}
            />
            <div
              className={classNames(
                "absolute top-[5%] w-1 origin-bottom left-[calc(50%-2px)] h-[45%] bg-surface rounded shadow",
                styles.colorNeedle
              )}
            />
          </div>
        </div>
      </div>
    </div>
    // lines that see the future would be cool
  );
};

export default ColorAnimation;
