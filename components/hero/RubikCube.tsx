import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ChevronRight from "../../public/chevron-right.svg";
import Reset from "../../assets/reset.svg";
import { Placement } from "@floating-ui/react";
import { SquareButton } from "../SquareButton";
import { RubikFavicon } from "./RubikFavicon";
import { DevNote } from "../dev_notes/DevNote";

type CubeState = Record<Face, Record<Tile, FaceColor>>;

const INITIAL_CUBE_STATE: CubeState = {
  front: {
    topLeft: "orange",
    topCenter: "orange",
    topRight: "yellow",
    centerLeft: "white",
    centerCenter: "green",
    centerRight: "red",
    bottomLeft: "green",
    bottomCenter: "blue",
    bottomRight: "yellow",
  },
  right: {
    topLeft: "blue",
    topCenter: "white",
    topRight: "yellow",
    centerLeft: "green",
    centerCenter: "red",
    centerRight: "orange",
    bottomLeft: "orange",
    bottomCenter: "blue",
    bottomRight: "red",
  },
  back: {
    topLeft: "red",
    topCenter: "yellow",
    topRight: "white",
    centerLeft: "white",
    centerCenter: "blue",
    centerRight: "yellow",
    bottomLeft: "white",
    bottomCenter: "white",
    bottomRight: "white",
  },
  left: {
    topLeft: "orange",
    topCenter: "yellow",
    topRight: "yellow",
    centerLeft: "red",
    centerCenter: "orange",
    centerRight: "red",
    bottomLeft: "orange",
    bottomCenter: "green",
    bottomRight: "red",
  },
  top: {
    topLeft: "green",
    topCenter: "blue",
    topRight: "green",
    centerLeft: "green",
    centerCenter: "white",
    centerRight: "blue",
    bottomLeft: "blue",
    bottomCenter: "yellow",
    bottomRight: "red",
  },
  bottom: {
    topLeft: "white",
    topCenter: "red",
    topRight: "green",
    centerLeft: "orange",
    centerCenter: "yellow",
    centerRight: "orange",
    bottomLeft: "blue",
    bottomCenter: "green",
    bottomRight: "blue",
  },
};

type Face = "front" | "right" | "back" | "left" | "top" | "bottom";

const SOLVED_COLOR: Record<Face, FaceColor> = {
  front: "white",
  right: "green",
  back: "yellow",
  left: "blue",
  top: "red",
  bottom: "orange",
};

const isSolved: (cubeState: CubeState) => boolean = (cubeState) =>
  Object.entries(cubeState).every(([face, tiles]) =>
    Object.entries(tiles).every(
      ([, color]) => color === SOLVED_COLOR[face as Face]
    )
  );

const MOVE_DURATION = 0.4;
const AUTOMATIC_MOVE_DURATION = 0.2;

export type Tile =
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

export type FaceColor =
  | "red"
  | "orange"
  | "blue"
  | "green"
  | "yellow"
  | "white";

const FACE_CLASSNAME: Record<FaceColor, string> = {
  red: "fill-[#ff7645]",
  orange: "fill-[#f6ad55]",
  blue: "fill-[#4751d8]",
  green: "fill-[#04bc6c]",
  yellow: "fill-[#f0e513]",
  white: "fill-[url(#javi)]",
};

type Position = {
  x: number;
  y: number;
};

const TILE_CENTERS: Record<Tile, Position> = {
  topLeft: { x: 30, y: 30 },
  topCenter: { x: 50, y: 30 },
  topRight: { x: 70, y: 30 },
  centerLeft: { x: 30, y: 50 },
  centerCenter: { x: 50, y: 50 },
  centerRight: { x: 70, y: 50 },
  bottomLeft: { x: 30, y: 70 },
  bottomCenter: { x: 50, y: 70 },
  bottomRight: { x: 70, y: 70 },
};

const tileCenter = (tile: Tile) => TILE_CENTERS[tile];

const tileOffsetFromCenter = (tile: Tile) => ({
  x: tileCenter(tile).x - 50,
  y: tileCenter(tile).y - 50,
});

