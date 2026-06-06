import type { Metadata } from "next"
import { GoogleAdxRequirementsPage } from "@/sections/resources/GoogleAdxRequirementsPage"

export const metadata: Metadata = {
  title: "Google AdX Requirements Guide | Click Dudes",
  description:
    "The complete guide to Google AdX access requirements — traffic thresholds, content policies, technical setup, and the approval process for independent publishers.",
  openGraph: {
    title: "Google AdX Requirements Guide — Click Dudes",
    description: "Everything you need to know about qualifying for Google AdX as an independent publisher.",
    url: "https://clickdudes.com/resources/google-adx-requirements",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Google AdX Requirements Guide — Click Dudes" },
  alternates: { canonical: "https://clickdudes.com/resources/google-adx-requirements" },
}

export default function Page() { return <GoogleAdxRequirementsPage /> }
