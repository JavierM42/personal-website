import { CSSProperties } from "react";
import styles from "./dvd.module.css";
import classNames from "classnames";
import DvdLogo from "./DvdLogo";

const DvdScreensaver = ({
  width = 320,
  height = 240,
  fluidSize = false,
  colors = true,
}: {
  width?: number;
  height?: number;
  fluidSize?: boolean;
  colors?: boolean;
}) => {
  return (
    <div
      className={styles.container}
      style={
        {
          "--container-width": width,
          "--container-height": height,
          "--logo-width": "20%",
          "--logo-height": "15%",
          width: fluidSize ? "100%" : width,
          height: fluidSize ? "100%" : height,
        } as CSSProperties
      }
    >
      <DvdLogo className={colors ? styles.logo : styles.logoMovement} />
    </div>
  );
};

export default DvdScreensaver;
