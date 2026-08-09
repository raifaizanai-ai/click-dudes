import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "About Click Dudes — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes is the AI-powered monetization platform helping web, app, and CTV publishers turn clicks into revenue.",
  openGraph: {
    title: "About Click Dudes — Click Dudes",
    description: "Click Dudes is the AI-powered monetization platform helping web, app, and CTV publishers turn clicks into revenue.",
    url: "https://clickdudes.com/about",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Click Dudes — Click Dudes",
    description: "Click Dudes is the AI-powered monetization platform helping web, app, and CTV publishers turn clicks into revenue.",
  },
  alternates: { canonical: "https://clickdudes.com/about" },
}

export default function Page() {
  return (
    <PublisherPlaceholderPage
      iconKey="monitor"
      title="About Click Dudes"
      description="The AI-powered monetization platform turning publisher clicks into revenue. Learn more about our mission, our team, and our story."
      breadcrumb="About"
    />
  )
}
