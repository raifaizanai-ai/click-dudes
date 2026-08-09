import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { WorkflowTimeline } from "@/sections/become-a-partner/shared/WorkflowTimeline"

export function PartnershipWorkflowSection() {
  return (
    <Section background="base" padding="lg" id="how-it-works" className="scroll-mt-20" aria-label="How the partnership works">
      <Container size="lg">
        <SectionHeader
          badge="How It Works"
          heading="From Publisher Introduction to Monetization and Commission."
          align="center"
        />
        <div className="mt-12">
          <WorkflowTimeline />
        </div>
      </Container>
    </Section>
  )
}
