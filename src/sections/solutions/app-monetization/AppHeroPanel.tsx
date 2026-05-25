"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const APP_METRICS = [
  { label: "eCPM",      value: "$8.70",  delta: "↑", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { label: "ARPDAU",    value: "$0.24",  delta: null, accentBg: "bg-brand-blue/10",   accentText: "text-brand-blue"   },
  { label: "Fill Rate", value: "90%+",   delta: null, accentBg: "bg-brand-green/10",  accentText: "text-brand-green"  },
  { label: "SDK",       value: "Active", delta: null, accentBg: "bg-brand-cyan/10",   accentText: "text-brand-purple"   },
]

export function AppHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-4">
        <div className="flex gap-3">

          {/* Phone mockup */}
          <div
            className="relative flex-shrink-0 w-32 rounded-[28px] border-2 border-brand-purple/25 bg-white/60 overflow-hidden"
            style={{ minHeight: 220 }}
          >
            {/* Phone notch */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1.5 rounded-full bg-brand-navy/10" />
            </div>

            {/* App screen */}
            <div className="mx-1.5 rounded-xl bg-white/80 border border-brand-purple/[0.08] overflow-hidden" style={{ minHeight: 170 }}>
              {/* App top bar */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-brand-purple/[0.06]">
                <span className="text-[8px] font-bold text-text-primary">Game Zone</span>
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-brand-purple font-semibold">500 🪙</span>
                </div>
              </div>

              {/* Game content */}
              <div className="p-2 space-y-1">
                <div className="h-1.5 rounded bg-brand-navy/[0.06] w-full" />
                <div className="h-1.5 rounded bg-brand-navy/[0.06] w-3/4" />
                <div className="h-8 rounded-lg bg-gradient-to-br from-brand-purple/10 to-brand-blue/8 border border-brand-purple/[0.08] mt-2" />
              </div>

              {/* Rewarded ad overlay */}
              <div className="mx-2 mb-2 rounded-xl bg-gradient-to-b from-brand-purple/12 to-brand-blue/8 border border-brand-purple/[0.18] p-2 flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-lg bg-brand-purple/15 flex items-center justify-center">
                  <Gift aria-hidden="true" className="w-3 h-3 text-brand-purple" />
                </div>
                <span className="text-[8px] font-bold text-brand-purple text-center leading-tight">Earn 500 Coins</span>
                <span className="text-[7px] text-text-muted text-center">Watch 15s</span>
                <div className="w-full h-1 rounded-full bg-brand-purple/10 overflow-hidden mt-0.5">
                  <div className="h-full w-8/12 bg-brand-purple/50 rounded-full" />
                </div>
              </div>
            </div>

            {/* Phone home indicator */}
            <div className="flex justify-center py-2">
              <div className="w-8 h-1 rounded-full bg-brand-navy/15" />
            </div>
          </div>

          {/* Metrics column */}
          <div className="flex-1 flex flex-col gap-2">
            {APP_METRICS.map(m => (
              <div
                key={m.label}
                className={cn("rounded-xl px-3 py-2.5 flex items-center justify-between", m.accentBg)}
              >
                <span className="text-[10px] text-text-muted">{m.label}</span>
                <span className={cn("text-sm font-bold", m.accentText)}>
                  {m.value}
                  {m.delta && <span className="text-[10px] ml-0.5 opacity-70">{m.delta}</span>}
                </span>
              </div>
            ))}

            {/* Status */}
            <div className="rounded-xl bg-brand-green/[0.08] px-3 py-2.5 flex items-center justify-between">
              <span className="text-[10px] text-text-muted">SDK Status</span>
              <LiveDot color="green" size="sm" label="Online" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-brand-purple/[0.08]">
          <span className="text-[10px] text-text-muted">Rewarded Video · Interstitial · Banner</span>
          <span className="text-[10px] font-semibold text-brand-purple">iOS + Android</span>
        </div>
      </div>
    </motion.div>
  )
}
