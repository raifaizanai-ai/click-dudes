import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/LegalPageShell"
import { COOKIE_SECTIONS } from "@/lib/legal/cookiesContent"

const LAST_UPDATED = "August 8, 2026"

export const metadata: Metadata = {
  title:       "Cookie Policy — Click Dudes",
  description: "What cookies and similar technologies Click Dudes uses across our website and Partner Portal, and how to manage them.",
  alternates: { canonical: "https://clickdudes.com/cookies" },
}

export default function CookiesPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      subtitle="What cookies and similar technologies Click Dudes uses across our website and Partner Portal, and how to manage them."
      lastUpdated={LAST_UPDATED}
      sections={COOKIE_SECTIONS}
      currentHref="/cookies"
    />
  )
}
