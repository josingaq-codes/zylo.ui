"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { signInSchema } from "@/modules/auth/auth-schema";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Logo } from "@/layouts/logo";

import { RiGoogleFill, RiGithubFill } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircleIcon } from "lucide-react";

export const SignInCard = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const oneTapCall = async () => {
      await authClient.oneTap({
        context: "signin",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Bienvenido");
            router.push("/browse");
          },
        },
      });
    };

    oneTapCall();
  }, [router]);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      },
      {
        onRequest: () => {
          setSubmitting(true);
        },
        onSuccess: () => {
          toast.success("Bienvenido de nuevo");
          router.push("/browse");
        },
        onError: ({ error }) => {
          if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
            toast.error("Correo electrónico o contraseña incorrectos");
          }
        },
        onResponse: () => {
          setSubmitting(false);
        },
      }
    );
  };

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
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

            <div className="flex justify-between items-center gap-2">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="rememberMe"
                      className="font-normal text-muted-foreground !mt-0.5"
                    >
                      Recuérdame
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link
                className="text-sm underline hover:no-underline"
                href="/recover-password"
              >
                ¿Olvidaste la contraseña?
              </Link>
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting && (
                <LoaderCircleIcon
                  className="-ms-1 me-2 animate-spin"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
              Iniciar sesión
            </Button>
          </form>
        </Form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">O</span>
        </div>

        <Button
          variant="outline"
          disabled={submitting}
          onClick={async () => {
            await authClient.signIn.social({
              provider: "google",
              callbackURL: "/browse",
            });
          }}
        >
          <RiGoogleFill className="me-3" size={16} />
          Iniciar sesión con Google
        </Button>

        <Button
          variant="outline"
          disabled={submitting}
          onClick={async () => {
            await authClient.signIn.social({
              provider: "github",
              callbackURL: "/browse",
            });
          }}
        >
          <RiGithubFill className="me-3" size={16} />
          Iniciar sesión con GitHub
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          No tienes una cuenta?{" "}
          <Link className="underline hover:no-underline" href="/auth/sign-up">
            Regístrate aquí
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
