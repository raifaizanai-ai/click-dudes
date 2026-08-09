import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { FadeUp } from "@/components/motion/FadeUp"
import { PARTNERS_PORTAL_URL } from "@/sections/become-a-partner/data"
import { DashboardStage } from "@/components/marketing/partner-dashboard-home/DashboardStage"
import { DashboardStageMobile } from "@/components/marketing/partner-dashboard-home/DashboardStageMobile"

export function PartnerDashboardHomeSection() {
  return (
    <Section background="section" padding="lg" aria-label="Partner Dashboard">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} className="top-0 left-1/4" />
      <GradientOrb color="cyan" size="lg" blur="2xl" opacity={0.07} className="bottom-0 right-0" />

      <Container size="lg">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
              Partner Portal
            </span>
            <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance">
              Your Publisher Partnerships.{" "}
              <GradientText gradient="brand" as="span">One Intelligent Dashboard.</GradientText>
            </h2>
            <p className="text-body text-text-secondary text-pretty leading-relaxed">
              Submit qualified web, app and CTV publishers, follow every review and onboarding stage, track eligible
              commissions, manage agreements and stay connected with the Click-Dudes team from one dedicated partner portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/partner-dashboard"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-white bg-gradient-brand btn-shine relative overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.28)] hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring"
              >
                Explore Partner Dashboard
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
              <a
                href={PARTNERS_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-text-primary bg-white border border-[rgba(7,17,47,0.09)] shadow-[0_2px_8px_rgba(7,17,47,0.06)] hover:border-brand-purple/25 hover:bg-surface-section active:scale-[0.98] transition-all duration-200 focus-ring"
              >
                Access Partner Dashboard
                <ExternalLink aria-hidden="true" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeUp>

        <DashboardStage />
        <DashboardStageMobile />
      </Container>
    </Section>
  )
}
