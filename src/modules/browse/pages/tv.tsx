"use client";

import { useState } from "react";

import {
  type AudioSrc,
  type DASHSrc,
  type HLSSrc,
  type VideoSrc,
  type VimeoSrc,
  type YouTubeSrc,
} from "@vidstack/react";

import { Card, CardContent } from "@/components/ui/card";

import { PlayerDialog } from "@/components/player-dialog";

import { lives } from "./data";

export const Tv = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [src, setSrc] = useState<
    AudioSrc | VideoSrc | HLSSrc | DASHSrc | YouTubeSrc | VimeoSrc
  >();

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {lives.map((live) => {
          return (
            <Card
              key={live.id}
              className="cursor-pointer p-0"
              onClick={() => {
                setSrc({
                  src: live.src,
                  type: live.type as HLSSrc["type"],
                });
                setName(live.title);
                setIsOpen(true);
              }}
            >
              <CardContent className="p-6">
                <img src={live.img} alt={live.title} />
              </CardContent>
            </Card>
          );
        })}

        <PlayerDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          name={name}
          src={src!}
        />
      </div>
    </section>
  );
};
