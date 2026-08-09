import type { Metadata } from "next"
import { PartnerDashboardPage } from "@/sections/partner-dashboard/PartnerDashboardPage"

export const metadata: Metadata = {
  title: "Partner Dashboard — Click Dudes | Turning Clicks Into Revenue",
  description: "Take a cinematic tour of the Click Dudes Partner Dashboard — submit publishers, track commissions, payments, and revenue in real time.",
  openGraph: {
    title: "Partner Dashboard — Click Dudes",
    description: "A cinematic tour of the Click Dudes Partner Dashboard — submit publishers, track commissions, payments, and revenue in real time.",
    url: "https://clickdudes.com/partner-dashboard",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Dashboard — Click Dudes",
    description: "A cinematic tour of the Click Dudes Partner Dashboard — submit publishers, track commissions, payments, and revenue in real time.",
  },
  alternates: { canonical: "https://clickdudes.com/partner-dashboard" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Partner Dashboard",  item: "https://clickdudes.com/partner-dashboard" },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://clickdudes.com/partner-dashboard#webpage",
  url: "https://clickdudes.com/partner-dashboard",
  name: "Partner Dashboard — Click Dudes",
  description: "A cinematic tour of the Click Dudes Partner Dashboard — submit publishers, track commissions, payments, and revenue in real time.",
  isPartOf: { "@id": "https://clickdudes.com/#website" },
  about: { "@id": "https://clickdudes.com/#organization" },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <PartnerDashboardPage />
    </>
  )
}
