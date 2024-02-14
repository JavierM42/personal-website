import classNames from "classnames";
import { CSSProperties, FC } from "react";
import DvdScreensaver from "../blog/dvd/DvdScreensaver";
import styles from "../blog/dvd/dvd.module.css";

const DvdScreensaverIllustration: FC = () => {
  return (
    <div className="pt-6">
      <div
        className={classNames(
          "w-48 h-36 bg-surface/20 ring-primary ring-2 rounded-lg",
          styles.variables
        )}
        style={
          {
            "--speed": 40,
          } as CSSProperties
        }
      >
        <DvdScreensaver width={192} height={144} />
      </div>
    </div>
  );
};

export default DvdScreensaverIllustration;
