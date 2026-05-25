import type { Metadata } from "next"
import { AdsenseOptimizationPage } from "@/sections/solutions/adsense-revenue-optimization/AdsenseOptimizationPage"

export const metadata: Metadata = {
  title: "AdSense Revenue Optimization — Click Dudes | Turning Clicks Into Revenue",
  description: "Expert AdSense layout optimization, viewability maximization, and policy compliance. Our publishers see an average 62% RPM increase without changing their traffic or content.",
  openGraph: {
    title: "AdSense Revenue Optimization — Click Dudes",
    description: "Raise your AdSense RPM with expert layout optimization and policy compliance from Click Dudes.",
    url: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdSense Revenue Optimization — Click Dudes",
    description: "Raise your AdSense RPM with expert layout optimization and policy compliance from Click Dudes.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AdSense Revenue Optimization — Layout & Viewability",
  description: "Expert AdSense layout optimization, viewability maximization, and policy compliance management. Publishers see an average 62% RPM increase without changing traffic or content.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization",
  serviceType: "AdSense Optimization",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AdsenseOptimizationPage />
    </>
  )
}
