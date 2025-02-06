"use client";

import ReactPlayer from "react-player";

import type { PlayerProps } from "next-video";

export default function VideoPlayer(props: PlayerProps) {
  const { src } = props;

  return <ReactPlayer url={src} width="100%" height="100%" />;
}
