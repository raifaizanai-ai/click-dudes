"use client"

import { motion } from "framer-motion"
import { BarChart2, CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react"
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

interface CompareRow {
  feature: string
  adsense: string | boolean
  adx: string | boolean
  winner: "adsense" | "adx" | "draw"
}

const ROWS: CompareRow[] = [
  { feature: "Access Method",         adsense: "Self-serve, instant",       adx: "Via certified partner",              winner: "adsense" },
  { feature: "Average Web CPM",       adsense: "$0.80 – $2.50",             adx: "$2.00 – $8.00+",                     winner: "adx"     },
  { feature: "Demand Sources",        adsense: "Google GDN only",           adx: "500+ SSPs + GDN",                    winner: "adx"     },
  { feature: "Header Bidding",        adsense: false,                       adx: true,                                 winner: "adx"     },
  { feature: "Private Marketplace",   adsense: false,                       adx: true,                                 winner: "adx"     },
  { feature: "Floor Price Control",   adsense: "Limited",                   adx: "Full control + AI optimization",     winner: "adx"     },
  { feature: "Real-time Reporting",   adsense: "Delayed 24–48h",            adx: "Real-time dashboards",               winner: "adx"     },
  { feature: "Ad Quality Control",    adsense: "Limited block lists",       adx: "Full brand safety + custom rules",   winner: "adx"     },
  { feature: "Minimum Traffic",       adsense: "None",                      adx: "500K+ monthly pageviews",            winner: "adsense" },
  { feature: "Technical Complexity",  adsense: "Simple",                    adx: "Managed by partner",                 winner: "draw"    },
]

const STEPS = [
  { num: "01", title: "Apply to Click Dudes", description: "Submit your property for review. We verify traffic quality and policy compliance." },
  { num: "02", title: "AdX Approval (5–10 days)", description: "We submit your site through our Google-certified partner account. Most approvals arrive within a week." },
  { num: "03", title: "Technical Integration", description: "Our team handles the complete tag and header bidding setup. No developer required on your end." },
  { num: "04", title: "Go Live & Optimize", description: "AI calibration begins on day one. CPMs typically start improving within the first 30 days." },
]

export function AdSenseVsAdXPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="AdSense vs AdX hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-24 left-1/4" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 -right-16" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <BarChart2 aria-hidden="true" className="w-3.5 h-3.5" />
              Complete Comparison Guide
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              AdSense vs{" "}
              <GradientText gradient="brand">Google AdX</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              The complete, honest comparison — what AdX actually unlocks, when to upgrade, and how to access it as an independent publisher.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xl">
              {[
                { label: "AdSense", sub: "Google Display Network only", color: "border-gray-200", badge: "Basic", badgeColor: "bg-gray-100 text-text-muted" },
                { label: "Google AdX", sub: "500+ demand partners + full control", color: "border-brand-purple/30", badge: "Premium", badgeColor: "bg-brand-purple/10 text-brand-purple" },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}
                  className={cn("flex-1 glass-strong rounded-2xl p-5 border text-center", item.color)}
                >
                  <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", item.badgeColor)}>{item.badge}</span>
                  <p className="text-lg font-bold text-text-primary mt-3">{item.label}</p>
                  <p className="text-xs text-text-muted mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Feature comparison">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="md">
          <SectionHeader
            badge="Feature Comparison"
            heading={<>How They <GradientText gradient="violet">Stack Up</GradientText></>}
            subtext="Ten dimensions that matter most for publisher revenue and control."
            align="center" subtextWidth="sm" className="mb-8"
          />
          <div className="glass-strong rounded-2xl border border-brand-purple/[0.10] overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
          >
            <div className="grid grid-cols-3 px-6 py-3 bg-surface-section border-b border-brand-purple/[0.08]">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Feature</span>
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest text-center">AdSense</span>
              <span className="text-xs font-semibold text-brand-purple uppercase tracking-widest text-center">Google AdX</span>
            </div>
            {ROWS.map((row, i) => (
              <motion.div key={row.feature} custom={i} variants={fadeUp}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}
                className={cn("grid grid-cols-3 items-center px-6 py-4 gap-4", i < ROWS.length - 1 && "border-b border-brand-purple/[0.06]")}
              >
                <span className="text-sm font-medium text-text-primary">{row.feature}</span>
                <div className="flex justify-center">
                  {typeof row.adsense === "boolean" ? (
                    row.adsense
                      ? <CheckCircle2 className="w-5 h-5 text-brand-green" aria-label="Yes" />
                      : <XCircle      className="w-5 h-5 text-text-muted/40" aria-label="No" />
                  ) : (
                    <span className="text-xs text-text-secondary text-center">{row.adsense}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {typeof row.adx === "boolean" ? (
                    row.adx
                      ? <CheckCircle2 className="w-5 h-5 text-brand-green" aria-label="Yes" />
                      : <XCircle      className="w-5 h-5 text-text-muted/40" aria-label="No" />
                  ) : (
                    <span className={cn("text-xs text-center", row.winner === "adx" ? "text-brand-purple font-semibold" : "text-text-secondary")}>
                      {row.adx}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Migration steps">
        <Container size="md">
          <SectionHeader
            badge="Upgrade Path"
            heading={<>How to Access <GradientText gradient="cyan">AdX as a Publisher</GradientText></>}
            subtext="AdX requires a Google Certified Publishing Partner. Here's the exact process with Click Dudes."
            align="center" subtextWidth="md" className="mb-12"
          />
          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div key={s.num} custom={i} variants={fadeUp}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="flex items-start gap-5 glass-strong rounded-2xl p-5 border border-brand-purple/[0.10]"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-purple">{s.num}</span>
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{s.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-0.5">{s.description}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRight aria-hidden="true" className="w-5 h-5 text-text-muted/40 flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Ready to Unlock Google AdX Revenue?"
        subheading="Apply today — we handle the entire AdX approval and technical integration for you."
        badge="Get AdX Access"
        robotVariant="rocket"
        primaryCTA={{ label: "Apply for AdX Access", href: "/about/contact-us" }}
      />
    </>
  )
}
