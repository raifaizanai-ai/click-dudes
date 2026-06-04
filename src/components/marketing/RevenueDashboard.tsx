"use client"

import { BarChart3, TrendingUp, Eye, Percent, Brain, Activity, Info, Users } from "lucide-react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { DashboardLiveChart } from "@/components/marketing/DashboardLiveChart"
import { DashboardActivityFeed } from "@/components/marketing/DashboardActivityFeed"
import { cn } from "@/lib/utils"
import { STATS } from "@/lib/stats"

interface StatTile {
  icon: LucideIcon
  label: string
  value: string
  accent: string
}

const STAT_TILES: StatTile[] = [
  { icon: Percent, label: "Avg Fill Rate",      value: STATS.fillRate,     accent: "text-brand-purple" },
  { icon: TrendingUp, label: "Avg RPM Lift",    value: STATS.rpmLift,      accent: "text-brand-green"  },
  { icon: Eye,     label: "Viewability",         value: "78%+",             accent: "text-brand-blue"   },
  { icon: Users,   label: "Publishers Live",     value: STATS.publishers,   accent: "text-brand-purple" },
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
            <p className="text-[11px] text-text-muted leading-tight mt-0.5">Aggregate Publisher Network</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <div className="flex items-center gap-1">
            <Info className="w-3 h-3 text-text-muted/50 flex-shrink-0" aria-hidden="true" />
            <span className="text-[9px] text-text-muted/60 leading-tight hidden sm:block">Illustrative — aggregate network view</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/12"
              style={{ animation: "ui-pulse-70 2.5s ease-in-out infinite" }}
            >
              <Brain aria-hidden="true" className="w-3 h-3 text-brand-purple" />
              <span className="text-[10px] font-semibold text-brand-purple tracking-wide">AI OPTIMIZING</span>
            </span>
            <LiveDot color="green" size="sm" label="LIVE" />
          </div>
        </div>
      </div>

      {/* Anchor stat tiles 2×2 */}
      <div className="px-5 pt-4 pb-3 grid grid-cols-2 gap-2">
        {STAT_TILES.map((tile, i) => (
          <motion.div
            key={tile.label}
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
            <div className="flex items-center mb-1.5">
              <tile.icon aria-hidden="true" className={cn("w-3.5 h-3.5 opacity-55", tile.accent)} />
            </div>
            <p className="text-lg font-bold text-text-primary">{tile.value}</p>
            <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{tile.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Live chart */}
      <div className="px-5 pb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] text-text-muted tracking-wide uppercase">RPM Trend · 30 Days</p>
          <div
            className="flex items-center gap-1"
            style={{ animation: "ui-pulse-60 2s ease-in-out infinite" }}
          >
            <Activity aria-hidden="true" className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] text-brand-purple font-medium">Real-time</span>
          </div>
        </div>
        <DashboardLiveChart />
      </div>

      {/* AI activity feed */}
      <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.08]">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[10px] tracking-widest uppercase text-text-muted">AI Activity</p>
          <span
            className="text-[10px] text-brand-purple font-semibold"
            style={{ animation: "ui-pulse-50 1.8s ease-in-out infinite" }}
          >
            ● STREAMING
          </span>
        </div>
        <DashboardActivityFeed />
      </div>

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent pointer-events-none" />
    </motion.div>
  )
}
