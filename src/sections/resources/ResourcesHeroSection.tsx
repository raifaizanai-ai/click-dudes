import { BookOpen } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { FadeUp } from "@/components/motion/FadeUp"

export function ResourcesHeroSection() {
  return (
    <Section background="hero" padding="xl" aria-label="Resources hub hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientOrb size="xl"  color="purple" opacity={0.13} animate className="absolute -top-32 left-1/4" />
        <GradientOrb size="lg"  color="blue"   opacity={0.08}        className="absolute top-0 -right-16" />
        <GradientOrb size="md"  color="cyan"   opacity={0.07}        className="absolute bottom-0 right-1/3" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <BookOpen aria-hidden="true" className="w-3.5 h-3.5" />
              Click Dudes Knowledge Hub
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1
              className="font-bold text-text-primary tracking-display text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.1 }}
            >
              Knowledge That Turns{" "}
              <span className="text-gradient-brand">Clicks Into Revenue</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Guides, tools, insights, and updates for publishers, advertisers, app owners, and brands
              who want to grow smarter.
            </p>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
