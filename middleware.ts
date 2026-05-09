import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Cloud Run forwards 443 → container :8080. Next.js detects the non-standard
  // port and includes it in redirect Location headers, producing URLs like
  // https://host:8080/en. Strip the port from any redirect so browsers reach
  // the correct public URL.
  if (response) {
    const location = response.headers.get("location");
    if (location && /:\d+/.test(location)) {
      try {
        const url = new URL(location);
        // Only strip non-standard ports (keep 80/443 as-is even though they'd
        // normally be omitted by the URL spec already)
        if (url.port && url.port !== "443" && url.port !== "80") {
          url.port = "";
          // NextResponse headers are mutable — update in place
          response.headers.set("location", url.toString());
        }
      } catch {
        // Relative redirect URL (e.g. "/en") — nothing to fix
      }
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/(en|zh)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
