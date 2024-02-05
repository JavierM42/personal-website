import { motion, useScroll, useTransform } from "framer-motion";
import ColorAnimation from "../../ColorAnimation";
import DvdScreensaver from "../../DvdScreensaver";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";
import { useWindowSize } from "@uidotdev/usehooks";
import { RefObject, useEffect, useRef, useState } from "react";

const AnimatedText = ({
  slideRef,
  containerRef,
  finalOffset,
}: {
  slideRef: RefObject<HTMLDivElement>;
  containerRef: RefObject<HTMLDivElement>;
  finalOffset: number;
}) => {
  const { scrollYProgress: exitProgress } = useScroll({
    target: slideRef,
    container: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(exitProgress, [0, 1], [0, finalOffset]);

  return <motion.div style={{ y }}>Can we divide it further?</motion.div>;
};

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
      className="flex flex-col items-center justify-center gap-4"
      ref={slideRef}
    >
      <Paragraph>
        My strategy to reverse engineer an animation is always the same: good
        old <span className="italic">divide and conquer</span>:
      </Paragraph>
      <div className="grid grid-cols-[auto_auto_auto_auto_auto] gap-4 items-center my-12">
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface">
            <DvdScreensaver width={180} height={135} />
          </div>
          <div className="text-center">The whole thing</div>
        </div>
        <div className="mb-10 text-3xl font-bold text-on-surface">=</div>
        <div className="space-y-2">
          <div className="border shadow w-fit h-fit bg-surface/30 border-surface">
            <DvdScreensaver width={180} height={135} colors={false} />
          </div>
          <div className="text-center">Bounce around</div>
        </div>
        <div className="mb-10 text-3xl font-bold text-on-surface">+</div>
        <div className="space-y-2">
          <ColorAnimation width={135} height={135} />
          <div className="text-center">Change colors</div>
        </div>
      </div>
      <Paragraph>Let's focus on the movement.</Paragraph>
      <Paragraph>
        <div ref={textRef} className="flex gap-1">
          <AnimatedText
            slideRef={slideRef}
            containerRef={containerRef}
            finalOffset={finalOffset}
            key={finalOffset}
          />
        </div>
      </Paragraph>
    </Slide>
  );
}
