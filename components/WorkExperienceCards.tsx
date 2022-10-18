import Prisma from "../assets/companies/prisma.svg";
import RetroAlly from "../assets/companies/retroally.svg";
import RetroAllyText from "../assets/companies/retroallytext.svg";
import WyeWorks from "../assets/companies/wyeworks.svg";
import ElixirLogo from "../assets/techs/elixir.svg";
import NextLogo from "../assets/techs/nextjs.svg";
import RailsLogo from "../assets/techs/rails.svg";
import Emeritus from "../assets/companies/emeritus.svg";
import ReactLogo from "../assets/techs/react.svg";
import RubyLogo from "../assets/techs/ruby.svg";
import TailwindLogo from "../assets/techs/tailwind.svg";
import TypescriptLogo from "../assets/techs/typescript.svg";
import VueLogo from "../assets/techs/vue.svg";
import WorkExperienceCard from "../components/WorkExperienceCard";

export default function WorkExperienceCards() {
  return (
    <ol className="grid grid-cols-1 gap-6">
      <WorkExperienceCard
        name={
          <div className="flex items-center gap-1.5">
            <Prisma
              aria-label="Prisma"
              className="inline-block h-10 text-[#7224F9] dark:text-white"
            />
            at
            <WyeWorks
              aria-label="WyeWorks"
              className="inline-block h-5 text-[#0B0B0B] dark:text-white"
            />
          </div>
        }
        collapsedTitle="An innovative online school"
        content={
          <>
            <p>
              I worked on a videoconferencing app with interactive lesson slides
              for the Prisma online school.
            </p>
            <p>
              The team built the application from scratch as well as a
              components library to be used on other apps within the Prisma
              ecosystem. We faced challenges such as concurrent editing,
              screensharing, real-time updates and implementing a rich text
              editor.
            </p>
            <p>
              Visit the{" "}
              <a href="legacy.joinprisma.com" target="_blank" rel="noreferrer">
                Prisma Case Study
              </a>{" "}
              page.
            </p>
          </>
        }
        expandedClass="border-purple-container"
        collapsedClass="border-purple-container hover:bg-purple/[0.04] active:bg-purple/[0.12]"
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
        primaryColor="#6f22f8"
      />
      <WorkExperienceCard
        name={
          <div className="flex items-center gap-1.5">
            <Emeritus
              aria-label="Emeritus"
              className="inline-block h-10 text-[#040404] dark:text-white"
            />
            at
            <WyeWorks
              aria-label="WyeWorks"
              className="inline-block h-5 text-[#0B0B0B] dark:text-white"
            />
          </div>
        }
        collapsedTitle="A large-scale EdTech company"
        content={
          <>
            <p>Emeritus offers online courses from top universities.</p>
            <p>
              I was in a team of about 30 engineers, we rebuilt their legacy
              system to manage course enrollments. After the initial release, we
              ran a series of A/B experiments to increase conversion rates and
              maximize growth.
            </p>
            <p>
              As part of one of those experiments, I led the three-person task
              force that integrated a third-party referrals system and then
              migrated it to an in-house solution with no downtime.
            </p>
          </>
        }
        expandedClass="border-green-container"
        collapsedClass="border-green-container hover:bg-green/[0.04] active:bg-green/[0.12]"
        buttonClass="interactive-bg-green-container"
        dates="From 2019 to 2020"
        techs={[
          <RubyLogo aria-label="Ruby" className="h-full" key="ruby" />,
          <RailsLogo aria-label="Rails" className="h-full" key="rails" />,
        ]}
        primaryColor="#006634"
      />
      <WorkExperienceCard
        name={
          <div className="flex items-center gap-1.5">
            <RetroAlly role="presentation" className="inline-block h-7" />
            <RetroAllyText
              role="presentation"
              aria-label="RetroAlly"
              className="inline-block h-7 text-on-surface dark:text-white"
            />
            at
            <WyeWorks
              aria-label="WyeWorks"
              className="inline-block h-5 text-[#0B0B0B] dark:text-white"
            />
          </div>
        }
        collapsedTitle="A web app for remote retrospectives"
        content={
          <>
            <p>
              I helped build RetroAlly, an app that allows agile teams to have
              remote retrospectives.
            </p>
            <p>
              Apart from developing, during my time there I worked closely with
              a UX expert to broaden my skills in that field.
            </p>
            <p>
              Live at{" "}
              <a href="legacy.joinprisma.com" target="_blank" rel="noreferrer">
                retroally.com
              </a>
              .
            </p>
          </>
        }
        expandedClass="border-red-container"
        collapsedClass="border-red-container hover:bg-red/[0.04] active:bg-red/[0.12]"
        buttonClass="interactive-bg-red-container"
        dates="2019"
        techs={[
          <VueLogo aria-label="Vue" className="h-full" key="vue" />,
          <TailwindLogo
            aria-label="Tailwind CSS"
            className="h-full"
            key="tailwind"
          />,
          <ElixirLogo aria-label="Elixir" className="h-full" key="elixir" />,
        ]}
        primaryColor="#ff7645"
      />
    </ol>
  );
}
