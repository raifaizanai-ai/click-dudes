import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "App Publishers — Click Dudes | In-App Ad Monetization",
  description: "High-performance in-app advertising across interstitials, banners, native, and rewarded video formats — managed by Click Dudes.",
  openGraph: {
    title: "App Publishers — Click Dudes",
    description: "High-performance in-app advertising across interstitials, banners, native, and rewarded video formats.",
    url: "https://clickdudes.com/publishers/app-publishers",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Publishers — Click Dudes",
    description: "High-performance in-app advertising across interstitials, banners, native, and rewarded video formats.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/app-publishers" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "App Publishers",     item: "https://clickdudes.com/publishers/app-publishers" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="smartphone"
        title="App Publishers"
        description="High-performance in-app advertising across interstitials, banners, native, and rewarded video — engineered to maximize your app's revenue potential."
      />
    </>
  )
}
