import { useWindowSize } from "@uidotdev/usehooks";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { SquareButton } from "../../components/SquareButton";
import styles from "../../components/blog/dvd/dvd.module.css";
import SlideOne from "../../components/blog/dvd/slides/slide_1/SlideOne";
import SlideTen from "../../components/blog/dvd/slides/slide_10/SlideTen";
import SlideEleven from "../../components/blog/dvd/slides/slide_11/SlideEleven";
import SlideTwelve from "../../components/blog/dvd/slides/slide_12/SlideTwelve";
import SlideThirteen from "../../components/blog/dvd/slides/slide_13/SlideThirteen";
import SlideFourteen from "../../components/blog/dvd/slides/slide_14/SlideFourteen";
import SlideTwo from "../../components/blog/dvd/slides/slide_2/SlideTwo";
import SlideThree from "../../components/blog/dvd/slides/slide_3/SlideThree";
import SlideFour from "../../components/blog/dvd/slides/slide_4/SlideFour";
import SlideFive from "../../components/blog/dvd/slides/slide_5/SlideFive";
import SlideSix from "../../components/blog/dvd/slides/slide_6/SlideSix";
import SlideSeven from "../../components/blog/dvd/slides/slide_7/SlideSeven";
import SlideEight from "../../components/blog/dvd/slides/slide_8/SlideEight";
import SlideNine from "../../components/blog/dvd/slides/slide_9/SlideNine";
import ChevronRight from "../../public/chevron-right.svg";

export default function DvdBlogPost() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowSize();

  const [finalYSlide4, setFinalYSlide4] = useState<number>();
  const [finalPositionSlide8, setFinalPositionSlide8] = useState<{
    x: number;
    y: number;
  }>();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "JavierM42/personal-website");
    script.setAttribute("issue-term", "url");
    script.setAttribute("label", "utterances-comments");
    script.setAttribute(
      "theme",
      document.body.classList.contains("dark") ? "github-dark" : "github-light"
    );
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "");

    const comments = document.getElementById("comments")!;
    if (comments) {
      comments.innerHTML = "";
      comments.appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <title>CSS-only DVD Screensaver animation | Javier Morales</title>
        <meta
          name="description"
          content="An in-depth look at how I created a DVD screensaver animation without any Javascript, presented with dynamic examples and code snippets."
        />
        <meta
          property="og:title"
          content="CSS-only DVD Screensaver animation"
        />
        <meta
          property="og:description"
          content="An in-depth look at how I created a DVD screensaver animation without any Javascript, presented with dynamic examples and code snippets."
        />
        <meta
          property="og:image"
          content="https://javiermorales.dev/blog/dvd/image.png"
        />
        <meta
          property="og:video"
          content="https://javiermorales.dev/blog/dvd/video.mp4"
        />
        <meta name="author" content="Javier Morales" />
      </Head>
      <Layout
        navbarContent={
          <>
            <ChevronRight className="-mx-6 scale-50 shrink-0" />
            <Link href="/#blog">Blog</Link>
            <ChevronRight className="-mx-6 scale-50 shrink-0" />
            <a
              href="#slide-1"
              className="whitespace-nowrap text-ellipsis overflow-clip"
            >
              CSS-only DVD Screensaver animation
            </a>
          </>
        }
      >
        <div
          className={classNames(
            "relative w-full h-screen md:px-4 overflow-y-auto leading-loose md:snap-y md:snap-mandatory text-on-background scroll-smooth",
            styles.variables
          )}
          ref={containerRef}
        >
          <main className="max-w-4xl mx-auto">
            <SlideOne />
            {windowHeight && <SlideTwo containerRef={containerRef} />}
            <SlideThree />
            <SlideFour containerRef={containerRef} finalY={finalYSlide4} />
            <SlideFive
              containerRef={containerRef}
              setFinalY={setFinalYSlide4}
            />
            <SlideSix />
            {windowHeight && <SlideSeven containerRef={containerRef} />}
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
            <SlideFourteen />
            <div id="comments" className="w-full py-16 h-fit snap-start"></div>
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
      </Layout>
    </>
  );
}
