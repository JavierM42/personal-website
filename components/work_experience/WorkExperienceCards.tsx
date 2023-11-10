import classNames from "classnames";
import { useEffect, useState } from "react";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import { DevNote } from "../dev_notes/DevNote";
import ClearSessionCard from "./project_cards/ClearSessionCard";
import EmeritusCard from "./project_cards/EmeritusCard";
import PrismaCard from "./project_cards/PrismaCard";
import RetroAllyCard from "./project_cards/RetroAllyCard";

export default function WorkExperienceCards() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleClickOutside = () => {
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
        {[ClearSessionCard, PrismaCard, EmeritusCard, RetroAllyCard].map(
          (CardComponent, index) => (
            <CardComponent
              key={index}
              isExpanded={expandedCardIndex === index}
              isThumbnail={
                expandedCardIndex !== null && expandedCardIndex !== index
              }
              onExpand={() => setExpandedCardIndex(index)}
            />
          )
        )}
      </ol>
    </>
  );
}
