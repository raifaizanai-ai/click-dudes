import type { Metadata } from "next"
import { WebDevelopmentPage } from "@/sections/services/web-development/WebDevelopmentPage"

export const metadata: Metadata = {
  title: "Web Development Services — Click Dudes | Turning Clicks Into Revenue",
  description: "ClickDudes builds premium websites on WordPress, Shopify, and custom stacks. Fast, mobile-first, conversion-focused websites for businesses, SaaS, and ecommerce.",
  openGraph: {
    title: "Web Development Services — Click Dudes",
    description: "Premium WordPress, Shopify, and custom website development that converts and performs.",
    url: "https://clickdudes.com/services/web-development",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services — Click Dudes",
    description: "Custom websites built for speed, conversions, and long-term business growth.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/web-development",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",            item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",        item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Web Development", item: "https://clickdudes.com/services/web-development" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development — WordPress, Shopify & Custom",
  description: "Premium website development on WordPress, Shopify, and custom stacks. Fast, mobile-first, conversion-focused builds for businesses, SaaS, and ecommerce.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/web-development",
  serviceType: "Web Development",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <WebDevelopmentPage />
    </>
  )
}
