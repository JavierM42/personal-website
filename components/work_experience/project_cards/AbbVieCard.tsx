import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import RetroAlly from "../../../assets/companies/retroally.svg";
import AbbVie from "../../../assets/companies/abbvie.svg";
import WyeWorks from "../../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../WorkExperienceCard";
import ExternalLink from "../../ExternalLink";

const AbbVieCard = ({
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
        <AbbVie
          role="presentation"
          aria-label="AbbVie"
          className="inline-block h-10 text-abbvieblue dark:text-white"
        />
        <span className="-mb-0.5">at</span>
        <WyeWorks
          aria-label="WyeWorks"
          className="inline-block h-4 text-[#0B0B0B] dark:text-white"
        />
      </div>
    }
    collapsedTitle="A leading pharmaceutical company"
    content={
      <p>
        Through a partership with{" "}
        <ExternalLink href="https://txidigital.com/">TXI Digital</ExternalLink>,
        I'm currently working on UX improvements for an internal AbbVie tool.
      </p>
    }
    className="shadow-abbvieblue/10 border-abbvieblue-container"
    dates="September 2023 - Present"
    techs={[
      {
        name: "TypeScript",
        placementInitial: { top: 50, right: 50, rotate: 0 },
        placement: { top: -28, right: 5, rotate: -5 },
      },
      {
        name: "React",
        placementInitial: { top: 50, right: 50, rotate: 0 },
        placement: { top: -15, right: -59, rotate: 12 },
      },
      {
        name: "TailwindCSS",
        placementInitial: { bottom: 50, right: 30, rotate: 0 },
        placement: { bottom: 70, right: -30, rotate: -18 },
      },
    ]}
    isExpanded={isExpanded}
    isThumbnail={isOtherExpanded}
    onExpand={() => {
      updateTheme({ primary: "#071d49" }, "class");
      onExpand();
    }}
    hoverGradientStops="from-abbvieblue/20 to-abbvieblue/0"
    initialPerspective={{ x: -2, y: -10 }}
  />
);

export default AbbVieCard;
