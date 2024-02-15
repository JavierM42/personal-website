import { CSSProperties } from "react";
import DvdLogo from "./DvdLogo";
import styles from "./dvd.module.css";
import classNames from "classnames";

const DvdScreensaver = ({
  width = 320,
  height = 240,
  fluidSize = false,
  colors = true,
  speed,
  redefineVariables,
}: {
  width?: number;
  height?: number;
  fluidSize?: boolean;
  colors?: boolean;
  speed?: number;
  redefineVariables?: boolean;
}) => {
  return (
    <div
      className={classNames(
        redefineVariables && styles.variables,
        styles.container
      )}
      style={
        {
          "--container-width": width,
          "--container-height": height,
          "--logo-width": width / 5,
          "--logo-height": width / 10,
          width: fluidSize ? "100%" : width,
          height: fluidSize ? "100%" : height,
          ...(speed
            ? {
                "--speed": speed,
              }
            : {}),
        } as CSSProperties
      }
    >
      <DvdLogo className={colors ? styles.logo : styles.logoMovement} />
    </div>
  );
};

export default DvdScreensaver;
