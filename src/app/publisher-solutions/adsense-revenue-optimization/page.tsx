import type { Metadata } from "next"
import { AdsenseOptimizationPage } from "@/sections/solutions/adsense-revenue-optimization/AdsenseOptimizationPage"

export const metadata: Metadata = {
  title: "AdSense Revenue Optimization — Click Dudes | Turning Clicks Into Revenue",
  description: "Expert AdSense layout optimization, viewability maximization, and policy compliance. Our publishers see an average 62% RPM increase without changing their traffic or content.",
  openGraph: {
    title: "AdSense Revenue Optimization — Click Dudes",
    description: "Unlock your AdSense revenue ceiling with expert layout optimization and policy compliance.",
    url: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdSense Revenue Optimization — Click Dudes",
    description: "Unlock your AdSense revenue ceiling with expert layout optimization and policy compliance.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                          item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions",           item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "AdSense Revenue Optimization",  item: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AdsenseOptimizationPage />
    </>
  )
}
