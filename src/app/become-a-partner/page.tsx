import type { Metadata } from "next"
import { BecomePartnerPage } from "@/sections/become-a-partner/BecomePartnerPage"

export const metadata: Metadata = {
  title: "Become a Partner — Click Dudes | Turning Clicks Into Revenue",
  description:
    "Become a Click-Dudes referral partner. Submit qualified web, app and CTV publisher opportunities, track them in the Partner Portal, and follow eligible referral commissions.",
  keywords: [
    "publisher referral partner",
    "publisher monetization partnership",
    "web publisher monetization",
    "app publisher monetization",
    "CTV publisher monetization",
    "AdTech partnership",
    "publisher partner dashboard",
  ],
  openGraph: {
    title: "Become a Partner — Click Dudes",
    description:
      "Submit qualified web, app and CTV publisher opportunities and follow eligible referral commissions through the Click-Dudes Partner Portal.",
    url: "https://clickdudes.com/become-a-partner",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner — Click Dudes",
    description:
      "Submit qualified web, app and CTV publisher opportunities and follow eligible referral commissions through the Click-Dudes Partner Portal.",
  },
  alternates: { canonical: "https://clickdudes.com/become-a-partner" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Become a Partner",  item: "https://clickdudes.com/become-a-partner" },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://clickdudes.com/become-a-partner#webpage",
  url: "https://clickdudes.com/become-a-partner",
  name: "Become a Partner — Click Dudes",
  description:
    "Become a Click-Dudes referral partner. Submit qualified web, app and CTV publisher opportunities and follow eligible referral commissions.",
  isPartOf: { "@id": "https://clickdudes.com/#website" },
  about: { "@id": "https://clickdudes.com/#organization" },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BecomePartnerPage />
    </>
  )
}
