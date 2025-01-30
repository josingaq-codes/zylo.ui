import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().email({ message: "Correo electrónico inválido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(256),
  rememberMe: z.boolean(),
});

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, {
        message: "El nombre completo debe tener al menos 3 caracteres",
      })
      .max(256),
    email: z.string().trim().email({ message: "Correo electrónico inválido" }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
      .max(256),
    confirmPassword: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
      .max(256),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
