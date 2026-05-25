"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const CHART_BARS = [
  { h: 55, bg: "bg-brand-purple/35" },
  { h: 72, bg: "bg-brand-purple/50" },
  { h: 60, bg: "bg-brand-purple/38" },
  { h: 88, bg: "bg-brand-violet/65" },
  { h: 74, bg: "bg-brand-purple/50" },
  { h: 96, bg: "bg-brand-purple/70" },
  { h: 81, bg: "bg-brand-violet/55" },
]

const phoneFloat = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
}

export function AppPhoneMockup() {
  return (
    <motion.div variants={phoneFloat} animate="animate" className="relative" style={{ rotate: 2 }}>
      {/* Glow behind */}
      <div aria-hidden="true" className="absolute inset-0 rounded-[42px] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(139,92,246,0.22) 0%, rgba(168,85,247,0.12) 45%, transparent 72%)",
          transform: "scale(1.22) translateY(12px)",
        }} />

      {/* Phone frame */}
      <div className="relative w-[244px] sm:w-[268px] bg-white rounded-[40px] overflow-hidden"
        style={{
          border: "2.5px solid rgba(139,92,246,0.22)",
          boxShadow: "0 32px 80px rgba(7,17,47,0.14), 0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.90)",
          minHeight: 510,
        }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[8px] font-bold text-text-primary/60">9:41</span>
          <div className="w-12 h-[11px] rounded-full bg-brand-navy/[0.08]" />
          <div className="flex items-end gap-[2px]">
            {[3, 4, 5, 6].map((n) => (
              <div key={n} className="w-[3px] rounded-sm bg-brand-navy/25" style={{ height: n }} />
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="px-4 py-2 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-text-primary leading-none">Revenue Today</p>
            <p className="text-[8px] text-text-muted mt-0.5">App Monetization</p>
          </div>
          <LiveDot color="green" size="sm" label="" />
        </div>

        {/* Revenue card */}
        <div className="px-4 pb-3">
          <div className="rounded-2xl p-3"
            style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.09), rgba(168,85,247,0.05))", border: "1px solid rgba(139,92,246,0.11)" }}>
            <p className="text-[8px] text-text-muted mb-1">Total Revenue</p>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[9px] text-text-secondary font-medium">$</span>
              <p className="text-[26px] font-black text-brand-purple tabular-nums leading-none">
                <CountUp end={4280} decimals={0} duration={2.5} />
              </p>
            </div>
          </div>
        </div>

        {/* Mini chart */}
        <div className="px-4 pb-3">
          <p className="text-[8px] text-text-muted mb-1.5 font-medium">7-day eCPM trend</p>
          <div className="flex items-end gap-[3px] h-[44px]">
            {CHART_BARS.map((bar, i) => (
              <motion.div key={i} className={`flex-1 rounded-t-sm ${bar.bg}`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                style={{ height: `${bar.h}%`, transformOrigin: "bottom" }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.06, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>

        {/* Format badges */}
        <div className="px-4 pb-3 flex flex-wrap gap-1">
          {["Rewarded", "Interstitial", "Banner", "Native"].map((f) => (
            <span key={f} className="text-[7px] font-bold px-2 py-0.5 rounded-full text-brand-purple bg-brand-purple/[0.07] border border-brand-purple/[0.12]">{f}</span>
          ))}
        </div>

        {/* Bidding row */}
        <div className="mx-4 mb-3 rounded-xl flex items-center gap-2 p-2.5"
          style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.10)" }}>
          <div className="w-5 h-5 rounded-md bg-brand-purple/15 flex items-center justify-center">
            <Zap className="w-3 h-3 text-brand-purple" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-[8px] font-bold text-text-primary leading-none">In-App Bidding</p>
            <p className="text-[7px] text-text-muted mt-0.5">12 networks · sub-300ms</p>
          </div>
          <span className="text-[7px] font-bold text-brand-green px-1.5 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/15">LIVE</span>
        </div>

        {/* Bottom metric pills */}
        <div className="grid grid-cols-3 gap-1.5 px-4 pb-4">
          {[
            { l: "eCPM",   v: "$8.70", c: "text-brand-purple" },
            { l: "ARPDAU", v: "$0.24", c: "text-brand-blue"   },
            { l: "Fill",   v: "90%+",  c: "text-brand-green"  },
          ].map(({ l, v, c }) => (
            <div key={l} className="rounded-xl p-1.5 text-center"
              style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.08)" }}>
              <p className={`text-[10px] font-black ${c} tabular-nums`}>{v}</p>
              <p className="text-[7px] text-text-muted mt-0.5">{l}</p>
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2.5">
          <div className="w-16 h-[3px] rounded-full bg-brand-navy/15" />
        </div>
      </div>
    </motion.div>
  )
}
