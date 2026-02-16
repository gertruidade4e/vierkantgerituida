import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacySectionPaths = new Set([
  "/features",
  "/security",
  "/moderation-security",
  "/protection",
  "/interactive",
  "/deployment",
]);

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.toLowerCase();

  if (legacySectionPaths.has(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/features",
    "/security",
    "/moderation-security",
    "/protection",
    "/interactive",
    "/deployment",
  ],
};
