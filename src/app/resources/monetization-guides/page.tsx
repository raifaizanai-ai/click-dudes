import type { Metadata } from "next"
import { MonetizationGuidesPage } from "@/sections/resources/MonetizationGuidesPage"

export const metadata: Metadata = {
  title: "Monetization Guides — Click Dudes | Publisher Learning Hub",
  description: "In-depth monetization guides for web publishers, app developers, and CTV operators. Learn header bidding, AdX, AI optimization, and more.",
  openGraph: { title: "Monetization Guides, Click Dudes", description: "In-depth guides for every publisher type.", url: "https://clickdudes.com/resources/monetization-guides", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Monetization Guides, Click Dudes", description: "In-depth guides for every publisher type." },
  alternates: { canonical: "https://clickdudes.com/resources/monetization-guides" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                  item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources",             item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "Monetization Guides",   item: "https://clickdudes.com/resources/monetization-guides" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MonetizationGuidesPage />
    </>
  )
}
