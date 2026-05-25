import type { Metadata } from "next"
import { GoogleAdsPage } from "@/sections/services/google-ads/GoogleAdsPage"

export const metadata: Metadata = {
  title: "Google Ads Services — Click Dudes | Turning Clicks Into Revenue",
  description: "ClickDudes manages Google Ads campaigns — search, display, YouTube, and Performance Max — with conversion tracking, keyword strategy, and continuous optimization.",
  openGraph: {
    title: "Google Ads Services — Click Dudes",
    description: "Search, display, YouTube, and Performance Max campaigns managed by Google certified specialists.",
    url: "https://clickdudes.com/services/google-ads",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Services — Click Dudes",
    description: "Google Ads management that maximizes conversions and minimizes cost per acquisition.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/google-ads",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",    item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads",  item: "https://clickdudes.com/services/google-ads" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Campaign Management",
  description: "Search, display, YouTube, and Performance Max campaigns managed with conversion tracking, keyword strategy, and continuous A/B optimization.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/google-ads",
  serviceType: "Google Ads Management",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GoogleAdsPage />
    </>
  )
}
