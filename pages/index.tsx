import { motion } from "framer-motion";
import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import BlogPostCards from "../components/BlogPostCards";
import ExternalLink from "../components/ExternalLink";
import RubikCube from "../components/hero/RubikCube";
import WorkExperienceCards from "../components/work_experience/WorkExperienceCards";
import OpenSourceCards from "../components/open_source/OpenSourceCards";

export default function Home() {
  return (
    <>
      <div className="w-full px-4 bg-primary-container/5">
        <div className="flex flex-col max-w-4xl mx-auto leading-loose text-on-background">
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

          <main className="max-w-full space-y-8 overflow-x-visible">
              <h2 id="work-experience" className="inline scroll-mt-16">
                My Work
              </h2>
            <div>
              <WorkExperienceCards />
            </div>
            <h2 id="open-source" className="scroll-mt-16">
              Open Source
            </h2>
            <OpenSourceCards />
            <h2 id="blog" className="scroll-mt-16">
              Blog posts
            </h2>
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
