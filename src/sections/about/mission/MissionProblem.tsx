"use client"

import { motion } from "framer-motion"
import { TrendingDown, XCircle, AlertTriangle, DollarSign } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"

interface ProblemCard {
  icon:        LucideIcon
  iconBg:      string
  iconColor:   string
  glowColor:   string
  title:       string
  description: string
  stat:        string
  statLabel:   string
}

const PROBLEMS: ProblemCard[] = [
  {
    icon:        TrendingDown,
    iconBg:      "bg-red-500/10",
    iconColor:   "text-red-400",
    glowColor:   "rgba(239,68,68,0.06)",
    title:       "Low Revenue",
    description: "Most publishers earn 40–60% of their inventory's true market value. Suboptimal demand access and poor floor pricing leave thousands on the table every month.",
    stat:        "40–60%",
    statLabel:   "of revenue lost",
  },
  {
    icon:        XCircle,
    iconBg:      "bg-brand-violet/10",
    iconColor:   "text-brand-violet",
    glowColor:   "rgba(168,85,247,0.08)",
    title:       "Poor Demand Access",
    description: "Without Google AdX and premium header bidding, publishers are limited to a fraction of the available buyer market. Better demand means higher CPMs and stronger fill rates.",
    stat:        "500+",
    statLabel:   "DSPs missing",
  },
  {
    icon:        AlertTriangle,
    iconBg:      "bg-amber-500/10",
    iconColor:   "text-amber-400",
    glowColor:   "rgba(245,158,11,0.06)",
    title:       "Unoptimized Ad Setup",
    description: "Static price floors, poor placement strategy, and missing format types are silent revenue killers. AI-driven optimization fixes these gaps automatically.",
    stat:        "32%",
    statLabel:   "avg RPM gap",
  },
  {
    icon:        DollarSign,
    iconBg:      "bg-brand-cyan/10",
    iconColor:   "text-brand-cyan",
    glowColor:   "rgba(103,232,249,0.07)",
    title:       "Missed Revenue Opportunities",
    description: "Private marketplace deals, preferred buyers, and programmatic direct are reserved for enterprise publishers. Click Dudes opens these doors for everyone who qualifies.",
    stat:        "2–4×",
    statLabel:   "higher CPM potential",
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function MissionProblem() {
  return (
    <Section background="base" padding="lg" aria-label="The problem we solve">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />

      <Container>
        <SectionHeader
          badge="The Problem We Solve"
          heading={<>The Ad Tech Gap<br /><GradientText gradient="violet">Publishers Face Every Day</GradientText></>}
          subtext="Enterprise media companies have access to tools that independent publishers don't. We built Click Dudes to close that gap permanently."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-7 border border-brand-purple/[0.10] relative overflow-hidden group"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 15% 15%, ${p.glowColor} 0%, transparent 65%)` }}
              />
              {/* Top edge light */}
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/18 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.iconBg}`}>
                    <p.icon aria-hidden="true" className={`w-5.5 h-5.5 ${p.iconColor}`} style={{ width: 22, height: 22 }} />
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-black tabular-nums ${p.iconColor}`}>{p.stat}</p>
                    <p className="text-[10px] text-text-muted mt-0.5">{p.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2.5">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
