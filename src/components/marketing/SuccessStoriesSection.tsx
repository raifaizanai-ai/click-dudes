import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { CaseCard } from "@/components/marketing/CaseCard"
import type { CaseStat } from "@/components/marketing/CaseCard"

type CaseStatTuple = [CaseStat, CaseStat, CaseStat]

interface CaseEntry {
  category: string
  publisherType: string
  headline: string
  stats: CaseStatTuple
  timeframe: string
}

const CASES: CaseEntry[] = [
  {
    category: "News & Media",
    publisherType: "Web Publisher",
    headline: "A high-traffic news portal replaced their existing SSP stack with AdX and header bidding — seeing immediate lift.",
    stats: [
      { label: "RPM Uplift",   value: 38,   suffix: "%",               decimals: 0 },
      { label: "Fill Rate",    value: 96.1, suffix: "%",               decimals: 1 },
      { label: "Monthly Gain", value: 22,   prefix: "+$", suffix: "K", decimals: 0 },
    ],
    timeframe: "Example results at 90 days",
  },
  {
    category: "Mobile Gaming",
    publisherType: "App Publisher",
    headline: "A casual gaming app unlocked premium demand and improved rewarded video performance significantly.",
    stats: [
      { label: "RPM Uplift",   value: 45,   suffix: "%",               decimals: 0 },
      { label: "Avg eCPM",     value: 9.82, prefix: "$",               decimals: 2 },
      { label: "Revenue Lift", value: 28,   prefix: "+$", suffix: "K", decimals: 0 },
    ],
    timeframe: "Example results at 60 days",
  },
  {
    category: "Connected TV",
    publisherType: "CTV Publisher",
    headline: "A streaming network migrated to programmatic CTV demand and achieved premium CPMs with improved sell-through.",
    stats: [
      { label: "Avg CPM",    value: 14.5, prefix: "$",  decimals: 1 },
      { label: "Fill Rate",  value: 89.4, suffix: "%",  decimals: 1 },
      { label: "CPM Uplift", value: 52,   suffix: "%",  decimals: 0 },
    ],
    timeframe: "Example results at 90 days",
  },
]

export function SuccessStoriesSection() {
  return (
    <Section background="base" padding="lg" aria-label="Publisher Success Stories" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-32 -left-32" />
      <GradientOrb color="cyan"   size="lg" blur="xl"  opacity={0.06}        className="bottom-0 right-0" />

      <Container size="lg">
        {/* Header with celebrate robot */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Robot — left on desktop, above header on mobile */}
          <div className="flex-shrink-0 lg:order-first">
            <RobotImage variant="celebrate" size="lg" floatDelay={0.4} glowColor="green" />
          </div>

          {/* Section header — right aligned on desktop */}
          <div className="flex-1">
            <SectionHeader
              badge="Example Results"
              heading={
                <>
                  What Publishers Achieve{" "}
                  <span className="text-gradient-brand">With Click Dudes</span>
                </>
              }
              subtext="Representative examples based on publisher outcomes. Individual results vary based on traffic quality, inventory type, and market conditions."
              align="left"
              subtextWidth="md"
            />
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <CaseCard key={c.category} {...c} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          * These are example results for illustrative purposes. Actual publisher results will vary.
        </p>
      </Container>
    </Section>
  )
}
