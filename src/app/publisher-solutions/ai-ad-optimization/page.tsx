import type { Metadata } from "next"
import { AiOptimizationPage } from "@/sections/solutions/ai-ad-optimization/AiOptimizationPage"

export const metadata: Metadata = {
  title: "AI Ad Optimization — Click Dudes | Turning Clicks Into Revenue",
  description: "Machine learning price floors, real-time anomaly detection, and predictive revenue forecasting running autonomously 24/7. Publishers see an average 28% yield lift over manual optimization.",
  openGraph: {
    title: "AI Ad Optimization — Click Dudes",
    description: "AI that optimizes your ad revenue while you sleep — 24/7 autonomous yield optimization.",
    url: "https://clickdudes.com/publisher-solutions/ai-ad-optimization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Optimization — Click Dudes",
    description: "AI that optimizes your ad revenue while you sleep — 24/7 autonomous yield optimization.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/ai-ad-optimization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "AI Ad Optimization",  item: "https://clickdudes.com/publisher-solutions/ai-ad-optimization" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Ad Optimization — Autonomous Yield Management",
  description: "Machine learning price floors, real-time anomaly detection, and predictive revenue forecasting for publishers. 24/7 autonomous optimization averaging 28% yield lift.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/publisher-solutions/ai-ad-optimization",
  serviceType: "AI Ad Optimization",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <AiOptimizationPage />
    </>
  )
}
