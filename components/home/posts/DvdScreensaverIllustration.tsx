import { FC } from "react";
import DvdScreensaver from "../../blog/dvd/DvdScreensaver";

const DvdScreensaverIllustration: FC = () => {
  return (
    <div className="py-4">
      <div className="w-32 rounded-lg bg-surface/20 ring-primary ring-2">
        <DvdScreensaver redefineVariables width={128} height={96} speed={40} />
      </div>
    </div>
  );
};

export default DvdScreensaverIllustration;