const TILE_SIZE = 20;
const TILE_SPACING = 1;
const SMALL_TILE_RADIUS = 0.5;
const LARGE_TILE_RADIUS = 3;
const tilePath: (tile: Tile) => string = (tile) => {
  const center = tileCenter(tile);
  const topLeftRadius = [
    "centerCenter",
    "centerRight",
    "bottomCenter",
  ].includes(tile)
    ? LARGE_TILE_RADIUS
    : SMALL_TILE_RADIUS;
  const topRightRadius = [
    "centerCenter",
    "centerLeft",
    "bottomCenter",
  ].includes(tile)
    ? LARGE_TILE_RADIUS
    : SMALL_TILE_RADIUS;
  const bottomLeftRadius = [
    "centerCenter",
    "topCenter",
    "centerRight",
  ].includes(tile)
    ? LARGE_TILE_RADIUS
    : SMALL_TILE_RADIUS;
  const bottomRightRadius = [
    "centerCenter",
    "centerLeft",
    "topCenter",
  ].includes(tile)
    ? LARGE_TILE_RADIUS
    : SMALL_TILE_RADIUS;
  return `M${center.x - (TILE_SIZE - TILE_SPACING) / 2 + topLeftRadius},${
    center.y - (TILE_SIZE - TILE_SPACING) / 2
  }h${
    TILE_SIZE - TILE_SPACING - topLeftRadius - topRightRadius
  }a${topRightRadius} ${topRightRadius} 0 0 1 ${topRightRadius} ${topRightRadius}v${
    TILE_SIZE - TILE_SPACING - topRightRadius - bottomRightRadius
  }a${bottomRightRadius} ${bottomRightRadius} 0 0 1 ${-bottomRightRadius} ${bottomRightRadius}h-${
    TILE_SIZE - TILE_SPACING - bottomRightRadius - bottomLeftRadius
  }a${bottomLeftRadius} ${bottomLeftRadius} 0 0 1 ${-bottomLeftRadius} ${-bottomLeftRadius}v${
    -TILE_SIZE + TILE_SPACING + bottomLeftRadius + topLeftRadius
  }a${topLeftRadius} ${topLeftRadius} 0 0 1 ${topLeftRadius} ${-topLeftRadius}z`;
};

const HALF_TURN_SCALE = 0.70716;
const HT_HALF_TILE = 7.071; // size of half a tile in a half turn movement
const HALF_TURNS: Record<
  Tile,
  Record<Direction, { x?: string; y?: string }>
> = {
  topLeft: {
    up: { y: `${-tileOffsetFromCenter("topLeft").y - 5 * HT_HALF_TILE}%` },
    down: { y: `${-tileOffsetFromCenter("topLeft").y + HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("topLeft").x - 5 * HT_HALF_TILE}%` },
    right: { x: `${-tileOffsetFromCenter("topLeft").x + HT_HALF_TILE}%` },
  },
  topCenter: {
    up: { y: `${-tileOffsetFromCenter("topCenter").y - 5 * HT_HALF_TILE}%` },
    down: { y: `${-tileOffsetFromCenter("topCenter").y + HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("topCenter").x - 3 * HT_HALF_TILE}%` },
    right: { x: `${-tileOffsetFromCenter("topCenter").x + 3 * HT_HALF_TILE}%` },
  },
  topRight: {
    up: { y: `${-tileOffsetFromCenter("topRight").y - 5 * HT_HALF_TILE}%` },
    down: { y: `${-tileOffsetFromCenter("topRight").y + HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("topRight").x - HT_HALF_TILE}%` },
    right: { x: `${-tileOffsetFromCenter("topRight").x + 5 * HT_HALF_TILE}%` },
  },
  centerLeft: {
    up: { y: `${-3 * HT_HALF_TILE}%` },
    down: { y: `${3 * HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("centerLeft").x - 5 * HT_HALF_TILE}%` },
    right: { x: `${-tileOffsetFromCenter("centerLeft").x + HT_HALF_TILE}%` },
  },
  centerCenter: {
    up: { y: `${-3 * HT_HALF_TILE}%` },
    down: { y: `${3 * HT_HALF_TILE}%` },
    left: { x: `${-3 * HT_HALF_TILE}%` },
    right: { x: `${3 * HT_HALF_TILE}%` },
  },
  centerRight: {
    up: { y: `${-3 * HT_HALF_TILE}%` },
    down: { y: `${3 * HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("centerRight").x - HT_HALF_TILE}%` },
    right: {
      x: `${-tileOffsetFromCenter("centerRight").x + 5 * HT_HALF_TILE}%`,
    },
  },
  bottomLeft: {
    up: { y: `${-tileOffsetFromCenter("bottomLeft").y - HT_HALF_TILE}%` },
    down: { y: `${-tileOffsetFromCenter("bottomLeft").y + 5 * HT_HALF_TILE}%` },
    left: { x: `${-tileOffsetFromCenter("bottomLeft").x - 5 * HT_HALF_TILE}%` },
    right: { x: `${-tileOffsetFromCenter("bottomLeft").x + HT_HALF_TILE}%` },
  },
  bottomCenter: {
    up: { y: `${-tileOffsetFromCenter("bottomCenter").y - HT_HALF_TILE}%` },
    down: {
      y: `${-tileOffsetFromCenter("bottomCenter").y + 5 * HT_HALF_TILE}%`,
    },
    left: {
      x: `${-tileOffsetFromCenter("bottomCenter").x - 3 * HT_HALF_TILE}%`,
    },
    right: {
      x: `${-tileOffsetFromCenter("bottomCenter").x + 3 * HT_HALF_TILE}%`,
    },
  },
  bottomRight: {
    up: { y: `${-tileOffsetFromCenter("bottomRight").y - HT_HALF_TILE}%` },
    down: {
      y: `${-tileOffsetFromCenter("bottomRight").y + 5 * HT_HALF_TILE}%`,
    },
    left: { x: `${-tileOffsetFromCenter("bottomRight").x - HT_HALF_TILE}%` },
    right: {
      x: `${-tileOffsetFromCenter("bottomRight").x + 5 * HT_HALF_TILE}%`,
    },
  },
};

