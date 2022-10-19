import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ChevronRight from "../../public/chevron-right.svg";

const SOLVED_CUBE_STATE: {
  front: Record<Square, FaceColor>;
  right: Record<Square, FaceColor>;
  back: Record<Square, FaceColor>;
  left: Record<Square, FaceColor>;
  top: Record<Square, FaceColor>;
  bottom: Record<Square, FaceColor>;
} = {
  front: {
    topLeft: "white",
    topCenter: "white",
    topRight: "white",
    centerLeft: "white",
    centerCenter: "white",
    centerRight: "white",
    bottomLeft: "white",
    bottomCenter: "white",
    bottomRight: "white",
  },
  right: {
    topLeft: "green",
    topCenter: "green",
    topRight: "green",
    centerLeft: "green",
    centerCenter: "green",
    centerRight: "green",
    bottomLeft: "green",
    bottomCenter: "green",
    bottomRight: "green",
  },
  back: {
    topLeft: "yellow",
    topCenter: "yellow",
    topRight: "yellow",
    centerLeft: "yellow",
    centerCenter: "yellow",
    centerRight: "yellow",
    bottomLeft: "yellow",
    bottomCenter: "yellow",
    bottomRight: "yellow",
  },
  left: {
    topLeft: "blue",
    topCenter: "blue",
    topRight: "blue",
    centerLeft: "blue",
    centerCenter: "blue",
    centerRight: "blue",
    bottomLeft: "blue",
    bottomCenter: "blue",
    bottomRight: "blue",
  },
  top: {
    topLeft: "red",
    topCenter: "red",
    topRight: "red",
    centerLeft: "red",
    centerCenter: "red",
    centerRight: "red",
    bottomLeft: "red",
    bottomCenter: "red",
    bottomRight: "red",
  },
  bottom: {
    topLeft: "orange",
    topCenter: "orange",
    topRight: "orange",
    centerLeft: "orange",
    centerCenter: "orange",
    centerRight: "orange",
    bottomLeft: "orange",
    bottomCenter: "orange",
    bottomRight: "orange",
  },
};

const MOVE_DURATION = 0.3;

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

type FaceColor = "red" | "orange" | "blue" | "green" | "yellow" | "white";

const FACE_CLASSNAME: Record<FaceColor, string> = {
  red: "fill-[#ff7645]",
  orange: "fill-[#f6ad55]",
  blue: "fill-[#4751d8]",
  green: "fill-[#04bc6c]",
  yellow: "fill-[#f0e513]",
  white: "fill-[url(#javi)]",
};

