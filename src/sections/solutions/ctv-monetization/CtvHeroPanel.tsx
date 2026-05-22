"use client"

import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const TV_METRICS = [
  { label: "CPM",         value: "$28.40", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { label: "Completion",  value: "97%",    accentBg: "bg-brand-green/10",  accentText: "text-brand-green"  },
  { label: "Impressions", value: "18.6M",  accentBg: "bg-brand-blue/10",   accentText: "text-brand-blue"   },
  { label: "SSAI",        value: "Active", accentBg: "bg-brand-cyan/10",   accentText: "text-brand-cyan"   },
]

export function CtvHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-4">

        {/* TV bezel */}
        <div className="rounded-2xl bg-brand-navy/[0.06] border border-brand-navy/[0.08] p-2">

          {/* Screen (16:9 aspect) */}
          <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-brand-navy/[0.08] to-brand-blue/[0.06]" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 flex flex-col">

              {/* Streaming content */}
              <div className="flex-1 relative">
                {/* Simulated video content */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.08] to-brand-purple/[0.06]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <Play aria-hidden="true" className="w-5 h-5 text-white/80 ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Pre-roll badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <LiveDot color="purple" size="sm" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">Pre-Roll · 0:15s</span>
                </div>

                {/* Skip button */}
                <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded px-2 py-0.5">
                  <span className="text-[8px] text-white/70">Skip in 5s</span>
                </div>
              </div>

              {/* Player controls bar */}
              <div className="bg-black/50 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
                <Play aria-hidden="true" className="w-3 h-3 text-white/80 flex-shrink-0" fill="currentColor" />

                {/* Progress bar */}
                <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-2/5 bg-brand-purple/80 rounded-full" />
                </div>

                <span className="text-[8px] text-white/70 flex-shrink-0">02:34</span>
                <Volume2 aria-hidden="true" className="w-3 h-3 text-white/60 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* TV stand */}
          <div className="flex justify-center pt-1.5">
            <div className="w-8 h-2 rounded bg-brand-navy/[0.10]" />
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          {TV_METRICS.map(m => (
            <div
              key={m.label}
              className={cn("rounded-xl px-2 py-2 flex flex-col items-center gap-0.5", m.accentBg)}
            >
              <span className={cn("text-[10px] font-bold leading-tight", m.accentText)}>{m.value}</span>
              <span className="text-[9px] text-text-muted">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Status footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-brand-purple/[0.08]">
          <LiveDot color="green" size="sm" label="SSAI Active" />
          <span className="text-[10px] text-text-muted">CTV · OTT · Connected TV</span>
        </div>
      </div>
    </motion.div>
  )
}
