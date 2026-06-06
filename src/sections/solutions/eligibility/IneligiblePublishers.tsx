import { XCircle } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { GlassCard } from "@/components/shared/GlassCard"

const INELIGIBLE_ITEMS = [
  "Fake, bot, incentivized, or manipulated traffic of any kind",
  "Adult, illegal, violent, hateful, or unsafe content",
  "Copyright-infringing or pirated content",
  "Scraped, copied, or auto-generated low-value content",
  "Sites created only for ads with no meaningful user value",
  "Misleading download, streaming, or malware-related pages",
  "Repeated Google Publisher Policy violations",
  "Suspended, disabled, duplicate, or deactivated ad accounts",
  "Traffic acquired solely to inflate ad impressions",
  "Hidden ads, forced clicks, click manipulation, or ad stacking",
  "Poor user experience with excessive ads or misleading layouts",
]

export function IneligiblePublishers() {
  return (
    <Section background="section" padding="lg" aria-label="Ineligible Publishers">
      <Container size="lg">
        <SectionHeader
          badge="Not Eligible"
          heading={
            <>
              Publishers We Cannot{" "}
              <span className="text-gradient-brand">Onboard</span>
            </>
          }
          subtext="The following property types and traffic patterns do not meet our quality and compliance standards."
          align="center"
          subtextWidth="md"
        />

        <FadeUp delay={0.1} className="mt-12">
          <GlassCard variant="strong" padding="lg" rounded="2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {INELIGIBLE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50/60 border border-red-100/70"
                >
                  <XCircle
                    className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-text-secondary leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </Section>
  )
}
