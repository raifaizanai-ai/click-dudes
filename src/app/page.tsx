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

export const metadata: Metadata = {
  title: "Click Dudes | Turning Clicks Into Revenue",
  description:
    "AI-powered monetization solutions for web, app, and CTV publishers. Maximize revenue through Google AdX, Header Bidding, and intelligent optimization.",
  openGraph: {
    title: "Click Dudes | Turning Clicks Into Revenue",
    description:
      "AI-powered monetization solutions for web, app, and CTV publishers. Maximize revenue through Google AdX, Header Bidding, and intelligent optimization.",
    url: "https://clickdudes.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click Dudes | Turning Clicks Into Revenue",
    description:
      "AI-powered monetization for web, app, and CTV publishers via Google AdX, Header Bidding, and AI optimization.",
  },
  alternates: {
    canonical: "https://clickdudes.com",
  },
}

export default function HomePage() {
  return (
    <>
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
