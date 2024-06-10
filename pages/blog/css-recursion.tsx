import BlogPost from "../../components/blog/BlogPost";
import SlideEight from "../../components/blog/css-recursion/slides/SlideEight";
import SlideEleven from "../../components/blog/css-recursion/slides/SlideEleven";
import SlideFive from "../../components/blog/css-recursion/slides/SlideFive";
import SlideFour from "../../components/blog/css-recursion/slides/SlideFour";
import SlideFourteen from "../../components/blog/css-recursion/slides/SlideFourteen";
import SlideNine from "../../components/blog/css-recursion/slides/SlideNine";
import SlideOne from "../../components/blog/css-recursion/slides/SlideOne";
import SlideSeven from "../../components/blog/css-recursion/slides/SlideSeven";
import SlideSix from "../../components/blog/css-recursion/slides/SlideSix";
import SlideTen from "../../components/blog/css-recursion/slides/SlideTen";
import SlideThirteen from "../../components/blog/css-recursion/slides/SlideThirteen";
import SlideThree from "../../components/blog/css-recursion/slides/SlideThree";
import SlideTwelve from "../../components/blog/css-recursion/slides/SlideTwelve";
import SlideTwo from "../../components/blog/css-recursion/slides/SlideTwo";

export default function CSSRecursionBlogPost() {
  return (
    <BlogPost
      title="Recursion in CSS: The Corner Hit Timer Experiment"
      description="Can we calculate the Greatest Common Divisor of two integers with CSS?"
      metaImage="https://javiermorales.dev/blog/dvd/image.png"
      metaVideo="https://javiermorales.dev/blog/dvd/video.mp4"
    >
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
      <SlideFive />
      <SlideSix />
      <SlideSeven />
      <SlideEight />
      <SlideNine />
      <SlideTen />
      <SlideEleven />
      <SlideTwelve />
      <SlideThirteen />
      <SlideFourteen />
    </BlogPost>
  );
}
