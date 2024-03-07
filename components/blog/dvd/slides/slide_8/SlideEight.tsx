import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import CodeBlock from "../../../CodeBlock";
import Paragraph from "../../../Paragraph";
import Slide from "../../../Slide";

const AnimatedText = ({
  slideRef,
  containerRef,
  finalOffset,
}: {
  slideRef: RefObject<HTMLDivElement>;
  containerRef: RefObject<HTMLDivElement>;
  finalOffset: { x: number; y: number };
}) => {
  const { scrollYProgress: exitProgress } = useScroll({
    target: slideRef,
    container: containerRef,
    offset: ["end end", "end start"],
  });
  const x = useTransform(exitProgress, [0, 1], [0, finalOffset.x]);
  const y = useTransform(exitProgress, [0, 1], [0, finalOffset.y]);

  return (
    <motion.div style={{ x, y }}>
      How can we do this for all four walls?
    </motion.div>
  );
};

export default function SlideEight({
  containerRef,
  finalPosition,
}: {
  finalPosition?: { x: number; y: number };
  containerRef: RefObject<HTMLDivElement>;
}) {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const textRef = useRef<HTMLDivElement>(null);
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
  }>();

  if (!initialPosition && textRef.current && containerRef.current) {
    setInitialPosition({
      x:
        textRef.current.getBoundingClientRect().left +
        containerRef.current.scrollLeft,
      y:
        textRef.current.getBoundingClientRect().top +
        containerRef.current.scrollTop,
    });
  }
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setInitialPosition({
        x:
          textRef.current.getBoundingClientRect().left +
          containerRef.current.scrollLeft,
        y:
          textRef.current.getBoundingClientRect().top +
          containerRef.current.scrollTop,
      });
    }
  }, [windowWidth, windowHeight]);

  const slideRef = useRef<HTMLDivElement>(null);

  const finalOffset =
    finalPosition && initialPosition
      ? {
          x: finalPosition.x - initialPosition.x,
          y: finalPosition.y - initialPosition.y,
        }
      : { x: 0, y: 0 };

  return (
    <Slide className="flex flex-col items-center" ref={slideRef}>
      <Paragraph>
        If we only needed to change colors when the logo hit the left or right
        wall, this idea would work:
      </Paragraph>
      <CodeBlock isFirst />
      <Paragraph inCode>
        First, define keyframes to change color at regular intervals, five of
        them in this case. I'm using equispaced hue values on the HSL color
        spectrum.
      </Paragraph>
      <CodeBlock
        code={`@keyframes colorX {
  from { background: hsl(0deg 100% 50%); }
  20% { background: hsl(72deg 100% 50%); }
  40% { background: hsl(144deg 100% 50%); }
  60% { background: hsl(216deg 100% 50%); }
  80% { background: hsl(288deg 100% 50%); }
  to { background: hsl(0deg 100% 50%); }
}`}
      />
      <Paragraph inCode>
        Then we just need to add a new animation with the appropriate duration
        and the <code>step-start</code> timing function so the value "jumps"
        once every <code>--duration-x</code>.
      </Paragraph>
      <CodeBlock
        isLast
        code={`.logo {
  animation:
    x var(--duration-x) linear infinite alternate,
    y var(--duration-y) linear infinite alternate,
    colorX calc(var(--duration-x) * 5) step-start infinite;
}`}
      />
      <div className="w-full max-w-lg">
        But...{" "}
        <div ref={textRef} className="inline-block">
          <AnimatedText
            slideRef={slideRef}
            containerRef={containerRef}
            finalOffset={finalOffset}
            key={`x${finalOffset.x}y${finalOffset.y}`}
          />
        </div>
      </div>
    </Slide>
  );
}
