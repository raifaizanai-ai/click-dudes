import Link from "next/link"
import { Handshake, LayoutDashboard } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { FadeUp } from "@/components/motion/FadeUp"
import { HeroOpportunityStage } from "@/sections/become-a-partner/shared/HeroOpportunityStage"

export function PartnerHeroSection() {
  return (
    <Section background="hero" padding="xl" aria-label="Become a Click-Dudes Partner" className="overflow-hidden">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="-top-32 left-1/3" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.08}        className="bottom-0 -right-20" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-xl">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                Click-Dudes Partner Network
              </span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="text-h2 sm:text-h1 lg:text-display font-bold text-text-primary tracking-display text-balance">
                Turn Publisher Opportunities Into{" "}
                <GradientText gradient="brand" as="span">Long-Term Partnership Revenue.</GradientText>
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="text-body-lg text-text-secondary text-pretty leading-relaxed">
                Whether you are an agency, publisher, AdTech professional, team or individual with publisher
                relationships, Click-Dudes gives you one partner ecosystem to submit qualified web, app and CTV
                opportunities, track their progress and follow eligible referral commissions.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
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
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-text-primary bg-white border border-[rgba(7,17,47,0.09)] shadow-[0_2px_8px_rgba(7,17,47,0.06)] hover:border-brand-purple/25 hover:bg-surface-section hover:shadow-[0_4px_16px_rgba(7,17,47,0.08)] active:scale-[0.98] transition-all duration-200 focus-ring"
                >
                  <LayoutDashboard aria-hidden="true" className="w-4 h-4" />
                  Explore Partner Dashboard
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.32}>
              <p className="text-sm text-text-muted pt-1">
                Built for agencies, publisher professionals, referral partners, organizations and qualified individuals.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="lg:pl-4">
            <HeroOpportunityStage />
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
