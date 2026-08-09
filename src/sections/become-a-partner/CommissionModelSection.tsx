import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { FadeUp } from "@/components/motion/FadeUp"
import { CommissionCalculator } from "@/sections/become-a-partner/shared/CommissionCalculator"
import { COMMISSION_MAX_PERCENT } from "@/sections/become-a-partner/data"

export function CommissionModelSection() {
  return (
    <Section background="base" padding="lg" aria-label="Partner commission model" className="overflow-hidden">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.08} className="top-0 right-0" />
      <Container size="md">
        <SectionHeader
          badge="Commission Model"
          heading="Your Referrals. Your Approved Partner Rate. Recurring Opportunity."
          align="center"
        />

        <FadeUp delay={0.1}>
          <div className="mt-8 mb-10 text-center">
            <p className="text-display font-bold text-gradient-brand tracking-display leading-none">
              Up to {COMMISSION_MAX_PERCENT}%
            </p>
            <p className="text-sm text-text-secondary mt-3 max-w-lg mx-auto leading-relaxed">
              of Click-Dudes&apos; eligible net earnings from your referred publishers, subject to your approved partner agreement.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <CommissionCalculator />
        </FadeUp>
      </Container>
    </Section>
  )
}
