import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  phone: z.string().min(8, "Numéro invalide"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Objet requis"),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().min(10, "Message trop court"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
