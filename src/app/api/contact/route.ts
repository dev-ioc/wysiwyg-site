import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_USER) {
      return Response.json(
        { message: "Configuration serveur manquante" },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: "WYSIWYG Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER!,
      replyTo: body.email,
      subject: `Message de ${body.name}`,
      html: `
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Téléphone:</strong> ${body.phone}</p>
        <p><strong>Objet:</strong> ${body.subject}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return Response.json({ message: "Email envoyé avec succès" });
  } catch (error: any) {
    console.error("Erreur envoi email:", error);
    return Response.json(
      { message: error.message || "Erreur lors de l'envoi" },
      { status: 500 },
    );
  }
}
