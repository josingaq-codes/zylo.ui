import Link from "next/link";

import { Logo } from "@/layouts/logo";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RiGithubFill, RiGoogleFill } from "@remixicon/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const SignUpCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2">
        <Link href="/">
          <Logo />
        </Link>
        <CardTitle className="sm:text-center">Regístrate en Zylo UI</CardTitle>
        <CardDescription className="sm:text-center text-xs">
          Sólo necesitamos algunos datos para empezar en ZyloUI.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Jakub Skraly"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                placeholder="Ingresa tu correo electrónico"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                placeholder="Ingresa tu contraseña"
                type="password"
                required
              />
            </div>
          </div>
          <Button type="button" className="w-full">
            Crear cuenta
          </Button>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">O</span>
        </div>

        <Button variant="outline">
          <RiGoogleFill className="me-3" size={16} />
          Iniciar sesión con Google
        </Button>

        <Button variant="outline">
          <RiGithubFill className="me-3" size={16} />
          Iniciar sesión con GitHub
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Ya tienes una cuenta?{" "}
          <Link className="underline hover:no-underline" href="/sign-in">
            Inicia sesión
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
