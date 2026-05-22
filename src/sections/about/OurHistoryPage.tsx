"use client"

import { motion } from "framer-motion"
import { History, Rocket, Globe2, Building2, TrendingUp, Star, ArrowRight, Zap, Shield, Target, Users, BrainCircuit, BarChart3 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const } }),
}

interface TimelineEntry {
  year: string; badge: string; title: string; body: string
  icon: LucideIcon; iconBg: string; iconColor: string; dotBorder: string; chips: string[]
}

interface ValueItem { icon: LucideIcon; title: string; desc: string; bg: string; color: string }

const TIMELINE: TimelineEntry[] = [
  {
    year: "2022", badge: "The Beginning", title: "Digital Marketing Agency Founded",
    body: "Click Dudes launched as a performance-focused digital marketing agency. Helping brands grow online gave us an intimate view of digital advertising — and where the gaps were for publishers on the other side of the equation.",
    icon: Rocket, iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", dotBorder: "rgba(139,92,246,0.40)",
    chips: ["Performance marketing", "First brand partnerships", "Ad ecosystem research"],
  },
  {
    year: "2023", badge: "Evolution", title: "Full-Stack Advertising Agency",
    body: "We expanded into programmatic, creative, and publisher monetization consulting. Working directly with mid-sized publishers revealed how dramatically under-monetized they were — not from lack of effort, but lack of access to the right infrastructure.",
    icon: TrendingUp, iconBg: "bg-brand-blue/10", iconColor: "text-brand-blue", dotBorder: "rgba(96,165,250,0.40)",
    chips: ["Programmatic build-out", "Publisher consulting", "Identified the AdX gap"],
  },
  {
    year: "2024", badge: "Breakthrough", title: "Publisher Monetization Platform Launches",
    body: "The pivot that changed everything. Using our GCPP connections, we built enterprise-grade infrastructure for publishers of all sizes — bringing Google AdX, header bidding, and AI optimization to those who were previously locked out. Within twelve months: 1,200+ publishers live across web, app, and CTV.",
    icon: Globe2, iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", dotBorder: "rgba(168,85,247,0.40)",
    chips: ["Google AdX access", "1,200+ publishers onboarded", "Header bidding stack", "AI optimization deployed"],
  },
  {
    year: "2025", badge: "Global Scale", title: "UK Registered · Global Expansion",
    body: "Click Dudes officially registered in the United Kingdom, establishing our London HQ at Paul Street, EC2A. The platform now serves publishers across 40+ countries — North America, Europe, Asia-Pacific, and the Middle East — with AI optimization running 24/7 across every impression.",
    icon: Building2, iconBg: "bg-brand-cyan/10", iconColor: "text-brand-cyan", dotBorder: "rgba(103,232,249,0.40)",
    chips: ["UK company registered", "London HQ: EC2A", "40+ countries", "AI at full scale"],
  },
]

const VALUES: ValueItem[] = [
  { icon: BarChart3,    title: "Performance",     desc: "Every decision is measured by publisher revenue impact.",   bg: "bg-brand-purple/10", color: "text-brand-purple" },
  { icon: Shield,       title: "Integrity",        desc: "Full transparency — no black boxes, no hidden fees.",        bg: "bg-brand-blue/10",   color: "text-brand-blue"   },
  { icon: Zap,          title: "Innovation",       desc: "We move fast, test continuously, and never stop improving.", bg: "bg-brand-violet/10", color: "text-brand-violet" },
  { icon: Target,       title: "Publisher Growth", desc: "Your success is our KPI. Full stop.",                        bg: "bg-brand-cyan/10",   color: "text-brand-cyan"   },
  { icon: Star,         title: "Premium Demand",   desc: "Direct access to the highest-paying demand on the web.",    bg: "bg-brand-purple/10", color: "text-brand-purple" },
  { icon: BrainCircuit, title: "AI Optimization",  desc: "Self-learning systems that recalibrate every impression.",  bg: "bg-brand-blue/10",   color: "text-brand-blue"   },
]

const METRICS = [
  { value: "2022",   label: "Founded",           color: "text-brand-purple" },
  { value: "1,200+", label: "Publishers Served", color: "text-brand-blue"   },
  { value: "40+",    label: "Countries Reached", color: "text-brand-violet" },
  { value: "2025",   label: "UK Registered",     color: "text-brand-cyan"   },
]

const NEXT: { icon: LucideIcon; label: string }[] = [
  { icon: Star,         label: "Expanding CTV & In-App Monetization" },
  { icon: TrendingUp,   label: "Next-Gen AI Floor Optimization"       },
  { icon: Users,        label: "Publisher Community & Peer Network"   },
  { icon: Globe2,       label: "Real-Time Global Demand Marketplace"  },
]

const LINE_STYLE = { background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.25) 5%, rgba(139,92,246,0.25) 95%, transparent)" }

