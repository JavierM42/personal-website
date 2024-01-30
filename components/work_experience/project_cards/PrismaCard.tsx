import PrismaIsotype from "../../../assets/companies/prisma-isotype.svg";
import Prisma from "../../../assets/companies/prisma.svg";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import WyeWorks from "../../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../WorkExperienceCard";

const PrismaCard = ({
  isExpanded,
  isOtherExpanded,
  onExpand,
}: {
  isExpanded: boolean;
  isOtherExpanded: boolean;
  onExpand: () => void;
}) => (
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
          I worked on a videoconferencing app with interactive lesson slides for
          the Prisma online school. We built the application from scratch as
          well as a UI library to be used throughout the Prisma ecosystem. We
          faced challenges such as concurrent editing, screensharing, real-time
          updates and implementing a rich text editor.
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
    dates="October 2020 - September 2022"
    techs={[
      {
        name: "TypeScript",
        placementInitial: { top: 20, right: -30, rotate: 0 },
        placement: { top: -28, right: 5, rotate: -5 },
      },
      {
        name: "TailwindCSS",
        placementInitial: { top: 20, right: -30, rotate: 0 },
        placement: { top: -50, right: -35, rotate: -15 },
      },
      {
        name: "React",
        placementInitial: { top: 20, right: -30, rotate: 0 },
        placement: { top: -15, right: -59, rotate: 12 },
      },
      {
        name: "NextJS",
        placementInitial: { top: 20, right: -30, rotate: 0 },
        placement: { top: 60, right: -30, rotate: 20 },
      },
    ]}
    isExpanded={isExpanded}
    isThumbnail={isOtherExpanded}
    onExpand={() => {
      updateTheme({ primary: "#6f22f8" }, "class");
      onExpand();
    }}
    hoverGradientStops="from-purple/20 to-purple/0"
    initialPerspective={{ x: 1, y: -15 }}
  />
);

export default PrismaCard;
