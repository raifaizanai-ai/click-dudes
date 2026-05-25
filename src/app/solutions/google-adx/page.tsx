import type { Metadata } from "next"
import { AdxHero }             from "@/sections/solutions/google-adx/AdxHero"
import { AdxPartners }         from "@/sections/solutions/google-adx/AdxPartners"
import { AdxProblemSolution }  from "@/sections/solutions/google-adx/AdxProblemSolution"
import { AdxFeatures }         from "@/sections/solutions/google-adx/AdxFeatures"
import { AdxAnalytics }        from "@/sections/solutions/google-adx/AdxAnalytics"
import { AdxFlow }             from "@/sections/solutions/google-adx/AdxFlow"
import { AdxWhyUs }            from "@/sections/solutions/google-adx/AdxWhyUs"
import { AdxTestimonials }     from "@/sections/solutions/google-adx/AdxTestimonials"
import { AdxFAQ }              from "@/sections/solutions/google-adx/AdxFAQ"
import { FinalCTASection }     from "@/components/marketing/FinalCTASection"

export const metadata: Metadata = {
  title:       "Google AdX Solutions — Earn 30%+ More Revenue",
  description: "Access Google AdX premium demand through Click Dudes — a certified Google MCM partner. AI-powered price floors, preferred deals, private auctions, and 24/7 yield optimization for qualifying publishers.",
  openGraph: {
    title:       "Google AdX Solutions | Click Dudes",
    description: "Access Google AdX through a certified MCM partner. Average 30%+ revenue uplift over AdSense. Includes AI price floors, preferred deals, and header bidding.",
    url:         "https://clickdudes.com/solutions/google-adx",
    siteName:    "Click Dudes",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Google AdX Solutions | Click Dudes",
    description: "Access Google AdX through a certified MCM partner. Average 30%+ revenue uplift over AdSense.",
  },
  alternates: {
    canonical: "https://clickdudes.com/solutions/google-adx",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Solutions",           item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "Google AdX Solutions", item: "https://clickdudes.com/solutions/google-adx" },
  ],
}

export default function GoogleAdxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AdxHero />
      <AdxPartners />
      <AdxProblemSolution />
      <AdxFeatures />
      <AdxAnalytics />
      <AdxFlow />
      <AdxWhyUs />
      <AdxTestimonials />
      <AdxFAQ />
      <FinalCTASection />
    </>
  )
}
