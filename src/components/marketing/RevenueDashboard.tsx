"use client"

import { BarChart3, TrendingUp, Eye, DollarSign, Percent, Brain, Activity } from "lucide-react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { LiveCounter } from "@/components/motion/LiveCounter"
import { LiveDot } from "@/components/shared/LiveDot"
import { DashboardLiveChart } from "@/components/marketing/DashboardLiveChart"
import { DashboardActivityFeed } from "@/components/marketing/DashboardActivityFeed"
import { cn } from "@/lib/utils"

interface LiveMetric {
  icon: LucideIcon
  label: string
  base: number
  range: number
  prefix?: string
  suffix?: string
  decimals: number
  trend: string
  cycle: number
  accent: string
}

const LIVE_METRICS: LiveMetric[] = [
  { icon: DollarSign, label: "Avg RPM",     base: 12.01, range: 0.14, prefix: "$",             decimals: 2, trend: "+31%", cycle: 11, accent: "text-brand-purple" },
  { icon: TrendingUp, label: "Revenue",     base: 2.38,  range: 0.04, prefix: "$", suffix: "M", decimals: 2, trend: "+38%", cycle: 15, accent: "text-brand-green"  },
  { icon: Percent,    label: "Fill Rate",   base: 94.1,  range: 0.40,               suffix: "%", decimals: 1, trend: "+12%", cycle:  9, accent: "text-brand-cyan"   },
  { icon: Eye,        label: "Viewability", base: 78.2,  range: 0.90,               suffix: "%", decimals: 1, trend: "+8%",  cycle: 12, accent: "text-brand-blue"   },
]

const cellReveal = {
  hidden:  { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function RevenueDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative glass-strong rounded-3xl overflow-hidden w-full",
        "border border-brand-purple/[0.14]",
        "shadow-[0_24px_80px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.08)]",
      )}
    >
      {/* Ambient header shimmer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/25 to-transparent pointer-events-none" />

      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-purple/[0.10] bg-white/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
            <BarChart3 aria-hidden="true" className="w-4 h-4 text-brand-purple" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary leading-tight">Revenue Dashboard</p>
            <p className="text-[11px] text-text-muted leading-tight mt-0.5">Q4 2024 · All Publishers</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.70, 1, 0.70] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/12"
          >
            <Brain aria-hidden="true" className="w-3 h-3 text-brand-purple" />
            <span className="text-[10px] font-semibold text-brand-purple tracking-wide">AI OPTIMIZING</span>
          </motion.span>
          <LiveDot color="green" size="sm" label="LIVE" />
        </div>
      </div>

      {/* Live metrics 2×2 grid */}
      <div className="px-5 pt-4 pb-3 grid grid-cols-2 gap-2">
        {LIVE_METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            custom={i}
            variants={cellReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -2, transition: { duration: 0.18, ease: "easeOut" } }}
            className={cn(
              "bg-surface-card/60 rounded-2xl px-4 py-3 cursor-default",
              "border border-brand-purple/[0.07]",
              "shadow-[0_2px_8px_rgba(7,17,47,0.04)]",
              "hover:shadow-[0_6px_20px_rgba(7,17,47,0.08),0_0_0_1px_rgba(139,92,246,0.14)]",
              "transition-shadow duration-200",
            )}
          >
            <div className="flex items-center justify-between mb-1.5">
              <m.icon aria-hidden="true" className={cn("w-3.5 h-3.5 opacity-55", m.accent)} />
              <span className="text-[10px] font-semibold text-brand-green">{m.trend}</span>
            </div>
            <LiveCounter
              base={m.base}
              range={m.range}
              cycleDuration={m.cycle}
              prefix={m.prefix}
              suffix={m.suffix}
              decimals={m.decimals}
              className="block text-lg font-bold text-text-primary"
            />
            <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Live chart */}
      <div className="px-5 pb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] text-text-muted tracking-wide uppercase">RPM Trend · 30 Days</p>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1"
          >
            <Activity aria-hidden="true" className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] text-brand-cyan font-medium">Real-time</span>
          </motion.div>
        </div>
        <DashboardLiveChart />
      </div>

      {/* AI activity feed */}
      <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.08]">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[10px] tracking-widest uppercase text-text-muted">AI Activity</p>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] text-brand-purple font-semibold"
          >
            ● STREAMING
          </motion.span>
        </div>
        <DashboardActivityFeed />
      </div>

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent pointer-events-none" />
    </motion.div>
  )
}
