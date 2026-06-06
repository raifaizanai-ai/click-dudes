import { EligibilityHero } from "@/sections/solutions/eligibility/EligibilityHero"
import { RevenueShareEstimator } from "@/sections/solutions/eligibility/RevenueShareEstimator"
import { EligibilityRequirements } from "@/sections/solutions/eligibility/EligibilityRequirements"
import { IneligiblePublishers } from "@/sections/solutions/eligibility/IneligiblePublishers"
import { ThreePillarReview } from "@/sections/solutions/eligibility/ThreePillarReview"
import { ApplicationTimeline } from "@/sections/solutions/eligibility/ApplicationTimeline"
import { PublisherStatusTypes } from "@/sections/solutions/eligibility/PublisherStatusTypes"
import { RevenueTiers } from "@/sections/solutions/eligibility/RevenueTiers"
import { AINetworkQuality } from "@/sections/solutions/eligibility/AINetworkQuality"
import { OngoingPartnership } from "@/sections/solutions/eligibility/OngoingPartnership"
import { EligibilityFAQ } from "@/sections/solutions/eligibility/EligibilityFAQ"
import { EligibilityCTA } from "@/sections/solutions/eligibility/EligibilityCTA"

export function EligibilityPage() {
  return (
    <main id="main-content">
      <EligibilityHero />
      <RevenueShareEstimator />
      <EligibilityRequirements />
      <IneligiblePublishers />
      <ThreePillarReview />
      <ApplicationTimeline />
      <PublisherStatusTypes />
      <RevenueTiers />
      <AINetworkQuality />
      <OngoingPartnership />
      <EligibilityFAQ />
      <EligibilityCTA />
    </main>
  )
}
