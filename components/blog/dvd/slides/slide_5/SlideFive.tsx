import { useWindowSize } from "usehooks-ts";
import { RefObject, useEffect, useRef } from "react";
import DvdScreensaverWithAxes from "../../DvdScreensaverWithAxes";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideFive({
  containerRef,
  setFinalY,
}: {
  containerRef: RefObject<HTMLDivElement>;
  setFinalY: (y: number) => void;
}) {
  const { height: windowHeight } = useWindowSize({
    initializeWithValue: false,
  });
  const textRef = useRef<HTMLDivElement>(null);
  const finalYSet = useRef(false);

  if (
    windowHeight &&
    !finalYSet.current &&
    textRef.current &&
    containerRef.current
  ) {
    setFinalY(
      textRef.current.getBoundingClientRect().top +
        containerRef.current.scrollTop
    );
    finalYSet.current = true;
  }
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setFinalY(
        textRef.current.getBoundingClientRect().top +
          containerRef.current.scrollTop
      );
      finalYSet.current = true;
    }
  }, [windowHeight]);

  return (
    <Slide className="flex flex-col items-center justify-center gap-4">
      <div ref={textRef}>
        <Paragraph className="col-start-1 row-start-1">
          <span className="opacity-0">Can we divide it further?</span> Yes, with
          one of the most useful strategies in the animator's toolkit: the
          bouncing animation can be split off into independent movements across
          the horizontal and vertical axes.
        </Paragraph>
      </div>
      <DvdScreensaverWithAxes />
      <Paragraph>
        That's simple enough to animate. Let's write some code!
      </Paragraph>
    </Slide>
  );
}
