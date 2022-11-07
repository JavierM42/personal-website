import { motion } from "framer-motion";
import Head from "next/head";
import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import BlogPostCards from "../components/BlogPostCards";
import DarkModeToggle from "../components/DarkModeToggle";
import ExternalLink from "../components/ExternalLink";
import FormalEducationCard from "../components/FormalEducationCard";
import RubikCube from "../components/hero/RubikCube";
import OpenSourceCard from "../components/OpenSourceCard";
import TryDynamicColor from "../components/open_source/TryDynamicColor";
import WorkExperienceCards from "../components/WorkExperienceCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>JavierM42</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#416900"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <div className="w-full bg-primary-container/10">
        <div className="flex flex-col max-w-3xl px-3 mx-auto leading-loose md:px-0 text-on-background">
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
            <h2>Work Experience</h2>
            <WorkExperienceCards />

            <h2>Formal Education</h2>
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
          <footer className="flex items-center justify-center w-full h-20 mt-20 space-x-2 text-sm">
            <ExternalLink
              href="https://github.com/JavierM42"
              className="flex items-center justify-center w-12 h-12 rounded-full text-primary hover:bg-primary-container-hover/30"
            >
              <GitHubLogo className="w-8 h-8" />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/javierm42/"
              className="flex items-center justify-center w-12 h-12 rounded-full text-primary hover:bg-primary-container-hover/30"
            >
              <LinkedInLogo className="w-6 h-6" />
            </ExternalLink>
          </footer>
        </div>
      </div>
    </>
  );
}
