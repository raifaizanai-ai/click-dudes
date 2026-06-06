"use client"

import { motion } from "framer-motion"
import { Zap, Info } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"
import { STATS } from "@/lib/stats"

export interface PanelMetric {
  icon:      LucideIcon
  label:     string
  value:     number
  decimals:  number
  prefix?:   string
  suffix?:   string
  trend:     string
  accent:    string
}

export interface PanelBar {
  label:      string
  value:      number
  barWidth:   string
  colorClass: string
}

export interface PanelStatus {
  label:  string
  value:  string
  active: boolean
}

export interface SolutionHeroPanelProps {
  title:       string
  subtitle:    string
  metrics:     PanelMetric[]
  barLabel:    string
  bars:        PanelBar[]
  statusLabel: string
  statusItems: PanelStatus[]
}

const panelReveal = {
  hidden:  { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 } },
}

const cellReveal = {
  hidden:  { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: 0.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionHeroPanel({
  title, subtitle, metrics, barLabel, bars, statusLabel, statusItems,
}: SolutionHeroPanelProps) {
  return (
    <motion.div
      variants={panelReveal}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-full sm:max-w-[440px] glass-strong rounded-3xl overflow-hidden border border-brand-purple/[0.16]"
      style={{ boxShadow: "0 32px 80px rgba(7,17,47,0.13),0 0 0 1px rgba(139,92,246,0.10),inset 0 1px 0 rgba(255,255,255,0.97)" }}
    >
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10] bg-white/30">
        <div>
          <p className="text-sm font-semibold text-text-primary leading-tight">{title}</p>
          <p className="text-[10px] text-text-muted mt-0.5">{subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <div className="flex items-center gap-1">
            <Info className="w-3 h-3 text-text-muted/50 flex-shrink-0" aria-hidden="true" />
            <span className="text-[9px] text-text-muted/60 leading-tight">Illustrative, aggregate network view</span>
          </div>
          <LiveDot color="green" size="sm" label="LIVE" />
        </div>
      </div>

      {/* Metric grid 2×2 */}
      <div className="grid grid-cols-2 gap-2 p-4">
        {metrics.map((m, i) => (
          <motion.div key={m.label} custom={i} variants={cellReveal} initial="hidden" animate="visible"
            className="bg-surface-card/60 rounded-2xl px-3.5 py-3 border border-brand-purple/[0.07]">
            <div className="flex items-center justify-between mb-1">
              <m.icon aria-hidden="true" className={`w-3.5 h-3.5 opacity-60 ${m.accent}`} />
              <span className="text-[9px] font-semibold text-brand-green tracking-wide">{m.trend}</span>
            </div>
            <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals}
              className="block text-xl font-bold text-text-primary tracking-tight" />
            <p className="text-[10px] text-text-muted mt-0.5">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison bars */}
      <div className="px-5 pb-4 border-b border-brand-purple/[0.08]">
        <p className="text-[10px] uppercase tracking-widest text-text-muted mb-3">{barLabel}</p>
        <div className="flex flex-col gap-2.5">
          {bars.map((bar, i) => (
            <div key={bar.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-text-secondary font-medium">{bar.label}</span>
                <span className="text-[11px] font-bold text-text-primary">{bar.value}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-brand-purple/[0.07] overflow-hidden">
                <motion.div className={`h-full rounded-full ${bar.colorClass}`}
                  initial={{ width: 0 }}
                  animate={{ width: bar.barWidth }}
                  transition={{ duration: 1.0, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status items */}
      <div className="px-5 py-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{statusLabel}</p>
          <motion.span animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[9px] text-brand-green font-semibold tracking-wider">● RUNNING</motion.span>
        </div>
        <div className="flex flex-col gap-1.5">
          {statusItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-brand-purple/[0.04]">
              <span className="text-[11px] text-text-secondary">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-text-primary">{item.value}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-brand-green" : "bg-text-muted/40"}`} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.08] bg-brand-purple/[0.02]">
        <Zap aria-hidden="true" className="w-3 h-3 text-brand-purple flex-shrink-0" />
        <p className="text-[10px] text-text-secondary">System nominal · <span className="font-semibold text-brand-green">{STATS.uptime} uptime</span></p>
      </div>
    </motion.div>
  )
}
