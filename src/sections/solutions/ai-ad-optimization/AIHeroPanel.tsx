"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const barReveal = {
  hidden:  { width: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 },
  }),
}

interface AIModule {
  name:   string
  status: string
  pct:    number
  color:  string
  dotColor: "green" | "purple" | "blue" | "cyan"
}

const AI_MODULES: AIModule[] = [
  { name: "Floor Pricing AI",  status: "98.1%",  pct: 98, color: "from-brand-purple/50 to-brand-blue/50",  dotColor: "purple" },
  { name: "Anomaly Detector",  status: "Active", pct: 92, color: "from-brand-blue/50 to-brand-cyan/50",    dotColor: "blue"   },
  { name: "Revenue Forecast",  status: "Running",pct: 85, color: "from-brand-cyan/50 to-brand-green/50",   dotColor: "cyan"   },
]

export function AIHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-purple/10 flex items-center justify-center">
              <span className="text-[10px] font-black text-brand-purple">AI</span>
            </div>
            <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Yield Engine</span>
          </div>
          <LiveDot color="green" size="sm" label="Active" />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent mb-4" />

        {/* AI Modules */}
        <div className="space-y-3 mb-4">
          {AI_MODULES.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <LiveDot color={mod.dotColor} size="sm" />
                  <span className="text-[11px] font-medium text-text-secondary">{mod.name}</span>
                </div>
                <span className="text-[11px] font-bold text-text-primary">{mod.status}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-brand-navy/[0.06] overflow-hidden">
                <motion.div
                  custom={mod.pct}
                  variants={barReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  className={cn("h-full rounded-full bg-gradient-to-r", mod.color)}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation card */}
        <div className="rounded-xl bg-brand-green/[0.06] border border-brand-green/[0.14] p-3 mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <TrendingUp aria-hidden="true" className="w-3 h-3 text-brand-green" />
            <span className="text-[9px] font-bold text-brand-green uppercase tracking-wider">Recommendation</span>
          </div>
          <p className="text-xs font-semibold text-text-primary leading-snug">
            Raise floor: Placement A
          </p>
          <p className="text-[11px] text-text-secondary mt-0.5">
            $3.80 → $4.20 · <span className="text-brand-green font-semibold">+$12/day</span>
          </p>
        </div>

        {/* Alert */}
        <div className="rounded-xl bg-brand-blue/[0.06] border border-brand-blue/[0.12] p-3">
          <div className="flex items-center gap-1.5">
            <AlertTriangle aria-hidden="true" className="w-3 h-3 text-brand-blue flex-shrink-0" />
            <span className="text-[9px] font-bold text-brand-blue uppercase tracking-wider">Alert</span>
            <span className="text-[10px] text-text-secondary ml-auto">Finance CPM spike <span className="text-brand-blue font-semibold">+18%</span></span>
          </div>
        </div>

        {/* Footer stats */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-brand-purple/[0.08]">
          <div className="flex-1 rounded-xl bg-brand-purple/[0.08] px-3 py-1.5 text-center">
            <span className="text-xs font-bold text-brand-purple">+28%</span>
            <p className="text-[9px] text-text-muted">Revenue</p>
          </div>
          <div className="flex-1 rounded-xl bg-brand-blue/[0.08] px-3 py-1.5 text-center">
            <span className="text-xs font-bold text-brand-blue">142</span>
            <p className="text-[9px] text-text-muted">Tests</p>
          </div>
          <div className="flex-1 rounded-xl bg-brand-green/[0.08] px-3 py-1.5 text-center">
            <span className="text-xs font-bold text-brand-green">24/7</span>
            <p className="text-[9px] text-text-muted">Monitoring</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