const halfTurnScale: (direction: Direction) => {
  scaleX?: number;
  scaleY?: number;
} = (direction) =>
  ["up", "down"].includes(direction)
    ? { scaleY: HALF_TURN_SCALE }
    : { scaleX: HALF_TURN_SCALE };

const halfTurnTransform: (
  tile: Tile,
  direction: Direction
) => { x?: string; y?: string; scaleX?: number; scaleY?: number } = (
  tile,
  direction
) => {
  return { ...HALF_TURNS[tile][direction], ...halfTurnScale(direction) };
};

const fullTurnScale: (direction: Direction) => {
  scaleX?: number;
  scaleY?: number;
} = (direction) =>
  ["up", "down"].includes(direction) ? { scaleY: 0 } : { scaleX: 0 };

const fullTurnTranslation: (
  tile: Tile,
  direction: Direction
) => { x?: string; y?: string } = (tile, direction) =>
  ["up", "down"].includes(direction)
    ? {
        y: `${-tileOffsetFromCenter(tile).y + (direction == "up" ? -30 : 30)}%`,
      }
    : {
        x: `${
          -tileOffsetFromCenter(tile).x + (direction === "left" ? -30 : 30)
        }%`,
      };

const fullTurnTransform: (
  tile: Tile,
  direction: Direction
) => { x?: string; y?: string; scaleX?: number; scaleY?: number } = (
  tile,
  direction
) => {
  return {
    ...fullTurnTranslation(tile, direction),
    ...fullTurnScale(direction),
  };
};

const TRANSIENT_GROUP_INITIAL_STATE: Record<Direction, any> = {
  left: { x: "30%", y: "0%", scaleX: 0, scaleY: 1 },
  right: { x: "-30%", y: "0%", scaleX: 0, scaleY: 1 },
  up: { x: "0%", y: "50%", scaleX: 1, scaleY: 0 },
  down: { x: "0%", y: "-10%", scaleX: 1, scaleY: 0 },
};

const TRANSIENT_GROUP_HALF_TURN: Record<Direction, any> = {
  left: {
    x: `${3 * HT_HALF_TILE}%`,
    y: "0%",
    scaleX: HALF_TURN_SCALE,
    scaleY: 1,
  },
  right: {
    x: `${-3 * HT_HALF_TILE}%`,
    y: "0%",
    scaleX: HALF_TURN_SCALE,
    scaleY: 1,
  },
  up: {
    x: "0%",
    y: `${3 * HT_HALF_TILE}%`,
    scaleX: 1,
    scaleY: HALF_TURN_SCALE,
  },
  down: {
    x: "0%",
    y: `${10 - 3 * HT_HALF_TILE}%`,
    scaleX: 1,
    scaleY: HALF_TURN_SCALE,
  },
};

