import Link from "next/link"
import { ArrowRight, FileCheck2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { FadeUp } from "@/components/motion/FadeUp"
import { COMMISSION_MAX_PERCENT } from "@/sections/become-a-partner/data"
import { PartnershipEngineStage } from "@/components/marketing/become-partner-home/PartnershipEngineStage"
import { EngineStageMobile } from "@/components/marketing/become-partner-home/EngineStageMobile"

export function BecomePartnerHomeSection() {
  return (
    <Section background="base" padding="lg" aria-label="Become a Click-Dudes Partner">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          <FadeUp className="lg:sticky lg:top-32">
            <div className="flex flex-col gap-5 max-w-xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                Become a Click-Dudes Partner
              </span>
              <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance">
                Bring Publisher Opportunities.{" "}
                <GradientText gradient="brand" as="span">Build Long-Term Partnerships.</GradientText>
              </h2>
              <p className="text-body text-text-secondary text-pretty leading-relaxed">
                Whether you&apos;re an agency, publisher, AdTech professional, company, team or qualified individual,
                Click-Dudes gives you one partnership infrastructure to submit publisher opportunities, track their
                progress and follow eligible referral earnings.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/become-a-partner"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-white bg-gradient-brand btn-shine relative overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.28)] hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring"
                >
                  Become a Partner
                  <ArrowRight aria-hidden="true" className="w-4 h-4" />
                </Link>
                <Link
                  href="/become-a-partner#how-it-works"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-text-primary bg-white border border-[rgba(7,17,47,0.09)] shadow-[0_2px_8px_rgba(7,17,47,0.06)] hover:border-brand-purple/25 hover:bg-surface-section active:scale-[0.98] transition-all duration-200 focus-ring"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-start gap-3.5 mt-1 p-4 rounded-2xl bg-white border border-brand-purple/[0.12] shadow-[0_4px_20px_rgba(7,17,47,0.05)] w-fit">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck2 aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-text-muted mb-1">Partner Terms</p>
                  <p className="text-sm font-bold text-gradient-brand leading-none">Up to {COMMISSION_MAX_PERCENT}%</p>
                  <p className="text-[11px] text-text-muted leading-snug mt-1.5 max-w-[240px]">
                    of Click-Dudes&apos; eligible net earnings. Subject to your approved partner agreement.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <PartnershipEngineStage />
        </div>

        <EngineStageMobile />
      </Container>
    </Section>
  )
}
