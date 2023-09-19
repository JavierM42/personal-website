import { FC } from "react";
import { SquareButton } from "../SquareButton";
import { useRouter } from "next/router";
import { omit } from "lodash";
import Switch from "../Switch";
import { useDevNotesState } from "./useDevNotesState";
import WithTooltip from "../WithTooltip";

export const DevNotesSection: FC = () => {
  const router = useRouter();
  const showDevNotes = useDevNotesState();

  return (
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
  );
};
