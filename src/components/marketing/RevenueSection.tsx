import { TrendingUp, Brain, Zap, BarChart2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FeatureBullet } from "@/components/marketing/FeatureBullet"
import { FloatingMetricCard } from "@/components/marketing/FloatingMetricCard"
import { RevenueDashboard } from "@/components/marketing/RevenueDashboard"

export function RevenueSection() {
  return (
    <Section background="base" padding="lg" aria-label="Revenue Growth Dashboard" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-48 -left-48" />
      <GradientOrb color="cyan"   size="lg" blur="xl"  opacity={0.07}        className="bottom-0 -right-32" />

      <Container size="xl">
        <SectionHeader
          badge="Revenue Intelligence"
          heading={
            <>
              AI-Driven Revenue{" "}
              <span className="text-gradient-brand">Growth Engine</span>
            </>
          }
          subtext="Our platform doesn't just report. It acts. Real-time optimization across every dimension of your monetization stack, 24/7."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Left: feature list */}
          <div className="flex flex-col gap-6">
            <FeatureBullet icon={TrendingUp} variant="icon" iconColor="purple" size="md">
              Average RPM uplift of 38% within the first 90 days
            </FeatureBullet>
            <FeatureBullet icon={Brain} variant="icon" iconColor="cyan" size="md">
              AI continuously monitors and self-adjusts in real time
            </FeatureBullet>
            <FeatureBullet icon={Zap} variant="icon" iconColor="blue" size="md">
              Header bidding timeout intelligence maximizes competitive yield
            </FeatureBullet>
            <FeatureBullet icon={BarChart2} variant="icon" iconColor="green" size="md">
              Granular publisher-level reporting and actionable insights
            </FeatureBullet>
          </div>

          {/* Right: dashboard + floating cards + robot */}
          <div className="relative">
            {/* Robot analytics — floats above-right of dashboard */}
            <div className="absolute -top-24 -right-4 xl:-right-12 z-30 hidden lg:block pointer-events-none">
              <RobotImage variant="analytics" size="md" floatDelay={1.2} glowColor="cyan" />
            </div>

            <div className="absolute -top-10 -left-4 xl:-left-16 z-20 hidden lg:block">
              <FloatingMetricCard
                value={12.47}
                prefix="$"
                label="Avg RPM"
                trend="+31% uplift"
                trendDirection="up"
                surface="strong"
                floatDelay={0}
              />
            </div>

            <RevenueDashboard />

            <div className="absolute -bottom-10 -right-4 xl:-right-16 z-20 hidden lg:block">
              <FloatingMetricCard
                value={78.5}
                suffix="%"
                label="Viewability"
                trend="Top quartile"
                trendDirection="up"
                surface="strong"
                floatDelay={1.4}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
