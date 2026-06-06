import type { Metadata } from "next"
import { SeoServicesPage } from "@/sections/services/seo-services/SeoServicesPage"

export const metadata: Metadata = {
  title: "SEO Services — Click Dudes | Turning Clicks Into Revenue",
  description: "Technical SEO, on-page, off-page, local, and ecommerce SEO, built around your business goals, not just keyword rankings. Click Dudes handles it all.",
  openGraph: {
    title: "SEO Services — Click Dudes",
    description: "Technical, on-page, off-page, local, and ecommerce SEO that drives lasting organic growth.",
    url: "https://clickdudes.com/services/seo-services",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services — Click Dudes",
    description: "Comprehensive SEO services that rank your business higher and drive organic revenue growth.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/seo-services",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",     item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://clickdudes.com/services/seo-services" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services, Technical, On-Page & Off-Page",
  description: "Comprehensive SEO including technical audits, on-page optimization, link building, local SEO, and ecommerce SEO for lasting organic ranking growth.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/seo-services",
  serviceType: "Search Engine Optimization",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SeoServicesPage />
    </>
  )
}
