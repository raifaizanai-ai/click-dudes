"use client"

import { motion } from "framer-motion"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"

const HUB_METRICS = [
  { label: "AI Score",   value: "97",  color: "#8B5CF6" },
  { label: "Campaigns",  value: "24",  color: "#60A5FA" },
  { label: "Revenue +",  value: "47%", color: "#10B981" },
  { label: "Optimizing", value: "ON",  color: "#A855F7" },
]

const STATUS_DOTS = [
  { color: "#8B5CF6", dur: 1.5, delay: 0   },
  { color: "#60A5FA", dur: 1.9, delay: 0.5 },
  { color: "#10B981", dur: 1.7, delay: 0.9 },
]

export function AICommandCenterWidget() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden relative"
      style={{
        background:     "rgba(255,255,255,0.93)",
        backdropFilter: "blur(24px)",
        border:         "1px solid rgba(139,92,246,0.16)",
        boxShadow:
          "0 16px 64px rgba(139,92,246,0.16), 0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Top edge glow */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 5%, rgba(139,92,246,0.5) 50%, transparent 95%)" }}
        aria-hidden="true"
      />

      {/* Left / right edge connection indicators */}
      <div
        className="absolute left-0 inset-y-0 w-[3px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.55) 50%, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 inset-y-0 w-[3px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(96,165,250,0.55) 50%, transparent)" }}
        aria-hidden="true"
      />

      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b border-brand-purple/[0.08]"
        style={{ background: "linear-gradient(to right, rgba(139,92,246,0.05), rgba(96,165,250,0.03), rgba(139,92,246,0.05))" }}
      >
        <div className="flex items-center gap-2">
          <LiveDot color="green" size="sm" label="AI Active" />
          <span className="text-[11px] font-bold tracking-wide text-text-primary">ClickBot™ AI Command Hub</span>
        </div>
        <div className="flex items-center gap-1.5">
          {STATUS_DOTS.map((dot) => (
            <motion.div
              key={dot.color}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: dot.color }}
              animate={{ opacity: [1, 0.22, 1], scale: [1, 1.45, 1] }}
              transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            />
          ))}
        </div>
      </div>

      {/* Robot zone */}
      <div className="relative flex items-center justify-center py-6 overflow-hidden">

        {/* Atmospheric radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.10), transparent 65%)" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* Outer orbit ring */}
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          style={{ width: 240, height: 240, borderColor: "rgba(139,92,246,0.14)" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.7, 0.12, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          style={{ width: 160, height: 160, borderColor: "rgba(139,92,246,0.22)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 0.18, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
          aria-hidden="true"
        />

        {/* Robot — size md (180px ≈ 50% larger than sm) */}
        <RobotImage variant="energy" size="md" glowColor="purple" floatDelay={0} />
      </div>

      {/* Platform glow disc */}
      <div
        className="mx-auto pointer-events-none -mt-2"
        style={{
          width: "220px", height: "20px",
          background: "radial-gradient(ellipse at center, rgba(139,92,246,0.28), transparent 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden="true"
      />

      {/* Metrics strip */}
      <div className="grid grid-cols-4 border-t border-brand-purple/[0.08] divide-x divide-brand-purple/[0.07]">
        {HUB_METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center py-3 gap-0.5">
            <span className="text-[15px] font-black leading-none" style={{ color: m.color }}>{m.value}</span>
            <span className="text-[8px] font-semibold text-text-muted uppercase tracking-widest">{m.label}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
