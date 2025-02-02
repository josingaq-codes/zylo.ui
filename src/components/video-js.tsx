"use client";

import { useEffect, useRef } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoRef.current.appendChild(videoElement);
      videojs(videoElement, {
        controls: true,
        autoplay: true,
        sources: [
          {
            src: "http://digital.webhop.net:80/play/negeNieHYlV7DQit8X_CUBJwnjcXRAhqYUg2TbpmvKs/m3u8",
            type: "application/x-mpegurl",
          },
        ],
      });
    }
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};
