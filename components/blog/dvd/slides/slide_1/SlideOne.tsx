import classNames from "classnames";
import DvdScreensaver from "../../DvdScreensaver";
import Slide from "../../Slide";
import crtStyles from "./crt.module.css";

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
      <DvdScreensaver fluidSize />
      <div className="absolute inset-x-0 flex flex-col md:items-center gap-2 md:gap-6 bottom-[20%] px-4">
        <h2 className="text-xl italic normal-case md:text-4xl text-on-surface">
          CSS-only DVD Screensaver animation
        </h2>
        <h3 className="tracking-widest text-md md:text-2xl text-on-surface">
          An interactive walkthrough
        </h3>
      </div>
    </Slide>
  );
}

// TODO Turn on/off effect: https://codepen.io/lbebber/pen/XJRdrV/
