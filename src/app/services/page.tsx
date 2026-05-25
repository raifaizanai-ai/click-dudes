import type { Metadata } from "next"
import { ServicesIndexPage } from "@/sections/services/ServicesIndexPage"

export const metadata: Metadata = {
  title: "Digital Services — Click Dudes | Turning Clicks Into Revenue",
  description: "ClickDudes offers full-service digital solutions — ecommerce, web development, graphic designing, social media management, Meta Ads, Google Ads, and SEO services.",
  openGraph: {
    title: "Digital Services — Click Dudes",
    description: "Full-service digital agency solutions: ecommerce, web development, social media, paid ads, graphic design, and SEO.",
    url: "https://clickdudes.com/services",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services — Click Dudes",
    description: "Full-service digital agency solutions for brands that want to grow.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://clickdudes.com/services" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesIndexPage />
    </>
  )
}
