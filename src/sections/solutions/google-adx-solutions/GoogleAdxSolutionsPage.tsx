import { AdxHero } from "@/sections/solutions/google-adx/AdxHero"
import { AdxPartners } from "@/sections/solutions/google-adx/AdxPartners"
import { AdxProblemSolution } from "@/sections/solutions/google-adx/AdxProblemSolution"
import { AdxFeatures } from "@/sections/solutions/google-adx/AdxFeatures"
import { AdxAnalytics } from "@/sections/solutions/google-adx/AdxAnalytics"
import { AdxFlow } from "@/sections/solutions/google-adx/AdxFlow"
import { AdxWhyUs } from "@/sections/solutions/google-adx/AdxWhyUs"
import { AdxFAQ } from "@/sections/solutions/google-adx/AdxFAQ"
import { AdxTestimonialsV2 } from "@/sections/solutions/google-adx-solutions/AdxTestimonialsV2"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"

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
      <SolutionCTA
        heading="Ready to Unlock Google AdX Revenue?"
        subheading="Join 1,200+ publishers accessing the full Google AdX demand pool through Click Dudes' certified MCM partnership. Premium CPMs, programmatic direct deals, and zero setup fees."
        robotVariant="wave"
        primaryCTA={{ label: "Get Google AdX Access", href: "/about/contact-us" }}
      />
    </>
  )
}
