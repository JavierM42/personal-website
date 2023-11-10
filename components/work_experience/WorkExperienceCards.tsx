import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import { DevNote } from "../dev_notes/DevNote";
import ExpandableGridList from "./ExpandableGridList";
import ClearSessionCard from "./project_cards/ClearSessionCard";
import EmeritusCard from "./project_cards/EmeritusCard";
import PrismaCard from "./project_cards/PrismaCard";
import RetroAllyCard from "./project_cards/RetroAllyCard";
import { useCallback, useState } from "react";

const resetTheme = () => updateTheme({ primary: "#416900" }, "class");

export default function WorkExperienceCards() {
  const [isAnyCardExpanded, setIsAnyCardExpanded] = useState(false);

  const onCollapseAll = useCallback(() => {
    setIsAnyCardExpanded(false);
    resetTheme();
  }, []);

  return (
    <>
      <DevNote className="absolute w-64 top-40 -right-24 rotate-[6deg]">
        {isAnyCardExpanded ? (
          <>
            If you hover over a technology icon, you'll get a tooltip after a
            short while. Quickly hovering a different icon will open the tooltip
            instantly for a better experience. This is achieved with{" "}
            <a href="https://floating-ui.com">Floating UI</a>'s{" "}
            <code>FloatingDelayGroup</code>.
          </>
        ) : (
          "Click on a card to read this note."
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
      <ExpandableGridList
        id="work-experience-cards"
        className="mx-auto max-w-[calc(100vw-80px)] sm:max-w-[480px] lg:max-w-none lg:p-0 gap-12 mb-32"
        items={[ClearSessionCard, PrismaCard, EmeritusCard, RetroAllyCard]}
        onExpand={() => setIsAnyCardExpanded(true)}
        onCollapseAll={onCollapseAll}
      />
    </>
  );
}
