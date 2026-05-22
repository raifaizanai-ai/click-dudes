"use client"

import { motion } from "framer-motion"
import { Wifi } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const METRICS = [
  { label: "RPM",     value: "$11.40", delta: "↑",  accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { label: "Fill",    value: "97%",    delta: null,  accentBg: "bg-brand-blue/10",   accentText: "text-brand-blue"   },
  { label: "Revenue", value: "$2,840", delta: "/day",accentBg: "bg-brand-green/10",  accentText: "text-brand-green"  },
  { label: "AI",      value: "Active", delta: null,  accentBg: "bg-brand-cyan/10",   accentText: "text-brand-cyan"   },
]

export function WebHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      {/* Top gradient line */}
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-4">
        {/* Browser chrome */}
        <div className="rounded-xl border border-brand-purple/[0.10] bg-white/60 overflow-hidden">

          {/* Browser top bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/80 border-b border-brand-purple/[0.08]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-purple/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green/20" />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white/70 rounded-md px-2.5 py-0.5 border border-brand-purple/[0.08]">
              <Wifi aria-hidden="true" className="w-2.5 h-2.5 text-brand-green flex-shrink-0" />
              <span className="text-[10px] text-text-muted truncate">publisher-site.com/article</span>
              {/* Progress bar */}
              <div className="ml-auto w-10 h-1 rounded-full bg-brand-purple/10 overflow-hidden flex-shrink-0">
                <div className="h-full w-full bg-brand-purple/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Browser content area */}
          <div className="p-3 space-y-2 bg-white/40">

            {/* Leaderboard ad */}
            <div className="w-full h-8 rounded-lg bg-gradient-to-r from-brand-purple/15 to-brand-blue/10 border border-brand-purple/[0.14] flex items-center justify-center">
              <span className="text-[9px] font-bold text-brand-purple/70 uppercase tracking-widest">Leaderboard · 728×90</span>
            </div>

            {/* Content + MREC row */}
            <div className="flex gap-2">
              {/* Content placeholder */}
              <div className="flex-1 space-y-1.5">
                <div className="h-2 rounded bg-brand-navy/[0.06] w-full" />
                <div className="h-2 rounded bg-brand-navy/[0.06] w-5/6" />
                <div className="h-2 rounded bg-brand-navy/[0.06] w-4/5" />
                <div className="h-2 rounded bg-brand-navy/[0.06] w-full" />
                <div className="h-2 rounded bg-brand-navy/[0.06] w-3/4" />
                <div className="h-2 rounded bg-brand-navy/[0.06] w-5/6" />
              </div>

              {/* MREC ad */}
              <div className="w-20 h-20 rounded-lg bg-gradient-to-b from-brand-purple/20 to-brand-blue/15 border border-brand-purple/[0.14] flex-shrink-0 flex flex-col items-center justify-center gap-1">
                <span className="text-[8px] font-bold text-brand-purple/60 uppercase tracking-widest">MREC</span>
                <span className="text-[8px] text-text-muted">300×250</span>
              </div>
            </div>

            {/* Sticky footer ad */}
            <div className="w-full h-7 rounded-lg bg-gradient-to-r from-brand-blue/12 to-brand-cyan/10 border border-brand-blue/[0.14] flex items-center justify-center">
              <span className="text-[9px] font-bold text-brand-blue/70 uppercase tracking-widest">Sticky Footer · 320×50</span>
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          {METRICS.map(m => (
            <div
              key={m.label}
              className={cn("rounded-xl px-2 py-2 flex flex-col items-center gap-0.5", m.accentBg)}
            >
              <span className={cn("text-[10px] font-bold leading-tight", m.accentText)}>
                {m.value}{m.delta && <span className="opacity-70">{m.delta}</span>}
              </span>
              <span className="text-[9px] text-text-muted">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Status footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-brand-purple/[0.08]">
          <LiveDot color="green" size="sm" label="Ad Serving Live" />
          <span className="text-[10px] text-text-muted">Refresh: 30s</span>
        </div>
      </div>
    </motion.div>
  )
}
