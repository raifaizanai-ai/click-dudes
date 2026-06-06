import type { Metadata } from "next"
import { EligibilityPage } from "@/sections/solutions/eligibility/EligibilityPage"

export const metadata: Metadata = {
  title: "Monetization Eligibility Criteria | Click Dudes Publisher Requirements",
  description:
    "Review Click Dudes monetization eligibility criteria for website publishers, app publishers, and CTV platforms. Learn requirements for premium demand, Google AdX, Header Bidding, AI ad optimization, traffic quality, and revenue share tiers.",
  keywords:
    "publisher monetization eligibility, Google AdX requirements, header bidding eligibility, app monetization criteria, CTV monetization requirements, Click Dudes publisher requirements, ad monetization eligibility",
  openGraph: {
    title: "Monetization Eligibility Criteria — Click Dudes Publisher Requirements",
    description:
      "Review Click Dudes monetization eligibility criteria for website publishers, app publishers, and CTV platforms.",
    url: "https://clickdudes.com/publisher-solutions/monetization-eligibility-criteria",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monetization Eligibility Criteria — Click Dudes",
    description:
      "Review Click Dudes monetization eligibility criteria for website publishers, app publishers, and CTV platforms.",
  },
  alternates: {
    canonical:
      "https://clickdudes.com/publisher-solutions/monetization-eligibility-criteria",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clickdudes.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Publisher Solutions",
      item: "https://clickdudes.com/publisher-solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Monetization Eligibility Criteria",
      item: "https://clickdudes.com/publisher-solutions/monetization-eligibility-criteria",
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Publisher Monetization Eligibility Review — Click Dudes",
  description:
    "Click Dudes reviews publishers for Google AdX, Header Bidding, and AI ad optimization eligibility. Learn traffic, content, and compliance requirements.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/publisher-solutions/monetization-eligibility-criteria",
  serviceType: "Publisher Monetization Review",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <EligibilityPage />
    </>
  )
}
