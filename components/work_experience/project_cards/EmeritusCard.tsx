import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import Emeritus from "../../../assets/companies/emeritus.svg";
import WyeWorks from "../../../assets/companies/wyeworks.svg";
import WorkExperienceCard from "../WorkExperienceCard";

const EmeritusCard = ({
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
          Emeritus offers online courses from top universities. We rebuilt a
          legacy system to manage course enrollments. After the initial release,
          we ran a series of A/B experiments to increase conversion rates and
          maximize growth.
        </p>
        <p>
          As part of one of those experiments, I led the three-person task force
          that integrated a third-party referrals system and then migrated it to
          an in-house solution with no downtime.
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
    isExpanded={isExpanded}
    isThumbnail={isOtherExpanded}
    onExpand={() => {
      updateTheme({ primary: "#006634" }, "class");
      onExpand();
    }}
    hoverGradientStops="from-green/20 to-green/0"
    initialPerspective={{ x: -2, y: 15 }}
  />
);

export default EmeritusCard;
