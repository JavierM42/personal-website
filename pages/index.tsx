import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import BlogPostCards from "../components/BlogPostCards";
import ExternalLink from "../components/ExternalLink";
import { SectionHeader } from "../components/SectionHeader";
import { DevNote } from "../components/dev_notes/DevNote";
import { DevNotesSection } from "../components/dev_notes/DevNotesSection";
import RubikCube from "../components/hero/RubikCube";
import { NavBar } from "../components/nav/NavBar";
import OpenSourceCards from "../components/open_source/OpenSourceCards";
import WorkExperienceCards from "../components/work_experience/WorkExperienceCards";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-primary-container to-tertiary-container -z-1 dark:from-primary-container/40 dark:to-tertiary-container/40" />
      <div className="relative w-full px-4">
        <div className="flex flex-col max-w-4xl pt-16 mx-auto leading-loose text-on-background">
          <DevNote className="absolute w-60 top-20 left-12 rotate-[-3deg]">
            The favicon tracks the cube state (<i>with declarative syntax!</i>).
            <br />
            As the state changes, a <code>{"next/head"}</code> block receives it
            as a prop and updates SVG markup inside a{" "}
            <code>{"<link rel=“icon”>"}</code> element.
          </DevNote>
          <header>
            <NavBar />
            <div className="max-w-full mx-auto mt-24 mb-12 w-[440px] aspect-square">
              <RubikCube />
            </div>
            <div>
              <h1 className="z-10 mt-6 mb-2 text-6xl font-bold text-center text-primary">
                Hi, Javi here.
              </h1>
              <p className="mb-20 text-2xl leading-loose text-center text-on-primary-container/70">
                I'm a software engineer with a passion for great user
                experiences.
              </p>
            </div>
          </header>

          <main className="max-w-full mt-48 space-y-48 overflow-x-visible">
            <div className="relative">
              <SectionHeader id="work-experience" heading="Work" />
              <DevNote className="absolute w-56 -top-12 left-32 rotate-[-3deg]">
                When a card is clicked, the <code>grid-template-columns</code>{" "}
                and <code>grid-template-rows</code> properties of the grid
                change. Support for animation of these properties was recently
                added by modern browsers.
              </DevNote>
              <WorkExperienceCards />
            </div>
            <div>
              <SectionHeader id="open-source" heading="Open Source" />
              <OpenSourceCards />
            </div>
            <div>
              <SectionHeader id="blog" heading="Blog posts" />
              <BlogPostCards />
            </div>
            <div>
              <SectionHeader id="dev-notes" heading="Dev notes" />
              <DevNotesSection />
            </div>
            <div>
              <p className="mt-10 text-center">
                Drop me a line at{" "}
                <a href="mailto:hi@javiermorales.dev">hi@javiermorales.dev</a>{" "}
                ✉️
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
      </div>
    </>
  );
}
