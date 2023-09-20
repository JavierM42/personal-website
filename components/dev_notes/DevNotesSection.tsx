import { useRouter } from "next/router";
import { FC } from "react";
import Switch from "../Switch";
import { DevNote } from "./DevNote";
import { useDevNotesState } from "./useDevNotesState";

export const DevNotesSection: FC = () => {
  const router = useRouter();
  const showDevNotes = useDevNotesState();

  return (
    <>
      <div className="relative z-10 max-w-md px-6 pt-3 pb-6 mx-auto shadow-xl shadow-tertiary-container bg-surface rounded-xl">
        <p>
          I had a lot of fun building this website and getting to use a few
          techniques I've learned through the years, as well as some new browser
          features.
        </p>
        <p className="block lg:hidden">
          To see the dev notes, please use a larger screen. I'm sorry for the
          incovenience.
        </p>
        <p className="hidden lg:block">
          Toggle the switch to show floating developer notes.
        </p>
        <div className="justify-center hidden w-full lg:flex">
          <Switch
            tooltip={showDevNotes ? "Hide dev notes" : "Show dev notes"}
            tooltipPlacement="right"
            isOn={showDevNotes}
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
        </div>
      </div>
      <div className="flex justify-center w-full h-24 mt-12">
        <DevNote className="w-64 rotate-[-3deg] h-fit">
          I'm a fan of motion animations, but not everyone is. This website
          supports the <code>prefers-reduced-motion</code> feature, which
          disables almost all the animations when set to <code>reduce</code>.
        </DevNote>
      </div>
    </>
  );
};
