import classNames from "classnames";
import Slide from "../../components/blog/dvd/Slide";
import styles from "../../components/blog/dvd/dvd.module.css";
import SlideOne from "../../components/blog/dvd/slides/slide_1/SlideOne";
import SlideTwo from "../../components/blog/dvd/slides/slide_2/SlideTwo";
import SlideThree from "../../components/blog/dvd/slides/slide_3/SlideThree";
import SlideFour from "../../components/blog/dvd/slides/slide_4/SlideFour";
import SlideFive from "../../components/blog/dvd/slides/slide_5/SlideFive";
import { NavBar } from "../../components/nav/NavBar";
import SlideSix from "../../components/blog/dvd/slides/slide_6/SlideSix";
import SlideSeven from "../../components/blog/dvd/slides/slide_7/SlideSeven";
import SlideEight from "../../components/blog/dvd/slides/slide_8/SlideEight";
import SlideNine from "../../components/blog/dvd/slides/slide_9/SlideNine";
import SlideTen from "../../components/blog/dvd/slides/slide_10/SlideTen";
import SlideEleven from "../../components/blog/dvd/slides/slide_11/SlideEleven";
import SlideTwelve from "../../components/blog/dvd/slides/slide_12/SlideTwelve";
import SlideThirteen from "../../components/blog/dvd/slides/slide_13/SlideThirteen";
import { useRef, useState } from "react";

export default function DvdBlogPost() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [finalY, setFinalY] = useState<number>();

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-primary-container to-tertiary-container -z-1 dark:from-primary-container/40 dark:to-tertiary-container/40" />
      <div
        className={classNames(
          "relative w-full h-screen px-4 overflow-auto leading-loose snap-y snap-mandatory text-on-background",
          styles.variables
        )}
        ref={containerRef}
      >
        <header>
          <NavBar />
        </header>

        {/* TODO next/prev slide buttons */}
        <main>
          <SlideOne />
          <SlideTwo />
          {/* TODO Animate the five minutes later into the other one, or add a spongebob reference */}
          <SlideThree />
          <SlideFour containerRef={containerRef} finalY={finalY} />
          <SlideFive containerRef={containerRef} setFinalY={setFinalY} />
          <SlideSix />
          <SlideSeven />
          <SlideEight />
          <SlideNine />
          <SlideTen />
          <SlideEleven />
          <SlideTwelve />
          <SlideThirteen />
          <Slide>
            CRT effect on first slide from
            https://aleclownes.com/2017/02/01/crt-display.html
          </Slide>
        </main>
      </div>
    </>
  );
}
