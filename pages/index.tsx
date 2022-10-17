import { motion, MotionConfig } from "framer-motion";
import Head from "next/head";
import GitHubLogo from "../assets/github.svg";
import BlogPostCard from "../components/BlogPostCard";
import ExternalLink from "../components/ExternalLink";
import FormalEducationCard from "../components/FormalEducationCard";
import OpenSourceCard from "../components/OpenSourceCard";
import Grids from "../components/posts/Grids";
import Leverage from "../components/posts/Leverage";
import Portals from "../components/posts/Portals";
import Screenshots from "../components/posts/Screenshots";
import WorkExperienceCards from "../components/WorkExperienceCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>JavierM42</title>
        <meta name="description" content="TODO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-3xl mx-auto leading-loose text-on-background">
        {/* TODO change for image when I have src */}
        <div className="mt-24 mb-8 shadow-lg rounded-xl w-72 h-72" />
        <h1 className="mb-2 text-6xl font-bold text-primary">Hi, Javi here.</h1>
        <p className="mb-20 text-2xl leading-loose">
          I'm a frontend engineer with a passion for great user experiences.
          {/* TODO & cool animations ;) */}
        </p>

        <main className="mb-64 space-y-8">
          <h2>Work Experience</h2>
          <WorkExperienceCards />

          <h2>Formal Education</h2>
          <ol className="grid grid-cols-2 gap-6">
            <FormalEducationCard
              name="Engineering Degree in Computer Science"
              content={<p>Universidad de la República (Uruguay)</p>}
              dates={"From 2014 to 2019"}
              universityLogo={undefined}
            />
            <FormalEducationCard
              name="Object-Oriented Programmer"
              content={<p>Universidad ORT Uruguay</p>}
              dates={"From 2012 to 2014"}
              universityLogo={undefined}
            />
          </ol>

          <h2>Open Source</h2>
          <ol className="grid grid-cols-2 gap-6">
            <OpenSourceCard
              name="tailwind-material-colors"
              content="A TailwindCSS Plugin to generate dynamic color themes with Material Design guidelines."
              expandedContent="TODO picker"
              cta={
                // TODO transition colors
                <button className="px-6 py-3 text-sm font-bold rounded-lg shadow text-on-surface bg-gradient-to-r from-red-container to-green-container via-purple-container hover:from-red-container-hover hover:to-green-container-hover hover:via-purple-container-hover">
                  Try it, live on this page
                </button>
              }
              stripClass="bg-gradient-to-r from-red-container to-green-container via-purple-container"
            />
            <OpenSourceCard
              name="tailwind-material-surfaces"
              content="A TailwindCSS Plugin to get Material Design interaction states with a single class."
              cta={
                <a
                  className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap"
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
                  className="flex items-center gap-3 mx-2 my-3 text-sm font-bold flex-nowrap"
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
              name="MTGBarato"
              content="I built a simple website to help my local gaming community."
              expandedContent={""}
              cta="Read more"
              stripClass="bg-[#f6ad55]"
            />
          </ol>

          <h2>Blog posts</h2>
          <ol className="grid grid-cols-2 gap-6">
            {/* TODO el otro de tailwind */}
            <BlogPostCard
              illustration={
                <div className="relative z-10 w-48 h-48">
                  <motion.div
                    className="absolute w-3/5 rounded-[10%] h-3/5 bg-on-primary-container"
                    style={{ left: "30%", top: "10%" }}
                    animate={{
                      x: ["0%", "-66%", "-66%", "-33%", "33%", "33%", "0%"],
                      y: ["0%", "66%", "66%", "33%", "-33%", "-33%", "0%"],
                      opacity: [1, 1, 0, 0, 0, 1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      times: [0, 0.25, 0.25, 0.5, 0.75, 0.75, 1],
                      easings: [
                        "easeIn",
                        null,
                        "easeOut",
                        "easeIn",
                        null,
                        "easeOut",
                      ],
                    }}
                  />
                  <motion.div
                    className="absolute w-3/5 rounded-[10%] h-3/5 bg-primary-container"
                    style={{ left: "10%", top: "30%" }}
                    animate={{
                      x: ["0%", "66%", "33%", "-33%", "0%"],
                      y: ["0%", "-66%", "-33%", "33%", "0%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      easings: ["easeIn", "easeOut", "easeIn", "easeOut"],
                    }}
                  />
                  <motion.div
                    className="absolute w-3/5 rounded-[10%] h-3/5 bg-on-primary-container"
                    style={{ left: "30%", top: "10%" }}
                    animate={{
                      x: ["0%", "-66%", "-66%", "-33%", "33%", "33%", "0%"],
                      y: ["0%", "66%", "66%", "33%", "-33%", "-33%", "0%"],
                      opacity: [0, 0, 1, 1, 1, 0, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      times: [0, 0.25, 0.25, 0.5, 0.75, 0.75, 1],
                      easings: [
                        "easeIn",
                        null,
                        "easeOut",
                        "easeIn",
                        null,
                        "easeOut",
                      ],
                    }}
                  />
                </div>
              }
              title="Mode-aware colors with Tailwind"
              summary="The reasoning behind my tailwind-mode-aware-colors plugin and a quick look into its internals."
              url="https://www.wyeworks.com/blog/2022/10/12/mode-aware-colors-with-tailwind-css/"
            />
            <BlogPostCard
              illustration={<Leverage />}
              title="Prioritizing High-leverage Activities"
              summary="An opinion piece about productivity habits and considering automation for repetitive tasks. Inspired by the book The Effective Engineer by Edmond Lau."
              url="https://www.wyeworks.com/blog/2022/09/26/prioritizing-high-leverage-activities/"
            />
            <BlogPostCard
              illustration={<Portals />}
              title="Optimizing Expensive React Component Mounts"
              summary="How we fixed a performance problem and improved metrics by 92% in a real-time React application thanks to reverse portals."
              url="https://www.wyeworks.com/blog/2022/09/12/optimizing-expensive-react-component-mounts/"
            />
            <BlogPostCard
              illustration={<Screenshots />}
              title="Screenshot testing React Components with Viteshot"
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

          {/* <p>
          <p>
            Before that,{' '}
            <TextSwitcher options={[
              {
                heading: 'I helped build a web app for remote agile retrospectives',
                image: <img src="/retroally.png" />,
                body: (
                  <>
                    <p>
                      <ExternalLink href="https://retroally.com">RetroAlly</ExternalLink>{' '}
                      guides retrospectives, which can be a challenge when there isn't an expert moderator around.
                    </p>
                    <p>
                      Born as an internal company project at{' '}
                      <ExternalLink href="https://wyeworks.com">Wyeworks</ExternalLink>
                      , it's now becoming an actual product.
                    </p>
                    <p>
                      I did most of the frontend work on RetroAlly and picked up some UX skills by working closely with
                      the app's UX designer.
                    </p>
                    <p>
                      I still try to help out in RetroAlly whenever my main project allows it.
                    </p>
                  </>
                )
              },
              {
                heading: 'I was a team leader in an EdTech company',
                body: (
                  <>
                    <p>
                      I worked for more than a year as an engineer for <ExternalLink href="https://emeritus.org">Emeritus</ExternalLink>,{' '}
                      where I became technical leader for their referrals program.
                    </p>
                    <p>
                      After integrating an external referrals provider as an A/B testing experiment, our three-person team migrated
                      the system with no downtime to an in-house solution.
                    </p>
                  </>
                )
              },
              {
                heading: 'I built a website to help my local gaming community',
                body: (
                  <>
                    <p>
                      My local Magic: The Gathering community was using social media groups to trade cards, which wasn't very efficient since
                      there's no easy way to filter or sort the posts.
                    </p>
                    <p>
                      I built{' '}
                      <ExternalLink href="http://www.mtgbarato.store">a simple website</ExternalLink>{' '}
                      where players can post their card inventory and wishlist for free.
                    </p>
                    <p>
                      The community loved it! They even organized a charity tournament to help pay for the server costs.
                    </p>
                  </>
                )
              },
              {
                heading: 'I did my thesis on near-symmetrical graph drawing',
                body: (
                  <>
                    <p>
                      Based on{' '}
                      <ExternalLink href="https://www.semanticscholar.org/paper/Detecting-almost-symmetries-of-graphs-Knueven-Ostrowski/1df41d5791ffd1dbe89c291526f36c02db633db4">a paper</ExternalLink>{' '}
                      by Kneuven, Ostrowski and Pokutta, we implemented an algorithm and then a web app to automatically
                      render graphs in a symmetrical or near-symmetrical representation.
                    </p>
                    <p>
                      <ExternalLink href="https://graphsym.herokuapp.com/">GraphSym</ExternalLink> is available for free use.{' '}
                      <i className="italic">
                        Since it's hosted on a free platform, initial load times may be slow.
                      </i>
                    </p>
                  </>
                )
              },
            ]} />.
          </p>

          <p>
            In my spare time{' '}
            <TextSwitcher options={[
              {
                heading: 'I play piano and guitar',
                body: (
                  <>
                    <p>
                      Nowadays I don't play as much, but in my early 20s I even filmed some covers and posted them on YouTube.
                    </p>
                    <p>
                      Here's <ExternalLink href="https://www.youtube.com/watch?v=s9lLHWAfdAU">me playing Robot Rock by Daft Punk</ExternalLink> in 2016.
                    </p>
                  </>
                )
              },
              {
                heading: "I solve Rubik' s cubes",
                // body: (
                //   <p>
                //     My solve times are at around 45s.
                //   </p>
                // )
              },
              {
                heading: "I don't get tired of losing at videogames",
                body: (
                  <>
                    <p>
                      Well, mostly at Age of Empires II.
                    </p>
                    <p>
                      During the pandemic I reconnected with my love for digital gaming, since it's a great way to keep in touch with friends.
                    </p>
                  </>
                )
              },
              { heading: 'I play boardgames' },
              { heading: 'I travel as much as I can' }
            ]} />.
          </p>

          <p>
            Drop me a line at hello@javierm42.dev.
          </p> */}
        </main>
        <footer className="flex justify-center w-full space-x-2 text-sm">
          <ExternalLink href="https://www.linkedin.com/in/javierm42/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/JavierM42">
            GitHub
          </ExternalLink>
        </footer>
      </div>
    </>
  );
}
