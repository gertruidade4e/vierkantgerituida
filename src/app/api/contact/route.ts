import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string; message?: string } | null;

  if (!body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "email_and_message_required" }, { status: 400 });
  }

  // Future hook: send to support queue / CRM / ticketing system.
  return NextResponse.json({ ok: true });
}

