import type { Metadata } from "next"
import { AppMonetizationChecklistPage } from "@/sections/resources/AppMonetizationChecklistPage"

export const metadata: Metadata = {
  title: "App Monetization Checklist | Click Dudes",
  description:
    "Complete checklist for iOS and Android app publishers, SDK setup, format selection, mediation configuration, and eCPM optimization tactics.",
  openGraph: {
    title: "App Monetization Checklist — Click Dudes",
    description: "Complete pre-launch and optimization checklist for iOS and Android app publishers.",
    url: "https://clickdudes.com/resources/app-monetization-checklist",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "App Monetization Checklist, Click Dudes" },
  alternates: { canonical: "https://clickdudes.com/resources/app-monetization-checklist" },
}

export default function Page() { return <AppMonetizationChecklistPage /> }
