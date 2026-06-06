import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroLeft } from "@/components/marketing/HeroLeft"
import { HeroRight } from "@/components/marketing/HeroRight"

export function HeroSection() {
  return (
    <Section
      background="transparent"
      padding="none"
      aria-label="Hero, AI-Powered Monetization Platform"
      className="pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24 mesh-animated"
    >
      {/* ── Layered background atmosphere ─────────────────── */}
      <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.14} animate className="-top-48 -left-48" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.10}        className="top-1/2 -right-40 -translate-y-1/2" />
      <GradientOrb color="violet" size="md"  blur="xl"  opacity={0.07}        className="bottom-0 left-1/3" />
      <GradientOrb color="purple" size="md"  blur="xl"  opacity={0.06}        className="top-1/4 right-1/4" />

      {/* AI grid depth texture */}
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-70" />

      {/* Radial vignette to focus center */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(248,250,255,0.35) 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────── */}
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">
          <HeroLeft />
          <HeroRight />
        </div>
      </Container>
    </Section>
  )
}
