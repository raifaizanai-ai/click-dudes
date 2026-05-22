import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RevenueDashboard } from "@/components/marketing/RevenueDashboard"
import { GradientText } from "@/components/shared/GradientText"
import { FadeUp } from "@/components/motion/FadeUp"
import { RobotImage } from "@/components/shared/RobotImage"

/* ── Data ─────────────────────────────────────────────────── */

const ANALYTICS_BULLETS = [
  "RPM, eCPM, and fill rate updated every 60 seconds",
  "Per-placement, per-geo, per-device breakdowns",
  "AI anomaly detection with automated alerts",
  "Side-by-side AdSense vs AdX revenue comparison",
  "Custom reporting via API or CSV export",
] as const

/* ── Component ───────────────────────────────────────────── */

export function AdxAnalytics() {
  return (
    <Section background="base" padding="lg" aria-label="AdX revenue analytics and reporting" className="mesh-bg">
      <GradientOrb color="blue"   size="xl" blur="2xl" opacity={0.09} animate className="-top-24 right-0" />
      <GradientOrb color="purple" size="md" blur="xl"  opacity={0.07}        className="bottom-0 left-1/4" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              badge="Revenue Intelligence"
              heading={<>Real-Time Visibility.<br /><GradientText gradient="brand">Zero Guesswork.</GradientText></>}
              subtext="Our live revenue dashboard gives you instant access to every metric that matters — so you always know exactly how your inventory is performing."
              align="left"
              subtextWidth="full"
            />

            <ul className="flex flex-col gap-3">
              {ANALYTICS_BULLETS.map((bullet, i) => (
                <FadeUp key={bullet} delay={0.1 + i * 0.07}>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">{bullet}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>

            {/* Robot assistant */}
            <FadeUp delay={0.5}>
              <div className="flex items-center gap-4 glass rounded-2xl p-4 border border-brand-purple/[0.10]">
                <RobotImage variant="analytics" size="sm" floatDelay={1} glowColor="purple" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">AI Yield Advisor</p>
                  <p className="text-xs text-text-muted leading-snug mt-0.5">
                    Proactively surfaces revenue opportunities and floor adjustment recommendations in your dashboard.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: Dashboard ── */}
          <FadeUp delay={0.2}>
            <RevenueDashboard />
          </FadeUp>

        </div>
      </Container>
    </Section>
  )
}
