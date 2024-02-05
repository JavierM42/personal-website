import classNames from "classnames";
import DvdScreensaver from "../../DvdScreensaver";
import Slide from "../../Slide";
import crtStyles from "./crt.module.css";

export default function SlideOne() {
  return (
    <Slide
      className={classNames(
        "relative overflow-clip bg-surface/40",
        crtStyles.crt
      )}
      transparent
      noPadding
    >
      <DvdScreensaver fluidSize />
      <div className="absolute inset-x-0 flex flex-col items-center gap-6 bottom-[20%] px-4">
        <h2 className="text-4xl italic normal-case text-on-surface">
          CSS-only DVD Screensaver animation
        </h2>
        <h3 className="text-2xl tracking-widest text-on-surface">
          An interactive walkthrough
        </h3>
      </div>
    </Slide>
  );
}

// TODO Turn on/off effect: https://codepen.io/lbebber/pen/XJRdrV/
