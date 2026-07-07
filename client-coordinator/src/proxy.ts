// src/proxy.ts
import { NextRequest, NextResponse } from "next/server";
import { AUTH_TOKEN_KEY } from "@/services/auth/config";
import type { TokensInfo } from "@/services/auth/auth-context";

// Only these exact routes are public — everything else requires auth
const publicRoutes = ["/auth/signin", "/auth/signup", "/auth/forgot-password"];

function isPublicRoute(pathname: string) {
  return publicRoutes.includes(pathname);
}

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublic = isPublicRoute(path);

  const rawCookie = req.cookies.get(AUTH_TOKEN_KEY)?.value;

  let tokens: TokensInfo | null = null;
  try {
    tokens = rawCookie ? (JSON.parse(rawCookie) as TokensInfo) : null;
  } catch {
    tokens = null; // malformed cookie — treat as logged out
  }

  const isAuthenticated = Boolean(tokens?.token);

  // Not logged in + hitting a protected route → send to sign in
  if (!isAuthenticated && !isPublic) {
    const loginUrl = new URL("/auth/signin", req.nextUrl);
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  // Logged in + hitting a public auth page → bounce to home
  if (isAuthenticated && isPublic) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
