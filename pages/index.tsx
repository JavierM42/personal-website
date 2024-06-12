import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import ExternalLink from "../components/ExternalLink";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/home/SectionHeader";
import { BlogPosts } from "../components/home/blog_posts";
import { DevNote } from "../components/home/dev_notes/DevNote";
import { DevNotesSection } from "../components/home/dev_notes/DevNotesSection";
import RubikCube from "../components/home/hero/RubikCube";
import OpenSourceCards from "../components/home/open_source/OpenSourceCards";
import WorkExperienceCards from "../components/home/work_experience/WorkExperienceCards";

export default function Home() {
  return (
    <Layout
      navbarContent={
        <div className="hidden md:contents">
          <a href="#work-experience">Work</a>
          <a href="#open-source">Open Source</a>
          <a href="#blog">Blog</a>
          <div className="relative">
            <a href="#dev-notes">Dev Notes</a>
            <DevNote className="absolute w-48 top-6 -left-24 -rotate-[6deg]">
              Anchor link targets use the <code>scroll-margin</code> CSS
              property so the sticky nav doesn't get in the way.
            </DevNote>
          </div>
        </div>
      }
    >
      <div className="relative flex flex-col max-w-[58rem] px-4 pt-16 mx-auto leading-loose text-on-background">
        <DevNote className="absolute w-60 top-44 left-0 rotate-[-3deg]">
          The favicon tracks the cube state (<i>with declarative syntax!</i>).
          <br />
          As the state changes, a <code>{"next/head"}</code> block receives it
          as a prop and updates SVG markup inside a{" "}
          <code>{"<link rel=“icon”>"}</code> element.
        </DevNote>
        <div className="max-w-full mx-auto mt-24 mb-12 w-[440px] aspect-square">
          <RubikCube />
        </div>
        <div>
          <h1 className="z-10 mt-6 mb-2 text-6xl font-bold text-center text-primary">
            Hi, Javi here.
          </h1>
          <p className="mb-20 text-2xl leading-loose text-center text-on-primary-container/70">
            I'm a software engineer with a passion for great user experiences.
          </p>
        </div>

        <main className="max-w-full mt-48 space-y-48 overflow-x-visible">
          <div className="relative">
            <SectionHeader id="work-experience" heading="Work" />
            <DevNote className="absolute w-56 -top-12 left-32 rotate-[-3deg]">
              When a card is clicked, the <code>grid-template-columns</code> and{" "}
              <code>grid-template-rows</code> properties of the grid change.
              Support for animation of these properties was recently added by
              modern browsers.
            </DevNote>
            <WorkExperienceCards />
          </div>
          <div>
            <SectionHeader id="open-source" heading="Open Source" count={7} />
            <OpenSourceCards />
          </div>
          <BlogPosts />
          <div>
            <SectionHeader id="dev-notes" heading="Dev notes" count={18} />
            <DevNotesSection />
          </div>
          <div>
            <p className="mt-10 text-center">
              Drop me a line at{" "}
              <a href="mailto:hi@javiermorales.dev">hi@javiermorales.dev</a> ✉️
            </p>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-20 space-x-2 text-sm">
          <ExternalLink
            href="https://github.com/JavierM42"
            className="flex items-center justify-center w-12 h-12 transition-colors rounded-full text-primary hover:bg-surface/40"
            label="GitHub @JavierM42"
          >
            <GitHubLogo className="w-8 h-8" />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/javierm42/"
            className="flex items-center justify-center w-12 h-12 transition-colors rounded-full text-primary hover:bg-surface/40"
            label="LinkedIn /javierm42"
          >
            <LinkedInLogo className="w-6 h-6" />
          </ExternalLink>
        </footer>
      </div>
    </Layout>
  );
}
