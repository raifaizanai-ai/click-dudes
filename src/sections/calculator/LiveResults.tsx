"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, BarChart2, Cpu, ArrowRight } from "lucide-react"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"
import type { CalcResults } from "@/lib/revenueCalculator"
import { fmtCurrency } from "@/lib/revenueCalculator"
import { cn } from "@/lib/utils"

interface LiveResultsProps {
  results: CalcResults
}

const OPPORTUNITY_STYLES = {
  "Low":       { bg: "bg-brand-blue/10",   text: "text-brand-blue",   bar: "bg-brand-blue",   pct: 20 },
  "Medium":    { bg: "bg-brand-cyan/10",   text: "text-brand-purple",   bar: "bg-brand-cyan",   pct: 45 },
  "High":      { bg: "bg-brand-violet/10", text: "text-brand-violet", bar: "bg-brand-violet", pct: 72 },
  "Very High": { bg: "bg-brand-purple/10", text: "text-brand-purple", bar: "bg-brand-purple", pct: 95 },
}

function AnimVal({ value, prefix = "", suffix = "", decimals = 0, className }: {
  value: number; prefix?: string; suffix?: string; decimals?: number; className?: string
}) {
  return (
    <motion.span
      key={Math.round(value * 100)}
      initial={{ opacity: 0.5, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className={cn("tabular-nums", className)}
    >
      {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.round(value)}{suffix}
    </motion.span>
  )
}

export function LiveResults({ results }: LiveResultsProps) {
  const opp    = OPPORTUNITY_STYLES[results.opportunityLevel]
  const uplift = Math.abs(Math.round(results.revenueUplift))

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LiveDot color="purple" size="sm" />
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-purple">Live Estimate</span>
        </div>
        <span className="text-[10px] text-text-muted glass border border-brand-purple/[0.10] px-2.5 py-1 rounded-full">
          Updates instantly
        </span>
      </div>

      {/* Three estimate cards */}
      <div className="grid grid-cols-3 gap-2">
        {([
          { label: "Low",      value: results.lowEstimate,      sub: "Conservative",  muted: true,  accent: false },
          { label: "Expected", value: results.expectedEstimate, sub: "AI Estimate",   muted: false, accent: true  },
          { label: "High",     value: results.highEstimate,     sub: "Max Potential", muted: true,  accent: false },
        ]).map((card) => (
          <motion.div key={card.label}
            className={cn(
              "rounded-2xl p-4 flex flex-col gap-1 relative overflow-hidden text-center",
              card.accent
                ? "glass-strong border border-brand-purple/[0.18]"
                : "glass border border-brand-purple/[0.08]"
            )}
            style={card.accent ? { boxShadow: "0 4px 32px rgba(139,92,246,0.12), 0 0 0 1px rgba(139,92,246,0.12)" } : undefined}
          >
            {card.accent && (
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
            )}
            <span className={cn("text-[9px] font-semibold tracking-widest uppercase", card.accent ? "text-brand-purple" : "text-text-muted")}>
              {card.label}
            </span>
            <AnimVal value={card.value}
              className={cn("text-base font-bold leading-tight", card.accent ? "text-gradient-brand" : "text-text-primary")}
              prefix="$" decimals={0}
            />
            <span className="text-[9px] text-text-muted">{card.sub}</span>
          </motion.div>
        ))}
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-2 gap-3">
        {([
          { icon: BarChart2,  label: "Potential RPM",   value: `$${results.potentialRPM.toFixed(2)}`,       color: "text-brand-purple", bg: "bg-brand-purple/10" },
          { icon: TrendingUp, label: "Fill Rate Target", value: `${results.fillRatePotential}%`,             color: "text-brand-blue",   bg: "bg-brand-blue/10"   },
          { icon: Zap,        label: "Revenue Uplift",  value: `+${uplift}%`,                               color: "text-brand-green",  bg: "bg-brand-green/10"  },
          { icon: Cpu,        label: "AI Score",        value: `${results.aiScore}/100`,                    color: "text-brand-violet", bg: "bg-brand-violet/10" },
        ]).map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label}
            className="glass-strong rounded-xl p-4 border border-brand-purple/[0.09] flex items-center gap-3"
          >
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", bg)}>
              <Icon aria-hidden="true" className={cn("w-4 h-4", color)} />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-text-muted uppercase tracking-widest">{label}</p>
              <motion.p
                key={value}
                initial={{ opacity: 0.5, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={cn("text-sm font-bold leading-tight", color)}
              >
                {value}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      {/* Opportunity level */}
      <div className={cn("rounded-2xl p-5 border border-brand-purple/[0.10] flex flex-col gap-3 glass-strong")}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-text-secondary">Revenue Opportunity</span>
          <motion.span
            key={results.opportunityLevel}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={cn("text-xs font-bold px-3 py-1 rounded-full", opp.bg, opp.text)}
          >
            {results.opportunityLevel}
          </motion.span>
        </div>
        <div className="h-2 rounded-full bg-brand-purple/10 overflow-hidden">
          <motion.div
            key={results.opportunityLevel}
            className={cn("h-full rounded-full", opp.bar)}
            initial={{ width: 0 }}
            animate={{ width: `${opp.pct}%` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">
          {results.opportunityLevel === "Very High"
            ? "Significant revenue gap identified — optimization can 2× your earnings."
            : results.opportunityLevel === "High"
            ? "Strong improvement potential with platform and quality upgrades."
            : results.opportunityLevel === "Medium"
            ? "Solid foundation with room to grow through demand diversification."
            : "Already performing well — fine-tuning will drive incremental gains."}
        </p>
      </div>

      {/* CTA */}
      <motion.a href="/about/contact-us"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60"
      >
        <GradientText gradient="default" as="span" className="text-white">Apply For Monetization</GradientText>
        <ArrowRight aria-hidden="true" className="w-4 h-4" />
      </motion.a>

      <p className="text-[10px] text-text-muted text-center">
        Free consultation · No commitment · Results in 30 days
      </p>
    </div>
  )
}
