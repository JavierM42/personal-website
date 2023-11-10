import ClearSession from "../../../assets/companies/clearsession.svg";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import WyeWorks from "../../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../WorkExperienceCard";

const ClearSessionCard = ({
  isExpanded,
  isThumbnail,
  onExpand,
}: {
  isExpanded: boolean;
  isThumbnail: boolean;
  onExpand: () => void;
}) => (
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
          ClearSession improves how patients and healthcare providers interact,
          focusing on data visualization and clear communcation of outcomes.
        </p>
        <p>
          I joined the team in late 2022, about six months after development
          started. Interesting technical aspects of the project include working
          with HTML canvas and recording user actions to replay at a later time.
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
    isExpanded={isExpanded}
    isThumbnail={isThumbnail}
    onExpand={() => {
      updateTheme({ primary: "#2972f1" }, "class");
      onExpand();
    }}
    hoverGradientStops="from-blue/20 to-blue/0"
    initialPerspective={{ x: 1, y: 10 }}
  />
);

export default ClearSessionCard;
