import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { GlassCard } from "@/components/shared/GlassCard"

interface RequirementItem {
  letter: string
  title: string
  description: string
}

const REQUIREMENTS: RequirementItem[] = [
  {
    letter: "A",
    title: "Active Website, App, or CTV Platform",
    description:
      "Publisher must have a live property with real users and accessible content that can serve ad inventory.",
  },
  {
    letter: "B",
    title: "Original, Brand-Safe Content",
    description:
      "Content must be useful, original, advertiser-friendly, and compliant with Google Publisher Policies.",
  },
  {
    letter: "C",
    title: "Quality Traffic Sources",
    description:
      "Traffic should come from real users through search, social, referral, direct, or legitimate paid campaigns.",
  },
  {
    letter: "D",
    title: "Clean Policy History",
    description:
      "No serious invalid traffic issues, policy abuse, ad manipulation, or repeated violations on record.",
  },
  {
    letter: "E",
    title: "Monetization Activity",
    description:
      "Existing revenue or traffic history helps us evaluate fit. We also review growth-stage publishers with strong potential.",
  },
  {
    letter: "F",
    title: "Ownership or Authorized Access",
    description:
      "Publisher must own or have authorized control over the website, app, or monetization account being submitted.",
  },
]

export function EligibilityRequirements() {
  return (
    <Section background="white" padding="lg" aria-label="Eligibility Requirements">
      <Container size="lg">
        <SectionHeader
          badge="Requirements"
          heading={
            <>
              Eligibility &{" "}
              <span className="text-gradient-brand">Requirements</span>
            </>
          }
          subtext="We evaluate every publisher across quality, compliance, and monetization readiness before activation."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REQUIREMENTS.map((req, i) => (
            <FadeUp key={req.letter} delay={i * 0.07}>
              <GlassCard variant="default" padding="lg" hover glow className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-purple">{req.letter}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2
                        className="w-4 h-4 text-brand-green shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <h3 className="text-sm font-semibold text-text-primary leading-snug">
                        {req.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed pl-6">
                      {req.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
