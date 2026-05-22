"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { CountUp } from "@/components/motion/CountUp"

export interface MetricItem {
  icon:     LucideIcon
  value:    number
  decimals: number
  prefix?:  string
  suffix?:  string
  label:    string
  caption:  string
  accent:   string
  bg:       string
}

export interface SolutionMetricsProps {
  badge?:  string
  heading: React.ReactNode
  subtext: string
  metrics: MetricItem[]
}

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionMetrics({ badge, heading, subtext, metrics }: SolutionMetricsProps) {
  return (
    <Section background="section" padding="lg" aria-label="Results and metrics" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-0" />
      <GradientOrb color="blue"   size="md" blur="xl"  opacity={0.07}        className="bottom-0 right-0" />

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-14" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div key={m.label} custom={i} variants={cardVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-6 border border-brand-purple/[0.10] text-center relative overflow-hidden group"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

              <div aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${m.bg} 0%, transparent 65%)` }} />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: m.bg }}>
                  <m.icon aria-hidden="true" className={`w-6 h-6 ${m.accent}`} />
                </div>

                <div>
                  <p className={`text-3xl font-bold leading-none ${m.accent}`}>
                    {m.prefix}
                    <CountUp end={m.value} decimals={m.decimals} />
                    {m.suffix}
                  </p>
                  <p className="text-sm font-semibold text-text-primary mt-1">{m.label}</p>
                </div>

                <p className="text-[11px] text-text-muted leading-snug">{m.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
