"use client"

import { motion } from "framer-motion"
import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const containerVariant = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const rowVariant = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

interface CompareRow {
  label:       string
  before:      string
  after:       string
  beforeMuted: boolean
  afterGreen:  boolean
  hasWarning?: boolean
  hasCheck?:   boolean
}

const ROWS: CompareRow[] = [
  { label: "RPM",         before: "$3.20 ▼",  after: "$7.80 ↑",   beforeMuted: true,  afterGreen: true  },
  { label: "Viewability", before: "58%",       after: "84%",        beforeMuted: true,  afterGreen: true  },
  { label: "Fill Rate",   before: "72%",       after: "97%",        beforeMuted: true,  afterGreen: true  },
  { label: "Placement",   before: "Basic",     after: "Optimized",  beforeMuted: true,  afterGreen: false },
  { label: "Policy",      before: "⚠ 2 risks", after: "✓ Clear",   beforeMuted: true,  afterGreen: true, hasWarning: true, hasCheck: true },
]

const CHECKS = ["Layout", "Viewability", "Policy"]

export function AdsenseHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-5">

        {/* Column headers */}
        <div className="grid grid-cols-[auto_1fr_1fr] gap-3 mb-3">
          <div className="w-20" />
          <div className="text-center">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Before</span>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">After</span>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent mb-3" />

        {/* Comparison rows */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="space-y-2 mb-4"
        >
          {ROWS.map(row => (
            <motion.div
              key={row.label}
              variants={rowVariant}
              className="grid grid-cols-[auto_1fr_1fr] gap-3 items-center"
            >
              <span className="text-[10px] text-text-muted w-20">{row.label}</span>

              {/* Before */}
              <div className={cn(
                "rounded-lg px-2.5 py-1.5 text-center",
                row.beforeMuted ? "bg-brand-navy/[0.04]" : "bg-white/40"
              )}>
                <span className={cn(
                  "text-[11px] font-semibold",
                  row.beforeMuted ? "text-text-muted" : "text-text-secondary"
                )}>
                  {row.hasWarning
                    ? <span className="flex items-center justify-center gap-1"><AlertTriangle className="w-2.5 h-2.5 text-amber-400" aria-hidden="true" />2 risks</span>
                    : row.before
                  }
                </span>
              </div>

              {/* After */}
              <div className={cn(
                "rounded-lg px-2.5 py-1.5 text-center",
                row.afterGreen ? "bg-brand-green/[0.08] border border-brand-green/[0.14]" : "bg-brand-purple/[0.06] border border-brand-purple/[0.10]"
              )}>
                <span className={cn(
                  "text-[11px] font-semibold",
                  row.afterGreen ? "text-brand-green" : "text-brand-purple"
                )}>
                  {row.hasCheck
                    ? <span className="flex items-center justify-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" aria-hidden="true" />Clear</span>
                    : row.after
                  }
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Improvement banner */}
        <div className="rounded-xl bg-gradient-to-r from-brand-purple/[0.08] to-brand-green/[0.06] border border-brand-purple/[0.12] p-3 mb-3">
          <div className="flex items-center justify-center gap-2">
            <TrendingUp aria-hidden="true" className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-bold text-text-primary">+62% Improvement</span>
          </div>
        </div>

        {/* Check badges */}
        <div className="flex items-center justify-center gap-2">
          {CHECKS.map(label => (
            <div
              key={label}
              className="flex items-center gap-1 rounded-full bg-brand-green/[0.08] border border-brand-green/[0.14] px-2.5 py-1"
            >
              <CheckCircle2 aria-hidden="true" className="w-2.5 h-2.5 text-brand-green" />
              <span className="text-[10px] font-semibold text-brand-green">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
