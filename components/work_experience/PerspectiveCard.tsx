import { motion, useReducedMotion, useSpring } from "framer-motion";
import {
  FC,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

type Props = {
  children: ReactNode;
  disablePerspective: boolean;
  initialPerspective?: { x: number; y: number };
};

const PerspectiveCard: FC<Props> = ({
  children,
  disablePerspective,
  initialPerspective = { x: 0, y: 0 },
}: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const [rotateXaxis, setRotateXaxis] = useState(initialPerspective.x);
  const [rotateYaxis, setRotateYaxis] = useState(initialPerspective.y);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const element = ref.current;
    if (!element) return;
    const elementRect = element.getBoundingClientRect();
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;
    const elementCenterX = elementWidth / 2;
    const elementCenterY = elementHeight / 2;
    const mouseX = event.clientY - elementRect.y - elementCenterY;
    const mouseY = event.clientX - elementRect.x - elementCenterX;
    const degreeX = (mouseX / elementWidth) * -10; //The number is the rotation factor
    const degreeY = (mouseY / elementHeight) * -10; //The number is the rotation factor
    setRotateXaxis(degreeX);
    setRotateYaxis(degreeY);
  };

  const handleMouseEnd = () => {
    setRotateXaxis(initialPerspective.x);
    setRotateYaxis(initialPerspective.y);
  };

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(disablePerspective ? 0 : -rotateXaxis * 2);
    dy.set(disablePerspective ? 0 : rotateYaxis / 2);
  }, [rotateXaxis, rotateYaxis, disablePerspective]);

  useEffect(() => {
    setRotateXaxis(initialPerspective.x);
    setRotateYaxis(initialPerspective.y);
  }, [initialPerspective]);

  return (
    <motion.div
      className="block"
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "flat",
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={
          disablePerspective || shouldReduceMotion ? undefined : handleMouseMove
        }
        onMouseLeave={
          disablePerspective || shouldReduceMotion ? undefined : handleMouseEnd
        }
        transition={spring}
        className="block w-full h-full"
        style={{
          rotateX: shouldReduceMotion ? 0 : dx,
          rotateY: shouldReduceMotion ? 0 : dy,
        }}
      >
        <div
          className="block w-full h-full"
          style={{
            perspective: "1200px",
            transformStyle: "flat",
          }}
        >
          <motion.div
            transition={spring}
            className="absolute block w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </motion.div>
          <motion.div
            className="block"
            initial={{ rotateY: 180 }}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: 0,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <div className="w-full h-full bg-surface" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PerspectiveCard;
