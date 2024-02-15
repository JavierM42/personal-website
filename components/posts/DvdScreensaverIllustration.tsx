import classNames from "classnames";
import { CSSProperties, FC } from "react";
import DvdScreensaver from "../blog/dvd/DvdScreensaver";
import styles from "../blog/dvd/dvd.module.css";

const DvdScreensaverIllustration: FC = () => {
  return (
    <div className="pt-6">
      <div className="w-48 rounded-lg h-36 bg-surface/20 ring-primary ring-2">
        <DvdScreensaver redefineVariables width={192} height={144} speed={40} />
      </div>
    </div>
  );
};

export default DvdScreensaverIllustration;
