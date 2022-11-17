import { motion } from "framer-motion";
import BlogPostCard from "../components/BlogPostCard";
import Grids from "../components/posts/Grids";
import Leverage from "../components/posts/Leverage";
import Portals from "../components/posts/Portals";
import Screenshots from "../components/posts/Screenshots";
import InteractiveSurfaces from "./posts/InteractiveSurfaces";
import ModeAwareColors from "./posts/ModeAwareColors";

export default function BlogPostCards() {
  return (
    <ol className="w-screen [&>*]:align-top [&>*]:inline-block overflow-x-auto pb-4 snap-x snap-mandatory ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none">
      <BlogPostCard
        illustration={<Leverage />}
        title="Prioritizing High-leverage Activities"
        summary="An opinion piece about productivity habits and considering automation for repetitive tasks. Inspired by the book The Effective Engineer by Edmond Lau."
        url="https://www.wyeworks.com/blog/2022/09/26/prioritizing-high-leverage-activities/"
      />
      <BlogPostCard
        illustration={<InteractiveSurfaces />}
        title="Material interaction states with Tailwind"
        summary="A deep dive into my plugin to style buttons with Tailwind."
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
  );
}
