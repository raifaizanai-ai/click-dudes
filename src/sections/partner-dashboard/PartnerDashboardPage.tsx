import { HeroSection } from "@/sections/partner-dashboard/HeroSection"
import { DashboardOverviewBento } from "@/sections/partner-dashboard/DashboardOverviewBento"
import { PartnerTypesEcosystem } from "@/sections/partner-dashboard/PartnerTypesEcosystem"
import { PartnershipJourney } from "@/sections/partner-dashboard/PartnershipJourney"
import { ProductExplorer } from "@/sections/partner-dashboard/ProductExplorer"
import { PublisherPipeline } from "@/sections/partner-dashboard/PublisherPipeline"
import { AnalyticsSpotlight } from "@/sections/partner-dashboard/AnalyticsSpotlight"
import { FinancialTransparency } from "@/sections/partner-dashboard/FinancialTransparency"
import { CommunicationStack } from "@/sections/partner-dashboard/CommunicationStack"
import { EcosystemNetwork } from "@/sections/partner-dashboard/EcosystemNetwork"
import { WhyPartnersSection } from "@/sections/partner-dashboard/WhyPartnersSection"
import { FinalCinematicReveal } from "@/sections/partner-dashboard/FinalCinematicReveal"

export function PartnerDashboardPage() {
  return (
    <>
      <HeroSection />
      <DashboardOverviewBento />
      <PartnerTypesEcosystem />
      <PartnershipJourney />
      <ProductExplorer />
      <PublisherPipeline />
      <AnalyticsSpotlight />
      <FinancialTransparency />
      <CommunicationStack />
      <EcosystemNetwork />
      <WhyPartnersSection />
      <FinalCinematicReveal />
    </>
  )
}
