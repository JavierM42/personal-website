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
import { DevNote } from "../dev_notes/DevNote";

export default function WorkExperienceCards() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setExpandedCardIndex((value) => {
        if (value !== null) {
          updateTheme({ primary: "#416900" }, "class");
        }
        return null;
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <DevNote className="absolute w-64 top-40 -right-24 rotate-[6deg]">
        {expandedCardIndex === null ? (
          "Click on a card to read this note."
        ) : (
          <>
            If you hover over a technology icon, you'll get a tooltip after a
            short while. Quickly hovering a different icon will open the tooltip
            instantly for a better experience. This is achieved with{" "}
            <a href="https://floating-ui.com">Floating UI</a>'s{" "}
            <code>FloatingDelayGroup</code>.
          </>
        )}
      </DevNote>
      <DevNote className="absolute w-72 top-80 -left-24 -rotate-[4deg]">
        Credit where credit is due. I adapted the 3D hover effect from{" "}
        <a
          href="https://framer.university/resources/3d-hover-override"
          target="_blank"
        >
          this article on Framer University
        </a>
        , but my tweaks were minimal.
      </DevNote>
      <ol
        id="work-experience-cards"
        className={classNames(
          "grid mx-auto max-w-[calc(100vw-80px)] sm:max-w-[480px] lg:max-w-none lg:p-0 gap-12 transition-all motion-reduce:transition-none duration-300 lg:aspect-[16/10] mb-32 grid-cols-[1fr]",
          {
            "lg:grid-cols-[1fr_1fr]": expandedCardIndex === null,
            "grid-rows-[300px_300px_300px_300px]": expandedCardIndex === null,
            // Manually adjusted height
            "grid-rows-[546px_224px_224px_224px] sm:grid-rows-[420px_260px_260px_260px]":
              expandedCardIndex === 0,
            "grid-rows-[208px_576px_208px_208px] sm:grid-rows-[270px_390px_270px_270px]":
              expandedCardIndex === 1,
            "grid-rows-[205px_205px_585px_205px] sm:grid-rows-[270px_270px_450px_270px]":
              expandedCardIndex === 2,
            "grid-rows-[240px_240px_240px_480px] sm:grid-rows-[270px_270px_270px_390px]":
              expandedCardIndex === 3,
            "lg:grid-cols-[4fr_1fr]":
              expandedCardIndex !== null && expandedCardIndex % 2 === 0,
            "lg:grid-cols-[1fr_4fr]":
              expandedCardIndex !== null && expandedCardIndex % 2 === 1,
            "lg:grid-rows-[1fr_1fr]": expandedCardIndex === null,
            "lg:grid-rows-[3fr_1fr]":
              expandedCardIndex !== null && expandedCardIndex < 4 / 2,
            "lg:grid-rows-[1fr_3fr]":
              expandedCardIndex !== null && expandedCardIndex >= 4 / 2,
          }
        )}
      >
        <WorkExperienceCard
          icon={{
            node: <ClearSession role="presentation" />,
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
              <span className="-mt-1 text-[25px] font-bold leading-none text-blue dark:text-white">
                ClearSession
              </span>
              <span className="-mb-0.5">at</span>
              <WyeWorks
                aria-label="WyeWorks"
                className="h-4 text-[#0B0B0B] dark:text-white"
              />
            </div>
          }
          collapsedTitle="A health app focused on communication"
          content={
            <>
              <p>
                ClearSession improves how patients and healthcare providers
                interact, focusing on data visualization and clear communcation
                of outcomes.
              </p>
              <p>
                I joined the team in late 2022, about six months after
                development started. Interesting technical aspects of the
                project include working with HTML canvas and recording user
                actions to replay at a later time.
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
          initialPerspective={{ x: 1, y: 10 }}
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
                className="inline-block h-9 -mt-1 text-[#7224F9] dark:text-white"
              />
              <span className="-mb-0.5">at</span>
              <WyeWorks
                aria-label="WyeWorks"
                className="inline-block h-4 text-[#0B0B0B] dark:text-white"
              />
            </div>
          }
          collapsedTitle="An innovative online school"
          content={
            <>
              <p>
                I worked on a videoconferencing app with interactive lesson
                slides for the Prisma online school. We built the application
                from scratch as well as a UI library to be used throughout the
                Prisma ecosystem. We faced challenges such as concurrent
                editing, screensharing, real-time updates and implementing a
                rich text editor.
              </p>
              <p>
                There's more information on the{" "}
                <a
                  href="https://legacy.joinprisma.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prisma Case Study website
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
          initialPerspective={{ x: 1, y: -15 }}
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
                className="inline-block h-[18px] text-[#04bc6c] dark:text-white -mt-px"
                viewBox="126 43 270 45"
              />
              <span className="-mb-0.5">at</span>
              <WyeWorks
                aria-label="WyeWorks"
                className="inline-block h-4 text-[#0B0B0B] dark:text-white"
              />
            </div>
          }
          collapsedTitle="An online education platform"
          content={
            <>
              <p>
                Emeritus offers online courses from top universities. We rebuilt
                a legacy system to manage course enrollments. After the initial
                release, we ran a series of A/B experiments to increase
                conversion rates and maximize growth.
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
          initialPerspective={{ x: -2, y: 15 }}
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
                className="inline-block -mt-[3px] h-8 text-red dark:text-white"
              />
              <span className="-mb-0.5">at</span>
              <WyeWorks
                aria-label="WyeWorks"
                className="inline-block h-4 text-[#0B0B0B] dark:text-white"
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
                Apart from developing, during my time there I worked closely
                with a UX expert to broaden my skills in that field.
              </p>
              <p>
                Live at{" "}
                <a
                  href="https://retroally.com"
                  target="_blank"
                  rel="noreferrer"
                >
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
          initialPerspective={{ x: -2, y: -10 }}
        />
      </ol>
    </>
  );
}
