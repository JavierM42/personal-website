import BlogPostCard, { BLOG_POST_CARD_WIDTH } from "../components/BlogPostCard";
import Grids from "../components/posts/Grids";
import Leverage from "../components/posts/Leverage";
import Portals from "../components/posts/Portals";
import Screenshots from "../components/posts/Screenshots";
import WithTooltip from "./WithTooltip";
import InteractiveSurfaces from "./posts/InteractiveSurfaces";
import ModeAwareColors from "./posts/ModeAwareColors";
import ChevronRight from "../public/chevron-right.svg";
import { useEffect, useRef, useState } from "react";

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
    <>
      <ol
        ref={containerRef}
        className="w-screen [&>*]:align-top [&>*]:inline-block overflow-x-auto pb-8 snap-x snap-mandatory ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none"
      >
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
      <div className="flex justify-center gap-8 mt-4 -translate-y-4">
        <WithTooltip text="Scroll left">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none interactive-bg-primary-container"
            onClick={goPrevious}
            aria-label="Scroll left"
          >
            <ChevronRight className="rotate-180" />
          </button>
        </WithTooltip>
        <WithTooltip text="Scroll right">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none interactive-bg-primary-container"
            onClick={goNext}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </WithTooltip>
      </div>
    </>
  );
}
