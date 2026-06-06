import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "Ad Optimization — Click Dudes | AI-Powered Revenue Maximization",
  description: "AI-powered floor pricing, layout testing, and demand matching engineered to maximize your revenue per impression, by Click Dudes.",
  openGraph: {
    title: "Ad Optimization — Click Dudes",
    description: "AI-powered floor pricing, layout testing, and demand matching engineered to maximize your revenue per impression.",
    url: "https://clickdudes.com/publishers/ad-optimization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Optimization — Click Dudes",
    description: "AI-powered floor pricing, layout testing, and demand matching engineered to maximize your revenue per impression.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/ad-optimization" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "Ad Optimization",    item: "https://clickdudes.com/publishers/ad-optimization" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="cpu"
        title="Ad Optimization"
        description="AI-powered floor pricing, layout testing, and demand matching engineered to maximize your revenue per impression, continuously tuned by our platform."
      />
    </>
  )
}
