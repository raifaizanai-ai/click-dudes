"use client"

import { motion } from "framer-motion"
import { Zap, CheckCircle2, ArrowRight, BarChart3, TrendingUp } from "lucide-react"
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

const BENEFITS = [
  { title: "+20–40% Average RPM Uplift",    desc: "Real-time competition across 15+ demand sources drives prices up on every impression.",         color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { title: "Simultaneous Demand Bidding",   desc: "All buyers see the impression at the same time, no more sequential waterfalls losing revenue.", color: "text-brand-blue",   bg: "bg-brand-blue/10"   },
  { title: "Faster Ad Decisioning",         desc: "Unified auctions complete in milliseconds, reducing latency vs sequential waterfall setups.",     color: "text-brand-cyan",   bg: "bg-brand-cyan/10"   },
  { title: "Real-Time Reporting",           desc: "Live dashboards showing which demand partners are winning and at what CPMs.",                    color: "text-brand-green",  bg: "bg-brand-green/10"  },
]

const HOW_IT_WORKS = [
  { step: "1", title: "Ad slot loads",         desc: "When a page loads, the header bidding wrapper fires requests to all configured demand partners simultaneously." },
  { step: "2", title: "Bids collected",        desc: "Each SSP/DSP returns a bid price within a configurable timeout window (typically 1–2 seconds)." },
  { step: "3", title: "Best bid wins",         desc: "The highest bid enters the Google Ad Manager auction, competing against AdSense/AdX demand." },
  { step: "4", title: "Ad serves",             desc: "The winning creative renders in the ad slot with full viewability tracking and brand safety filters." },
]

const COMPARISON = [
  { feature: "Demand Requests",     waterfall: "Sequential (one at a time)",   hb: "Simultaneous (all at once)",      winner: "hb"        },
  { feature: "Competition",         waterfall: "Limited per position",          hb: "Full market competition",         winner: "hb"        },
  { feature: "RPM Uplift",          waterfall: "Baseline",                      hb: "+20–40% average",                 winner: "hb"        },
  { feature: "Implementation",      waterfall: "Simple",                        hb: "Managed by Click Dudes",          winner: "draw"      },
  { feature: "Latency Risk",        waterfall: "Low",                           hb: "Managed with timeouts",           winner: "draw"      },
]

export function HeaderBiddingGuidePage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Header bidding guide hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="blue"   size="2xl" blur="2xl" opacity={0.10} animate className="-top-24 -right-24" />
        <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.09}        className="top-0 left-1/4" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <Zap aria-hidden="true" className="w-3.5 h-3.5" /> Publisher Monetization Guide
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              Header Bidding <GradientText gradient="brand">Explained</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              How header bidding beats waterfall auctions, why it delivers 20–40% more RPM, and how Click Dudes implements it across 15+ demand partners for maximum yield.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Benefits">
        <Container size="lg">
          <SectionHeader badge="Why Header Bidding" heading={<>The Revenue <GradientText gradient="brand">Advantages</GradientText></>} subtext="Header bidding doesn't just add more demand, it forces every buyer to compete simultaneously for each impression." align="center" subtextWidth="md" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex items-start gap-4"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", b.bg)}>
                  <TrendingUp aria-hidden="true" className={cn("w-5 h-5", b.color)} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-1">{b.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="How it works">
        <Container size="md">
          <SectionHeader badge="The Process" heading={<>How Header Bidding <GradientText gradient="cyan">Works</GradientText></>} subtext="A real-time auction that happens in milliseconds, every time a user loads a page." align="center" subtextWidth="sm" className="mb-10" />
          <div className="flex flex-col gap-4">
            {HOW_IT_WORKS.map((s) => (
              <motion.div key={s.step} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="flex items-start gap-5 glass-strong rounded-2xl p-5 border border-brand-purple/[0.10]">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-purple">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-0.5">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white" padding="lg" aria-label="Comparison table">
        <Container size="md">
          <SectionHeader badge="Head-to-Head" heading={<>Waterfall vs <GradientText gradient="violet">Header Bidding</GradientText></>} subtext="Why the traditional waterfall model costs publishers revenue on every single impression." align="center" subtextWidth="sm" className="mb-8" />
          <GlassCard variant="strong" padding="none" rounded="2xl" className="overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-3 bg-surface-section border-b border-brand-purple/[0.08]">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Feature</span>
              <span className="text-xs font-semibold text-text-muted uppercase tracking-widest text-center">Waterfall</span>
              <span className="text-xs font-semibold text-brand-purple uppercase tracking-widest text-center">Header Bidding</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={cn("grid grid-cols-3 items-center px-6 py-4 gap-4 text-sm", i < COMPARISON.length - 1 && "border-b border-brand-purple/[0.06]")}>
                <span className="font-medium text-text-primary">{row.feature}</span>
                <span className="text-text-secondary text-center text-xs">{row.waterfall}</span>
                <span className={cn("text-center text-xs", row.winner === "hb" ? "font-semibold text-brand-purple" : "text-text-secondary")}>{row.hb}</span>
              </div>
            ))}
          </GlassCard>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Get Header Bidding Setup <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/publisher-solutions/header-bidding-solutions" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              <BarChart3 aria-hidden="true" className="w-4 h-4" /> View Header Bidding Solution
            </Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Ready to Enable Header Bidding?" subheading="Our team handles the full Prebid wrapper setup, demand partner integration, and AI floor calibration." badge="Header Bidding" robotVariant="rocket" primaryCTA={{ label: "Apply for Header Bidding", href: "/about/contact-us" }} />
    </>
  )
}
