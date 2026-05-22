import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { FadeUp } from "@/components/motion/FadeUp"

/* ── Data ─────────────────────────────────────────────────── */

const DEMAND_PARTNERS = [
  "Google AdX",
  "Google AdSense",
  "Amazon TAM",
  "Index Exchange",
  "OpenX",
  "Magnite",
  "PubMatic",
  "Xandr",
  "Triplelift",
  "DistrictM",
  "Sovrn",
  "Media.net",
  "Criteo",
  "Rubicon Project",
  "AppNexus",
] as const

/* ── Component ───────────────────────────────────────────── */

export function AdxPartners() {
  return (
    <Section background="transparent" padding="sm" aria-label="Premium demand network partners">
      <div className="border-y border-brand-purple/[0.08]">
        <Container>
          <FadeUp delay={0}>
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-text-muted py-4">
              Connected to 50+ Premium Demand Sources
            </p>
          </FadeUp>
        </Container>

        <LogoMarquee duration={38} pauseOnHover edgeFade>
          {DEMAND_PARTNERS.map((name) => (
            <div
              key={name}
              className="mx-6 flex items-center justify-center"
            >
              <span
                className="px-4 py-2 rounded-full glass border border-brand-purple/[0.10] text-sm font-semibold text-text-secondary whitespace-nowrap hover:text-brand-purple hover:border-brand-purple/[0.22] transition-colors duration-200"
              >
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
