import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
import WorkExperienceCard from "../components/WorkExperienceCard";
import ElixirLogo from "../assets/techs/elixir.svg";
import NextLogo from "../assets/techs/nextjs.svg";
import RailsLogo from "../assets/techs/rails.svg";
import ReactLogo from "../assets/techs/react.svg";
import RubyLogo from "../assets/techs/ruby.svg";
import TailwindLogo from "../assets/techs/tailwind.svg";
import TypescriptLogo from "../assets/techs/typescript.svg";
import VueLogo from "../assets/techs/vue.svg";
import Prisma from "../assets/companies/prisma.svg";
import RetroAlly from "../assets/companies/retroally.svg";
import WyeWorks from "../assets/companies/wyeworks.svg";
import FormalEducationCard from "../components/FormalEducationCard";
import OpenSourceCard from "../components/OpenSourceCard";
import BlogPostCard from "../components/BlogPostCard";

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
          <ol className="grid grid-cols-1 gap-6">
            <WorkExperienceCard
              name={
                <div className="flex items-center justify-center gap-1.5">
                  <Prisma aria-label="Prisma" className="inline-block h-10" />
                  at
                  <WyeWorks
                    aria-label="WyeWorks"
                    className="inline-block h-5"
                  />
                </div>
              }
              collapsedTitle="An innovative online school"
              content={
                <>
                  <p>
                    I worked on a videoconferencing app with interactive lesson
                    slides for the Prisma online school.
                  </p>
                  <p>
                    We faced challenges such as concurrent editing, rich text
                    content, and sharing code between repositories with a
                    components library.
                  </p>
                  <p>
                    Visit the{" "}
                    <a
                      href="legacy.joinprisma.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prisma Case Study
                    </a>{" "}
                    page.
                  </p>
                </>
              }
              expandedClass="bg-purple-container"
              collapsedClass="interactive-bg-purple-container"
              buttonClass="interactive-bg-purple-container"
              dates="From 2020 to 2022"
              techs={[
                <ReactLogo aria-label="React" className="h-full" key="react" />,
                <TypescriptLogo
                  aria-label="TypeScript"
                  className="h-full"
                  key="ts"
                />,
                <TailwindLogo
                  aria-label="Tailwind CSS"
                  className="h-full"
                  key="tailwind"
                />,
                <NextLogo aria-label="Next.js" className="h-full" key="next" />,
              ]}
            />
            <WorkExperienceCard
              name={
                <div className="flex items-center justify-center gap-1.5">
                  <img
                    src="/img/emeritus.png"
                    alt="Emeritus"
                    className="inline-block h-10"
                  />
                  at
                  <WyeWorks
                    aria-label="WyeWorks"
                    className="inline-block h-5"
                  />
                </div>
              }
              collapsedTitle="A large-scale EdTech company"
              content={
                <>
                  <p>
                    As part of a large team of about 30 engineers, we rebuilt a
                    legacy system to manage course enrollments. We then tried to
                    maximize growth with a series of A/B experiments.
                  </p>
                  <p>
                    Later on, I led the three-person team that integrated a
                    third-party referrals system and then migrated it to an
                    in-house solution with no downtime.
                  </p>
                </>
              }
              expandedClass="bg-green-container"
              collapsedClass="interactive-bg-green-container"
              buttonClass="interactive-bg-green-container"
              dates="From 2019 to 2020"
              techs={[
                <RubyLogo aria-label="Ruby" className="h-full" key="ruby" />,
                <RailsLogo aria-label="Rails" className="h-full" key="rails" />,
              ]}
            />
            <WorkExperienceCard
              name={
                <div className="flex items-center justify-center gap-1.5">
                  <RetroAlly role="presentation" className="inline-block h-7" />
                  RetroAlly at
                  <WyeWorks
                    aria-label="WyeWorks"
                    className="inline-block h-5"
                  />
                </div>
              }
              collapsedTitle="A web app for remote retrospectives"
              content={
                <>
                  <p>
                    I helped to build RetroAlly, an app that allows agile teams
                    to have remote retrospectives.
                  </p>
                  <p>
                    Apart from developing, there I worked closely with a UX
                    expert to broaden my skills in that field.
                  </p>
                  <p>
                    Live at{" "}
                    <a
                      href="legacy.joinprisma.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      retroally.com
                    </a>
                  </p>
                </>
              }
              expandedClass="bg-red-container"
              collapsedClass="interactive-bg-red-container"
              buttonClass="interactive-bg-red-container"
              dates="2019"
              techs={[
                <VueLogo aria-label="Vue" className="h-full" key="vue" />,
                <TailwindLogo
                  aria-label="Tailwind CSS"
                  className="h-full"
                  key="tailwind"
                />,
                <ElixirLogo
                  aria-label="Elixir"
                  className="h-full"
                  key="elixir"
                />,
              ]}
            />
          </ol>

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
              collapsedContent="A TailwindCSS Plugin to generate dynamic color themes with Material Design guidelines."
              expandedContent={""}
              techs={[
                <TailwindLogo aria-label="Tailwind CSS" key="tailwind" />,
              ]}
              cta="Try it live on this page"
            />
            <OpenSourceCard
              name="tailwind-material-surfaces"
              collapsedContent="A TailwindCSS Plugin to get Material Design interaction states with a single class."
              expandedContent={""}
              techs={[
                <TailwindLogo aria-label="Tailwind CSS" key="tailwind" />,
              ]}
              cta="View on GitHub"
            />
            <OpenSourceCard
              name="tailwind-mode-aware-colors"
              collapsedContent="A TailwindCSS Plugin to style light and dark modes with a single class."
              expandedContent={""}
              techs={[
                <TailwindLogo aria-label="Tailwind CSS" key="tailwind" />,
              ]}
              cta="View on GitHub"
            />
            <OpenSourceCard
              name="MTGBarato"
              collapsedContent="I built a simple website to help my local gaming community."
              expandedContent={""}
              techs={[
                <RubyLogo aria-label="Ruby" key="ruby" />,
                <RailsLogo aria-label="Rails" key="rails" />,
                <TailwindLogo aria-label="Tailwind CSS" key="tailwind" />,
              ]}
              cta="Read more"
            />
          </ol>

          <h2>Blog posts</h2>
          <ol className="grid grid-cols-2 gap-6">
            {/* TODO los de tailwind */}
            <BlogPostCard
              title="Prioritizing High-leverage Activities"
              summary="An opinion piece about productivity habits and considering automation for repetitive tasks. Inspired by the book The Effective Engineer by Edmond Lau."
              url="https://www.wyeworks.com/blog/2022/09/26/prioritizing-high-leverage-activities/"
            />
            <BlogPostCard
              title="Optimizing Expensive React Component Mounts"
              summary="How we fixed a performance problem and improved metrics by 92% in a real-time React application."
              url="https://www.wyeworks.com/blog/2022/09/12/optimizing-expensive-react-component-mounts/"
            />
            <BlogPostCard
              title="Screenshot testing React Components with Viteshot"
              summary="How and why I set up a GitHub action to take screenshots of components in the Prisma UI library."
              url="https://www.wyeworks.com/blog/2022/03/16/screenshot-testing-react-components-with-viteshot/"
            />
            <BlogPostCard
              title="Harnessing the power of repsonsive CSS grids"
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
