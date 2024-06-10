import { CSSProperties } from "react";
import { BlogPostCardProps } from "./BlogPostCard";
import DvdScreensaverIllustration from "./illustrations/DvdScreensaverIllustration";
import Grids from "./illustrations/Grids";
import InteractiveSurfaces from "./illustrations/InteractiveSurfaces";
import Leverage from "./illustrations/Leverage";
import ModeAwareColors from "./illustrations/ModeAwareColors";
import Portals from "./illustrations/Portals";
import Screenshots from "./illustrations/Screenshots";

export const posts: BlogPostCardProps[] = [
  {
    illustration: <DvdScreensaverIllustration withTimer />,
    title: "Recursion in CSS: The Corner Hit Timer Experiment",
    summary:
      "Can we calculate the Greatest Common Divisor of two integers with CSS?",
    url: "/blog/css-recursion",
    tags: ["CSS"],
  },
  {
    illustration: (
      <div
        className="w-full h-10 mt-12 transition-all rounded-lg shadow pointer-events-none text-on-surface gradient-button from-red-container to-green-container dark:shadow-black"
        style={
          {
            "--tw-gradient-via": "rgb(var(--color-purple-container) / 1)",
          } as CSSProperties
        }
      />
    ),
    title: "CSS Animated Gradient Button",
    summary:
      "The method behind the animated gradient button on this page, with a detailed step-by-step walkthrough.",
    url: "/blog/animated-gradient-button",
    tags: ["CSS"],
  },
  {
    illustration: <DvdScreensaverIllustration />,
    title: "CSS-only DVD Screensaver animation: a visual walkthrough",
    summary:
      "An in-depth look at how I created a DVD screensaver animation without any Javascript, presented with dynamic examples and code snippets.",
    url: "/blog/dvd",
    tags: ["CSS"],
  },
  {
    illustration: <Leverage />,
    title: "Prioritizing High-leverage Activities",
    summary:
      "An opinion piece about productivity habits and considering automation for repetitive tasks. Inspired by the book The Effective Engineer by Edmond Lau.",
    url: "https://www.wyeworks.com/blog/2022/09/26/prioritizing-high-leverage-activities/",
    tags: ["Productivity"],
  },
  {
    illustration: <InteractiveSurfaces />,
    title: "Material interaction states with Tailwind",
    summary:
      "A deep dive into my plugin to style interactive surfaces with Tailwind according to the Material Design guidelines.",
    url: "https://www.wyeworks.com/blog/2022/11/15/material-interaction-states-with-tailwind/",
    tags: ["Tailwind"],
  },
  {
    illustration: <ModeAwareColors />,
    title: "Mode-aware colors with Tailwind",
    summary:
      "The reasoning behind my tailwind-mode-aware-colors plugin and a quick look into its internals.",
    url: "https://www.wyeworks.com/blog/2022/10/12/mode-aware-colors-with-tailwind-css/",
    tags: ["Tailwind"],
  },
  {
    illustration: <Portals />,
    title: "Optimizing expensive React component mounts",
    summary:
      "How we fixed a performance problem and improved metrics by 92% in a real-time React application thanks to reverse portals.",
    url: "https://www.wyeworks.com/blog/2022/09/12/optimizing-expensive-react-component-mounts/",
    tags: ["React"],
  },
  {
    illustration: <Screenshots />,
    title: "Screenshot testing React components with Viteshot",
    summary:
      "How and why I set up a GitHub action to take screenshots of components in the Prisma UI library.",
    url: "https://www.wyeworks.com/blog/2022/03/16/screenshot-testing-react-components-with-viteshot/",
    tags: ["React"],
  },
  {
    illustration: <Grids />,
    title: "Harnessing the power of responsive CSS grids",
    summary:
      "A fun experiment with a product pricing table that changed drastically between viewport sizes.",
    url: "https://www.wyeworks.com/blog/2021/08/07/harnessing-the-power-of-responsive-css-grids/",
    tags: ["CSS"],
  },
];
