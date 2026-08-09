import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { UseCaseCard } from "@/sections/become-a-partner/shared/UseCaseCard"
import { USE_CASES } from "@/sections/become-a-partner/data"

export function PartnerUseCasesSection() {
  return (
    <Section background="base" padding="lg" aria-label="Built for serious partners">
      <Container size="lg">
        <SectionHeader
          badge="Built For Serious Partners"
          heading="Whether You Have One Publisher or an Entire Network."
          subtext="Whether you currently work with one qualified publisher or manage a larger publisher portfolio, the Click-Dudes partnership model is designed to provide one organized workflow."
          align="center"
          subtextWidth="lg"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {USE_CASES.map((useCase, i) => (
            <FadeUp key={useCase.key} delay={i * 0.06}>
              <UseCaseCard useCase={useCase} index={i} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="text-sm text-text-muted text-center mt-8">
            Have 10+ publishers? Talk to us about a higher-volume partner relationship.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
