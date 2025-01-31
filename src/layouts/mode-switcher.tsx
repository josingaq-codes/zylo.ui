"use client";

import { useCallback } from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { MoonIcon, SunIcon } from "lucide-react";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <SunIcon className="hidden [html.dark_&]:block size-5 text-muted-foreground/80" />
      <MoonIcon className="hidden [html.light_&]:block size-5 text-muted-foreground/80" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
