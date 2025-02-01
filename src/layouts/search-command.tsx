"use client";

import { ClapperboardIcon, FilmIcon, SearchIcon } from "lucide-react";
import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export const SearchCommand = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="space-x-6"
        onClick={() => setOpen(true)}
      >
        <span className="font-normal text-muted-foreground/80">Buscar...</span>
        <SearchIcon
          className="me-3 text-muted-foreground/80"
          size={16}
          strokeWidth={2}
        />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Busca una película o serie..." />
        <CommandList>
          <CommandEmpty>No se han encontrado resultados.</CommandEmpty>
          <CommandGroup heading="Películas">
            <CommandItem>
              <FilmIcon size={16} strokeWidth={2} className="opacity-60" />
              <span>Moana 2</span>
            </CommandItem>
            <CommandItem>
              <FilmIcon size={16} strokeWidth={2} className="opacity-60" />
              <span>La sustancia</span>
            </CommandItem>
            <CommandItem>
              <FilmIcon size={16} strokeWidth={2} className="opacity-60" />
              <span>Sonic 3: La Película</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Series">
            <CommandItem>
              <ClapperboardIcon
                size={16}
                strokeWidth={2}
                className="opacity-60"
              />
              <span>El juego del calamar</span>
            </CommandItem>
            <CommandItem>
              <ClapperboardIcon
                size={16}
                strokeWidth={2}
                className="opacity-60"
              />
              <span>Juego de Tronos</span>
            </CommandItem>
            <CommandItem>
              <ClapperboardIcon
                size={16}
                strokeWidth={2}
                className="opacity-60"
              />
              <span>From</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
