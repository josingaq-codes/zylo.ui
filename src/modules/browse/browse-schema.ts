import { z } from "zod";

export const channelsSchema = z.object({
  categoryId: z.string({ message: "Debe de selecionar una opción" }).trim(),
});
