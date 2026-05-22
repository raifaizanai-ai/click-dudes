import type { Metadata } from "next"
import { AppMonetizationPage } from "@/sections/solutions/app-monetization/AppMonetizationPage"

export const metadata: Metadata = {
  title: "App Monetization — Click Dudes | Turning Clicks Into Revenue",
  description: "In-app bidding from 12+ premium networks, AI format optimization, and managed compliance. Average apps see 38% eCPM uplift with Click Dudes mobile monetization.",
  openGraph: {
    title: "App Monetization — Click Dudes",
    description: "Maximize in-app revenue across every format with managed in-app bidding and AI optimization.",
    url: "https://clickdudes.com/publisher-solutions/app-monetization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Monetization — Click Dudes",
    description: "Maximize in-app revenue across every format with managed in-app bidding and AI optimization.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/app-monetization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "App Monetization",    item: "https://clickdudes.com/publisher-solutions/app-monetization" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AppMonetizationPage />
    </>
  )
}
