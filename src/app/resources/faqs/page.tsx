import type { Metadata } from "next"
import { FAQPage } from "@/sections/resources/FAQPage"

export const metadata: Metadata = {
  title: "FAQs — Click Dudes | Monetization Questions Answered",
  description: "Answers to common publisher monetization questions — web, app, CTV, AdX, header bidding, AI optimization, and payments.",
  openGraph: { title: "FAQs — Click Dudes", description: "Common publisher monetization questions answered.", url: "https://clickdudes.com/resources/faqs", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "FAQs — Click Dudes", description: "Common publisher monetization questions answered." },
  alternates: { canonical: "https://clickdudes.com/resources/faqs" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Click Dudes?",                   acceptedAnswer: { "@type": "Answer", text: "Click Dudes is a Google Certified Publishing Partner (GCPP) providing AI-powered ad monetization for web, app, and CTV publishers with access to Google AdX, header bidding, and premium demand partners." } },
    { "@type": "Question", name: "What traffic requirements do I need?",   acceptedAnswer: { "@type": "Answer", text: "We work with publishers generating 500K+ monthly pageviews (web/app) or 250K+ monthly impressions (CTV). Traffic must originate from Tier-1 or Tier-2 geos and be brand-safe." } },
    { "@type": "Question", name: "How much more can I earn vs AdSense?",   acceptedAnswer: { "@type": "Answer", text: "Most web publishers see 40–80% revenue lift in the first 90 days through AdX access, header bidding competition, and AI-optimized floor prices." } },
    { "@type": "Question", name: "What is Google AdX?",                    acceptedAnswer: { "@type": "Answer", text: "Google AdX is the enterprise programmatic exchange connecting publishers to 500+ DSPs, private marketplace deals, and preferred deal buyers — delivering 2–4x higher CPMs than AdSense." } },
    { "@type": "Question", name: "When do I receive my first payment?",    acceptedAnswer: { "@type": "Answer", text: "Payments are issued on a NET-30 basis after each calendar month closes. We support bank wire, ACH, and PayPal with a $100 minimum payout threshold." } },
    { "@type": "Question", name: "Do I need to sign a long-term contract?", acceptedAnswer: { "@type": "Answer", text: "No long-term contracts. We operate on rolling agreements with 30-day notice for exit." } },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",      item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "FAQs",      item: "https://clickdudes.com/resources/faqs" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQPage />
    </>
  )
}
