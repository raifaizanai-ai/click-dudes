import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { PartnerApplicationForm } from "@/sections/become-a-partner/form/PartnerApplicationForm"

export function PartnerApplicationSection() {
  return (
    <Section background="section" padding="lg" id="apply" className="scroll-mt-20 overflow-hidden" aria-label="Apply to become a partner">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} className="top-0 left-0" />
      <Container size="md">
        <SectionHeader
          badge="Apply Now"
          heading="Apply to Become a Click-Dudes Partner."
          subtext="Tell us about yourself and the publishers you work with. Our team will review your application and contact qualified applicants."
          align="center"
          subtextWidth="md"
        />
        <div className="mt-10">
          <PartnerApplicationForm />
        </div>
      </Container>
    </Section>
  )
}
