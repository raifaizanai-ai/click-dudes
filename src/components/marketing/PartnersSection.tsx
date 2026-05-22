import { ShieldCheck } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"

/* ── Partner Data ─────────────────────────────────────────────── */

const ROW_ONE = [
  "Wortise",
  "MonetizeMore",
  "152 Media",
  "AdPushup",
  "Bidfuse",
  "Denakop",
  "HBDR",
  "AWG",
  "Empower AdTech",
]

const ROW_TWO = [
  "Denakop",
  "HBDR",
  "AWG",
  "Empower AdTech",
  "Wortise",
  "MonetizeMore",
  "152 Media",
  "AdPushup",
  "Bidfuse",
]

/* ── Sub-components ───────────────────────────────────────────── */

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mx-6 inline-block w-1.5 h-1.5 rounded-full bg-brand-purple/40 flex-shrink-0"
    />
  )
}

interface PartnerRowProps {
  partners: string[]
  opacity?: string
}

function PartnerRow({ partners, opacity = "text-text-secondary" }: PartnerRowProps) {
  return (
    <>
      {partners.map((name, i) => (
        <span key={`${name}-${i}`} className="flex items-center">
          <span
            className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-300 hover:text-brand-purple ${opacity} whitespace-nowrap`}
          >
            {name}
          </span>
          <Dot />
        </span>
      ))}
    </>
  )
}

/* ── Component ────────────────────────────────────────────────── */

export function PartnersSection() {
  return (
    <Section
      background="base"
      padding="md"
      aria-label="Trusted GCPP Partners Network"
      className="mesh-bg"
    >
      {/* Atmosphere */}
      <GradientOrb
        color="purple"
        size="xl"
        blur="2xl"
        opacity={0.09}
        animate
        className="-top-32 -left-32"
      />
      <GradientOrb
        color="cyan"
        size="md"
        blur="xl"
        opacity={0.07}
        className="top-1/2 right-0 -translate-y-1/2"
      />

      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-green/30 mb-5">
            <ShieldCheck
              aria-hidden="true"
              className="w-4 h-4 text-brand-green flex-shrink-0"
            />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-green">
              GCPP Verified
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
            Trusted by Leading Monetization Partners
          </h2>
          <p className="mt-3 text-sm text-text-muted max-w-md mx-auto">
            We work exclusively with Google Certified Publishing Partners and
            premium demand sources worldwide.
          </p>
        </div>
      </Container>

      {/* Marquee rows — full-bleed with surface-base edge fades */}
      <div className="relative py-2 space-y-4">
        {/* Row 1 — left */}
        <div className="relative">
          <LogoMarquee
            duration={30}
            pauseOnHover
            edgeFade={false}
          >
            <PartnerRow partners={ROW_ONE} opacity="text-text-secondary" />
          </LogoMarquee>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
            style={{
              background: "linear-gradient(to right, var(--color-surface-base), transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
            style={{
              background: "linear-gradient(to left, var(--color-surface-base), transparent)",
            }}
          />
        </div>

        {/* Row 2 — right */}
        <div className="relative">
          <LogoMarquee
            duration={38}
            pauseOnHover
            reverse
            edgeFade={false}
          >
            <PartnerRow partners={ROW_TWO} opacity="text-text-muted" />
          </LogoMarquee>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
            style={{
              background: "linear-gradient(to right, var(--color-surface-base), transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
            style={{
              background: "linear-gradient(to left, var(--color-surface-base), transparent)",
            }}
          />
        </div>
      </div>
    </Section>
  )
}
