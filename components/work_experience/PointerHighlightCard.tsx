import classNames from "classnames";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { FC, HTMLProps, ReactNode, useRef, useState } from "react";

type Props = Pick<HTMLProps<HTMLDivElement>, "onClick" | "className"> & {
  disabled?: boolean;
  hoverGradientStops: string;
  children: ReactNode;
  floatingChildren: ReactNode;
};

const PointerHighlightCard: FC<Props> = ({
  disabled,
  hoverGradientStops,
  children,
  floatingChildren,
  onClick,
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={classNames("relative", className)}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(event) => {
        const clientRect = ref.current!.getBoundingClientRect()!;
        mouseX.set(event.clientX - clientRect.left - clientRect.width / 2);
        mouseY.set(event.clientY - clientRect.top - clientRect.height / 2);
      }}
      ref={ref}
    >
      {floatingChildren}
      <div className="absolute h-[calc(100%-4px)] inset-0.5 overflow-clip rounded-3xl flex flex-col items-center px-2 py-4 md:p-8 justify-center min-h-fit">
        {!disabled && isHovering && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              x: shouldReduceMotion ? 0 : mouseX,
              y: shouldReduceMotion ? 0 : mouseY,
            }}
          >
            <div
              className={classNames(
                "w-56 h-56 bg-gradient-radial",
                hoverGradientStops
              )}
              style={{ filter: "blur(40px)" }}
            />
          </motion.div>
        )}
        {children}
      </div>
    </div>
  );
};

export default PointerHighlightCard;
