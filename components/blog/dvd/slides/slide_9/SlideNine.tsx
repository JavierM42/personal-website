import { useWindowSize } from "@uidotdev/usehooks";
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
  const { width: windowWidth, height: windowHeight } = useWindowSize();
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
        <div className="flex items-end gap-2 pr-20">
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            <div ref={textRef} className="opacity-0">
              How can we do this for all four walls?
            </div>
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 pl-20">
          <p className="px-4 py-2 mb-8 rounded-br-none shadow-lg shadow-primary-light/20 rounded-3xl bg-primary-container">
            We animate two CSS variables, then define our <code>hue</code> based
            on a linear combination of both.
          </p>
          <div className="w-16 h-16 rounded-full shadow-md shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-end gap-2 pr-20">
          <p className="flex items-center px-4 py-2 rounded-bl-none shadow-lg rounded-3xl bg-surface/90">
            Animate CSS variables? Can you even do that?
          </p>
        </div>
        <div className="flex items-end justify-end gap-2 pl-20">
          <p className="px-4 py-2 mb-8 rounded-br-none shadow-lg shadow-primary-light/20 rounded-3xl bg-primary-container">
            Well, yes, but it's something you hardly ever see because they don't
            behave how you expect.
          </p>
          <div className="w-16 h-16 rounded-full shadow-md shrink-0">
            <Image
              src="/javi.jpg"
              width="64"
              height="64"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* TODO */}
      {/* <p>(Unless you use the new @property rule and only on some browsers)</p> */}
      {/* https://caniuse.com/mdn-css_at-rules_property */}
    </Slide>
  );
}
