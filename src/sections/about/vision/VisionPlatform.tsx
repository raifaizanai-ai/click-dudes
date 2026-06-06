"use client"

import { motion } from "framer-motion"
import { Brain, Globe2, Shield, Layers, BarChart3, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"

interface Feature {
  icon:        LucideIcon
  iconBg:      string
  iconColor:   string
  glowColor:   string
  title:       string
  description: string
  tag:         string
}

const FEATURES: Feature[] = [
  {
    icon:        Brain,
    iconBg:      "bg-brand-purple/12",
    iconColor:   "text-brand-purple",
    glowColor:   "rgba(139,92,246,0.09)",
    title:       "AI Revenue Intelligence",
    description: "Machine learning price floor optimization that reads demand signals across 47 variables, adjusting every impression to its highest-value configuration in real time.",
    tag:         "Core Engine",
  },
  {
    icon:        Globe2,
    iconBg:      "bg-brand-green/12",
    iconColor:   "text-brand-green",
    glowColor:   "rgba(16,185,129,0.08)",
    title:       "Premium Demand Network",
    description: "Direct connections to Google AdX, 50+ SSPs, and a curated set of high-CPM demand partners unavailable through standard header bidding paths.",
    tag:         "Demand Access",
  },
  {
    icon:        Shield,
    iconBg:      "bg-brand-blue/12",
    iconColor:   "text-brand-blue",
    glowColor:   "rgba(96,165,250,0.08)",
    title:       "Google AdX Access",
    description: "Qualified publishers gain direct access to Google AdX through our GCPP Verified Partners Network status, unlocking the highest-value programmatic demand pool.",
    tag:         "GCPP Certified",
  },
  {
    icon:        Layers,
    iconBg:      "bg-brand-violet/12",
    iconColor:   "text-brand-violet",
    glowColor:   "rgba(168,85,247,0.08)",
    title:       "Header Bidding Solutions",
    description: "Prebid-based header bidding setup with 30+ integrated demand partners, server-side fallback, and continuous latency optimization to protect page speed.",
    tag:         "Bidding Stack",
  },
  {
    icon:        BarChart3,
    iconBg:      "bg-brand-cyan/12",
    iconColor:   "text-brand-cyan",
    glowColor:   "rgba(103,232,249,0.08)",
    title:       "Publisher Analytics",
    description: "Unified revenue reporting across all demand sources, with impression-level attribution, CPM breakdowns, and fill rate analysis in a single dashboard.",
    tag:         "Reporting",
  },
  {
    icon:        TrendingUp,
    iconBg:      "bg-brand-green/12",
    iconColor:   "text-brand-green",
    glowColor:   "rgba(16,185,129,0.07)",
    title:       "Growth Optimization",
    description: "Dedicated account managers who implement ongoing optimizations, monitor performance anomalies, and proactively surface new revenue opportunities each month.",
    tag:         "Managed Growth",
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function VisionPlatform() {
  return (
    <Section background="section" padding="lg" aria-label="Platform features">
      <GradientOrb color="blue"   size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
      <GradientOrb color="violet" size="md" blur="xl"  opacity={0.06} className="bottom-0 right-0" />

      <Container>
        <SectionHeader
          badge="The Platform"
          heading={<>Six Systems Working<br /><GradientText gradient="brand">Together For Your Revenue</GradientText></>}
          subtext="Every feature on the Click Dudes platform is designed with one outcome in mind: more revenue for publishers."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariant}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-7 border border-brand-purple/[0.10] relative overflow-hidden group flex flex-col gap-4"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 10% 10%, ${f.glowColor} 0%, transparent 70%)` }}
              />
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/18 to-transparent" />

              <div className="relative z-10 flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${f.iconBg}`}>
                  <f.icon aria-hidden="true" className={`w-5.5 h-5.5 ${f.iconColor}`} style={{ width: 22, height: 22 }} />
                </div>
                <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full ${f.iconBg} ${f.iconColor}`}>{f.tag}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-sm font-bold text-text-primary mb-2 leading-snug">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
