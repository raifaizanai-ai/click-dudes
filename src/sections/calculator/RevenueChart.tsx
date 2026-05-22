"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import type { RevenueBreakdown } from "@/lib/revenueCalculator"
import { fmtCurrency } from "@/lib/revenueCalculator"
import { cn } from "@/lib/utils"

interface RevenueChartProps {
  breakdown:        RevenueBreakdown[]
  expectedRevenue:  number
}

const barVariant = {
  hidden:  { width: 0, opacity: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`, opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const rowVariant = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const TEXT_COLOR: Record<string, string> = {
  "bg-brand-purple": "text-brand-purple",
  "bg-brand-blue":   "text-brand-blue",
  "bg-brand-cyan":   "text-brand-cyan",
  "bg-brand-violet": "text-brand-violet",
  "bg-brand-green":  "text-brand-green",
}

export function RevenueChart({ breakdown, expectedRevenue }: RevenueChartProps) {
  return (
    <Section background="section" padding="lg" aria-label="Revenue breakdown chart">
      <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.08} className="top-0 right-0" />

      <Container size="md">
        <SectionHeader
          badge="Revenue Breakdown"
          heading={<>Where Your Revenue <GradientText gradient="violet">Comes From</GradientText></>}
          subtext="Estimated monthly revenue split across ad formats — based on your inventory profile and market benchmarks."
          align="center" subtextWidth="md" className="mb-12"
        />

        <div className="glass-strong rounded-3xl p-6 lg:p-8 border border-brand-purple/[0.10]"
          style={{ boxShadow: "0 8px 48px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
        >
          {/* Total bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">Total Monthly Estimate</span>
              <span className="text-xl font-bold text-brand-purple">{fmtCurrency(expectedRevenue)}</span>
            </div>
            <div className="h-2 rounded-full bg-brand-purple/10 overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-blue"
                style={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Breakdown rows */}
          <div className="flex flex-col gap-5">
            {breakdown.map((item, i) => (
              <motion.div key={item.label} custom={i} variants={rowVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="grid grid-cols-[1fr_auto] gap-4 items-center"
              >
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2.5 h-2.5 rounded-full flex-shrink-0", item.color)} aria-hidden="true" />
                      <span className="text-sm font-medium text-text-primary">{item.label}</span>
                    </div>
                    <span className="text-xs text-text-muted">{item.percentage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-brand-purple/08 overflow-hidden w-full">
                    <motion.div className={cn("h-full rounded-full", item.color)}
                      custom={item.percentage}
                      variants={barVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-30px" }}
                    />
                  </div>
                </div>

                <div className="text-right flex-shrink-0 w-20">
                  <p className={cn("text-sm font-bold", TEXT_COLOR[item.color] ?? "text-brand-purple")}>
                    {fmtCurrency(item.value)}
                  </p>
                  <p className="text-[10px] text-text-muted">/ month</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-text-muted mt-8 pt-5 border-t border-brand-purple/[0.08] text-center leading-relaxed">
            Estimates based on AI-driven market benchmarks. Actual revenue varies by traffic quality, advertiser demand, and optimization.
          </p>
        </div>
      </Container>
    </Section>
  )
}
