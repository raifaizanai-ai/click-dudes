import Link from "next/link"
import { Handshake, LayoutDashboard, Globe, Smartphone, Tv2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { FadeUp } from "@/components/motion/FadeUp"

const MINI_DEVICES = [
  { icon: Globe, className: "left-[8%] top-[14%] rotate-[-6deg]" },
  { icon: Smartphone, className: "right-[10%] top-[20%] rotate-[5deg]" },
  { icon: Tv2, className: "left-[12%] bottom-[16%] rotate-[4deg]" },
]

export function FinalPartnerCTASection() {
  return (
    <Section background="hero" padding="lg" aria-label="Become a Click-Dudes partner today" className="overflow-hidden">
      <Container size="lg">
        <FadeUp>
          <div className="relative glass-elevated rounded-[32px] px-6 py-16 sm:py-20 overflow-hidden text-center">
            <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.14} animate className="-top-24 left-1/4" />
            <GradientOrb color="cyan"   size="lg" blur="2xl" opacity={0.10}        className="bottom-0 right-1/4" />

            {MINI_DEVICES.map(({ icon: Icon, className }, i) => (
              <div key={i} className={`hidden sm:flex absolute w-12 h-12 rounded-2xl glass-strong border border-brand-purple/15 items-center justify-center ${className}`} aria-hidden="true">
                <Icon aria-hidden="true" className="w-5 h-5 text-brand-purple" />
              </div>
            ))}

            <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <RobotImage variant="rocket" size="md" glowColor="purple" />

              <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance">
                Your Next Publisher Opportunity Could Become a{" "}
                <GradientText gradient="brand" as="span">Long-Term Partnership.</GradientText>
              </h2>

              <p className="text-body text-text-secondary text-pretty max-w-lg">
                Bring qualified web, app and CTV opportunities to one connected partnership ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-white bg-gradient-brand btn-shine relative overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.28)] hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring"
                >
                  <Handshake aria-hidden="true" className="w-4 h-4" />
                  Become a Partner
                </Link>
                <Link
                  href="/partner-dashboard"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-text-primary bg-white border border-[rgba(7,17,47,0.09)] shadow-[0_2px_8px_rgba(7,17,47,0.06)] hover:border-brand-purple/25 hover:bg-surface-section active:scale-[0.98] transition-all duration-200 focus-ring"
                >
                  <LayoutDashboard aria-hidden="true" className="w-4 h-4" />
                  Explore Partner Dashboard
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
