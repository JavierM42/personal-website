import ChevronRight from "../../public/chevron-right.svg";
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
import { useRef, useState } from "react";
import { SquareButton } from "../../components/SquareButton";
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head";
import SlideThirteen from "../../components/blog/dvd/slides/slide_13/SlideThirteen";

export default function DvdBlogPost() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowSize();

  const [finalYSlide4, setFinalYSlide4] = useState<number>();
  const [finalPositionSlide8, setFinalPositionSlide8] = useState<{
    x: number;
    y: number;
  }>();

  return (
    <>
      <Head>
        <title>CSS-only DVD Screensaver animation | Javier Morales</title>
      </Head>
      <div className="fixed inset-0 bg-gradient-to-br from-primary-container to-tertiary-container -z-1 dark:from-primary-container/40 dark:to-tertiary-container/40" />
      <div
        className={classNames(
          "relative w-full h-screen md:px-4 overflow-y-auto leading-loose snap-y snap-mandatory text-on-background",
          styles.variables
        )}
        ref={containerRef}
      >
        <header>
          <NavBar />
        </header>

        <main className="max-w-4xl mx-auto">
          <SlideOne />
          <SlideTwo />
          {/* TODO Animate the five minutes later into the other one, or add a spongebob reference */}
          <SlideThree />
          <SlideFour containerRef={containerRef} finalY={finalYSlide4} />
          <SlideFive containerRef={containerRef} setFinalY={setFinalYSlide4} />
          <SlideSix />
          <SlideSeven containerRef={containerRef} />
          <SlideEight
            containerRef={containerRef}
            finalPosition={finalPositionSlide8}
          />
          <SlideNine
            containerRef={containerRef}
            setFinalPosition={setFinalPositionSlide8}
          />
          <SlideTen />
          <SlideEleven />
          <SlideTwelve />
          <SlideThirteen />
          <Slide>
            CRT effect on first slide from
            https://aleclownes.com/2017/02/01/crt-display.html
          </Slide>
        </main>
        <div className="fixed hidden space-y-10 -translate-y-1/2 md:block right-12 top-1/2">
          <SquareButton
            tooltip="Previous slide"
            tooltipPlacement="right"
            onClick={() =>
              containerRef.current?.scrollBy({
                top: -(windowHeight || 0),
                behavior: "smooth",
              })
            }
            label="Previous slide"
          >
            <ChevronRight style={{ transform: `rotate(-90deg)` }} />
          </SquareButton>
          <SquareButton
            tooltip="Next slide"
            tooltipPlacement="right"
            onClick={() =>
              containerRef.current?.scrollBy({
                top: windowHeight || 0,
                behavior: "smooth",
              })
            }
            label="Next slide"
          >
            <ChevronRight style={{ transform: `rotate(90deg)` }} />
          </SquareButton>
        </div>
      </div>
    </>
  );
}
// TODO date
// TODO hydration problem
