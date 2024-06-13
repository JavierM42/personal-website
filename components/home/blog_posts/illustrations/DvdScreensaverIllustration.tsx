import { FC } from "react";
import DvdScreensaver from "../../../blog/dvd/DvdScreensaver";

const DvdScreensaverIllustration: FC<{ withTimer?: boolean }> = ({
  withTimer = false,
}) => {
  return (
    <div className="py-4">
      <div className="w-32 rounded-lg bg-surface/20 ring-primary ring-2">
        <DvdScreensaver
          redefineVariables
          width={128}
          height={96}
          speed={40}
          withTimer={withTimer}
        />
      </div>
    </div>
  );
};

export default DvdScreensaverIllustration;
