import { FloatingDelayGroup } from "@floating-ui/react";
import classNames from "classnames";
import {
  AnimatePresence,
  TargetAndTransition,
  motion,
  useMotionValue,
} from "framer-motion";
import { FC, ReactNode, SVGProps, useRef, useState } from "react";
import ElixirLogo from "../../assets/techs/elixir.svg";
import NextLogo from "../../assets/techs/nextjs.svg";
import RailsLogo from "../../assets/techs/rails.svg";
import ReactLogo from "../../assets/techs/react.svg";
import RubyLogo from "../../assets/techs/ruby.svg";
import TailwindLogo from "../../assets/techs/tailwind.svg";
import TypescriptLogo from "../../assets/techs/typescript.svg";
import VueLogo from "../../assets/techs/vue.svg";
import WithTooltip from "../WithTooltip";
import PerspectiveCard from "./PerspectiveCard";

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
  icon?: {
    node: ReactNode;
    placement: {
      popping: TargetAndTransition;
      centered: TargetAndTransition;
    };
  };
  collapsedTitle: string;
  content: ReactNode;
  className: string;
  dates: string;
  techs?: {
    name: Tech;
    placementInitial: TargetAndTransition;
    placement: TargetAndTransition;
  }[];
  isExpanded: boolean;
  isThumbnail: boolean;
  onExpand?: () => void;
  hoverGradientStops: string;
};

const WorkExperienceCard: FC<Props> = ({
  name,
  icon,
  collapsedTitle,
  content,
  className,
  dates,
  techs,
  isExpanded,
  isThumbnail,
  onExpand,
  hoverGradientStops,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <li className="contents">
      <PerspectiveCard disablePerspective={isExpanded}>
        <div
          className={classNames(
            "w-full h-full relative shadow-xl bg-surface rounded-3xl min-h-min min-w-0",
            !isExpanded && "cursor-pointer",
            className
          )}
          onClick={isExpanded ? undefined : onExpand}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={(event) => {
            const clientRect = ref.current!.getBoundingClientRect()!;
            mouseX.set(event.clientX - clientRect.left - clientRect.width / 2);
            mouseY.set(event.clientY - clientRect.top - clientRect.height / 2);
          }}
          ref={ref}
        >
          {icon && (
            <motion.div
              initial={false}
              layout
              className="absolute z-10 block w-12 h-12 pointer-events-none sm:w-24 sm:h-24"
              animate={
                isThumbnail ? icon.placement.centered : icon.placement.popping
              }
            >
              {icon.node}
            </motion.div>
          )}
          <div className="absolute h-[calc(100%-4px)] inset-0.5 overflow-clip rounded-3xl flex flex-col items-center px-2 py-4 md:p-8 justify-center min-h-fit">
            {!isExpanded && isHovering && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ x: mouseX, y: mouseY }}
              >
                <div
                  className={classNames(
                    "w-56 h-56 bg-gradient-radial",
                    hoverGradientStops
                  )}
                  style={{
                    filter: "blur(40px)",
                  }}
                />
              </motion.div>
            )}
            <AnimatePresence initial={false}>
              {!isThumbnail && (
                <>
                  <motion.div
                    className="mb-6"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {name}
                  </motion.div>
                  <motion.div
                    className="font-[Nunito] text-sm sm:text-lg whitespace-nowrap mb-2"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {collapsedTitle}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex-1 w-full mb-10 overflow-auto sm:mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                layout
              >
                <div className="pt-4 text-xs font-medium text-center text-outline">
                  {dates}
                </div>
                {content}
              </motion.div>
            )}
          </div>
          <div className="absolute inset-x-0 flex items-center justify-center gap-4 mt-4 sm:contents bottom-4 sm:mt-0">
            <FloatingDelayGroup delay={200}>
              <AnimatePresence>
                {isExpanded &&
                  techs?.map((tech, index) => {
                    const Logo = TECH_LOGOS[tech.name];
                    return (
                      <WithTooltip text={tech.name} key={tech.name}>
                        <motion.div
                          className="w-6 h-6 sm:absolute text-on-primary-container/70"
                          initial={{
                            opacity: 0,
                            zIndex: -1,
                            ...tech.placementInitial,
                          }}
                          animate={{
                            opacity: 1,
                            ...tech.placement,
                            transition: {
                              delay: index * 0.08,
                              duration: 0.4,
                              ease: "easeOut",
                            },
                            zIndex: -1,
                            transitionEnd: { zIndex: 1 },
                          }}
                          exit={{ opacity: 0 }}
                        >
                          <Logo aria-label={tech.name} className="h-full" />
                        </motion.div>
                      </WithTooltip>
                    );
                  })}
              </AnimatePresence>
            </FloatingDelayGroup>
          </div>
        </div>
      </PerspectiveCard>
    </li>
  );
};

export default WorkExperienceCard;