export function OurHistoryPage() {
  return (
    <>

      {/* ── Hero ── */}
      <Section background="hero" padding="none" aria-label="Our history hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-24 left-1/4" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 -right-16" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-5">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                <History aria-hidden="true" className="w-3.5 h-3.5" />Our History
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
                From Agency to{" "}<GradientText gradient="brand">Global Platform</GradientText>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-xl">
                In three years, Click Dudes evolved from a digital marketing startup into a UK-registered global publisher monetization platform — driven by one belief: every publisher deserves their inventory&apos;s true value.
              </motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:flex justify-center">
              <RobotImage variant="wave" size="lg" floatDelay={0} glowColor="purple" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── Who We Are + Values ── */}
      <Section background="section" padding="lg" aria-label="Who we are">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col gap-4">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-h2 font-bold text-text-primary tracking-heading text-balance">
                Publisher-First.<br /><GradientText gradient="violet">AI-Powered.</GradientText>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body text-text-secondary leading-relaxed">
                Click Dudes is a Google Certified Publishing Partner network that gives independent publishers access to the same premium demand, header bidding infrastructure, and AI optimization tools that enterprise media companies rely on — without the enterprise barrier to entry.
              </motion.p>
              <motion.p variants={fadeUp} className="text-body text-text-secondary leading-relaxed">
                We&apos;re not an ad network. We&apos;re not an intermediary. We&apos;re a publisher growth engine that operates transparently on your behalf, 24 hours a day.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {VALUES.map((v, i) => (
                <motion.div key={v.title} custom={i} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="glass-strong rounded-2xl p-4 border border-brand-purple/[0.10] flex flex-col gap-3 relative overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(7,17,47,0.04), 0 0 0 1px rgba(139,92,246,0.06)" }}
                >
                  <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", v.bg)}>
                    <v.icon aria-hidden="true" className={cn("w-4 h-4", v.color)} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary mb-1">{v.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Timeline ── */}
      <Section background="base" padding="lg" aria-label="Company timeline">
        <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.07} className="-top-16 right-0" />
        <GradientOrb color="cyan"   size="lg" blur="2xl" opacity={0.06} className="bottom-0 left-0" />
        <Container>
          <SectionHeader badge="Our Journey" heading={<>Four Years. <GradientText gradient="brand">One Mission.</GradientText></>}
            subtext="Every chapter shaped by one conviction — publishers should earn what their audiences are worth."
            align="center" subtextWidth="lg" className="mb-14"
          />

          {/* Mobile — left-border vertical list */}
          <div className="lg:hidden flex flex-col gap-6 pl-8 relative">
            <div aria-hidden="true" className="absolute left-3 top-2 bottom-2 w-px" style={LINE_STYLE} />
            {TIMELINE.map((entry, i) => (
              <motion.div key={entry.year} custom={i} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="relative">
                <div aria-hidden="true" className="absolute -left-[21px] top-5 w-4 h-4 rounded-full glass-strong border-2"
                  style={{ borderColor: entry.dotBorder, boxShadow: `0 0 0 3px rgba(139,92,246,0.07)` }}
                />
                <TCard entry={entry} />
              </motion.div>
            ))}
          </div>

          {/* Desktop — center-line alternating */}
          <div className="hidden lg:flex flex-col gap-10 relative">
            <div aria-hidden="true" className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={LINE_STYLE} />
            {TIMELINE.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div key={entry.year} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                  className="grid grid-cols-[1fr_68px_1fr] items-start"
                >
                  <div className="pr-8 flex justify-end">
                    {isLeft && <TCard entry={entry} />}
                  </div>
                  <div className="flex justify-center pt-5 z-10 relative">
                    <div className="w-11 h-11 rounded-full glass-strong border-2 flex flex-col items-center justify-center"
                      style={{ borderColor: entry.dotBorder, boxShadow: `0 0 0 4px rgba(139,92,246,0.07), 0 4px 20px rgba(139,92,246,0.15)` }}
                    >
                      <span className="text-[9px] font-bold text-brand-purple leading-none">{entry.year}</span>
                    </div>
                  </div>
                  <div className="pl-8">
                    {!isLeft && <TCard entry={entry} />}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ── Metrics ── */}
      <Section background="section" padding="lg" aria-label="Growth metrics">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} custom={i} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] text-center relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.05), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <p className={cn("text-3xl font-bold tracking-tight leading-none mb-2", m.color)}>{m.value}</p>
                <p className="text-[10px] text-text-muted uppercase tracking-widest font-semibold">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── What's Next ── */}
      <Section background="base" padding="lg" aria-label="Future vision">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.08} className="-top-16 left-1/3" />
        <Container size="md">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col items-center text-center gap-6">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />What&apos;s Next
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 font-bold text-text-primary tracking-heading text-balance">
              The Next Chapter Is <GradientText gradient="violet">Just Beginning</GradientText>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body text-text-secondary text-pretty leading-relaxed max-w-xl">
              With 1,200+ publishers live and growing, we&apos;re focused on deepening our AI optimization stack, expanding into new verticals, and building the infrastructure that lets every publisher compete at the highest level.
            </motion.p>
            <motion.div variants={fadeUp} className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.12] w-full max-w-lg"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NEXT.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
                    </div>
                    <span className="text-sm text-text-secondary font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <SolutionCTA heading="Be Part of What Comes Next" subheading="Join over 1,200 publishers who chose to stop leaving money on the table and start earning what their audiences are worth." badge="Apply to Join" robotVariant="rocket" primaryCTA={{ label: "Apply Now", href: "/about/contact-us" }} />
    </>
  )
}

function TCard({ entry }: { entry: TimelineEntry }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
      style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="flex items-start gap-3">
        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0", entry.iconBg)}>
          <entry.icon aria-hidden="true" className={cn("w-4 h-4", entry.iconColor)} />
        </div>
        <div>
          <span className={cn("text-[10px] font-semibold tracking-widest uppercase mb-0.5 block", entry.iconColor)}>{entry.badge}</span>
          <h3 className="text-base font-bold text-text-primary leading-snug">{entry.title}</h3>
        </div>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{entry.body}</p>
      <div className="flex flex-wrap gap-2">
        {entry.chips.map(c => (
          <span key={c} className="text-[10px] px-2.5 py-1 rounded-full glass border border-brand-purple/[0.12] text-text-muted font-medium">{c}</span>
        ))}
      </div>
    </motion.div>
  )
}
