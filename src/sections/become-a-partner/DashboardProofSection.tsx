import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { DashboardCallouts } from "@/sections/become-a-partner/shared/DashboardCallouts"
import { PARTNERS_PORTAL_URL } from "@/sections/become-a-partner/data"

export function DashboardProofSection() {
  return (
    <Section background="section" padding="lg" aria-label="Your partner dashboard">
      <Container size="lg">
        <SectionHeader
          badge="Product Proof"
          heading="Your Partnership, Visible in One Dashboard."
          align="center"
        />

        <FadeUp delay={0.1}>
          <div className="mt-12 max-w-4xl mx-auto">
            <DashboardCallouts />
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <Link
              href="/partner-dashboard"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-white bg-gradient-brand btn-shine relative overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.28)] hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-ring"
            >
              Explore the Full Partner Dashboard
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
            <a
              href={PARTNERS_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-2xl text-base font-medium text-text-primary bg-white border border-[rgba(7,17,47,0.09)] shadow-[0_2px_8px_rgba(7,17,47,0.06)] hover:border-brand-purple/25 hover:bg-surface-section active:scale-[0.98] transition-all duration-200 focus-ring"
            >
              Access Dashboard
              <ExternalLink aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
