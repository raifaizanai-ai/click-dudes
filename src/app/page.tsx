import type { Metadata } from "next"
import { HeroSection } from "@/components/marketing/HeroSection"
import { PartnersSection } from "@/components/marketing/PartnersSection"
import { EcosystemSection } from "@/components/marketing/EcosystemSection"
import { RevenueSection } from "@/components/marketing/RevenueSection"
import { ServicesSection } from "@/components/marketing/ServicesSection"
import { AIOptimizationSection } from "@/components/marketing/AIOptimizationSection"
import { ProcessSection } from "@/components/marketing/ProcessSection"
import { SuccessStoriesSection } from "@/components/marketing/SuccessStoriesSection"
import { FAQSection } from "@/components/marketing/FAQSection"
import { FinalCTASection } from "@/components/marketing/FinalCTASection"

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
      <AIOptimizationSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
