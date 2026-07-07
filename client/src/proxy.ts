// src/proxy.ts
import { NextRequest, NextResponse } from "next/server";
import { AUTH_TOKEN_KEY } from "@/services/auth/config";
import type { TokensInfo } from "@/services/auth/auth-context";

// Accessible to everyone, logged in or not
const openRoutes = ["/", "/packages"];

// Only accessible when NOT logged in — logged-in users get redirected to "/"
const guestOnlyRoutes = [
  "/auth/signin",
  "/auth/signup",
  "/auth/forgot-password",
];

function isOpenRoute(pathname: string) {
  return openRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

function isGuestOnlyRoute(pathname: string) {
  return guestOnlyRoutes.includes(pathname);
}

function getIsAuthenticated(req: NextRequest): boolean {
  const rawCookie = req.cookies.get(AUTH_TOKEN_KEY)?.value;

  if (!rawCookie) return false;

  try {
    const tokens = JSON.parse(rawCookie) as TokensInfo;
    return Boolean(tokens?.token);
  } catch {
    return false; // malformed cookie — treat as logged out
  }
}

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAuthenticated = getIsAuthenticated(req);
  const isOpen = isOpenRoute(path);
  const isGuestOnly = isGuestOnlyRoute(path);

  // Logged in + hitting a guest-only page (signin/signup/forgot-password) → bounce to home
  if (isAuthenticated && isGuestOnly) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  // Not logged in + hitting a route that's neither open nor guest-only → send to sign in
  if (!isAuthenticated && !isOpen && !isGuestOnly) {
    const loginUrl = new URL("/auth/signin", req.nextUrl);
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
