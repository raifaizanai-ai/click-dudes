import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "Web Publishers — Click Dudes | Full-Stack Web Monetization",
  description: "Full-stack monetization for display, video, and native advertising across desktop and mobile web — powered by Click Dudes.",
  openGraph: {
    title: "Web Publishers — Click Dudes",
    description: "Full-stack monetization for display, video, and native advertising across desktop and mobile web.",
    url: "https://clickdudes.com/publishers/web-publishers",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Publishers — Click Dudes",
    description: "Full-stack monetization for display, video, and native advertising across desktop and mobile web.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/web-publishers" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "Web Publishers",     item: "https://clickdudes.com/publishers/web-publishers" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="globe"
        title="Web Publishers"
        description="Full-stack monetization for display, video, and native advertising across desktop and mobile web — from first impression to final payout."
      />
    </>
  )
}
