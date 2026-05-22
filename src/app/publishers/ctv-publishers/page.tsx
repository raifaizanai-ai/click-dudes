import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "CTV Publishers — Click Dudes | Connected TV Monetization",
  description: "Connected TV and OTT monetization with premium brand-safe demand and transparent performance reporting — powered by Click Dudes.",
  openGraph: {
    title: "CTV Publishers — Click Dudes",
    description: "Connected TV and OTT monetization with premium brand-safe demand and transparent performance reporting.",
    url: "https://clickdudes.com/publishers/ctv-publishers",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTV Publishers — Click Dudes",
    description: "Connected TV and OTT monetization with premium brand-safe demand and transparent performance reporting.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/ctv-publishers" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "CTV Publishers",     item: "https://clickdudes.com/publishers/ctv-publishers" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="monitor"
        title="CTV Publishers"
        description="Connected TV and OTT monetization with premium brand-safe demand, transparent reporting, and direct relationships with top-tier CTV advertisers."
      />
    </>
  )
}
