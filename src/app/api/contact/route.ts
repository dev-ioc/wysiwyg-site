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
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nouveau message - WYSIWYG</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                
                <!-- HEADER -->
                <tr>
                  <td style="background-color:#54BE73; padding: 32px 40px; text-align:center;">
                    <h1 style="margin:0; color:#ffffff; font-size:24px; letter-spacing:1px;">WYSIWYG</h1>
                    <p style="margin:8px 0 0; color:#f8c8c8; font-size:13px;">Nouveau message reçu via le site web WYSIWYG</p>
                  </td>
                </tr>

                <!-- BODY -->
                <tr>
                  <td style="padding: 36px 40px;">
                    <h2 style="margin:0 0 24px; color:#222222; font-size:18px; border-bottom: 2px solid #f0f0f0; padding-bottom:12px;">
                      Détails du message
                    </h2>

                    <!-- Nom -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" style="color:#888888; font-size:13px; padding: 10px 0;">Nom</td>
                        <td style="color:#222222; font-size:14px; font-weight:bold; padding: 10px 0; border-bottom:1px solid #f0f0f0;">
                          ${body.name}
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" style="color:#888888; font-size:13px; padding: 10px 0;">Email</td>
                        <td style="font-size:14px; padding: 10px 0; border-bottom:1px solid #f0f0f0;">
                          <a href="mailto:${body.email}" style="color:#222222; text-decoration:none;">${body.email}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Téléphone -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" style="color:#888888; font-size:13px; padding: 10px 0;">Téléphone</td>
                        <td style="color:#222222; font-size:14px; padding: 10px 0; border-bottom:1px solid #f0f0f0;">
                          ${body.phone}
                        </td>
                      </tr>
                    </table>

                    <!-- Objet -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" style="color:#888888; font-size:13px; padding: 10px 0;">Objet</td>
                        <td style="color:#222222; font-size:14px; padding: 10px 0; border-bottom:1px solid #f0f0f0;">
                          ${body.subject}
                        </td>
                      </tr>
                    </table>

                    <!-- Service -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" style="color:#888888; font-size:13px; padding: 10px 0;">Service</td>
                        <td style="padding: 10px 0; border-bottom:1px solid #f0f0f0;">
                          <span style="background-color:#fdecea; color:#222222; font-size:12px; font-weight:bold; padding:4px 10px; border-radius:20px;">
                            ${body.service}
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
                      <tr>
                        <td style="color:#888888; font-size:13px; padding-bottom:10px;">Message</td>
                      </tr>
                      <tr>
                        <td style="background-color:#f9f9f9; border-left: 4px solid #c0392b; padding: 16px 20px; border-radius:4px; color:#333333; font-size:14px; line-height:1.7;">
                          ${body.message}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="background-color:#f9f9f9; padding: 20px 40px; text-align:center; border-top:1px solid #f0f0f0;">
                    <p style="margin:0; color:#aaaaaa; font-size:12px;">
                      © ${new Date().getFullYear()} WYSIWYG — Tous droits réservés
                    </p>
                    <p style="margin:6px 0 0; color:#aaaaaa; font-size:11px;">
                      Cet email a été généré automatiquement, merci de ne pas y répondre directement.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>

      </body>
      </html>
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
