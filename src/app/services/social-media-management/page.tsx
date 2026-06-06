import type { Metadata } from "next"
import { SocialMediaPage } from "@/sections/services/social-media-management/SocialMediaPage"

export const metadata: Metadata = {
  title: "Social Media Management Services — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes manages your business social media accounts, content planning, creation, scheduling, community management, and monthly growth reporting.",
  openGraph: {
    title: "Social Media Management — Click Dudes",
    description: "Complete social media management for businesses, content, posting, engagement, and growth.",
    url: "https://clickdudes.com/services/social-media-management",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management — Click Dudes",
    description: "Professional social media management for business brands across all platforms.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/social-media-management",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                     item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",                 item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Social Media Management",  item: "https://clickdudes.com/services/social-media-management" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management for Business Brands",
  description: "Full-service business social media management including content planning, creation, scheduling, community management, and monthly growth analytics reporting.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/social-media-management",
  serviceType: "Social Media Management",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SocialMediaPage />
    </>
  )
}
