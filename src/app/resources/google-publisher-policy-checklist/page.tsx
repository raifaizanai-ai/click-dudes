import type { Metadata } from "next"
import { GooglePolicyChecklistPage } from "@/sections/resources/GooglePolicyChecklistPage"

export const metadata: Metadata = {
  title: "Google Publisher Policy Checklist | Click Dudes",
  description:
    "A plain-language checklist of Google's content, traffic, and ad implementation policies. Stay compliant and protect your publisher account.",
  openGraph: {
    title: "Google Publisher Policy Checklist — Click Dudes",
    description: "Practical checklist of Google Publisher Policies in plain language for web and app publishers.",
    url: "https://clickdudes.com/resources/google-publisher-policy-checklist",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Google Publisher Policy Checklist, Click Dudes" },
  alternates: { canonical: "https://clickdudes.com/resources/google-publisher-policy-checklist" },
}

export default function Page() { return <GooglePolicyChecklistPage /> }
