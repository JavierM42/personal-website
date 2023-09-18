import classNames from "classnames";
import { useEffect, useState } from "react";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import ClearSession from "../../assets/companies/clearsession.svg";
import Emeritus from "../../assets/companies/emeritus.svg";
import PrismaIsotype from "../../assets/companies/prisma-isotype.svg";
import Prisma from "../../assets/companies/prisma.svg";
import RetroAlly from "../../assets/companies/retroally.svg";
import RetroAllyText from "../../assets/companies/retroallytext.svg";
import WyeWorks from "../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperienceCards() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.target);
      if (
        !(event.target as HTMLElement).matches(
          "#work-experience-cards li, #work-experience-cards li *"
        )
      ) {
        setExpandedCardIndex((value) => {
          if (value !== null) {
            updateTheme({ primary: "#416900" }, "class");
          }
          return null;
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // TODO responsive

  return (
    <ol
      id="work-experience-cards"
      className={classNames(
        "grid gap-12 transition-all duration-300 aspect-[16/10] mb-32",
        {
          "grid-cols-[1fr_1fr]": expandedCardIndex === null,
          "grid-cols-[4fr_1fr]":
            expandedCardIndex !== null && expandedCardIndex % 2 === 0,
          "grid-cols-[1fr_4fr]":
            expandedCardIndex !== null && expandedCardIndex % 2 === 1,
          "grid-rows-[1fr_1fr]": expandedCardIndex === null,
          "grid-rows-[3fr_1fr]":
            expandedCardIndex !== null && expandedCardIndex < 4 / 2,
          "grid-rows-[1fr_3fr]":
            expandedCardIndex !== null && expandedCardIndex >= 4 / 2,
        }
      )}
    >
      <WorkExperienceCard
        icon={{
          node: <ClearSession role="Presentation" />,
          placement: {
            centered: {
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              rotate: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
            popping: {
              top: 0,
              left: 0,
              x: "-60%",
              y: "59%",
              rotate: -8,
            },
          },
        }}
        name={
          <div className="flex items-center gap-1.5">
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
              started. Interesting technical aspects of the project include
              working with HTML canvas and recording user actions to replay at a
              later time.
            </p>
          </>
        }
        className="shadow-blue/10 border-blue-container"
        dates="2022 - 2023"
        techs={[
          {
            name: "TypeScript",
            placementInitial: { top: 200, left: 50, rotate: 0 },
            placement: { top: 135, left: -30, rotate: 5 },
          },
          {
            name: "React",
            placementInitial: { top: 200, left: 50, rotate: 0 },
            placement: { top: 165, left: -50, rotate: -15 },
          },
          {
            name: "NextJS",
            placementInitial: { top: 200, left: 50, rotate: 0 },
            placement: { top: 190, left: -30, rotate: -4 },
          },
          {
            name: "TailwindCSS",
            placementInitial: { top: 200, left: 50, rotate: 0 },
            placement: { top: 215, left: -50, rotate: 6 },
          },
        ]}
        isExpanded={expandedCardIndex === 0}
        isThumbnail={expandedCardIndex !== null && expandedCardIndex !== 0}
        onExpand={() => {
          updateTheme({ primary: "#2972f1" }, "class");
          setExpandedCardIndex(0);
        }}
        hoverGradientStops="from-blue/20 to-blue/0"
      />
      <WorkExperienceCard
        icon={{
          node: <PrismaIsotype className="text-[#7224F9]" />,
          placement: {
            centered: {
              top: "50%",
              right: "50%",
              x: "50%",
              y: "-50%",
              rotate: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
            popping: {
              top: 0,
              right: 0,
              x: "65%",
              y: "-35%",
              rotate: 6,
            },
          },
        }}
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
              We built the application from scratch as well as a UI library to
              be used throughout the Prisma ecosystem. We faced challenges such
              as concurrent editing, screensharing, real-time updates and
              implementing a rich text editor.
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
        className="shadow-purple/10 border-purple-container"
        dates="2020 - 2022"
        techs={[
          {
            name: "TypeScript",
            placementInitial: { top: 50, right: 50, rotate: 0 },
            placement: { top: -28, right: 5, rotate: -5 },
          },
          {
            name: "TailwindCSS",
            placementInitial: { top: 50, right: 50, rotate: 0 },
            placement: { top: -50, right: -35, rotate: -15 },
          },
          {
            name: "React",
            placementInitial: { top: 50, right: 50, rotate: 0 },
            placement: { top: -15, right: -59, rotate: 12 },
          },
          {
            name: "NextJS",
            placementInitial: { top: 50, right: 50, rotate: 0 },
            placement: { top: 60, right: -30, rotate: 20 },
          },
        ]}
        isExpanded={expandedCardIndex === 1}
        isThumbnail={expandedCardIndex !== null && expandedCardIndex !== 1}
        onExpand={() => {
          updateTheme({ primary: "#6f22f8" }, "class");
          setExpandedCardIndex(1);
        }}
        hoverGradientStops="from-purple/20 to-purple/0"
      />
      <WorkExperienceCard
        icon={{
          node: (
            <Emeritus
              className="text-[#040404] dark:text-white"
              viewBox="0 0 126 126"
            />
          ),
          placement: {
            centered: {
              bottom: "50%",
              left: "50%",
              x: "-50%",
              y: "50%",
              rotate: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
            popping: {
              bottom: 0,
              left: 0,
              x: "120%",
              y: "55%",
              rotate: 5,
            },
          },
        }}
        name={
          <div className="flex items-center gap-1.5">
            <Emeritus
              aria-label="Emeritus"
              className="inline-block h-10 text-[#04bc6c] dark:text-white"
              viewBox="126 0 274 126"
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
            <p>
              Emeritus offers online courses from top universities. We rebuilt a
              legacy system to manage course enrollments. After the initial
              release, we ran a series of A/B experiments to increase conversion
              rates and maximize growth.
            </p>
            <p>
              As part of one of those experiments, I led the three-person task
              force that integrated a third-party referrals system and then
              migrated it to an in-house solution with no downtime.
            </p>
          </>
        }
        className="shadow-green/10 border-green-container"
        dates="2019 - 2020"
        techs={[
          {
            name: "Ruby",
            placementInitial: { bottom: 50, left: 250, rotate: 0 },
            placement: { bottom: -30, left: 210, rotate: 28 },
          },
          {
            name: "Rails",
            placementInitial: { bottom: 50, left: 250, rotate: 0 },
            placement: { bottom: -32, left: 245, rotate: 6 },
          },
        ]}
        isExpanded={expandedCardIndex === 2}
        isThumbnail={expandedCardIndex !== null && expandedCardIndex !== 2}
        onExpand={() => {
          updateTheme({ primary: "#006634" }, "class");
          setExpandedCardIndex(2);
        }}
        hoverGradientStops="from-green/20 to-green/0"
      />
      <WorkExperienceCard
        icon={{
          node: <RetroAlly />,
          placement: {
            centered: {
              bottom: "50%",
              right: "50%",
              x: "50%",
              y: "50%",
              rotate: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
            popping: {
              bottom: 0,
              right: 0,
              x: "35%",
              y: "35%",
              rotate: -5,
            },
          },
        }}
        name={
          <div className="flex items-center gap-1.5">
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
        className="shadow-red/10 border-red-container"
        dates="2019"
        techs={[
          {
            name: "TailwindCSS",
            placementInitial: { bottom: 50, right: 30, rotate: 0 },
            placement: { bottom: 70, right: -30, rotate: -18 },
          },
          {
            name: "Vue",
            placementInitial: { bottom: 50, right: 30, rotate: 0 },
            placement: { bottom: 100, right: -40, rotate: -10 },
          },
          {
            name: "Elixir",
            placementInitial: { bottom: 50, right: 30, rotate: 0 },
            placement: { bottom: 134, right: -30, rotate: -8 },
          },
        ]}
        isExpanded={expandedCardIndex === 3}
        isThumbnail={expandedCardIndex !== null && expandedCardIndex !== 3}
        onExpand={() => {
          updateTheme({ primary: "#ff7645" }, "class");
          setExpandedCardIndex(3);
        }}
        hoverGradientStops="from-red/20 to-red/0"
      />
    </ol>
  );
}
