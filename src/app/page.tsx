import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/marketing/HeroSection"
import { PartnersSection } from "@/components/marketing/PartnersSection"

const EcosystemSection      = dynamic(() => import("@/components/marketing/EcosystemSection").then(m => ({ default: m.EcosystemSection })))
const RevenueSection        = dynamic(() => import("@/components/marketing/RevenueSection").then(m => ({ default: m.RevenueSection })))
const ServicesSection       = dynamic(() => import("@/components/marketing/ServicesSection").then(m => ({ default: m.ServicesSection })))
const DigitalServicesSection= dynamic(() => import("@/components/marketing/DigitalServicesSection").then(m => ({ default: m.DigitalServicesSection })))
const AIOptimizationSection = dynamic(() => import("@/components/marketing/AIOptimizationSection").then(m => ({ default: m.AIOptimizationSection })))
const ProcessSection        = dynamic(() => import("@/components/marketing/ProcessSection").then(m => ({ default: m.ProcessSection })))
const PublisherVoicesSection= dynamic(() => import("@/components/marketing/PublisherVoicesSection").then(m => ({ default: m.PublisherVoicesSection })))
const FAQSection            = dynamic(() => import("@/components/marketing/FAQSection").then(m => ({ default: m.FAQSection })))
const FinalCTASection       = dynamic(() => import("@/components/marketing/FinalCTASection").then(m => ({ default: m.FinalCTASection })))

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://clickdudes.com/#webpage",
  url: "https://clickdudes.com",
  name: "Click Dudes | Turning Clicks Into Revenue",
  description: "AI-powered monetization, advertising, SEO, and publisher growth platform for websites, apps, brands, and CTV publishers.",
  isPartOf: { "@id": "https://clickdudes.com/#website" },
  about: { "@id": "https://clickdudes.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://clickdudes.com" },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2"],
  },
}

export const metadata: Metadata = {
  title: "Click Dudes | Turning Clicks Into Revenue",
  description:
    "Click Dudes is an AI-powered monetization, advertising, SEO, and publisher growth platform helping websites, apps, brands, and CTV publishers scale traffic, engagement, and revenue through intelligent digital growth solutions.",
  keywords: [
    "publisher monetization", "Google AdX", "header bidding", "AI ad optimization",
    "CTV monetization", "app monetization", "programmatic advertising", "AdSense optimization",
    "SEO services", "media buying", "digital growth platform", "web publisher revenue",
  ],
  openGraph: {
    title:       "Click Dudes | Turning Clicks Into Revenue",
    description: "AI-powered monetization, advertising, SEO, and publisher growth platform for websites, apps, brands, and CTV publishers.",
    url:         "https://clickdudes.com",
    siteName:    "Click Dudes",
    type:        "website",
    images: [{
      url:    "/opengraph-image",
      width:  1200,
      height: 630,
      alt:    "Click Dudes — Turning Clicks Into Revenue",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Click Dudes | Turning Clicks Into Revenue",
    description: "AI-powered monetization, advertising, and publisher growth for websites, apps, and CTV — Google AdX, Header Bidding, SEO, and AI optimization.",
    images:      ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://clickdudes.com",
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HeroSection />
      <PartnersSection />
      <EcosystemSection />
      <RevenueSection />
      <ServicesSection />
      <DigitalServicesSection />
      <AIOptimizationSection />
      <ProcessSection />
      <PublisherVoicesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
