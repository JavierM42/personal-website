import { useRef } from "react";
import BlogPost, { PaginationControls } from "../../components/blog/BlogPost";
import SlideOne from "../../components/blog/animated-gradient-button/slides/slide_1/SlideOne";
import SlideTwo from "../../components/blog/animated-gradient-button/slides/slide_2/SlideTwo";
import SlideThree from "../../components/blog/animated-gradient-button/slides/slide_3/SlideThree";
import SlideFour from "../../components/blog/animated-gradient-button/slides/slide_4/SlideFour";
import SlideFive from "../../components/blog/animated-gradient-button/slides/slide_5/SlideFive";
import SlideSix from "../../components/blog/animated-gradient-button/slides/slide_6/SlideSix";
import SlideSeven from "../../components/blog/animated-gradient-button/slides/slide_7/SlideSeven";
import SlideEight from "../../components/blog/animated-gradient-button/slides/slide_8/SlideEight";

export default function AnimatedGradientButtonBlogPost() {
  const handle = useRef<PaginationControls>(null);

  return (
    <BlogPost
      title="CSS Animated Gradient Button"
      description="TODO"
      metaImage="TODO"
      handle={handle}
    >
      <SlideOne onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideTwo onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideThree onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideFour onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideFive onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideSix onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideSeven onNextSlide={() => handle.current?.nextSlide?.()} />
      <SlideEight />
    </BlogPost>
  );
}
