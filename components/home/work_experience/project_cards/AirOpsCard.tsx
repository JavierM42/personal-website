import Image from "next/image";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import AiropsSquare from "../../../../assets/companies/airops-square.jpg";
import AirOps from "../../../../assets/companies/airops.svg";
import WorkExperienceCard from "../WorkExperienceCard";

const ClearSessionCard = ({
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
      node: <Image src={AiropsSquare} className="rounded-[20%]" />,
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
      <AirOps
        aria-label="AirOps"
        className="h-9 text-[#09090B] dark:text-white"
      />
    }
    collapsedTitle="LLM workflows that drive growth"
    content={
      <>
        <p>
          With AirOps, teams launch AI workflows that use the best AI models,
          techniques, and data sources to drive profitable growth.
        </p>
        <p>I joined the team as a Senior Frontend Engineer in 2024.</p>
      </>
    }
    className="border-black shadow-black/10 dark:shadow-white/10"
    dates="August 2024 - Present"
    techs={[
      {
        name: "TypeScript",
        placementInitial: { top: 105, left: -20, rotate: 0 },
        placement: { top: 165, left: -30, rotate: 5 },
      },
      {
        name: "React",
        placementInitial: { top: 135, left: -30, rotate: 0 },
        placement: { top: 195, left: -50, rotate: -15 },
      },
      {
        name: "Ruby",
        placementInitial: { top: 165, left: -50, rotate: 0 },
        placement: { top: 220, left: -30, rotate: -4 },
      },
      {
        name: "Rails",
        placementInitial: { top: 190, left: -30, rotate: 0 },
        placement: { top: 245, left: -50, rotate: 6 },
      },
    ]}
    isExpanded={isExpanded}
    isThumbnail={isOtherExpanded}
    onExpand={() => {
      updateTheme({ primary: "#09090b" }, "class", "monochrome");
      onExpand();
    }}
    hoverGradientStops="from-black/20 to-black/0 dark:from-white/20 dark:to-white/0"
    initialPerspective={{ x: 1, y: 10 }}
  />
);

export default ClearSessionCard;
