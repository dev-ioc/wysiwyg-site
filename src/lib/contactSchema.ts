import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  phone: z.string().min(8, "Numéro invalide"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Objet requis"),
  message: z.string().min(2, "Message trop court"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
