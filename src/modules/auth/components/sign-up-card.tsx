"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { signUpSchema } from "@/modules/auth/auth-schema";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Logo } from "@/layouts/logo";

import { RiGithubFill, RiGoogleFill } from "@remixicon/react";

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
  };

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
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="fullName">Nombre completo</FormLabel>
                  <FormControl>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ingresa tu correo electrónico"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirmPassword">
                    Confirmar contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirma tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
          </form>
        </Form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">O</span>
        </div>

        <Button variant="outline" onClick={() => toast.info("Próximamente")}>
          <RiGoogleFill className="me-3" size={16} />
          Iniciar sesión con Google
        </Button>

        <Button variant="outline" onClick={() => toast.info("Próximamente")}>
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
