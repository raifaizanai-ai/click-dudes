"use client"

import { BarChart3, TrendingUp } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"
import { HeroSparkline } from "@/components/marketing/HeroSparkline"
import { cn } from "@/lib/utils"

interface MetricItem {
  value: number
  prefix?: string
  suffix?: string
  label: string
  decimals: number
}

const METRICS: MetricItem[] = [
  { value: 2.4,  prefix: "$", suffix: "M", label: "Total Revenue",  decimals: 1 },
  { value: 94.2, suffix: "%",              label: "Avg Fill Rate",   decimals: 1 },
  { value: 8.42, prefix: "$",              label: "Avg CPM",         decimals: 2 },
  { value: 38,   prefix: "+", suffix: "%", label: "Revenue Lift",   decimals: 0 },
]

export function HeroDashboardPanel() {
  return (
    <div
      className={cn(
        "glass-strong rounded-3xl overflow-hidden w-full",
        "border border-brand-purple/[0.14]",
        "shadow-[0_24px_80px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.08)]",
      )}
    >
      {/* ── Header ──────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
            <BarChart3 aria-hidden="true" className="w-4 h-4 text-brand-purple" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary leading-tight">
              Revenue Intelligence
            </p>
            <p className="text-[11px] text-text-muted leading-tight mt-0.5">
              Powered by Click Dudes AI
            </p>
          </div>
        </div>
        <LiveDot color="green" size="sm" label="LIVE" />
      </div>

      {/* ── Metrics Grid ────────────────────────────────── */}
      <div className="px-5 pt-4 pb-2">
        <div className="grid grid-cols-2 gap-2">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-surface-card/50 rounded-2xl px-4 py-3 border border-brand-purple/[0.07]"
            >
              <CountUp
                end={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                decimals={m.decimals}
                className="text-xl font-bold text-text-primary"
              />
              <p className="text-[11px] text-text-muted mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sparkline ───────────────────────────────────── */}
      <div className="px-5 pb-2">
        <p className="text-[11px] text-text-muted mb-1.5 tracking-wide uppercase">
          Revenue · Last 30 Days
        </p>
        <HeroSparkline />
      </div>

      {/* ── Footer Notification ─────────────────────────── */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.10] bg-brand-purple/[0.03]">
        <TrendingUp aria-hidden="true" className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
        <p className="text-[11px] text-text-secondary leading-tight">
          AdX demand optimized ·{" "}
          <span className="font-semibold text-brand-purple">3 new demand partners</span>{" "}
          activated this week
        </p>
      </div>
    </div>
  )
}