const LAYER_TILES: Record<HorizontalLayer | VerticalLayer, [Tile, Tile, Tile]> =
  {
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

  const transientA = useRef<SVGPathElement>(null);
  const transientB = useRef<SVGPathElement>(null);
  const transientC = useRef<SVGPathElement>(null);

  const CONTROLS: Record<Tile, AnimationControls> = {
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
    turnDirection: "clockwise" | "counterclockwise",
    duration = MOVE_DURATION
  ) => {
    setIsTurning(true);
    const direction = CARTESIAN_DIRECTIONS[layer][turnDirection];
    const tiles = LAYER_TILES[layer];

    const futureCubeState = getNewCubeState(layer, turnDirection);

    transientGroup.set(TRANSIENT_GROUP_INITIAL_STATE[direction]);
    transientA.current?.setAttribute("d", tilePath(tiles[0]));
    transientB.current?.setAttribute("d", tilePath(tiles[1]));
    transientC.current?.setAttribute("d", tilePath(tiles[2]));

    transientA.current?.removeAttribute("class");
    transientB.current?.removeAttribute("class");
    transientC.current?.removeAttribute("class");

    transientA.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[tiles[0]]]
    );
    transientB.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[tiles[1]]]
    );
    transientC.current?.classList.add(
      FACE_CLASSNAME[futureCubeState.front[tiles[2]]]
    );

    tiles.forEach(async (tile) => {
      const control = CONTROLS[tile];
      await control.start({
        ...halfTurnTransform(tile, direction),
        transition: { duration: duration / 2, ease: "easeIn" },
      });
      control.start({
        ...fullTurnTransform(tile, direction),
        transition: { duration: duration / 2, ease: "easeOut" },
      });
    });

    await transientGroup.start({
      ...TRANSIENT_GROUP_HALF_TURN[direction],
      transition: { duration: duration / 2, ease: "easeIn" },
    });
    await transientGroup.start({
      x: "0%",
      y: "0%",
      scaleX: 1,
      scaleY: 1,
      transition: { duration: duration / 2, ease: "easeOut" },
    });
    for (const tile of tiles) {
      // hack, if using set we get an ugly white flash
      await CONTROLS[tile].start({
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

  const [cubeState, setCubeState] = useState(INITIAL_CUBE_STATE);

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
      duration?: number;
    }[]
  >([
    {
      layer: "U",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
    {
      layer: "M",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
    {
      layer: "M",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
    { layer: "D", direction: "clockwise", duration: AUTOMATIC_MOVE_DURATION },
    { layer: "L", direction: "clockwise", duration: AUTOMATIC_MOVE_DURATION },
    {
      layer: "U",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
    { layer: "R", direction: "clockwise", duration: AUTOMATIC_MOVE_DURATION },
    { layer: "D", direction: "clockwise", duration: AUTOMATIC_MOVE_DURATION },
    {
      layer: "E",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
    {
      layer: "M",
      direction: "counterclockwise",
      duration: AUTOMATIC_MOVE_DURATION,
    },
  ]);

  const [performedMoves, setPerformedMoves] = useState<
    {
      layer: HorizontalLayer | VerticalLayer;
      direction: "clockwise" | "counterclockwise";
    }[]
  >([]);

  useEffect(() => {
    if (pendingMoves.length && !isTurning) {
      const [{ layer, direction, duration }, ...rest] = pendingMoves;
      turn(layer, direction, duration);
      setPendingMoves(rest);
      setPerformedMoves((moves) => [{ layer, direction }, ...moves]);
    }
  }, [pendingMoves, isTurning]);

  const queueMove = (
    layer: HorizontalLayer | VerticalLayer,
    direction: "clockwise" | "counterclockwise",
    duration?: number
  ) => {
    setPendingMoves((moves) => [...moves, { layer, direction, duration }]);
  };

  const reset = () => {
    setPendingMoves(
      performedMoves.map((move) => ({
        layer: move.layer,
        direction:
          move.direction === "clockwise" ? "counterclockwise" : "clockwise",
        duration: AUTOMATIC_MOVE_DURATION,
      }))
    );
  };

  useEffect(() => {
    if (pendingMoves.length === 0 && !isTurning) {
      setIsRunningInitialAnimation(false);
      if (isSolved(cubeState)) {
        setPerformedMoves([]);
      }
    }
  }, [pendingMoves, isTurning]);

  return (
    <>
      <RubikFavicon face={cubeState.front} />
      <div className="relative m-5 w-fill h-fill">
        <DevNote className="absolute w-48 top-80 left-[calc(100%-64px)] rotate-[-6deg]">
          There are no 3D graphics on the cube, it's all 2D transforms on inline
          SVG paths. And lots of math.
        </DevNote>
        <DevNote className="absolute w-72 top-64 -left-56 rotate-[3deg]">
          There's a small mistake on the cube state tracking which doesn't match
          how a real cube works. Did you notice it?
          <hr className="w-full h-px my-1 border-outline/30" />
          Answer:
          <span className="text-tertiary-container selection:on-tertiary-container selection:bg-on-tertiary-container">
            I'm not keeping track of rotation, so my picture always shows my
            face in the upright orientation.
          </span>{" "}
          (highlight the invisible text to read it).
        </DevNote>
        <motion.svg
          stroke="currentColor"
          viewBox="0 0 100 100"
          className="w-full h-full stroke-on-surface"
          strokeWidth="0.3"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
          ).map((tile) => (
            <motion.path
              key={tile}
              animate={CONTROLS[tile]}
              d={tilePath(tile)}
              className={FACE_CLASSNAME[cubeState.front[tile]]}
            />
          ))}
          <motion.g animate={transientGroup}>
            <motion.path ref={transientA} d={tilePath("topLeft")} />
            <motion.path ref={transientB} d={tilePath("centerCenter")} />
            <motion.path ref={transientC} d={tilePath("bottomRight")} />
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
                tooltipPlacement: "right",
              },
              {
                left: "100%",
                top: "50%",
                layer: "E" as const,
                direction: "clockwise" as const,
                chevronRotation: 0,
                tooltipPlacement: "right",
              },
              {
                left: "100%",
                top: "70%",
                layer: "D" as const,
                direction: "clockwise" as const,
                chevronRotation: 0,
                tooltipPlacement: "right",
              },
              {
                left: "0%",
                top: "30%",
                layer: "U" as const,
                direction: "clockwise" as const,
                chevronRotation: 180,
                tooltipPlacement: "left",
              },
              {
                left: "0%",
                top: "50%",
                layer: "E" as const,
                direction: "counterclockwise" as const,
                chevronRotation: 180,
                tooltipPlacement: "left",
              },
              {
                left: "0%",
                top: "70%",
                layer: "D" as const,
                direction: "counterclockwise" as const,
                chevronRotation: 180,
                tooltipPlacement: "left",
              },
              {
                left: "30%",
                top: "100%",
                layer: "L" as const,
                direction: "clockwise" as const,
                chevronRotation: 90,
                tooltipPlacement: "left",
              },
              {
                left: "50%",
                top: "100%",
                layer: "M" as const,
                direction: "clockwise" as const,
                chevronRotation: 90,
                tooltipPlacement: "top",
              },
              {
                left: "70%",
                top: "100%",
                layer: "R" as const,
                direction: "counterclockwise" as const,
                chevronRotation: 90,
                tooltipPlacement: "right",
              },
              {
                left: "30%",
                top: "0%",
                layer: "L" as const,
                direction: "counterclockwise" as const,
                chevronRotation: -90,
                tooltipPlacement: "left",
              },
              {
                left: "50%",
                top: "0%",
                layer: "M" as const,
                direction: "counterclockwise" as const,
                chevronRotation: -90,
                tooltipPlacement: "top",
              },
              {
                left: "70%",
                top: "0%",
                layer: "R" as const,
                direction: "clockwise" as const,
                chevronRotation: -90,
                tooltipPlacement: "right",
              },
            ].map(
              (
                {
                  left,
                  top,
                  layer,
                  direction,
                  chevronRotation,
                  tooltipPlacement,
                },
                index
              ) => (
                <SquareButton
                  tooltip="Try moving the cube!"
                  key={index}
                  tooltipPlacement={tooltipPlacement as Placement}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left, top }}
                  onClick={() => queueMove(layer, direction)}
                  label={`Perform move ${layer}${
                    direction === "counterclockwise" ? "'" : ""
                  }`}
                >
                  <ChevronRight
                    style={{ transform: `rotate(${chevronRotation}deg)` }}
                  />
                </SquareButton>
              )
            )}
          {!isRunningInitialAnimation && performedMoves.length ? (
            <SquareButton
              label="Reset"
              tooltipPlacement="right"
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: "100%", top: "0%" }}
              onClick={reset}
              disabled={pendingMoves.length > 0}
            >
              <Reset className="w-6 h-6" />
            </SquareButton>
          ) : undefined}
        </AnimatePresence>
      </div>
    </>
  );
}
