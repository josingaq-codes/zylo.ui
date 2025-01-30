import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Logo } from "@/layouts/logo";

import { RiGoogleFill, RiGithubFill } from "@remixicon/react";

export const SignInCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2">
        <Link href="/">
          <Logo />
        </Link>
        <CardTitle className="sm:text-center">Bienvenido de nuevo</CardTitle>
        <CardDescription className="sm:text-center text-xs">
          Introduzca sus credenciales para ingresar a su cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <form className="space-y-5">
          <div className="space-y-4">
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
          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="font-normal text-muted-foreground"
              >
                Recuérdame
              </Label>
            </div>
            <Link
              className="text-sm underline hover:no-underline"
              href="/recover-password"
            >
              ¿Olvidaste la contraseña?
            </Link>
          </div>
          <Button type="button" className="w-full">
            Iniciar sesión
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
          No tienes una cuenta?{" "}
          <Link className="underline hover:no-underline" href="/sign-up">
            Regístrate aquí
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
