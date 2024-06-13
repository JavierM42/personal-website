import classNames from "classnames";
import Slide from "../../Slide";
import DvdScreensaver from "../../dvd/DvdScreensaver";
import crtStyles from "../../dvd/slides/slide_1/crt.module.css";

export default function SlideOne() {
  return (
    <Slide
      className={classNames(
        "relative overflow-clip bg-surface/40 max-w-[80vw] md:max-w-auto aspect-[4/3] mx-auto py-0",
        crtStyles.crt
      )}
      transparent
      noPadding
    >
      <DvdScreensaver redefineVariables width={720} height={540} fluidSize />
      <div className="absolute inset-x-0 flex flex-col md:items-center gap-2 md:gap-6 bottom-[20%] px-4">
        <h2 className="text-xl italic normal-case md:text-4xl text-on-surface">
          Recursion in CSS:
        </h2>
        <h3 className="tracking-widest text-md md:text-2xl text-on-surface">
          The Corner Hit Timer Experiment
        </h3>
      </div>
    </Slide>
  );
}
