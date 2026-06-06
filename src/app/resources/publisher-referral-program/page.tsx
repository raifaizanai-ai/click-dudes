import type { Metadata } from "next"
import { PublisherReferralPage } from "@/sections/resources/PublisherReferralPage"

export const metadata: Metadata = {
  title: "Publisher Referral Program — Click Dudes | Earn Commissions",
  description: "Refer publishers to Click Dudes and earn recurring commissions. Join the publisher referral program, no limits, no minimums.",
  openGraph: { title: "Publisher Referral Program, Click Dudes", description: "Earn commissions by referring publishers.", url: "https://clickdudes.com/resources/publisher-referral-program", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Publisher Referral Program, Click Dudes", description: "Earn commissions by referring publishers." },
  alternates: { canonical: "https://clickdudes.com/resources/publisher-referral-program" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                       item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources",                  item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "Publisher Referral Program", item: "https://clickdudes.com/resources/publisher-referral-program" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherReferralPage />
    </>
  )
}
