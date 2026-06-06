import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { GlassCard } from "@/components/shared/GlassCard"

const RULES = [
  "Follow Google Publisher Policies at all times",
  "Avoid invalid or artificial traffic of any kind",
  "Keep content advertiser-friendly and brand-safe",
  "Avoid ad manipulation, forced clicks, or click farms",
  "Keep your website, app, or platform active and accessible",
  "Maintain a good user experience with standard ad density",
  "Inform Click Dudes about major traffic source or property changes",
  "Do not hide, stack, or mislead users with ad placements",
  "Maintain transparent communication with your account team",
]

export function OngoingPartnership() {
  return (
    <Section background="white" padding="lg" aria-label="Ongoing Partnership Rules">
      <Container size="md">
        <SectionHeader
          badge="Long-Term Eligibility"
          heading={
            <>
              How to Stay Eligible{" "}
              <span className="text-gradient-brand">Long-Term</span>
            </>
          }
          subtext="Maintaining your publisher status requires consistent quality, compliance, and transparency."
          align="center"
          subtextWidth="md"
        />

        <FadeUp delay={0.1} className="mt-12">
          <GlassCard variant="strong" padding="lg" rounded="2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {RULES.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-purple/[0.03] border border-brand-purple/[0.08]"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-brand-green shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-text-secondary leading-snug">{rule}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </Section>
  )
}
