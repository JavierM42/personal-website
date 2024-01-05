import classNames from "classnames";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import AbbVie from "../../assets/companies/abbvie.svg";
import TheRealReal from "../../assets/companies/therealreal.svg";
import WyeWorks from "../../assets/companies/wyeworks.svg";
import ExternalLink from "../ExternalLink";
import { SquareButton } from "../SquareButton";

export default function MoreButton() {
  const [showMore, setShowMore] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <SquareButton
        label={showMore ? "" : `See two more`}
        tooltipPlacement="top"
        className={classNames("mx-auto md:rotate-45 transition-opacity mt-4")}
        onClick={() => setShowMore(true)}
      >
        <div className="md:-rotate-45">+2</div>
      </SquareButton>
      <AnimatePresence>
        {showMore && (
          <>
            <motion.div
              onClick={() => setShowMore(false)}
              className="fixed inset-0 z-40 bg-on-surface/20 dark:bg-transparent backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.85,
                x: "-50%",
                y: "-50%",
              }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, x: "-50%", y: "-50%" }}
              transition={{ ease: "backOut", duration: 0.3 }}
              className="fixed left-1/2 top-1/2 z-50 p-8 shadow-lg dark:shadow-white/20 rounded-xl bg-surface/40 backdrop-blur-lg text-on-surface text-sm max-w-[380px] w-max"
            >
              <ul className="space-y-6 divide-y divide-outline">
                <li className="space-y-1">
                  <div className="flex justify-center items-center gap-1.5">
                    <AbbVie
                      role="presentation"
                      aria-label="AbbVie"
                      className="inline-block h-8 -mb-3 text-[#071d49] dark:text-white"
                    />
                    <span>at</span>
                    <WyeWorks
                      aria-label="WyeWorks"
                      className="inline-block h-3 text-[#0B0B0B] dark:text-white"
                    />
                  </div>
                  <div className="pb-1 text-xs font-medium text-center text-on-surface/80">
                    September 2023 - Present
                  </div>
                  <p>
                    I'm currently working on UX enhancements for one of the
                    internal tools used by this industry-leading pharmaceutical
                    company.
                  </p>
                </li>
                <li className="pt-6 space-y-1">
                  <div className="flex justify-center items-center gap-1.5">
                    <TheRealReal
                      role="presentation"
                      aria-label="TheRealReal"
                      className="inline-block h-7 -mt-1 text-[#231f20] dark:text-white"
                    />
                    <span>at</span>
                    <WyeWorks
                      aria-label="WyeWorks"
                      className="inline-block h-3 text-[#0B0B0B] dark:text-white"
                    />
                  </div>
                  <div className="pb-1 text-xs font-medium text-center text-on-surface/80">
                    March 2019 - May 2019
                  </div>
                  <p>
                    I briefly worked as a Ruby on Rails Developer for
                    TheRealReal, a luxury consigment service.
                  </p>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
