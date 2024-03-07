import { FC } from "react";
import { FaceColor, Tile } from "./RubikCube";
import Head from "next/head";

const FACE_COLOR: Record<FaceColor, string> = {
  red: "#ff7645",
  orange: "#f6ad55",
  blue: "#4751d8",
  green: "#04bc6c",
  yellow: "#f0e513",
  white: "#ffffff",
};

type Props = {
  face: Record<Tile, FaceColor>;
};

export const RubikFavicon: FC<Props> = ({ face }) => {
  return typeof window !== "undefined" ? (
    <Head>
      <link
        key={JSON.stringify(face)}
        rel="icon"
        href={`data:image/svg+xml;base64,${window.btoa(
          `
    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="1">
    <polygon points="0,0 0,10 10,10 10,0" fill="${FACE_COLOR[face.topLeft]}" />
    <polygon points="10,0 20,0 20,10 10,10" fill="${
      FACE_COLOR[face.topCenter]
    }" />
    <polygon points="20,0 30,0 30,10 20,10" fill="${
      FACE_COLOR[face.topRight]
    }" />
    <polygon points="0,10 0,20 10,20 10,10" fill="${
      FACE_COLOR[face.centerLeft]
    }" />
    <polygon points="10,10 10,20 20,20 20,10" fill="${
      FACE_COLOR[face.centerCenter]
    }" />
    <polygon points="20,10 20,20 30,20 30,10" fill="${
      FACE_COLOR[face.centerRight]
    }" />
    <polygon points="0,20 0,30 10,30 10,20" fill="${
      FACE_COLOR[face.bottomLeft]
    }" />
    <polygon points="10,20 10,30 20,30 20,20" fill="${
      FACE_COLOR[face.bottomCenter]
    }" />
    <polygon points="20,20 20,30 30,30 30,20" fill="${
      FACE_COLOR[face.bottomRight]
    }" />
  </svg>
       `
        )}`}
      />
    </Head>
  ) : null;
};
