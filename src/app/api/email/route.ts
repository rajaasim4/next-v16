import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, to, data } = body;

    if (!type || !to || !data) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await sendEmail({ type, to, data });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
