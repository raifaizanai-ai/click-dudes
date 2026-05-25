import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// 301 redirect legacy /publishers/* → canonical /publisher-solutions/*
const PUBLISHER_REDIRECTS: Record<string, string> = {
  "/publishers/web-publishers":    "/publisher-solutions/web-monetization",
  "/publishers/app-publishers":    "/publisher-solutions/app-monetization",
  "/publishers/ctv-publishers":    "/publisher-solutions/ctv-monetization",
  "/publishers/google-adx":        "/publisher-solutions/google-adx-solutions",
  "/publishers/header-bidding":    "/publisher-solutions/header-bidding-solutions",
  "/publishers/ad-optimization":   "/publisher-solutions/ai-ad-optimization",
  "/publishers/ad-formats":        "/ad-formats",
}

// Simple in-memory rate limiter for /api/revenue-leads
const RATE_MAP = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5      // requests
const RATE_WINDOW = 60_000 // 1 minute in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = RATE_MAP.get(ip)
  if (!entry || now > entry.resetAt) {
    RATE_MAP.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }
  entry.count++
  if (entry.count > RATE_LIMIT) return true
  return false
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── 301 redirects for legacy publisher routes ──────────────────────────────
  const canonical = PUBLISHER_REDIRECTS[pathname]
  if (canonical) {
    return NextResponse.redirect(new URL(canonical, req.url), { status: 301 })
  }

  // ── API rate limiting ──────────────────────────────────────────────────────
  if (pathname === "/api/revenue-leads" && req.method === "POST") {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      )
    }
  }

  // ── Security headers ────────────────────────────────────────────────────────
  const res = NextResponse.next()
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  )
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "frame-ancestors 'none'",
    ].join("; ")
  )
  return res
}

export const config = {
  matcher: [
    // Match all routes except Next internals and static files
    "/((?!_next/static|_next/image|favicon.ico|icon.png|logo|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2?|ttf)).*)",
  ],
}
