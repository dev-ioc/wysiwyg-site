import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, phone } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Site : ${subject}`,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi",
      },
      { status: 500 },
    );
  }
}
