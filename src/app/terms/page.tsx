import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/LegalPageShell"
import { TERMS_SECTIONS } from "@/lib/legal/termsContent"

const LAST_UPDATED = "August 8, 2026"

export const metadata: Metadata = {
  title:       "Terms of Service — Click Dudes",
  description: "The terms governing use of the Click Dudes website, publisher monetization services and partner program.",
  alternates: { canonical: "https://clickdudes.com/terms" },
}

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      subtitle="The terms governing use of the Click Dudes website, publisher monetization services and partner program."
      lastUpdated={LAST_UPDATED}
      sections={TERMS_SECTIONS}
      currentHref="/terms"
    />
  )
}
