import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/LegalPageShell"
import { PRIVACY_SECTIONS } from "@/lib/legal/privacyContent"

const LAST_UPDATED = "August 8, 2026"

export const metadata: Metadata = {
  title:       "Privacy Policy — Click Dudes",
  description: "How Click Dudes handles information across our website, publisher services and partner ecosystem.",
  alternates: { canonical: "https://clickdudes.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="How Click Dudes handles information across our website, publisher services and partner ecosystem."
      lastUpdated={LAST_UPDATED}
      sections={PRIVACY_SECTIONS}
      currentHref="/privacy"
    />
  )
}
