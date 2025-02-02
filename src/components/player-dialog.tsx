"use client";

// import { MediaPlayer, MediaProvider } from "@vidstack/react";
// import {
//   PlyrLayout,
//   plyrLayoutIcons,
// } from "@vidstack/react/player/layouts/plyr";
// import "@vidstack/react/player/styles/base.css";
// import "@vidstack/react/player/styles/plyr/theme.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  AudioSrc,
  DASHSrc,
  HLSSrc,
  VideoSrc,
  VimeoSrc,
  YouTubeSrc,
} from "@vidstack/react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PlayerDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  src: AudioSrc | VideoSrc | HLSSrc | DASHSrc | YouTubeSrc | VimeoSrc;
  thumbnail?: string;
}

export const PlayerDialog = ({
  isOpen,
  setIsOpen,
  name,
  src,
  thumbnail,
}: PlayerDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="flex flex-col gap-0 p-0  sm:max-w-3xl overflow-hidden">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base">
            {name}
          </DialogTitle>
          <DialogDescription asChild className="px-2 py-2">
            {/* <MediaPlayer
              title={name}
              src={src}
              playsInline={true}
              autoPlay={true}
            >
              <MediaProvider />
              <PlyrLayout thumbnails={thumbnail} icons={plyrLayoutIcons} />
            </MediaPlayer> */}

            <MediaPlayer
              title={name}
              src={src}
              playsInline={true}
              autoPlay={true}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={thumbnail}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-between sm:justify-between border-t border-border px-6 py-4">
          <DialogClose asChild>
            <Button type="button" className="flex items-center gap-2">
              <ChevronLeftIcon />
              <span>Anterior</span>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" className="flex items-center gap-2">
              <span>Siguiente</span>
              <ChevronRightIcon />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
