"use client"

import { motion } from "framer-motion"
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { GlassCard } from "@/components/shared/GlassCard"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fadeUp  = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }

interface ChecklistSection { title: string; color: string; bg: string; items: string[] }

const CHECKLIST: ChecklistSection[] = [
  {
    title: "Pre-Launch Setup", color: "text-brand-purple", bg: "bg-brand-purple/10",
    items: [
      "Integrate mediation SDK (Google AdMob, MAX, or Prebid Mobile)",
      "Configure at least 6–8 demand adapter networks",
      "Enable in-app bidding for real-time competition across all adapters",
      "Set up separate ad units for each placement and format type",
      "Configure GDPR/CCPA consent flows for privacy compliance",
      "Test all ad formats on both iOS and Android simulators",
    ],
  },
  {
    title: "Format Selection", color: "text-brand-blue", bg: "bg-brand-blue/10",
    items: [
      "Rewarded Video, highest eCPM ($8–$25), opt-in format, use at natural reward points",
      "Interstitial, high fill ($4–$14 eCPM), show only at natural transition points",
      "Rewarded Interstitial, strong hybrid ($5–$16 eCPM), opt-in full-screen",
      "Banner, lowest eCPM ($0.50–$2), but 100% fill rate for session-heavy apps",
      "Native Ads, matches app design, good for content/utility apps",
      "Avoid excessive banner use, it cannibalizes rewarded and interstitial eCPMs",
    ],
  },
  {
    title: "eCPM Optimization", color: "text-brand-violet", bg: "bg-brand-violet/10",
    items: [
      "Set frequency caps: rewarded video 3–5 impressions/user/day; interstitials 2–3/session",
      "A/B test ad placement positions, small changes yield 15–40% eCPM differences",
      "Use floor prices per GEO, US/UK/AU floors can be 3–5x higher than global defaults",
      "Review mediation waterfall daily; remove adapters with <5% fill and low eCPM",
      "Implement user segmentation: VIP/paying users should see fewer ads",
      "Monitor session length after ad events, reduce frequency if churn increases",
    ],
  },
  {
    title: "Compliance & Quality", color: "text-brand-green", bg: "bg-brand-green/10",
    items: [
      "Follow Google AdMob program policies for all ad formats",
      "Ensure app content is appropriate for all audiences (or use content rating correctly)",
      "Do not incentivize users to click ads, rewarded video must reward for viewing, not clicking",
      "Maintain app store rating above 3.5 stars, poor reviews correlate with lower eCPM",
      "Submit app updates regularly, apps with no updates in 6+ months see demand degradation",
      "Set up invalid traffic monitoring alerts in your mediation dashboard",
    ],
  },
]

export function AppMonetizationChecklistPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="App monetization checklist hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="blue"  size="2xl" blur="2xl" opacity={0.10} animate className="-top-24 left-1/4" />
        <GradientOrb color="cyan"  size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <Smartphone aria-hidden="true" className="w-3.5 h-3.5" /> App Monetization
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              App Monetization <GradientText gradient="brand">Checklist</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Complete pre-launch and optimization checklist for iOS and Android publishers, from SDK integration to eCPM maximization.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="App monetization checklist">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHECKLIST.map((section, si) => (
              <motion.div key={section.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} style={{ transitionDelay: `${si * 0.1}s` }}>
                <GlassCard variant="strong" padding="lg" rounded="2xl" className="h-full">
                  <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold", section.bg, section.color)}>
                    {section.title}
                  </div>
                  <ul className="space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-text-secondary leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Apply for App Monetization <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/resources/app-monetization-guide" className={buttonVariants({ variant: "secondary", size: "lg" })}>Read Full App Guide</Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Ready to Maximize App Revenue?" subheading="Our app monetization team reviews your setup and builds a custom optimization roadmap for iOS and Android." badge="App Monetization" robotVariant="rocket" primaryCTA={{ label: "Apply for App Monetization", href: "/about/contact-us" }} />
    </>
  )
}
