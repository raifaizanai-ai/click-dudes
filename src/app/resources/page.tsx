import type { Metadata } from "next"
import { ResourcesHubPage } from "@/sections/resources/ResourcesHubPage"

export const metadata: Metadata = {
  title: "Resources | Click Dudes Monetization, SEO & Growth Knowledge Hub",
  description:
    "Explore Click Dudes resources for publisher monetization, Google AdX, Header Bidding, app monetization, CTV, SEO, advertising, AI optimization, and Google policy guidance.",
  keywords:
    "publisher monetization resources, Google AdX guide, header bidding explained, app monetization guide, CTV monetization, SEO traffic growth, Google publisher policy, AI ad optimization",
  openGraph: {
    title: "Resources | Click Dudes Knowledge Hub",
    description:
      "Guides, tools, insights, and updates for publishers, advertisers, app owners, and brands who want to grow smarter.",
    url: "https://clickdudes.com/resources",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Click Dudes Knowledge Hub",
    description:
      "Guides, tools, and insights for publishers, advertisers, and brands who want to grow smarter.",
  },
  alternates: { canonical: "https://clickdudes.com/resources" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://clickdudes.com/resources" },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ResourcesHubPage />
    </>
  )
}
