"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Activity, Eye, GitMerge, TrendingUp, LayoutDashboard, Info } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

interface AIModule { icon: LucideIcon; label: string; value: string; color: string; glow: string; cx: number; cy: number }

const MODULES: AIModule[] = [
  { icon: TrendingUp,      label: "RPM Prediction",   value: STATS.rpmLift,           color: "text-brand-purple", glow: "rgba(139,92,246,0.6)", cx: 50,  cy: 15  },
  { icon: LayoutDashboard, label: "Layout AI",         value: "A/B x12",              color: "text-brand-blue",   glow: "rgba(96,165,250,0.6)",  cx: 88,  cy: 38  },
  { icon: Activity,        label: "Real-Time Data",    value: "24/7",                 color: "text-brand-purple",   glow: "rgba(103,232,249,0.6)", cx: 88,  cy: 72  },
  { icon: Eye,             label: "Viewability",       value: "78.5%",                color: "text-brand-green",  glow: "rgba(16,185,129,0.6)",  cx: 50,  cy: 95  },
  { icon: GitMerge,        label: "Demand Match",      value: `${STATS.fillRate} Fill`, color: "text-brand-violet", glow: "rgba(168,85,247,0.6)", cx: 12,  cy: 72  },
  { icon: Zap,             label: "Header Bidding",    value: "650ms",                color: "text-brand-blue",   glow: "rgba(96,165,250,0.6)",  cx: 12,  cy: 38  },
]

const LOG_ITEMS = [
  { action: "RPM floor recalculated",     detail: "US · Desktop +$0.42",    color: "bg-brand-green"  },
  { action: "New A/B test launched",      detail: "Layout variant 7 of 12", color: "bg-brand-purple" },
  { action: "Demand partner matched",     detail: "CTV · Premium PMPs",     color: "bg-brand-green"  },
  { action: "Viewability alert resolved", detail: "Sidebar placement fixed", color: "bg-brand-green"  },
  { action: "Header bid timeout updated", detail: "650ms → 720ms optimal",  color: "bg-brand-cyan"   },
]

const panelAnim = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 } },
}

export function AIOptimizationSection() {
  return (
    <Section background="navy" padding="lg" aria-label="AI Neural Command Center">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[400px] rounded-full bg-brand-purple/[0.10] blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-brand-cyan/[0.06] blur-3xl" />
      </div>

      <Container size="xl">
        <SectionHeader
          badge="Neural Command Center"
          heading={<>Your Revenue Stack<br /><span className="text-gradient-brand">Never Sleeps.</span></>}
          subtext="While you focus on content, our AI is recalculating floor prices, running A/B tests, and matching demand — 24/7, across every publisher in the network."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: Neural network SVG */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full"
          >
            <svg viewBox="0 0 100 110" className="w-full h-full" aria-hidden="true">
              {/* Connection lines from center to each module */}
              {MODULES.map((mod, i) => (
                <motion.line key={`line-${i}`}
                  x1="50" y1="55" x2={mod.cx} y2={mod.cy}
                  stroke={mod.glow} strokeWidth="0.6" strokeDasharray="100"
                  initial={{ strokeDashoffset: 100, opacity: 0 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 0.45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                />
              ))}
              {/* Cross-connections for organic feel */}
              {[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]].map(([a, b], i) => (
                <motion.line key={`cross-${i}`}
                  x1={MODULES[a].cx} y1={MODULES[a].cy}
                  x2={MODULES[b].cx} y2={MODULES[b].cy}
                  stroke="rgba(139,92,246,0.3)" strokeWidth="0.4" strokeDasharray="60"
                  initial={{ strokeDashoffset: 60, opacity: 0 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.8 + i * 0.07 }}
                />
              ))}
              {/* Module nodes */}
              {MODULES.map((mod, i) => (
                <motion.g key={`node-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  style={{ transformOrigin: `${mod.cx}px ${mod.cy}px` }}
                >
                  <circle cx={mod.cx} cy={mod.cy} r="6.5" fill="rgba(139,92,246,0.08)" stroke={mod.glow} strokeWidth="0.7" />
                  <motion.circle cx={mod.cx} cy={mod.cy} r="3" fill={mod.glow}
                    animate={{ opacity: [0.8, 0.4, 0.8], r: [3, 3.5, 3] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
                </motion.g>
              ))}
              {/* Central Brain node */}
              <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }} style={{ transformOrigin: "50px 55px" }}>
                <motion.circle cx="50" cy="55" r="12" fill="rgba(139,92,246,0.14)" stroke="rgba(139,92,246,0.55)" strokeWidth="1"
                  animate={{ r: [12, 13, 12] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <circle cx="50" cy="55" r="7" fill="rgba(139,92,246,0.25)" stroke="rgba(139,92,246,0.7)" strokeWidth="0.8" />
              </motion.g>
            </svg>

            {/* Module labels overlaid */}
            {MODULES.map((mod) => (
              <div key={mod.label} className="absolute pointer-events-none"
                style={{ left: `${mod.cx}%`, top: `${mod.cy}%`, transform: "translate(-50%, -50%)" }}>
                <div className="glass-dark rounded-xl px-2.5 py-1.5 border border-brand-purple/[0.12] text-center whitespace-nowrap mt-8">
                  <p className={`text-[10px] font-bold ${mod.color}`}>{mod.value}</p>
                  <p className="text-[9px] text-text-muted">{mod.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Command feed + metrics */}
          <motion.div variants={panelAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
            {/* Header */}
            <div className="glass-dark rounded-3xl overflow-hidden border border-brand-purple/[0.18]"
              style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.06), 0 0 32px rgba(139,92,246,0.08)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.12]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-purple/[0.18] border border-brand-purple/[0.30] flex items-center justify-center">
                    <Brain className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-text-primary">AI Control Center</p>
                    <p className="text-[10px] text-text-muted">Click Dudes Intelligence v4.2</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1">
                    <Info className="w-3 h-3 text-text-muted/50 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[9px] text-text-muted/60 leading-tight">Illustrative — aggregate network view</span>
                  </div>
                  <LiveDot color="purple" size="sm" label="ACTIVE" />
                </div>
              </div>
              <div className="px-5 py-4 space-y-2">
                {LOG_ITEMS.map((log, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.07]">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${log.color}`} style={{ animation: `ping-slow 2s ease-in-out infinite` }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-text-primary truncate">{log.action}</p>
                      <p className="text-[10px] text-text-muted">{log.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.10] bg-brand-purple/[0.04]">
                <Zap className="w-3.5 h-3.5 text-brand-purple shrink-0" aria-hidden="true" />
                <p className="text-[11px] text-text-secondary">
                  <span className="font-bold text-brand-purple">24/7</span> AI optimization running across all publishers
                </p>
              </div>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Avg RPM Lift", value: STATS.rpmLift,  color: "text-brand-purple" },
                { label: "Fill Rate",    value: STATS.fillRate,  color: "text-brand-purple" },
                { label: "Uptime",       value: STATS.uptime,    color: "text-brand-green"  },
              ].map(({ label, value, color }) => (
                <div key={label} className="glass-dark rounded-2xl p-3 border border-brand-purple/[0.09] text-center">
                  <p className={`text-[17px] font-bold tabular-nums ${color}`}>{value}</p>
                  <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
