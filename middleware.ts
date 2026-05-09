import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Cloud Run forwards requests from port 443 to the container on port 8080.
  // Next.js sees an internal HTTP request on :8080 and includes that port when
  // constructing redirect URLs, producing e.g. https://hostname:8080/en.
  // Fix: rewrite the request URL so Next.js uses the public host/scheme from
  // the X-Forwarded-* headers before passing it to next-intl middleware.
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  // Strip any port from the host (Cloud Run public URLs are always port 443)
  const publicHost = host.replace(/:\d+$/, "");
  const publicUrl = new URL(request.url);
  publicUrl.protocol = proto;
  publicUrl.host = publicHost; // removes the :8080

  const patchedRequest = new NextRequest(publicUrl.toString(), request);
  return intlMiddleware(patchedRequest);
}

export const config = {
  matcher: ["/", "/(en|zh)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
