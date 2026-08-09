import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { RevenueShareCard } from "@/sections/become-a-partner/shared/RevenueShareCard"
import { REVENUE_SHARE_EXAMPLES } from "@/sections/become-a-partner/data"

export function RevenueShareSection() {
  return (
    <Section background="section" padding="lg" aria-label="Flexible publisher commercial terms">
      <Container size="lg">
        <SectionHeader
          badge="Example Publisher Revenue-Share Structures"
          heading="Competitive Publisher Terms. Structured for the Opportunity."
          subtext="Structure competitive publisher revenue-share proposals according to the approved monetization opportunity."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVENUE_SHARE_EXAMPLES.map((ex, i) => (
            <FadeUp key={ex.channel} delay={i * 0.06}>
              <RevenueShareCard example={ex} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="text-sm text-text-muted text-center max-w-2xl mx-auto mt-8 leading-relaxed">
            These are not guaranteed offers. Final publisher terms depend on property quality, opportunity,
            monetization partner, inventory and approval. Publisher revenue-share terms may vary by publisher,
            property, monetization partner and approved agreement.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
