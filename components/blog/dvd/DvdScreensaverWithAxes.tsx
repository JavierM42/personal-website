import { CSSProperties } from "react";
import styles from "./dvd.module.css";
import classNames from "classnames";
import DvdLogo from "./DvdLogo";

const DvdScreensaverWithAxes = ({
  width = 320,
  height = 240,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      className="grid grid-cols-[40px,1fr,40px] grid-rows-[20px,1fr] gap-4"
      style={
        {
          "--container-width": width,
          "--container-height": height,
          "--logo-width": "40px",
          "--logo-height": "20px",
        } as CSSProperties
      }
    >
      <div className="relative w-full h-full col-start-2 row-start-1 text-on-surface/40 border-x border-surface">
        <DvdLogo className={styles.xAxisMovement} />
      </div>
      <div className="relative w-full h-full col-start-1 row-start-2 text-on-surface/40 border-y border-surface">
        <DvdLogo className={styles.yAxisMovement} />
      </div>
      <div
        className={classNames(
          "row-start-2 col-start-2 border border-surface bg-surface/20 relative",
          styles.container
        )}
        style={
          {
            "--container-width": width,
            "--container-height": height,
            "--logo-width": "40px",
            "--logo-height": "20px",
          } as CSSProperties
        }
      >
        <DvdLogo className={styles.logoMovement} />
      </div>
    </div>
  );
};

export default DvdScreensaverWithAxes;