import type { Metadata } from "next"
import { CtvMonetizationPage } from "@/sections/solutions/ctv-monetization/CtvMonetizationPage"

export const metadata: Metadata = {
  title: "CTV Monetization — Click Dudes | Turning Clicks Into Revenue",
  description: "Server-side ad insertion, programmatic direct deal management, and AI floor pricing for connected TV publishers. Average CTV CPM of $28 across our publisher network.",
  openGraph: {
    title: "CTV Monetization — Click Dudes",
    description: "Unlock premium CPMs for your CTV inventory with SSAI and programmatic direct deals.",
    url: "https://clickdudes.com/publisher-solutions/ctv-monetization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTV Monetization — Click Dudes",
    description: "Unlock premium CPMs for your CTV inventory with SSAI and programmatic direct deals.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/ctv-monetization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "CTV Monetization",    item: "https://clickdudes.com/publisher-solutions/ctv-monetization" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CtvMonetizationPage />
    </>
  )
}
