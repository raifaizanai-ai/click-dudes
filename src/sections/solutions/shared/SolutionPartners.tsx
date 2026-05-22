import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { FadeUp } from "@/components/motion/FadeUp"

export interface SolutionPartnersProps {
  label?:    string
  partners:  string[]
  duration?: number
}

export function SolutionPartners({
  label    = "Connected to 50+ Premium Demand Sources",
  partners,
  duration = 38,
}: SolutionPartnersProps) {
  return (
    <Section background="transparent" padding="sm" aria-label="Demand network partners">
      <div className="border-y border-brand-purple/[0.08]">
        <Container>
          <FadeUp delay={0}>
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-text-muted py-4">
              {label}
            </p>
          </FadeUp>
        </Container>

        <LogoMarquee duration={duration} pauseOnHover edgeFade>
          {partners.map((name) => (
            <div key={name} className="mx-6 flex items-center justify-center">
              <span className="px-4 py-2 rounded-full glass border border-brand-purple/[0.10] text-sm font-semibold text-text-secondary whitespace-nowrap hover:text-brand-purple hover:border-brand-purple/[0.22] transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </LogoMarquee>

        <div className="py-3" />
      </div>
    </Section>
  )
}
