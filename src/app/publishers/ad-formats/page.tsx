import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "Ad Formats — Click Dudes | Every Format for Every Publisher",
  description: "Every ad format from IAB standard display to high-impact video, rich media, and custom units — all managed through one Click Dudes integration.",
  openGraph: {
    title: "Ad Formats — Click Dudes",
    description: "Every ad format from IAB standard display to high-impact video, rich media, and custom units.",
    url: "https://clickdudes.com/publishers/ad-formats",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Formats — Click Dudes",
    description: "Every ad format from IAB standard display to high-impact video, rich media, and custom units.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/ad-formats" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "Ad Formats",         item: "https://clickdudes.com/publishers/ad-formats" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="layout-grid"
        title="Ad Formats"
        description="Every format from IAB standard display to high-impact video, rich media, and custom units — all served through a single, lightweight integration."
      />
    </>
  )
}
