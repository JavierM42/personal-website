import ClearSession from "../assets/companies/clearsession.svg";
import Emeritus from "../assets/companies/emeritus.svg";
import Prisma from "../assets/companies/prisma.svg";
import RetroAlly from "../assets/companies/retroally.svg";
import RetroAllyText from "../assets/companies/retroallytext.svg";
import WyeWorks from "../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../components/WorkExperienceCard";

export default function WorkExperienceCards() {
  return (
    <ol className="grid grid-cols-1 gap-6">
      <WorkExperienceCard
        name={
          <div className="flex items-center gap-1.5">
            <ClearSession
              role="Presentation"
              className="inline-block h-6 -mr-0.5"
            />
            <span className="text-2xl font-bold leading-none text-blue dark:text-white">
              ClearSession
            </span>
            at
            <WyeWorks
              aria-label="WyeWorks"
              className="inline-block h-5 text-[#0B0B0B] dark:text-white"
            />
          </div>
        }
        collapsedTitle="A health app focused on communication"
        content={
          <>
            <p>
              ClearSession improves how patients and healthcare providers
              interact, focusing on data visualization and clear communcation of
              outcomes.
            </p>
            <p>
              I joined the team in late 2022, about six months after development
              started, and have worked there since then. Interesting technical
              aspects of the project include working with HTML canvas and
              recording user actions to replay at a later time.
            </p>
          </>
        }
        expandedClass="border-blue-container"
        collapsedClass="border-blue-container hover:bg-blue/[0.04] active:bg-blue/[0.12]"
        buttonClass="interactive-bg-blue-container"
        dates="2022 - present"
        techs={["React", "TypeScript", "TailwindCSS", "NextJS"]}
        primaryColor="#2972f1"
      />
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
              There's more information on the{" "}
              <a
                href="https://legacy.joinprisma.com"
                target="_blank"
                rel="noreferrer"
              >
                Prisma Case Study site
              </a>
              .
            </p>
          </>
        }
        expandedClass="border-purple-container"
        collapsedClass="border-purple-container hover:bg-purple/[0.04] active:bg-purple/[0.12]"
        buttonClass="interactive-bg-purple-container"
        dates="2020 - 2022"
        techs={["React", "TypeScript", "TailwindCSS", "NextJS"]}
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
        collapsedTitle="An online education platform"
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
        dates="2019 - 2020"
        techs={["Ruby", "Rails"]}
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
              <a href="https://retroally.com" target="_blank" rel="noreferrer">
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
        techs={["Vue", "TailwindCSS", "Elixir"]}
        primaryColor="#ff7645"
      />
    </ol>
  );
}
