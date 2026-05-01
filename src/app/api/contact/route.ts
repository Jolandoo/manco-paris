import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  questionId?: string;
}

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO = process.env.CONTACT_EMAIL || "contact@manco.paris";

export async function POST(req: NextRequest) {
  const body: ContactPayload = await req.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const subject = body.questionId
    ? `[manco.paris] ${body.name} — ${body.questionId}`
    : `[manco.paris] ${body.name}`;

  if (resend) {
    const { error } = await resend.emails.send({
      from: "MANCO PARIS <noreply@manco.paris>",
      replyTo: body.email,
      to: TO,
      subject,
      text: [
        `Nom: ${body.name}`,
        `Email: ${body.email}`,
        body.company ? `Société: ${body.company}` : null,
        body.questionId ? `Question: ${body.questionId}` : null,
        "",
        body.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
  } else {
    console.log("[Contact] No RESEND_API_KEY — logging only:", {
      name: body.name,
      email: body.email,
      company: body.company,
      message: body.message,
      questionId: body.questionId,
    });
  }

  return NextResponse.json({ success: true });
}
