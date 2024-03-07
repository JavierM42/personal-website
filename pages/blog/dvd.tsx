import { useEffect, useRef, useState } from "react";
import BlogPost from "../../components/blog/BlogPost";
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

export default function DvdBlogPost() {
  const [finalYSlide4, setFinalYSlide4] = useState<number>();
  const [finalPositionSlide8, setFinalPositionSlide8] = useState<{
    x: number;
    y: number;
  }>();

  const containerRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <BlogPost
      title="CSS-only DVD Screensaver animation"
      description="An in-depth look at how I created a DVD screensaver animation without any Javascript, presented with dynamic examples and code snippets."
      metaImage="https://javiermorales.dev/blog/dvd/image.png"
      metaVideo="https://javiermorales.dev/blog/dvd/video.mp4"
      ref={containerRef}
    >
      <SlideOne />
      {isClient && <SlideTwo containerRef={containerRef} />}
      <SlideThree />
      <SlideFour containerRef={containerRef} finalY={finalYSlide4} />
      <SlideFive containerRef={containerRef} setFinalY={setFinalYSlide4} />
      <SlideSix />
      {isClient && <SlideSeven containerRef={containerRef} />}
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
    </BlogPost>
  );
}
