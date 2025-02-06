"use client";

import Player from "next-video/player";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ChevronLeftIcon, ChevronRightIcon, RotateCwIcon } from "lucide-react";

interface NextVideoDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  src: string;
}

export const NextVideoDialog = ({
  isOpen,
  setIsOpen,
  name,
  src,
}: NextVideoDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-w-4xl overflow-hidden">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base">
            {name}
          </DialogTitle>
          <DialogDescription asChild className="px-2 py-2">
            <Player src={src} autoPlay={true} playsInline={true} />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row justify-between sm:justify-between border-t border-border px-6 py-4">
          <Button type="button" className="flex items-center gap-2">
            <RotateCwIcon />
            <span>Recargar</span>
          </Button>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="button" className="flex items-center gap-2">
              <ChevronLeftIcon />
              <span>Anterior</span>
            </Button>
            <Button type="button" className="flex items-center gap-2">
              <span>Siguiente</span>
              <ChevronRightIcon />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
