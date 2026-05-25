import { ShieldCheck } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"

/* ── Partner Data ─────────────────────────────────────────────── */

interface Partner { name: string; initials: string }

const ROW_ONE: Partner[] = [
  { name: "Wortise",       initials: "W"  },
  { name: "MonetizeMore",  initials: "MM" },
  { name: "152 Media",     initials: "15" },
  { name: "AdPushup",      initials: "AP" },
  { name: "Bidfuse",       initials: "BF" },
  { name: "Denakop",       initials: "DK" },
  { name: "HBDR",          initials: "HB" },
  { name: "AWG",           initials: "AW" },
  { name: "Empower AdTech",initials: "EA" },
]

const ROW_TWO: Partner[] = [
  { name: "Denakop",       initials: "DK" },
  { name: "HBDR",          initials: "HB" },
  { name: "AWG",           initials: "AW" },
  { name: "Empower AdTech",initials: "EA" },
  { name: "Wortise",       initials: "W"  },
  { name: "MonetizeMore",  initials: "MM" },
  { name: "152 Media",     initials: "15" },
  { name: "AdPushup",      initials: "AP" },
  { name: "Bidfuse",       initials: "BF" },
]

/* ── Sub-components ───────────────────────────────────────────── */

function PartnerBadge({ partner }: { partner: Partner }) {
  return (
    <span className="mx-3 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass border border-brand-purple/[0.10] shadow-[0_2px_12px_rgba(7,17,47,0.05)] hover:border-brand-purple/25 hover:shadow-[0_4px_20px_rgba(139,92,246,0.12)] transition-all duration-300 whitespace-nowrap flex-shrink-0">
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center flex-shrink-0">
        <span className="text-[9px] font-black text-brand-purple leading-none">{partner.initials}</span>
      </span>
      <span className="text-sm font-semibold text-text-secondary">{partner.name}</span>
    </span>
  )
}

interface PartnerRowProps {
  partners: Partner[]
}

function PartnerRow({ partners }: PartnerRowProps) {
  return (
    <>
      {partners.map((p, i) => (
        <PartnerBadge key={`${p.name}-${i}`} partner={p} />
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
            <PartnerRow partners={ROW_ONE} />
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
            <PartnerRow partners={ROW_TWO} />
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