const POLYGON_POINTS: Record<Square, string> = {
  topLeft: "20.5,20.5 20.5,39.5 39.5,39.5 39.5,20.5",
  centerLeft: "20.5,40.5 20.5,59.5 39.5,59.5 39.5,40.5",
  bottomLeft: "20.5,60.5 20.5,79.5 39.5,79.5 39.5,60.5",
  topCenter: "40.5,20.5 40.5,39.5 59.5,39.5 59.5,20.5",
  centerCenter: "40.5,40.5 40.5,59.5 59.5,59.5 59.5,40.5",
  bottomCenter: "40.5,60.5 40.5,79.5 59.5,79.5 59.5,60.5",
  topRight: "60.5,20.5 60.5,39.5 79.5,39.5 79.5,20.5",
  centerRight: "60.5,40.5 60.5,59.5 79.5,59.5 79.5,40.5",
  bottomRight: "60.5,60.5 60.5,79.5 79.5,79.5 79.5,60.5",
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

  const [isTurning, setIsTurning] = useState(false);

  const turn = async (
    layer: HorizontalLayer | VerticalLayer,
    turnDirection: "clockwise" | "counterclockwise"
  ) => {
    setIsTurning(true);
    const direction = CARTESIAN_DIRECTIONS[layer][turnDirection];
    const squares = LAYER_SQUARES[layer];

    const futureCubeState = getNewCubeState(layer, turnDirection);

    transientGroup.set(TRANSIENT_GROUP_INITIAL_STATE[direction]);
    transientA.current?.setAttribute("points", POLYGON_POINTS[squares[0]]);
    transientB.current?.setAttribute("points", POLYGON_POINTS[squares[1]]);
    transientC.current?.setAttribute("points", POLYGON_POINTS[squares[2]]);

    transientA.current?.removeAttribute("class");
    transientB.current?.removeAttribute("class");
    transientC.current?.removeAttribute("class");

    transientA.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[squares[0]]]
    );
    transientB.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[squares[1]]]
    );
    transientC.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[squares[2]]]
    );

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
    setCubeState(futureCubeState);
    setTimeout(() => {
      setIsTurning(false);
    }, 70);
  };

  const [cubeState, setCubeState] = useState(SOLVED_CUBE_STATE);

  const getNewCubeState = (
    layer: HorizontalLayer | VerticalLayer,
    turnDirection: "clockwise" | "counterclockwise"
  ) => {
    const prime = turnDirection === "counterclockwise";
    const s = cubeState;

    return layer === "R"
      ? {
          ...s,
          front: {
            ...s.front,
            topRight: prime ? s.top.topRight : s.bottom.topRight,
            centerRight: prime ? s.top.centerRight : s.bottom.centerRight,
            bottomRight: prime ? s.top.bottomRight : s.bottom.bottomRight,
          },
          top: {
            ...s.top,
            topRight: prime ? s.back.bottomLeft : s.front.topRight,
            centerRight: prime ? s.back.centerLeft : s.front.centerRight,
            bottomRight: prime ? s.back.topLeft : s.front.bottomRight,
          },
          back: {
            ...s.back,
            topLeft: prime ? s.bottom.bottomRight : s.top.bottomRight,
            centerLeft: prime ? s.bottom.centerRight : s.top.centerRight,
            bottomLeft: prime ? s.bottom.topRight : s.top.topRight,
          },
          bottom: {
            ...s.bottom,
            topRight: prime ? s.front.topRight : s.back.bottomLeft,
            centerRight: prime ? s.front.centerRight : s.back.centerLeft,
            bottomRight: prime ? s.front.bottomRight : s.back.topLeft,
          },
          right: {
            topLeft: prime ? s.right.topRight : s.right.bottomLeft,
            topCenter: prime ? s.right.centerRight : s.right.centerLeft,
            topRight: prime ? s.right.bottomRight : s.right.topLeft,
            centerLeft: prime ? s.right.topCenter : s.right.bottomCenter,
            centerCenter: s.right.centerCenter,
            centerRight: prime ? s.right.bottomCenter : s.right.topCenter,
            bottomLeft: prime ? s.right.topLeft : s.right.bottomRight,
            bottomCenter: prime ? s.right.centerLeft : s.right.centerRight,
            bottomRight: prime ? s.right.bottomLeft : s.right.topRight,
          },
        }
      : layer === "L"
      ? {
          ...s,
          front: {
            ...s.front,
            topLeft: prime ? s.bottom.topLeft : s.top.topLeft,
            centerLeft: prime ? s.bottom.centerLeft : s.top.centerLeft,
            bottomLeft: prime ? s.bottom.bottomLeft : s.top.bottomLeft,
          },
          top: {
            ...s.top,
            topLeft: prime ? s.front.topLeft : s.back.bottomRight,
            centerLeft: prime ? s.front.centerLeft : s.back.centerRight,
            bottomLeft: prime ? s.front.bottomLeft : s.back.topRight,
          },
          back: {
            ...s.back,
            topRight: prime ? s.top.bottomLeft : s.bottom.bottomLeft,
            centerRight: prime ? s.top.centerLeft : s.bottom.centerLeft,
            bottomRight: prime ? s.top.topLeft : s.bottom.topLeft,
          },
          bottom: {
            ...s.bottom,
            topLeft: prime ? s.back.bottomRight : s.front.topLeft,
            centerLeft: prime ? s.back.centerRight : s.front.centerLeft,
            bottomLeft: prime ? s.back.topRight : s.front.bottomLeft,
          },
          left: {
            topLeft: prime ? s.left.topRight : s.left.bottomLeft,
            topCenter: prime ? s.left.centerRight : s.left.centerLeft,
            topRight: prime ? s.left.bottomRight : s.left.topLeft,
            centerLeft: prime ? s.left.topCenter : s.left.bottomCenter,
            centerCenter: s.left.centerCenter,
            centerRight: prime ? s.left.bottomCenter : s.left.topCenter,
            bottomLeft: prime ? s.left.topLeft : s.left.bottomRight,
            bottomCenter: prime ? s.left.centerLeft : s.left.centerRight,
            bottomRight: prime ? s.left.bottomLeft : s.left.topRight,
          },
        }
      : layer === "M"
      ? {
          ...s,
          front: {
            ...s.front,
            topCenter: prime ? s.bottom.topCenter : s.top.topCenter,
            centerCenter: prime ? s.bottom.centerCenter : s.top.centerCenter,
            bottomCenter: prime ? s.bottom.bottomCenter : s.top.bottomCenter,
          },
          top: {
            ...s.top,
            topCenter: prime ? s.front.topCenter : s.back.bottomCenter,
            centerCenter: prime ? s.front.centerCenter : s.back.centerCenter,
            bottomCenter: prime ? s.front.bottomCenter : s.back.topCenter,
          },
          back: {
            ...s.back,
            topCenter: prime ? s.top.bottomCenter : s.bottom.bottomCenter,
            centerCenter: prime ? s.top.centerCenter : s.bottom.centerCenter,
            bottomCenter: prime ? s.top.topCenter : s.bottom.topCenter,
          },
          bottom: {
            ...s.bottom,
            topCenter: prime ? s.back.bottomCenter : s.front.topCenter,
            centerCenter: prime ? s.back.centerCenter : s.front.centerCenter,
            bottomCenter: prime ? s.back.topCenter : s.front.bottomCenter,
          },
        }
      : layer === "U"
      ? {
          ...s,
          front: {
            ...s.front,
            topRight: prime ? s.left.topRight : s.right.topRight,
            topCenter: prime ? s.left.topCenter : s.right.topCenter,
            topLeft: prime ? s.left.topLeft : s.right.topLeft,
          },
          left: {
            ...s.left,
            topRight: prime ? s.back.topRight : s.front.topRight,
            topCenter: prime ? s.back.topCenter : s.front.topCenter,
            topLeft: prime ? s.back.topLeft : s.front.topLeft,
          },
          back: {
            ...s.back,
            topLeft: prime ? s.right.topLeft : s.left.topLeft,
            topCenter: prime ? s.right.topCenter : s.left.topCenter,
            topRight: prime ? s.right.topRight : s.left.topRight,
          },
          right: {
            ...s.right,
            topLeft: prime ? s.front.topLeft : s.back.topLeft,
            topCenter: prime ? s.front.topCenter : s.back.topCenter,
            topRight: prime ? s.front.topRight : s.back.topRight,
          },
          top: {
            topLeft: prime ? s.top.topRight : s.top.bottomLeft,
            topCenter: prime ? s.top.centerRight : s.top.centerLeft,
            topRight: prime ? s.top.bottomRight : s.top.topLeft,
            centerLeft: prime ? s.top.topCenter : s.top.bottomCenter,
            centerCenter: s.top.centerCenter,
            centerRight: prime ? s.top.bottomCenter : s.top.topCenter,
            bottomLeft: prime ? s.top.topLeft : s.top.bottomRight,
            bottomCenter: prime ? s.top.centerLeft : s.top.centerRight,
            bottomRight: prime ? s.top.bottomLeft : s.top.topRight,
          },
        }
      : layer === "D"
      ? {
          ...s,
          front: {
            ...s.front,
            bottomLeft: prime ? s.right.bottomLeft : s.left.bottomLeft,
            bottomCenter: prime ? s.right.bottomCenter : s.left.bottomCenter,
            bottomRight: prime ? s.right.bottomRight : s.left.bottomRight,
          },
          left: {
            ...s.left,
            bottomLeft: prime ? s.front.bottomLeft : s.back.bottomLeft,
            bottomCenter: prime ? s.front.bottomCenter : s.back.bottomCenter,
            bottomRight: prime ? s.front.bottomRight : s.back.bottomRight,
          },
          back: {
            ...s.back,
            bottomLeft: prime ? s.left.bottomLeft : s.right.bottomLeft,
            bottomCenter: prime ? s.left.bottomCenter : s.right.bottomCenter,
            bottomRight: prime ? s.left.bottomRight : s.right.bottomRight,
          },
          right: {
            ...s.right,
            bottomLeft: prime ? s.back.bottomLeft : s.front.bottomLeft,
            bottomCenter: prime ? s.back.bottomCenter : s.front.bottomCenter,
            bottomRight: prime ? s.back.bottomRight : s.front.bottomRight,
          },
          bottom: {
            topLeft: prime ? s.bottom.topRight : s.bottom.bottomLeft,
            topCenter: prime ? s.bottom.centerRight : s.bottom.centerLeft,
            topRight: prime ? s.bottom.bottomRight : s.bottom.topLeft,
            centerLeft: prime ? s.bottom.topCenter : s.bottom.bottomCenter,
            centerCenter: s.bottom.centerCenter,
            centerRight: prime ? s.bottom.bottomCenter : s.bottom.topCenter,
            bottomLeft: prime ? s.bottom.topLeft : s.bottom.bottomRight,
            bottomCenter: prime ? s.bottom.centerLeft : s.bottom.centerRight,
            bottomRight: prime ? s.bottom.bottomLeft : s.bottom.topRight,
          },
        }
      : layer === "E"
      ? {
          ...s,
          front: {
            ...s.front,
            centerLeft: prime ? s.right.centerLeft : s.left.centerLeft,
            centerCenter: prime ? s.right.centerCenter : s.left.centerCenter,
            centerRight: prime ? s.right.centerRight : s.left.centerRight,
          },
          left: {
            ...s.left,
            centerLeft: prime ? s.front.centerLeft : s.back.centerLeft,
            centerCenter: prime ? s.front.centerCenter : s.back.centerCenter,
            centerRight: prime ? s.front.centerRight : s.back.centerRight,
          },
          back: {
            ...s.back,
            centerLeft: prime ? s.left.centerLeft : s.right.centerLeft,
            centerCenter: prime ? s.left.centerCenter : s.right.centerCenter,
            centerRight: prime ? s.left.centerRight : s.right.centerRight,
          },
          right: {
            ...s.right,
            centerLeft: prime ? s.back.centerLeft : s.front.centerLeft,
            centerCenter: prime ? s.back.centerCenter : s.front.centerCenter,
            centerRight: prime ? s.back.centerRight : s.front.centerRight,
          },
        }
      : s;
  };

  const [isRunningInitialAnimation, setIsRunningInitialAnimation] =
    useState(true);

  const [pendingMoves, setPendingMoves] = useState<
    {
      layer: HorizontalLayer | VerticalLayer;
      direction: "clockwise" | "counterclockwise";
    }[]
  >([]);

  const [performedMoves, setPerformedMoves] = useState<
    {
      layer: HorizontalLayer | VerticalLayer;
      direction: "clockwise" | "counterclockwise";
    }[]
  >([]);

  useEffect(() => {
    if (pendingMoves.length && !isTurning) {
      const [move, ...rest] = pendingMoves;
      turn(move.layer, move.direction);
      setPendingMoves(rest);
      setPerformedMoves((moves) => [move, ...moves]);
    }
  }, [pendingMoves, isTurning]);

  const queueMove = (
    layer: HorizontalLayer | VerticalLayer,
    direction: "clockwise" | "counterclockwise"
  ) => {
    setPendingMoves((moves) => [...moves, { layer, direction }]);
  };

  const reset = () => {
    setPendingMoves(
      performedMoves.map((move) => ({
        layer: move.layer,
        direction:
          move.direction === "clockwise" ? "counterclockwise" : "clockwise",
      }))
    );
  };

  useEffect(() => {
    if (pendingMoves.length === 0 && !isTurning) {
      setIsRunningInitialAnimation(false);
    }
  }, [pendingMoves, isTurning]);

  return (
    <div className="relative mx-auto w-fit h-fit">
      <motion.svg
        stroke="currentColor"
        viewBox="0 0 100 100"
        className="w-96 h-96 stroke-on-surface"
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <defs>
          <pattern
            id="javi"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <polygon
              points="20,20 20,80 80,80 80,20"
              className="fill-primary-container/10"
            />
            <image
              href="/javi.png"
              x="20"
              y="20"
              width="60"
              height="60"
              className="mix-blend-luminosity"
            />
          </pattern>
        </defs>

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
            className={FACE_CLASSNAME[cubeState.front[square]]}
          />
        ))}
        <motion.g animate={transientGroup}>
          <motion.polygon ref={transientA} points={POLYGON_POINTS["topLeft"]} />
          <motion.polygon
            ref={transientB}
            points={POLYGON_POINTS["centerCenter"]}
          />
          <motion.polygon
            ref={transientC}
            points={POLYGON_POINTS["bottomRight"]}
          />
        </motion.g>
      </motion.svg>
      <AnimatePresence>
        {!isRunningInitialAnimation &&
          [
            {
              left: "100%",
              top: "30%",
              layer: "U" as const,
              direction: "counterclockwise" as const,
              chevronRotation: 0,
            },
            {
              left: "100%",
              top: "50%",
              layer: "E" as const,
              direction: "clockwise" as const,
              chevronRotation: 0,
            },
            {
              left: "100%",
              top: "70%",
              layer: "D" as const,
              direction: "clockwise" as const,
              chevronRotation: 0,
            },
            {
              left: "0%",
              top: "30%",
              layer: "U" as const,
              direction: "clockwise" as const,
              chevronRotation: 180,
            },
            {
              left: "0%",
              top: "50%",
              layer: "E" as const,
              direction: "counterclockwise" as const,
              chevronRotation: 180,
            },
            {
              left: "0%",
              top: "70%",
              layer: "D" as const,
              direction: "counterclockwise" as const,
              chevronRotation: 180,
            },
            {
              left: "30%",
              top: "100%",
              layer: "L" as const,
              direction: "clockwise" as const,
              chevronRotation: 90,
            },
            {
              left: "50%",
              top: "100%",
              layer: "M" as const,
              direction: "clockwise" as const,
              chevronRotation: 90,
            },
            {
              left: "70%",
              top: "100%",
              layer: "R" as const,
              direction: "counterclockwise" as const,
              chevronRotation: 90,
            },
            {
              left: "30%",
              top: "0%",
              layer: "L" as const,
              direction: "counterclockwise" as const,
              chevronRotation: -90,
            },
            {
              left: "50%",
              top: "0%",
              layer: "M" as const,
              direction: "counterclockwise" as const,
              chevronRotation: -90,
            },
            {
              left: "70%",
              top: "0%",
              layer: "R" as const,
              direction: "clockwise" as const,
              chevronRotation: -90,
            },
          ].map(({ left, top, layer, direction, chevronRotation }, index) => (
            <motion.button
              key={index}
              className="absolute flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-lg focus:outline-none interactive-bg-primary-container"
              style={{ left, top }}
              onClick={() => queueMove(layer, direction)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ChevronRight
                style={{ transform: `rotate(${chevronRotation}deg)` }}
              />
            </motion.button>
          ))}
        {!isRunningInitialAnimation && performedMoves.length ? (
          <motion.button
            className="absolute flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none interactive-bg-primary-container"
            style={{ left: "100%", top: "0%" }}
            onClick={reset}
            disabled={pendingMoves.length > 0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            R
          </motion.button>
        ) : undefined}
      </AnimatePresence>
    </div>
  );
}
