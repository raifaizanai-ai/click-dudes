import type { Metadata } from "next"
import { EcommercePage } from "@/sections/services/e-commerce/EcommercePage"

export const metadata: Metadata = {
  title: "E-Commerce Services — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes builds, optimizes, and scales online stores on Shopify and WooCommerce. Conversion-focused ecommerce strategy, product page optimization, and revenue growth.",
  openGraph: {
    title: "E-Commerce Services — Click Dudes",
    description: "Build, optimize, and scale your online store with Click Dudes ecommerce experts.",
    url: "https://clickdudes.com/services/e-commerce",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Services — Click Dudes",
    description: "Shopify & WooCommerce ecommerce solutions that drive real revenue growth.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/e-commerce",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",   item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "E-Commerce", item: "https://clickdudes.com/services/e-commerce" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Commerce Development & Optimization",
  description: "Conversion-focused Shopify and WooCommerce store development, product page optimization, and full-funnel e-commerce strategy.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/e-commerce",
  serviceType: "E-Commerce Development",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <EcommercePage />
    </>
  )
}
