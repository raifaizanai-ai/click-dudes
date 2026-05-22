import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RevenueDashboard } from "@/components/marketing/RevenueDashboard"
import { FadeUp } from "@/components/motion/FadeUp"
import { RobotImage } from "@/components/shared/RobotImage"
import type { RobotVariant } from "@/components/shared/RobotImage"

export interface SolutionAnalyticsProps {
  badge?:        string
  heading:       React.ReactNode
  subtext:       string
  bullets:       string[]
  robotVariant?: RobotVariant
  robotLabel?:   string
  robotCaption?: string
}

export function SolutionAnalytics({
  badge, heading, subtext, bullets,
  robotVariant = "analytics",
  robotLabel   = "AI Yield Advisor",
  robotCaption = "Surfaces revenue opportunities and floor adjustment recommendations in your live dashboard.",
}: SolutionAnalyticsProps) {
  return (
    <Section background="base" padding="lg" aria-label="Revenue analytics and reporting" className="mesh-bg">
      <GradientOrb color="blue"   size="xl" blur="2xl" opacity={0.09} animate className="-top-24 right-0" />
      <GradientOrb color="purple" size="md" blur="xl"  opacity={0.07}        className="bottom-0 left-1/4" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-center">

          <div className="flex flex-col gap-6">
            <SectionHeader badge={badge} heading={heading} subtext={subtext}
              align="left" subtextWidth="full" />

            <ul className="flex flex-col gap-3">
              {bullets.map((bullet, i) => (
                <FadeUp key={bullet} delay={0.1 + i * 0.07}>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">{bullet}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <FadeUp delay={0.5}>
              <div className="flex items-center gap-4 glass rounded-2xl p-4 border border-brand-purple/[0.10]">
                <RobotImage variant={robotVariant} size="sm" floatDelay={1} glowColor="purple" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{robotLabel}</p>
                  <p className="text-xs text-text-muted leading-snug mt-0.5">{robotCaption}</p>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <RevenueDashboard />
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
