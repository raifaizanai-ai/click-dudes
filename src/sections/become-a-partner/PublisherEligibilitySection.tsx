import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { EligibilityChecklistCard } from "@/sections/become-a-partner/shared/EligibilityChecklistCard"
import { ELIGIBILITY_PILLARS } from "@/sections/become-a-partner/data"

export function PublisherEligibilitySection() {
  return (
    <Section background="white" padding="lg" aria-label="Publisher eligibility">
      <Container size="lg">
        <SectionHeader
          badge="Publisher Eligibility"
          heading="Better Publishers. Stronger Partnerships."
          subtext="Every publisher opportunity you introduce is evaluated across three core quality dimensions before activation."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ELIGIBILITY_PILLARS.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={i * 0.08}>
              <EligibilityChecklistCard pillar={pillar} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.24}>
          <div className="flex justify-center mt-10">
            <Link
              href="/publisher-solutions/monetization-eligibility-criteria"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-white bg-gradient-brand btn-shine relative overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.28)] hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring"
            >
              Review Publisher Eligibility
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
