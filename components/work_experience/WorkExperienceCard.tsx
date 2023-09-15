import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, SVGProps, useState } from "react";
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
import ElixirLogo from "../../assets/techs/elixir.svg";
import NextLogo from "../../assets/techs/nextjs.svg";
import RailsLogo from "../../assets/techs/rails.svg";
import ReactLogo from "../../assets/techs/react.svg";
import RubyLogo from "../../assets/techs/ruby.svg";
import TailwindLogo from "../../assets/techs/tailwind.svg";
import TypescriptLogo from "../../assets/techs/typescript.svg";
import VueLogo from "../../assets/techs/vue.svg";
import ChevronRight from "../../public/chevron-right.svg";
import WithTooltip from "../WithTooltip";
import { FloatingDelayGroup } from "@floating-ui/react";

type Tech =
  | "React"
  | "Ruby"
  | "TailwindCSS"
  | "TypeScript"
  | "Elixir"
  | "NextJS"
  | "Vue"
  | "Rails";

const TECH_LOGOS: Record<Tech, FC<SVGProps<SVGElement>>> = {
  React: ReactLogo,
  Ruby: RubyLogo,
  TailwindCSS: TailwindLogo,
  TypeScript: TypescriptLogo,
  Elixir: ElixirLogo,
  NextJS: NextLogo,
  Vue: VueLogo,
  Rails: RailsLogo,
};

type Props = {
  name: ReactNode;
  collapsedTitle: string;
  content: ReactNode;
  collapsedClass: string;
  buttonClass: string;
  expandedClass: string;
  dates: string;
  techs: Tech[];
  primaryColor: string;
};

const WorkExperienceCard: FC<Props> = ({
  name,
  collapsedTitle,
  content,
  collapsedClass,
  buttonClass,
  expandedClass,
  dates,
  techs,
  primaryColor,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = () => {
    updateTheme({ primary: primaryColor }, "class");
    setIsExpanded(true);
  };

  const handleClose = () => {
    updateTheme({ primary: "#416900" }, "class");
    setIsExpanded(false);
  };

  return (
    <li
      className={classNames(
        "relative p-2 shadow dark:shadow-black/40 bg-surface border-l-[10px] rounded-lg",
        isExpanded ? expandedClass : collapsedClass,
        !isExpanded && "cursor-pointer"
      )}
      onClick={isExpanded ? undefined : handleOpen}
    >
      <button
        onClick={handleClose}
        className={classNames(
          "absolute left-2 top-2 rounded-md p-2",
          isExpanded ? buttonClass : "pointer-events-none"
        )}
      >
        <ChevronRight
          className={classNames(
            "h-6 transition-transform",
            isExpanded && "rotate-90"
          )}
        />
      </button>
      <motion.div
        className="grid h-24 grid-cols-1 grid-rows-2 gap-4 sm:grid-rows-1 sm:h-10"
        animate={isExpanded ? "expanded" : "collapsed"}
        initial={false}
      >
        <AnimatePresence initial={false}>
          {!isExpanded && (
            <div className="flex items-center w-full h-full col-start-1 row-start-1 pl-11 font-[Nunito]">
              <motion.div
                className="text-lg font-bold"
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={{
                  collapsed: { opacity: 0 },
                  expanded: { opacity: 1 },
                }}
              >
                {collapsedTitle}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <div className="relative w-full h-full col-start-1 row-start-2 pointer-events-none sm:row-start-1">
          <motion.div
            className="absolute px-2 top-1/2"
            initial={false}
            animate={isExpanded ? "center" : "right"}
            variants={{
              center: { right: "50%", x: "50%", y: "-50%" },
              right: { right: "0%", x: "0%", y: "-50%" },
            }}
          >
            {name}
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="px-14 overflow-clip"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              collapsed: { opacity: 0, height: 0 },
              expanded: { opacity: 1, height: "auto" },
            }}
          >
            <div className="pt-4 text-xs font-medium text-center text-outline">
              {dates}
            </div>
            <div className="flex justify-center h-5 gap-2 mt-2 mb-6 text-outline">
              <FloatingDelayGroup delay={300}>
                {techs.map((tech) => {
                  const Logo = TECH_LOGOS[tech];
                  return (
                    <WithTooltip text={tech} key={tech}>
                      <span>
                        <Logo aria-label={tech} className="h-full" />
                      </span>
                    </WithTooltip>
                  );
                })}
              </FloatingDelayGroup>
            </div>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default WorkExperienceCard;
