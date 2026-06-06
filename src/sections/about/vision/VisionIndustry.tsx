"use client"

import { motion } from "framer-motion"
import { Brain, MonitorPlay, Globe2, Sliders, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"

interface Direction {
  icon:        LucideIcon
  iconBg:      string
  iconColor:   string
  glow:        string
  border:      string
  label:       string
  title:       string
  description: string
}

const DIRECTIONS: Direction[] = [
  {
    icon:        Brain,
    iconBg:      "bg-brand-purple/12",
    iconColor:   "text-brand-purple",
    glow:        "rgba(139,92,246,0.08)",
    border:      "rgba(139,92,246,0.18)",
    label:       "Intelligence Layer",
    title:       "AI Revenue Intelligence",
    description: "Moving from static ad setups to AI that dynamically adjusts every variable across your inventory, price floors, placement, format mix, and demand allocation in real time.",
  },
  {
    icon:        MonitorPlay,
    iconBg:      "bg-brand-blue/12",
    iconColor:   "text-brand-blue",
    glow:        "rgba(96,165,250,0.08)",
    border:      "rgba(96,165,250,0.18)",
    label:       "Multi-Surface",
    title:       "Cross-Platform Monetization",
    description: "Web, app, and CTV publishers monetizing through a single intelligence stack. One partner, one relationship, every surface optimized together for maximum yield.",
  },
  {
    icon:        Globe2,
    iconBg:      "bg-brand-green/12",
    iconColor:   "text-brand-green",
    glow:        "rgba(16,185,129,0.08)",
    border:      "rgba(16,185,129,0.18)",
    label:       "Premium Access",
    title:       "Premium Demand Growth",
    description: "Unlocking preferred deals, programmatic direct, and private marketplace access for publishers at scale. The demand premium that only enterprise players have historically enjoyed.",
  },
  {
    icon:        Sliders,
    iconBg:      "bg-brand-violet/12",
    iconColor:   "text-brand-violet",
    glow:        "rgba(168,85,247,0.08)",
    border:      "rgba(168,85,247,0.18)",
    label:       "Optimization",
    title:       "Smarter Yield Optimization",
    description: "Proprietary AI models trained on network-wide data that identify patterns no single publisher could see alone. Collective intelligence driving individual publisher performance.",
  },
  {
    icon:        TrendingUp,
    iconBg:      "bg-brand-cyan/12",
    iconColor:   "text-brand-cyan",
    glow:        "rgba(103,232,249,0.08)",
    border:      "rgba(103,232,249,0.18)",
    label:       "Global Reach",
    title:       "Global Publisher Expansion",
    description: "Building the infrastructure for publishers in every market to access the same premium demand partners, regardless of geography, language, or vertical focus.",
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function VisionIndustry() {
  return (
    <Section background="section" padding="lg" aria-label="Industry directions">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.08} animate className="-top-24 left-1/2 -translate-x-1/2" />

      <Container size="xl">
        <SectionHeader
          badge="Where We Are Heading"
          heading={<>Five Directions Shaping<br /><GradientText gradient="violet">The Future of Publishing</GradientText></>}
          subtext="The convergence of AI, premium demand, and cross-platform intelligence is creating the next generation of publisher monetization."
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
          {DIRECTIONS.map((d, i) => (
            <motion.div
              key={d.title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className={`glass-strong rounded-2xl p-7 border relative overflow-hidden group${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}
              style={{
                borderColor: d.border,
                boxShadow: `0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px ${d.border}`,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 10% 10%, ${d.glow} 0%, transparent 70%)` }}
              />
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />

              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted mb-3 block">{d.label}</span>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${d.iconBg}`}>
                  <d.icon aria-hidden="true" className={`w-5.5 h-5.5 ${d.iconColor}`} style={{ width: 22, height: 22 }} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2.5 leading-snug">{d.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
