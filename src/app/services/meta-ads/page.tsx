import type { Metadata } from "next"
import { MetaAdsPage } from "@/sections/services/meta-ads/MetaAdsPage"

export const metadata: Metadata = {
  title: "Meta Ads Services — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes manages Facebook and Instagram ad campaigns — lead generation, conversions, retargeting, ad creatives, and campaign optimization for scalable paid growth.",
  openGraph: {
    title: "Meta Ads Services — Click Dudes",
    description: "Facebook and Instagram advertising campaigns that deliver leads, conversions, and ROAS.",
    url: "https://clickdudes.com/services/meta-ads",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Services — Click Dudes",
    description: "Meta certified campaign management for Facebook and Instagram advertising.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/meta-ads",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",      item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",  item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Meta Ads",  item: "https://clickdudes.com/services/meta-ads" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads — Facebook & Instagram Advertising",
  description: "Full-funnel Facebook and Instagram ad campaigns including lead generation, retargeting, creative strategy, and continuous ROAS optimization.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/meta-ads",
  serviceType: "Social Media Advertising",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MetaAdsPage />
    </>
  )
}
