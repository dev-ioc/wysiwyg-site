import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: "WYSIWYG Contact <onboarding@resend.dev>",
    to: process.env.EMAIL_USER!,
    replyTo: body.email,
    subject: `Message de ${body.name}`,
    html: `
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p>${body.message}</p>
  `,
  });
  return Response.json({ message: "Email envoyé" });
}
