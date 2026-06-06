"use client"

import { motion } from "framer-motion"
import { Smartphone, Zap, BarChart2, Play, Layout, Gift, TrendingUp, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

interface FormatCard {
  icon: LucideIcon; iconBg: string; iconColor: string
  title: string; ecpm: string; description: string; best: string
}

const FORMATS: FormatCard[] = [
  { icon: Play,   iconBg: "bg-brand-purple/10", iconColor: "text-brand-cyan", title: "Rewarded Video",   ecpm: "$8–$25 eCPM", description: "Opt-in video ads exchanged for in-app rewards. Highest user engagement and CPM of any mobile format.",                           best: "Gaming, utility apps" },
  { icon: Layout, iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   title: "Interstitial",    ecpm: "$4–$14 eCPM", description: "Full-screen ads at natural transition points. High visibility without interrupting the core experience.",                   best: "Games, content apps" },
  { icon: Gift,   iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   title: "Rewarded Interstitial", ecpm: "$5–$16 eCPM", description: "Full-screen opt-in ads that users choose to view. Higher CPMs than standard interstitials with better user retention.", best: "All app categories" },
  { icon: Layout, iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  title: "Banner",          ecpm: "$0.50–$2 eCPM","description": "Persistent ad units at screen edges. Lower CPM but 100% fill rate makes them valuable for session-heavy apps.",             best: "Utility, productivity" },
]

const TIPS = [
  { icon: Zap,        tip: "Implement in-app bidding to create real-time competition across 15+ demand sources simultaneously." },
  { icon: BarChart2,  tip: "Use frequency capping, 3–5 rewarded video impressions per user/day maximizes revenue without churn." },
  { icon: TrendingUp, tip: "Enable A/B testing for ad placement positions. Small changes in placement can yield 15–40% eCPM lifts." },
  { icon: CheckCircle2, tip: "Integrate mediation with at least 8 demand adapters. Diversity prevents fill gaps and improves overall eCPM." },
]

export function AppMonetizationGuidePage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="App monetization guide hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Smartphone aria-hidden="true" className="w-3.5 h-3.5" />
              App Monetization Guide
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Maximize Your{" "}
              <GradientText gradient="brand">App Revenue</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              The complete guide to in-app advertising, format strategy, mediation setup, in-app bidding, and revenue optimization for iOS and Android.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4 mt-2">
              {["iOS & Android", "In-App Bidding", "Mediation", "Format Strategy", "eCPM Optimization"].map((tag) => (
                <motion.span key={tag} variants={fadeUp}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full glass border border-brand-purple/[0.12] text-text-secondary"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Ad format showcase">
        <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
        <Container>
          <SectionHeader
            badge="Ad Formats"
            heading={<>Choose the Right <GradientText gradient="violet">Ad Format</GradientText></>}
            subtext="Each format has distinct eCPM potential, user experience characteristics, and optimal app categories."
            align="center" subtextWidth="md" className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FORMATS.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", f.iconBg)}>
                    <f.icon aria-hidden="true" className={cn("w-5 h-5", f.iconColor)} />
                  </div>
                  <span className={cn("text-xs font-bold px-3 py-1 rounded-full", f.iconBg, f.iconColor)}>{f.ecpm}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-brand-purple/[0.08]">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Best for:</span>
                  <span className="text-[11px] text-text-secondary">{f.best}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Optimization tips">
        <Container size="md">
          <SectionHeader
            badge="Pro Tips"
            heading={<>Revenue Optimization <GradientText gradient="cyan">Best Practices</GradientText></>}
            subtext="Tactics used by the highest-earning apps in the Click Dudes network."
            align="center" subtextWidth="sm" className="mb-10"
          />
          <div className="flex flex-col gap-4">
            {TIPS.map((t, i) => (
              <motion.div key={i} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="flex items-start gap-4 glass-strong rounded-xl p-5 border border-brand-purple/[0.10]"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <t.icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{t.tip}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Ready to Maximize Your App Revenue?"
        subheading="Let our app monetization specialists review your current setup and build a custom optimization roadmap."
        badge="App Monetization"
        robotVariant="rocket"
        primaryCTA={{ label: "Apply for App Monetization", href: "/about/contact-us" }}
      />
    </>
  )
}
