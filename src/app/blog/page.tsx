import type { Metadata } from "next"
import { BlogIndexPage } from "@/sections/blog/BlogIndexPage"

export const metadata: Metadata = {
  title:       "Blog — Click Dudes | Publisher Monetization Insights & Ad-Tech Guides",
  description: "Expert publisher monetization guides, programmatic advertising insights, and revenue growth strategies from the Click Dudes team.",
  openGraph: {
    title:       "Click Dudes Blog — Publisher Monetization Insights",
    description: "Expert guides on AdSense optimization, AdX access, header bidding, AI ad optimization, and publisher revenue growth.",
    url:         "https://clickdudes.com/blog",
    siteName:    "Click Dudes",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Click Dudes Blog — Publisher Monetization Insights",
    description: "Expert guides on AdSense, AdX, Header Bidding, AI optimization, and publisher revenue growth.",
  },
  alternates: {
    canonical: "https://clickdudes.com/blog",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://clickdudes.com/blog" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogIndexPage />
    </>
  )
}
