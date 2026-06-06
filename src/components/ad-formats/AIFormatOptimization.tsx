"use client"

import { motion } from "framer-motion"
import { Cpu, LayoutDashboard, Eye, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"

interface AICard {
  icon:    LucideIcon
  title:   string
  body:    string
  stat:    string
  statLabel: string
  dotColor: "green" | "purple" | "blue" | "cyan"
  accent:  string
  bg:      string
}

const AI_CARDS: AICard[] = [
  {
    icon:      Cpu,
    title:     "Device Detection",
    body:      "Identifies screen size, OS, and connection type in real time to serve the optimal format: banner for mobile, video for desktop, CTV for streaming.",
    stat:      "99.8%",
    statLabel: "Detection accuracy",
    dotColor:  "green",
    accent:    "text-brand-purple",
    bg:        "rgba(139,92,246,0.10)",
  },
  {
    icon:      LayoutDashboard,
    title:     "Layout Intelligence",
    body:      "Analyzes your page structure, content length, and scroll depth to recommend the highest-yield ad placement that won't disrupt the reading experience.",
    stat:      "32%",
    statLabel: "Layout RPM gain",
    dotColor:  "purple",
    accent:    "text-brand-blue",
    bg:        "rgba(96,165,250,0.10)",
  },
  {
    icon:      Eye,
    title:     "Viewability Prediction",
    body:      "Predicts ad viewability before serving, placing formats only in positions with high historical in-view rates to maximize CPM and advertiser satisfaction.",
    stat:      "84%",
    statLabel: "Predicted viewability",
    dotColor:  "cyan",
    accent:    "text-brand-purple",
    bg:        "rgba(103,232,249,0.10)",
  },
  {
    icon:      TrendingUp,
    title:     "RPM Optimization",
    body:      "Combines device, layout, and viewability signals with real-time demand data to select the format most likely to win the highest bid in every auction.",
    stat:      "41%",
    statLabel: "Avg RPM uplift",
    dotColor:  "blue",
    accent:    "text-brand-green",
    bg:        "rgba(16,185,129,0.10)",
  },
]

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AIFormatOptimization() {
  return (
    <Section background="base" padding="lg" aria-label="AI format optimization" className="mesh-bg">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-0" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.07}        className="bottom-0 right-0" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-center">

          {/* Left: Robot + heading */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <SectionHeader
              badge="AI Intelligence"
              heading={<>AI Chooses the Best<br /><GradientText gradient="brand">Format for Every Impression</GradientText></>}
              subtext="Click Dudes analyzes traffic, device type, content layout, viewability potential, and demand competition to serve the highest-yield ad format for each page and placement. Automatically."
              align="left"
              subtextWidth="full"
            />

            <div className="glass rounded-2xl p-4 border border-brand-purple/[0.10] flex items-center gap-4 w-full max-w-sm">
              <RobotImage variant="analytics" size="sm" floatDelay={0.5} glowColor="purple" />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <LiveDot color="green" size="sm" />
                  <span className="text-xs font-semibold text-text-primary">Format AI Active</span>
                </div>
                <p className="text-[11px] text-text-muted leading-snug">
                  Analyzing placement signals and optimizing format selection in real time.
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5 w-full max-w-sm">
              {[
                "Selects format per impression, not per page",
                "Adapts to session depth and scroll behavior",
                "Reacts to real-time bid competition signals",
                "Learns your audience patterns over time",
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div key={card.title} custom={i} variants={cardVariant} initial="hidden"
                  whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] relative overflow-hidden group"
                  style={{ boxShadow: "0 8px 32px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

                  <div aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${card.bg} 0%, transparent 65%)` }} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: card.bg }}>
                        <Icon aria-hidden="true" className={`w-5 h-5 ${card.accent}`} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <LiveDot color={card.dotColor} size="sm" />
                        <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wide">Live</span>
                      </div>
                    </div>
                    <h3 className="text-[14px] font-bold text-text-primary mb-1.5 leading-snug">{card.title}</h3>
                    <p className="text-[12px] text-text-secondary leading-relaxed mb-3">{card.body}</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xl font-bold ${card.accent}`}>{card.stat}</span>
                      <span className="text-[10px] text-text-muted">{card.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
