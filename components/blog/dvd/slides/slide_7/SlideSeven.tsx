import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import Paragraph from "../../Paragraph";
import Slide from "../../Slide";

export default function SlideSeven({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement>;
}) {
  const slideRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: exitProgress } = useScroll({
    target: slideRef,
    container: containerRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(exitProgress, [0, 1], [1, -3]);

  const Fade = ({ children }: { children: ReactNode }) => (
    <motion.span style={{ opacity }}>{children}</motion.span>
  );

  return (
    <Slide className="flex flex-col items-center justify-center" ref={slideRef}>
      <Paragraph>
        We've sorted out the bouncing. Now, on to the colors.
      </Paragraph>
      <div className="w-full max-w-lg text-justify">
        <Fade>
          Well... colors are a bit harder. It's not straightforward to divide
          the color change into <i>x</i> and <i>y</i> because the color is
        </Fade>{" "}
        s<Fade>up</Fade>
        po
        <Fade>sed to change every t</Fade>i<Fade>me there's a co</Fade>l
        <Fade>lision with any of th</Fade>e<Fade> fou</Fade>r<Fade> w</Fade>
        al
        <Fade>ls. W</Fade>e<Fade> can't </Fade>r<Fade>eally do </Fade>t
        <Fade>wo independent animations as </Fade>
        we
        <Fade> did for movement, be</Fade>
        ca
        <Fade>use there's a si</Fade>n
        <Fade>
          gle <code>color</code> property.
        </Fade>
      </div>
    </Slide>
  );
}
