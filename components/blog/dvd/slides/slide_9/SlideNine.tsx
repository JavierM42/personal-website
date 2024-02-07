import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import Slide from "../../Slide";

export default function SlideNine({
  containerRef,
  setFinalPosition,
}: {
  containerRef: RefObject<HTMLDivElement>;
  setFinalPosition: (value: { x: number; y: number }) => void;
}) {
  const { width: windowWidth, height: windowHeight } = useWindowSize({
    initializeWithValue: false,
  });
  const textRef = useRef<HTMLDivElement>(null);
  const finalPositionSet = useRef(false);

  if (!finalPositionSet.current && textRef.current && containerRef.current) {
    setFinalPosition({
      x:
        textRef.current.getBoundingClientRect().left +
        containerRef.current.scrollLeft,
      y:
        textRef.current.getBoundingClientRect().top +
        containerRef.current.scrollTop,
    });
    finalPositionSet.current = true;
  }
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setFinalPosition({
        x:
          textRef.current.getBoundingClientRect().left +
          containerRef.current.scrollLeft,
        y:
          textRef.current.getBoundingClientRect().top +
          containerRef.current.scrollTop,
      });
      finalPositionSet.current = true;
    }
  }, [windowWidth, windowHeight]);

  return (
    <Slide className="flex flex-col items-center justify-center">
      <div className="max-w-xl space-y-4">
        <div className="flex items-end gap-2 pr-4 md:pr-20">
          <div className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            <div ref={textRef} className="opacity-0">
              How can we do this for all four walls?
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end gap-2 pl-4 md:pl-20">
          <p className="px-4 py-2 rounded-br-none shadow-lg md:mb-8 shadow-primary-light/20 rounded-3xl bg-primary-container">
            We animate two CSS variables, then define our <code>hue</code> based
            on a linear combination of both.
          </p>
          <div className="w-8 h-8 rounded-full shadow-md md:w-16 md:h-16 shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex items-end gap-2 pr-4 md:pr-20">
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            Animate CSS variables? Can you even do that?
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 pl-4 md:pl-20">
          <p className="px-4 py-2 rounded-br-none shadow-lg md:mb-8 shadow-primary-light/20 rounded-3xl bg-primary-container">
            Well, yes, but it's something you hardly ever see because they don't
            behave how you expect.
          </p>
          <div className="w-8 h-8 rounded-full shadow-md md:w-16 md:h-16 shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
