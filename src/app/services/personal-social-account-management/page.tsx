import type { Metadata } from "next"
import { PersonalSocialPage } from "@/sections/services/personal-social-account-management/PersonalSocialPage"

export const metadata: Metadata = {
  title: "Personal Social Account Management — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes manages personal social media accounts for founders, CEOs, and creators — content creation, posting, engagement, and personal brand authority building.",
  openGraph: {
    title: "Personal Social Account Management — Click Dudes",
    description: "Personal brand management for founders, CEOs, and creators across LinkedIn, Instagram, and TikTok.",
    url: "https://clickdudes.com/services/personal-social-account-management",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Social Account Management — Click Dudes",
    description: "Build your personal brand and online authority with Click Dudes professional management.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/personal-social-account-management",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                                item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",                            item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Personal Social Account Management",  item: "https://clickdudes.com/services/personal-social-account-management" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personal Social Account Management for Founders & Creators",
  description: "Personal brand management for founders, CEOs, and creators — content creation, posting schedules, engagement, and personal authority building on LinkedIn, Instagram, and TikTok.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/personal-social-account-management",
  serviceType: "Personal Brand Management",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PersonalSocialPage />
    </>
  )
}
