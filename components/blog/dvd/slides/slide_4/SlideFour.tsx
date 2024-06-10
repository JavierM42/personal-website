import { useWindowSize } from "@uidotdev/usehooks";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { RefObject, useEffect, useRef, useState } from "react";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";
import ColorAnimation from "../../ColorAnimation";
import DvdScreensaver from "../../DvdScreensaver";
import styles from "../../dvd.module.css";

const AnimatedText = dynamic(() => import("./AnimatedText"));

export default function SlideFour({
  containerRef,
  finalY,
}: {
  finalY?: number;
  containerRef: RefObject<HTMLDivElement>;
}) {
  const { height: windowHeight } = useWindowSize();
  const textRef = useRef<HTMLDivElement>(null);
  const [initialY, setInitialY] = useState<number | null>(null);

  if (windowHeight && !initialY && textRef.current && containerRef.current) {
    setInitialY(
      textRef.current.getBoundingClientRect().top +
        containerRef.current.scrollTop
    );
  }

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setInitialY(
        textRef.current.getBoundingClientRect().top +
          containerRef.current.scrollTop
      );
    }
  }, [windowHeight]);

  const slideRef = useRef<HTMLDivElement>(null);

  const finalOffset = finalY && initialY ? finalY - initialY : 0;

  return (
    <Slide
      className={classNames(
        "flex flex-col items-center justify-center gap-4",
        styles.variables
      )}
      ref={slideRef}
    >
      <Paragraph>
        My strategy to reverse engineer an animation is always the same: good
        old <span className="italic">divide and conquer</span>:
      </Paragraph>
      <div className="grid md:grid-cols-[auto_auto_auto_auto_auto] gap-1 md:gap-4 place-items-center my-12">
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface-light">
            <DvdScreensaver width={180} height={135} />
          </div>
          <div className="text-center">The whole thing</div>
        </div>
        <div className="text-3xl font-bold md:mb-10 text-on-surface">=</div>
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface-light">
            <DvdScreensaver width={180} height={135} colors={false} />
          </div>
          <div className="text-center">Bounce around</div>
        </div>
        <div className="text-3xl font-bold md:mb-10 text-on-surface">+</div>
        <div className="space-y-2">
          <ColorAnimation width={135} height={135} />
          <div className="text-center">Change colors</div>
        </div>
      </div>
      <Paragraph>Let's focus on the movement.</Paragraph>
      <div ref={textRef} className="w-full max-w-lg text-justify">
        <AnimatedText
          slideRef={slideRef}
          containerRef={containerRef}
          finalOffset={finalOffset}
          key={finalOffset}
        />
      </div>
    </Slide>
  );
}
