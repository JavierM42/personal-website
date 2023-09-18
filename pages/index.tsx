import { motion } from "framer-motion";
import LineWrappingInput from "react-line-wrapping-input";
import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import BlogPostCards from "../components/BlogPostCards";
import DarkModeToggle from "../components/DarkModeToggle";
import ExternalLink from "../components/ExternalLink";
import FormalEducationCard from "../components/FormalEducationCard";
import OpenSourceCard from "../components/OpenSourceCard";
import RubikCube from "../components/hero/RubikCube";
import TryDynamicColor from "../components/open_source/TryDynamicColor";
import WorkExperienceCards from "../components/work_experience/WorkExperienceCards";

export default function Home() {
  return (
    <>
      <div className="w-full bg-primary-container/5">
        <div className="flex flex-col max-w-4xl px-3 mx-auto leading-loose md:px-0 text-on-background">
          <DarkModeToggle />

          <header>
            <div className="max-w-full mx-auto mt-24 mb-12 w-[440px] aspect-square">
              <RubikCube />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3 }}
            >
              <h1 className="z-10 mt-6 mb-2 text-6xl font-bold text-center text-primary">
                Hi, Javi here.
              </h1>
              <p className="mb-20 text-2xl leading-loose text-center text-on-primary-container/70">
                I'm a frontend engineer with a passion for great user
                experiences.
              </p>
            </motion.div>
          </header>

          <main className="space-y-8">
            <div>
              <h2 className="inline">Work Experience</h2>
              <span className="ml-1 text-xs tracking-wider uppercase text-on-surface-variant">
                2019 - present
              </span>
            </div>
            <div>
              <WorkExperienceCards />
            </div>

            <div>
              <h2 className="inline">Formal Education</h2>
              <span className="ml-1 text-xs tracking-wider text-on-surface-variant">
                2012 - 2019
              </span>
            </div>
            <ol className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
              <FormalEducationCard
                name="Engineering Degree in Computer Science"
                content={<p>Universidad de la República (Uruguay)</p>}
                dates={"From 2014 to 2019"}
              />
              <FormalEducationCard
                name="Object-Oriented Programmer"
                content={<p>Universidad ORT Uruguay</p>}
                dates={"From 2012 to 2014"}
              />
            </ol>

            <h2>Open Source</h2>
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <OpenSourceCard
                name="tailwind-material-colors"
                content="A TailwindCSS Plugin to generate dynamic color themes according to the Material Design guidelines."
                cta={<TryDynamicColor />}
                stripClass="bg-gradient-to-r from-red-container to-green-container via-purple-container"
              />
              <OpenSourceCard
                name="tailwind-material-surfaces"
                content="A TailwindCSS Plugin that integrates Material Design interaction states into Tailwind."
                cta={
                  <a
                    className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
                    href="https://github.com/JavierM42/tailwind-material-surfaces"
                    target="_blank"
                  >
                    View on GitHub
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                }
                stripClass="bg-gradient-to-r to-primary-container-press from-primary"
              />
              <OpenSourceCard
                name="tailwind-mode-aware-colors"
                content="A TailwindCSS Plugin to style light and dark modes with a single class."
                cta={
                  <a
                    className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
                    href="https://github.com/JavierM42/tailwind-mode-aware-colors"
                    target="_blank"
                  >
                    View on GitHub
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                }
                stripClass="bg-gradient-to-r from-tertiary-container-dark to-tertiary-container-light"
              />
              <OpenSourceCard
                name={
                  <LineWrappingInput
                    value="react-line-wrapping-input"
                    placeholder="react-line-wrapping-input"
                    containerClassName="-m-1 rounded-md border border-outline/20 hover:border-outline/60 focus-within:border-outline/60 transition-colors"
                    className="p-1 bg-transparent focus:outline-none"
                  />
                }
                content="☝️ A customizable input-like component with line wrapping and autosizing."
                cta={
                  <a
                    className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
                    href="https://github.com/JavierM42/react-line-wrapping-input"
                    target="_blank"
                  >
                    View on GitHub
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                }
                stripClass="bg-gradient-to-r from-outline to-outline/20"
              />
              <OpenSourceCard
                name="react-selection-manager"
                content="A tiny selection management library with support for keyboard modifiers."
                cta={
                  <a
                    className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
                    href="https://github.com/JavierM42/react-selection-manager"
                    target="_blank"
                  >
                    View on GitHub
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                }
                stripClass="bg-gradient-to-r to-secondary-container from-primary/40"
              />
              <OpenSourceCard
                name="MTGBarato"
                content="I built a simple web app to help my local trading card game community."
                stripClass="bg-[#f6ad55] dark:bg-[#88501d]"
                cta={
                  <a
                    className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap font-[Nunito]"
                    href="https://github.com/JavierM42/mtgbarato"
                    target="_blank"
                  >
                    View on GitHub
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                }
              />
            </ol>

            <h2>Blog posts</h2>
            <BlogPostCards />
            <p className="mt-10 text-center">
              Drop me a line at{" "}
              <a href="mailto:hi@javiermorales.dev">hi@javiermorales.dev</a> ✉️
            </p>
          </main>
          <footer className="flex items-center justify-center w-full h-20 space-x-2 text-sm">
            <ExternalLink
              href="https://github.com/JavierM42"
              className="flex items-center justify-center w-12 h-12 rounded-full text-primary hover:bg-primary-container-hover/30"
              tooltip="GitHub @JavierM42"
            >
              <GitHubLogo className="w-8 h-8" />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/javierm42/"
              className="flex items-center justify-center w-12 h-12 rounded-full text-primary hover:bg-primary-container-hover/30"
              tooltip="LinkedIn /javierm42"
            >
              <LinkedInLogo className="w-6 h-6" />
            </ExternalLink>
          </footer>
        </div>
      </div>
    </>
  );
}
