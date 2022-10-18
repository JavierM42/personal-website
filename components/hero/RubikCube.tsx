import { AnimationControls, motion, useAnimation } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";

const MOVE_DURATION = 0.5;

type Square =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "centerLeft"
  | "centerCenter"
  | "centerRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

type Direction = "up" | "down" | "left" | "right";

type VerticalLayer = "L" | "M" | "R";
type HorizontalLayer = "U" | "E" | "D";

const POLYGON_POINTS: Record<Square, string> = {
  topLeft: "21,21 21,39 39,39 39,21",
  centerLeft: "21,41 21,59 39,59 39,41",
  bottomLeft: "21,61 21,79 39,79 39,61",
  topCenter: "41,21 41,39 59,39 59,21",
  centerCenter: "41,41 41,59 59,59 59,41",
  bottomCenter: "41,61 41,79 59,79 59,61",
  topRight: "61,21 61,39 79,39 79,21",
  centerRight: "61,41 61,59 79,59 79,41",
  bottomRight: "61,61 61,79 79,79 79,61",
};

const HALF_TURNS: Record<Square, Record<Direction, any>> = {
  topLeft: {
    up: { y: `-${20 - 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 + 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: `-${20 - 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 + 20 / 3}%`, scaleX: 2 / 3 },
  },
  topCenter: {
    up: { y: `-${20 - 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 + 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: "-20%", scaleX: 2 / 3 },
    right: { x: "20%", scaleX: 2 / 3 },
  },
  topRight: {
    up: { y: `-${20 - 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 + 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: `-${20 + 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 - 20 / 3}%`, scaleX: 2 / 3 },
  },
  centerLeft: {
    up: { y: `-20%`, scaleY: 2 / 3 },
    down: { y: "20%", scaleY: 2 / 3 },
    left: { x: `-${20 - 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 + 20 / 3}%`, scaleX: 2 / 3 },
  },
  centerCenter: {
    up: { y: `-20%`, scaleY: 2 / 3 },
    down: { y: "20%", scaleY: 2 / 3 },
    left: { x: "-20%", scaleX: 2 / 3 },
    right: { x: "20%", scaleX: 2 / 3 },
  },
  centerRight: {
    up: { y: `-20%`, scaleY: 2 / 3 },
    down: { y: "20%", scaleY: 2 / 3 },
    left: { x: `-${20 + 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 - 20 / 3}%`, scaleX: 2 / 3 },
  },
  bottomLeft: {
    up: { y: `-${20 + 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 - 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: `-${20 - 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 + 20 / 3}%`, scaleX: 2 / 3 },
  },
  bottomCenter: {
    up: { y: `-${20 + 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 - 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: "-20%", scaleX: 2 / 3 },
    right: { x: "20%", scaleX: 2 / 3 },
  },
  bottomRight: {
    up: { y: `-${20 + 20 / 3}%`, scaleY: 2 / 3 },
    down: { y: `${20 - 20 / 3}%`, scaleY: 2 / 3 },
    left: { x: `-${20 + 20 / 3}%`, scaleX: 2 / 3 },
    right: { x: `${20 - 20 / 3}%`, scaleX: 2 / 3 },
  },
};

const FULL_TURNS: Record<Square, Record<Direction, any>> = {
  topLeft: {
    up: { y: `-10%`, scaleY: 0 },
    down: { y: `50%`, scaleY: 0 },
    left: { x: `-10%`, scaleX: 0 },
    right: { x: `50%`, scaleX: 0 },
  },
  topCenter: {
    up: { y: `-10%`, scaleY: 0 },
    down: { y: `50%`, scaleY: 0 },
    left: { x: "-30%", scaleX: 0 },
    right: { x: "30%", scaleX: 0 },
  },
  topRight: {
    up: { y: `-10%`, scaleY: 0 },
    down: { y: `50%`, scaleY: 0 },
    left: { x: `-50%`, scaleX: 0 },
    right: { x: `10%`, scaleX: 0 },
  },
  centerLeft: {
    up: { y: `-30%`, scaleY: 0 },
    down: { y: "30%", scaleY: 0 },
    left: { x: `-10%`, scaleX: 0 },
    right: { x: `50%`, scaleX: 0 },
  },
  centerCenter: {
    up: { y: `-30%`, scaleY: 0 },
    down: { y: "30%", scaleY: 0 },
    left: { x: "-30%", scaleX: 0 },
    right: { x: "30%", scaleX: 0 },
  },
  centerRight: {
    up: { y: `-30%`, scaleY: 0 },
    down: { y: "30%", scaleY: 0 },
    left: { x: `-50%`, scaleX: 0 },
    right: { x: `10%`, scaleX: 0 },
  },
  bottomLeft: {
    up: { y: `-50%`, scaleY: 0 },
    down: { y: `10%`, scaleY: 0 },
    left: { x: `-10%`, scaleX: 0 },
    right: { x: `50%`, scaleX: 0 },
  },
  bottomCenter: {
    up: { y: `-50%`, scaleY: 0 },
    down: { y: `10%`, scaleY: 0 },
    left: { x: "-30%", scaleX: 0 },
    right: { x: "30%", scaleX: 0 },
  },
  bottomRight: {
    up: { y: `-50%`, scaleY: 0 },
    down: { y: `10%`, scaleY: 0 },
    left: { x: `-50%`, scaleX: 0 },
    right: { x: `10%`, scaleX: 0 },
  },
};

const TRANSIENT_GROUP_INITIAL_STATE: Record<Direction, any> = {
  left: { x: "30%", y: "0%", scaleX: 0, scaleY: 1 },
  right: { x: "-30%", y: "0%", scaleX: 0, scaleY: 1 },
  up: { x: "0%", y: "30%", scaleX: 1, scaleY: 0 },
  down: { x: "0%", y: "-30%", scaleX: 1, scaleY: 0 },
};

const TRANSIENT_GROUP_HALF_TURN: Record<Direction, any> = {
  left: { x: "20%", y: "0%", scaleX: 2 / 3, scaleY: 1 },
  right: { x: "-20%", y: "0%", scaleX: 2 / 3, scaleY: 1 },
  up: { x: "0%", y: "20%", scaleX: 1, scaleY: 2 / 3 },
  down: { x: "0%", y: "-20%", scaleX: 1, scaleY: 2 / 3 },
};

const LAYER_SQUARES: Record<
  HorizontalLayer | VerticalLayer,
  [Square, Square, Square]
> = {
  U: ["topLeft", "topCenter", "topRight"],
  E: ["centerLeft", "centerCenter", "centerRight"],
  D: ["bottomLeft", "bottomCenter", "bottomRight"],
  L: ["topLeft", "centerLeft", "bottomLeft"],
  M: ["topCenter", "centerCenter", "bottomCenter"],
  R: ["topRight", "centerRight", "bottomRight"],
};

const CARTESIAN_DIRECTIONS: Record<
  HorizontalLayer | VerticalLayer,
  Record<"clockwise" | "counterclockwise", Direction>
> = {
  U: { clockwise: "left", counterclockwise: "right" },
  E: { clockwise: "right", counterclockwise: "left" },
  D: { clockwise: "right", counterclockwise: "left" },
  L: { clockwise: "down", counterclockwise: "up" },
  M: { clockwise: "down", counterclockwise: "up" },
  R: { clockwise: "up", counterclockwise: "down" },
};

export default function RubikCube() {
  const transientGroup = useAnimation();

  const transientA = useRef<SVGPolygonElement>(null);
  const transientB = useRef<SVGPolygonElement>(null);
  const transientC = useRef<SVGPolygonElement>(null);

  const CONTROLS: Record<Square, AnimationControls> = {
    topLeft: useAnimation(),
    topCenter: useAnimation(),
    topRight: useAnimation(),
    centerLeft: useAnimation(),
    centerCenter: useAnimation(),
    centerRight: useAnimation(),
    bottomLeft: useAnimation(),
    bottomCenter: useAnimation(),
    bottomRight: useAnimation(),
  };

  useEffect(() => {
    transientGroup.set({ scaleY: 0 });
  }, []);

  const turn = async (
    layer: HorizontalLayer | VerticalLayer,
    turnDirection: "clockwise" | "counterclockwise"
  ) => {
    const direction = CARTESIAN_DIRECTIONS[layer][turnDirection];
    const squares = LAYER_SQUARES[layer];

    transientGroup.set(TRANSIENT_GROUP_INITIAL_STATE[direction]);
    transientA.current?.setAttribute("points", POLYGON_POINTS[squares[0]]);
    transientB.current?.setAttribute("points", POLYGON_POINTS[squares[1]]);
    transientC.current?.setAttribute("points", POLYGON_POINTS[squares[2]]);

    squares.forEach(async (square) => {
      const control = CONTROLS[square];
      await control.start({
        ...HALF_TURNS[square][direction],
        transition: { duration: MOVE_DURATION / 2, ease: "easeIn" },
      });
      control.start({
        ...FULL_TURNS[square][direction],
        transition: { duration: MOVE_DURATION / 2, ease: "easeOut" },
      });
    });

    await transientGroup.start({
      ...TRANSIENT_GROUP_HALF_TURN[direction],
      transition: { duration: MOVE_DURATION / 2, ease: "easeIn" },
    });
    await transientGroup.start({
      x: "0%",
      y: "0%",
      scaleX: 1,
      scaleY: 1,
      transition: { duration: MOVE_DURATION / 2, ease: "easeOut" },
    });
    for (const square of squares) {
      // hack, if using set we get an ugly white flash
      await CONTROLS[square].start({
        x: "0%",
        y: "0%",
        scaleX: 1,
        scaleY: 1,
        transition: { duration: 0 },
      });
    }
  };

  const complexTurn = async () => {
    await turn("R", "clockwise");
    await turn("U", "clockwise");
    await turn("R", "counterclockwise");
    await turn("U", "counterclockwise");
  };

  return (
    <>
      <motion.svg
        stroke="currentColor"
        viewBox="0 0 100 100"
        className="mx-auto border w-96 h-96 stroke-primary fill-primary-container"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {(
          [
            "topLeft",
            "topCenter",
            "topRight",
            "centerLeft",
            "centerCenter",
            "centerRight",
            "bottomLeft",
            "bottomCenter",
            "bottomRight",
          ] as const
        ).map((square) => (
          <motion.polygon
            key={square}
            animate={CONTROLS[square]}
            points={POLYGON_POINTS[square]}
          />
        ))}
        <motion.g animate={transientGroup}>
          <motion.polygon
            ref={transientA}
            points={POLYGON_POINTS["topLeft"]}
            // className="fill-red-container stroke-red"
          />
          <motion.polygon
            ref={transientB}
            points={POLYGON_POINTS["centerCenter"]}
            // className="fill-red-container stroke-red"
          />
          <motion.polygon
            ref={transientC}
            points={POLYGON_POINTS["bottomRight"]}
            // className="fill-red-container stroke-red"
          />
        </motion.g>
      </motion.svg>
      <div className="flex justify-center gap-2">
        {(["U", "E", "D", "L", "M", "R"] as const).map((layer) => (
          <Fragment key={layer}>
            <button onClick={() => turn(layer, "clockwise")}>{layer}</button>
            <button onClick={() => turn(layer, "counterclockwise")}>
              {layer}'
            </button>
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={complexTurn}>Sexy Move!</button>
      </div>
    </>
  );
}
