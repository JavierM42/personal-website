import { CSSProperties, useRef } from "react";
import ChevronRight from "../../public/chevron-right.svg";
import { SquareButton } from "../SquareButton";
import BlogPostCard, { BLOG_POST_CARD_WIDTH } from "./BlogPostCard";
import { DevNote } from "./dev_notes/DevNote";
import DvdScreensaverIllustration from "./posts/DvdScreensaverIllustration";
import Grids from "./posts/Grids";
import InteractiveSurfaces from "./posts/InteractiveSurfaces";
import Leverage from "./posts/Leverage";
import ModeAwareColors from "./posts/ModeAwareColors";
import Portals from "./posts/Portals";
import Screenshots from "./posts/Screenshots";

export default function BlogPostCards() {
  const containerRef = useRef<HTMLOListElement>(null);

  function goPrevious() {
    containerRef.current?.scrollBy({
      left: -BLOG_POST_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  function goNext() {
    containerRef.current?.scrollBy({
      left: BLOG_POST_CARD_WIDTH,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <DevNote className="absolute w-64 -top-14 left-1/2 rotate-[-3deg]">
        I used <code>framer-motion</code> for these illustrations, with some
        simple SVG paths and sometimes a mask.
      </DevNote>
      <ol
        ref={containerRef}
        className="w-screen [&>*]:align-top [&>*]:inline-block overflow-x-auto pb-8 snap-x snap-mandatory ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0 0 0/0), black 8%, black 92%, rgba(0 0 0 /0) 100%)",
        }}
      >
        <BlogPostCard
          illustration={
            <div
              className="w-full h-10 mt-12 transition-all rounded-lg shadow pointer-events-none text-on-surface gradient-button from-red-container to-green-container dark:shadow-black"
              style={
                {
                  "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
                } as CSSProperties
              }
            />
          }
          title="CSS Animated Gradient Button"
          summary="The method behind the animated gradient button on this page, with a detailed step-by-step walkthrough."
          url="/blog/animated-gradient-button"
        />
        <BlogPostCard
          illustration={<DvdScreensaverIllustration />}
          title="CSS-only DVD Screensaver animation: a visual walkthrough"
          summary="An in-depth look at how I created a DVD screensaver animation without any Javascript, presented with dynamic examples and code snippets."
          url="/blog/dvd"
        />
        <BlogPostCard
          illustration={<Leverage />}
          title="Prioritizing High-leverage Activities"
          summary="An opinion piece about productivity habits and considering automation for repetitive tasks. Inspired by the book The Effective Engineer by Edmond Lau."
          url="https://www.wyeworks.com/blog/2022/09/26/prioritizing-high-leverage-activities/"
        />
        <BlogPostCard
          illustration={<InteractiveSurfaces />}
          title="Material interaction states with Tailwind"
          summary="A deep dive into my plugin to style interactive surfaces with Tailwind according to the Material Design guidelines."
          url="https://www.wyeworks.com/blog/2022/11/15/material-interaction-states-with-tailwind/"
        />
        <BlogPostCard
          illustration={<ModeAwareColors />}
          title="Mode-aware colors with Tailwind"
          summary="The reasoning behind my tailwind-mode-aware-colors plugin and a quick look into its internals."
          url="https://www.wyeworks.com/blog/2022/10/12/mode-aware-colors-with-tailwind-css/"
        />
        <BlogPostCard
          illustration={<Portals />}
          title="Optimizing expensive React component mounts"
          summary="How we fixed a performance problem and improved metrics by 92% in a real-time React application thanks to reverse portals."
          url="https://www.wyeworks.com/blog/2022/09/12/optimizing-expensive-react-component-mounts/"
        />
        <BlogPostCard
          illustration={<Screenshots />}
          title="Screenshot testing React components with Viteshot"
          summary="How and why I set up a GitHub action to take screenshots of components in the Prisma UI library."
          url="https://www.wyeworks.com/blog/2022/03/16/screenshot-testing-react-components-with-viteshot/"
        />
        <BlogPostCard
          illustration={<Grids />}
          title="Harnessing the power of responsive CSS grids"
          summary="A fun experiment with a product pricing table that changed drastically between viewport sizes."
          url="https://www.wyeworks.com/blog/2021/08/07/harnessing-the-power-of-responsive-css-grids/"
        />
      </ol>
      <div className="relative flex justify-center gap-8 mt-4 -translate-y-4">
        <SquareButton
          onClick={goPrevious}
          label="Scroll left"
          tooltipPlacement="left"
        >
          <ChevronRight className="rotate-180" />
        </SquareButton>
        <SquareButton
          tooltipPlacement="right"
          onClick={goNext}
          label="Scroll right"
        >
          <ChevronRight />
        </SquareButton>
        <DevNote className="absolute w-72 -top-8 left-[calc(50%-360px)] rotate-[3deg]">
          The cards don't need any Javascript. CSS <code>scroll-snap</code> can
          snap elements to the center of their container. The buttons do need
          some scripting, but they simply scroll a certain number of pixels and
          don't need to track state.
        </DevNote>
      </div>
    </div>
  );
}
