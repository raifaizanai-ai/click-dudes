import type { Metadata } from "next"
import { ContactUsPage } from "@/sections/about/ContactUsPage"

export const metadata: Metadata = {
  title:       "Contact Click Dudes | ClickBot™ AI Monetization Platform",
  description: "Talk to ClickBot™ AI, Get publisher onboarding, revenue estimates, eligibility checks, and expert monetization advice from Click Dudes.",
  openGraph: {
    title:       "Contact Click Dudes | ClickBot™ AI Monetization",
    description: "Apply for monetization, check eligibility, or talk to our team. ClickBot™ AI helps 450+ Publishers maximize RPM via Google AdX and Header Bidding.",
    url:         "https://clickdudes.com/about/contact-us",
    siteName:    "Click Dudes",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Contact Click Dudes | ClickBot™ AI Monetization",
    description: "Apply for monetization, check eligibility, or talk to our team.",
  },
  alternates: { canonical: "https://clickdudes.com/about/contact-us" },
}

const breadcrumbSchema = {
  "@context":       "https://schema.org",
  "@type":          "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",      item: "https://clickdudes.com/about/our-mission" },
    { "@type": "ListItem", position: 3, name: "Contact Us", item: "https://clickdudes.com/about/contact-us" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactUsPage />
    </>
  )
}
