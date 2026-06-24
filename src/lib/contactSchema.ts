import { z } from "zod";

export const contactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t("nameError")),
    phone: z.string().min(8, t("phoneError")),
    email: z.string().email(t("emailError")),
    subject: z.string().min(3, t("subjectError")),
    message: z.string().min(2, t("messageError")),
    service: z.string().min(2, t("serviceError")),
  });
