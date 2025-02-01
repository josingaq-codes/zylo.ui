"use client";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ChevronRightIcon } from "lucide-react";

export const Home = () => {
  return (
    <section className="relative">
      <div className="top-0 fixed w-full h-dvh bg-[url('/bg-hero.jpg')] bg-cover bg-center flex items-center justify-center px-2">
        <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-none px-6 py-6">
          <CardContent className="space-y-4 p-0">
            <p className="text-center text-xl font-bold">
              Películas series y programas de televisión ilimitados
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Input
                type="email"
                placeholder="Correo electrónico"
                className="rounded-xl"
              />
              <Button className="rounded-xl">
                <Link href="/auth/sign-up" className="flex items-center gap-2">
                  <span>Comenzar</span>
                  <ChevronRightIcon />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
