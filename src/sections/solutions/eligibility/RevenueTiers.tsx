import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { GlassCard } from "@/components/shared/GlassCard"
import { cn } from "@/lib/utils"

interface Tier {
  name:            string
  label:           string
  range:           string
  publisherShare:  string
  clickDudesShare: string
  highlight:       boolean
  shareColor:      string
  badgeColor:      string
  iconBg:          string
  position:        number
}

const TIERS: Tier[] = [
  { name: "Starter",    label: "Starter Publisher",    range: "$500 – $4,999/mo",      publisherShare: "80%",  clickDudesShare: "20%",    highlight: false, shareColor: "text-brand-blue",   badgeColor: "bg-brand-blue/10",   iconBg: "bg-brand-blue/10",   position: 1 },
  { name: "Growth",     label: "Growth Publisher",     range: "$5,000 – $14,999/mo",   publisherShare: "85%",  clickDudesShare: "15%",    highlight: false, shareColor: "text-brand-purple", badgeColor: "bg-brand-purple/10", iconBg: "bg-brand-purple/10", position: 2 },
  { name: "Scale",      label: "Scale Publisher",      range: "$15,000 – $49,999/mo",  publisherShare: "90%",  clickDudesShare: "10%",    highlight: true,  shareColor: "text-brand-violet", badgeColor: "bg-brand-violet/10", iconBg: "bg-brand-violet/10", position: 3 },
  { name: "Premium",    label: "Premium Publisher",    range: "$50,000 – $249,999/mo", publisherShare: "92%",  clickDudesShare: "8%",     highlight: false, shareColor: "text-brand-cyan",   badgeColor: "bg-brand-cyan/10",   iconBg: "bg-brand-cyan/10",   position: 4 },
  { name: "Enterprise", label: "Enterprise Publisher", range: "$250,000+/mo",          publisherShare: "95%+", clickDudesShare: "Custom", highlight: false, shareColor: "text-brand-green",  badgeColor: "bg-brand-green/10",  iconBg: "bg-brand-green/10",  position: 5 },
]

export function RevenueTiers() {
  return (
    <Section background="section" padding="lg" aria-label="Revenue Share Tiers">
      <Container size="lg">
        <SectionHeader
          badge="Revenue Tiers"
          heading={
            <>
              Revenue Share{" "}
              <span className="text-gradient-brand">Tiers</span>
            </>
          }
          subtext="Higher quality, stronger revenue, and long-term performance may unlock better commercial terms."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TIERS.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.07}>
              <GlassCard
                variant={tier.highlight ? "strong" : "default"}
                padding="md"
                hover
                rounded="2xl"
                className={cn(
                  "h-full text-center relative",
                  tier.highlight && "ring-1 ring-brand-purple/25"
                )}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-purple text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                    Popular
                  </span>
                )}

                <div
                  className={cn(
                    "w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center",
                    tier.iconBg
                  )}
                >
                  <span className={cn("text-xs font-bold", tier.shareColor)}>
                    {tier.position}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-text-primary mb-0.5">{tier.name}</h3>
                <p className="text-xs text-text-muted mb-3 leading-snug">{tier.range}</p>

                <p className={cn("text-2xl font-bold mb-0.5", tier.shareColor)}>
                  {tier.publisherShare}
                </p>
                <p className="text-xs text-text-muted">Publisher keeps</p>

                <div className="mt-3 pt-3 border-t border-brand-purple/[0.07]">
                  <p className="text-xs text-text-secondary">
                    Click Dudes:{" "}
                    <span className="font-semibold">{tier.clickDudesShare}</span>
                  </p>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.35} className="mt-6">
          <p className="text-xs text-text-muted text-center max-w-2xl mx-auto leading-relaxed">
            Revenue share is not guaranteed by revenue alone. Traffic quality, compliance, content
            quality, demand fit, and account history all influence final commercial terms.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
