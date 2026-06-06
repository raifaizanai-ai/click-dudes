"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, Zap } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const ORBIT_RADIUS = 175

const NODES = [
  { label: "Google AdX",       color: "text-brand-blue",   bg: "bg-brand-blue/10",   border: "border-brand-blue/20",   angle: 0   },
  { label: "Header Bidding",   color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/20", angle: 60  },
  { label: "Premium Demand",   color: "text-brand-violet", bg: "bg-brand-violet/10", border: "border-brand-violet/20", angle: 120 },
  { label: "AI Optimization",  color: "text-brand-cyan",   bg: "bg-brand-cyan/10",   border: "border-brand-cyan/20",   angle: 180 },
  { label: "CTV Monetization", color: "text-brand-green",  bg: "bg-brand-green/10",  border: "border-brand-green/20",  angle: 240 },
  { label: "Revenue Growth",   color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/20", angle: 300 },
] as const

const ACTIVITY = [
  "RPM Opportunity Detected",
  "Premium Demand Added",
  "Traffic Quality Verified",
  "Header Bidding Optimized",
  "Revenue Forecast Updated",
  "Viewability Increased",
  "AI Optimization Active",
]

const STATUS_ITEMS = [
  { label: "Monitoring",           value: "450+ Publishers" },
  { label: "Revenue Signals",      value: "24,892" },
  { label: "Optimizations Today",  value: "143" },
  { label: "Demand Partners",      value: "50+" },
]

const ORBIT_DURATION = 52

export function ClickBotCommandCenter() {
  const reduced = useReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setIdx(i => (i + 1) % ACTIVITY.length), 2800)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <div className="relative flex items-center justify-center" style={{ width: 500, height: 520 }}>

      {/* Decorative orbit rings */}
      {[ORBIT_RADIUS * 2 + 64, ORBIT_RADIUS * 2].map((size, i) => (
        <div key={i} aria-hidden="true" className="absolute rounded-full pointer-events-none"
          style={{
            width: size, height: size, borderRadius: "50%",
            border: i === 0 ? "1px dashed rgba(139,92,246,0.12)" : "1px solid rgba(139,92,246,0.06)",
          }}
        />
      ))}

      {/* Orbiting ecosystem nodes — whole cluster spins together */}
      {!reduced && (
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: ORBIT_DURATION, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        >
          {NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180
            const cx = Math.round(ORBIT_RADIUS * Math.cos(rad))
            const cy = Math.round(ORBIT_RADIUS * Math.sin(rad))
            return (
              <div key={node.label} aria-hidden="true"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${cx}px)`,
                  top: `calc(50% + ${cy}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  className={cn(
                    "glass-strong rounded-xl px-3 py-1.5 border text-[11px] font-semibold whitespace-nowrap select-none",
                    node.bg, node.border, node.color
                  )}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: ORBIT_DURATION, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                >
                  {node.label}
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      )}

      {/* Static nodes for reduced-motion */}
      {reduced && NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180
        const cx = Math.round(ORBIT_RADIUS * Math.cos(rad))
        const cy = Math.round(ORBIT_RADIUS * Math.sin(rad))
        return (
          <div key={node.label} aria-hidden="true"
            className={cn("absolute glass-strong rounded-xl px-3 py-1.5 border text-[11px] font-semibold whitespace-nowrap", node.bg, node.border, node.color)}
            style={{ left: `calc(50% + ${cx}px)`, top: `calc(50% + ${cy}px)`, transform: "translate(-50%, -50%)" }}
          >
            {node.label}
          </div>
        )
      })}

      {/* Central robot */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <RobotImage variant="main" size="lg" floatDelay={0} glowColor="purple" priority />
        <div className="glass-strong rounded-2xl px-5 py-2 border border-brand-purple/15 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
          <span className="text-xs font-bold text-text-primary">ClickBot™ AI</span>
          <span className="text-xs font-semibold text-brand-green uppercase tracking-wider ml-1">Online</span>
        </div>
      </div>

      {/* Live Status Panel — bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-0 glass-strong rounded-2xl p-4 border border-brand-purple/15 z-20"
        style={{ minWidth: 178, boxShadow: "0 8px 32px rgba(139,92,246,0.10)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Activity aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">ClickBot Status</span>
        </div>
        {STATUS_ITEMS.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4 mb-1.5 last:mb-0">
            <span className="text-[10px] text-text-muted leading-tight">{label}</span>
            <span className="text-[10px] font-bold text-text-primary">{value}</span>
          </div>
        ))}
      </motion.div>

      {/* Activity Feed — top-right */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute top-8 right-0 glass-strong rounded-2xl px-4 py-3 border border-brand-purple/15 z-20"
        style={{ minWidth: 210, boxShadow: "0 8px 32px rgba(139,92,246,0.10)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">Live Activity</p>
        <AnimatePresence mode="wait">
          <motion.div key={idx}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2"
          >
            <Zap aria-hidden="true" className="w-3 h-3 text-brand-purple flex-shrink-0" />
            <span className="text-xs font-semibold text-text-primary">{ACTIVITY[idx]}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
