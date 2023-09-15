import { motion, useSpring } from "framer-motion";
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
};

const PerspectiveCard: FC<Props> = ({
  children,
  disablePerspective,
}: Props) => {
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
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
    setRotateXaxis(0);
    setRotateYaxis(0);
  };

  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);

  useEffect(() => {
    dx.set(disablePerspective ? 0 : rotateXaxis * 2);
    dy.set(disablePerspective ? 0 : -rotateYaxis / 2);
  }, [rotateXaxis, rotateYaxis, disablePerspective]);

  return (
    <motion.div
      transition={spring}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={disablePerspective ? undefined : handleMouseMove}
        onMouseLeave={disablePerspective ? undefined : handleMouseEnd}
        transition={spring}
        className="w-full h-full"
        style={{ rotateX: dx, rotateY: dy }}
      >
        <div
          className="w-full h-full"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            transition={spring}
            className="absolute w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </motion.div>
          <motion.div
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
