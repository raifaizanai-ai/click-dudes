import { FileText } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"

interface LegalHeroProps {
  title: string
  subtitle: string
  lastUpdated: string
}

export function LegalHero({ title, subtitle, lastUpdated }: LegalHeroProps) {
  return (
    <Section background="hero" padding="lg" aria-label={title} className="overflow-hidden">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} className="-top-24 left-1/3" />
      <Container size="md">
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
            <FileText aria-hidden="true" className="w-3.5 h-3.5" />
            Legal
          </span>
          <h1 className="text-h2 sm:text-h1 font-bold text-text-primary tracking-display text-balance">
            <GradientText gradient="brand" as="span">{title}</GradientText>
          </h1>
          <p className="text-body text-text-secondary text-pretty leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(7,17,47,0.08)] text-xs font-medium text-text-muted">
            Last Updated: {lastUpdated}
          </span>
        </div>
      </Container>
    </Section>
  )
}
