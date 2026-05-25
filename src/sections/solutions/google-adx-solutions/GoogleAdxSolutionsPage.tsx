import { AdxHero } from "@/sections/solutions/google-adx/AdxHero"
import { AdxPartners } from "@/sections/solutions/google-adx/AdxPartners"
import { AdxProblemSolution } from "@/sections/solutions/google-adx/AdxProblemSolution"
import { AdxFeatures } from "@/sections/solutions/google-adx/AdxFeatures"
import { AdxAnalytics } from "@/sections/solutions/google-adx/AdxAnalytics"
import { AdxFlow } from "@/sections/solutions/google-adx/AdxFlow"
import { AdxWhyUs } from "@/sections/solutions/google-adx/AdxWhyUs"
import { AdxFAQ } from "@/sections/solutions/google-adx/AdxFAQ"
import { AdxTestimonialsV2 } from "@/sections/solutions/google-adx-solutions/AdxTestimonialsV2"
import { AdxCTASection } from "@/sections/solutions/google-adx-solutions/AdxCTASection"

export function GoogleAdxSolutionsPage() {
  return (
    <>
      <AdxHero />
      <AdxPartners />
      <AdxProblemSolution />
      <AdxFeatures />
      <AdxAnalytics />
      <AdxFlow />
      <AdxWhyUs />
      <AdxTestimonialsV2 />
      <AdxFAQ />
      <AdxCTASection />
    </>
  )
}
