import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import RetroAlly from "../../../assets/companies/retroally.svg";
import RetroAllyText from "../../../assets/companies/retroallytext.svg";
import WyeWorks from "../../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../WorkExperienceCard";

const RetroAllyCard = ({
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
          Apart from developing, during my time there I worked closely with a UX
          expert to broaden my skills in that field.
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
    isExpanded={isExpanded}
    isThumbnail={isOtherExpanded}
    onExpand={() => {
      updateTheme({ primary: "#ff7645" }, "class");
      onExpand();
    }}
    hoverGradientStops="from-red/20 to-red/0"
    initialPerspective={{ x: -2, y: -10 }}
  />
);

export default RetroAllyCard;
