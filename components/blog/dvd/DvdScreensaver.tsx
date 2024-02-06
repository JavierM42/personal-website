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
          "--logo-width": width / 5,
          "--logo-height": width / 10,
          width: fluidSize ? "100%" : width,
          height: fluidSize ? "100%" : height,
        } as CSSProperties
      }
    >
      <DvdLogo className={colors ? styles.logo : styles.logoMovement} />
    </div>
  );
  // TODO size looks awful
};

export default DvdScreensaver;
