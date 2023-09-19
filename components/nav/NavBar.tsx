import { FC } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { DevNote } from "../dev_notes/DevNote";
import { useDevNotesState } from "../dev_notes/useDevNotesState";
import { SquareButton } from "../SquareButton";
import { omit } from "lodash";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Switch from "../Switch";

export const NavBar: FC = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 top-0 z-40 flex items-center w-full gap-4 px-4 shadow-xl h-14 shadow-primary/10 bg-surface/40 backdrop-blur">
      <div className="relative flex items-center flex-1 h-full gap-6">
        <a href="#" className="font-[Nunito] text-lg">
          javiermorales.dev
        </a>
        <a href="#work-experience">Work</a>
        <a href="#open-source">Open Source</a>
        <a href="#blog">Blog</a>
        <div className="relative">
          <a href="#dev-notes">Dev notes</a>
          <DevNote className="absolute w-48 top-6 -left-24 -rotate-[6deg]">
            Anchor link targets use the scroll-margin CSS property so the sticky
            nav doesn't get in the way.
          </DevNote>
        </div>
      </div>
      <AnimatePresence>
        {router.query.notes && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Switch
              tooltip="Hide dev notes"
              tooltipPlacement="left"
              isOn={router.query.notes === "true"}
              onClick={() => {
                router.push(
                  {
                    ...router,
                    query: {
                      ...router.query,
                      notes: router.query.notes === "true" ? false : true,
                    },
                  },
                  undefined,
                  { scroll: false }
                );
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <DarkModeToggle />
      <DevNote className="absolute w-56 top-16 right-3 rotate-[2deg]">
        The dark mode toggle adds or removes the <code>dark</code> class to the
        body, which is then picked up by the{" "}
        <code>tailwind-mode-aware-colors</code> plugin. I set the default mode
        with the <code>prefers-color-scheme</code> media query.
      </DevNote>
    </div>
  );
};
