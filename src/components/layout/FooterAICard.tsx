"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, CheckCircle2 } from "lucide-react"
import { FooterRevenueCTA } from "@/components/layout/FooterRevenueCTA"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"
import { cn } from "@/lib/utils"

/* ── Data ───────────────────────────────────────────── */

const FEED = [
  { text: "RPM Opportunity Detected",  detail: "US · Desktop +$0.42",         live: true  },
  { text: "Premium Demand Added",       detail: "CTV · 14.5 avg CPM",          live: true  },
  { text: "Revenue Forecast Updated",   detail: "+8.2% projected growth",      live: false },
  { text: "Header Bidding Optimized",   detail: "Timeout adj. 650→720ms",      live: true  },
  { text: "Traffic Quality Verified",   detail: "IVT: 0.2% · Clean signal",   live: false },
  { text: "Viewability Improved",       detail: "+12% viewable impressions",   live: false },
] as const

const METRICS = [
  { label: "Net RPM",   value: "$4.82", trend: "+12%" },
  { label: "Fill Rate", value: "94.3%", trend: "+3%"  },
  { label: "Avg CPM",   value: "$7.14", trend: "+8%"  },
] as const

const STATUS_ROWS = [
  { label: "AI Optimization", pct: 100, color: "bg-brand-green" },
  { label: "Demand Connect",  pct: 100, color: "bg-brand-green" },
  { label: "Traffic Shield",  pct: 94,  color: "bg-brand-blue"  },
  { label: "Revenue Track",   pct: 100, color: "bg-brand-green" },
] as const

const TRUST_BADGES = ["GCPP Verified Partners Network", "Google AdX", "450+ Publishers"] as const

/* ── Sparkline path (144×48 viewBox, y inverted) ──── */

const SPARK_LINE = "M0,44 L18,38 L36,41 L54,30 L72,24 L90,18 L108,12 L126,15 L144,6"
const SPARK_AREA = "M0,44 L18,38 L36,41 L54,30 L72,24 L90,18 L108,12 L126,15 L144,6 L144,48 L0,48 Z"

/* ── Motion ─────────────────────────────────────────── */

const panelVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.13 },
  }),
}

const feedSlide = {
  enter:  { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.22 } },
}

/* ── Component ──────────────────────────────────────── */

export function FooterAICard() {
  const [feedIdx, setFeedIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFeedIdx(n => (n + 1) % FEED.length), 2800)
    return () => clearInterval(id)
  }, [])

  const active = FEED[feedIdx]

  return (
    <motion.div
      custom={2} variants={panelVariants} initial="hidden"
      whileInView="visible" viewport={{ once: true, margin: "-40px" }}
      className="glass-elevated rounded-3xl overflow-hidden flex flex-col border border-brand-purple/[0.18]"
      style={{ boxShadow: "0 32px 80px rgba(7,17,47,0.12), 0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.97)" }}
    >

      {/* ── Header ─────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-purple/[0.10]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
            <Brain aria-hidden="true" className="w-4 h-4 text-brand-purple" />
          </div>
          <div>
            <p className="text-[11.5px] font-bold text-text-primary leading-none">
              ClickBot™ <span className="text-gradient-brand">AI Agent</span>
            </p>
            <p className="text-[9px] text-text-muted mt-0.5">Live Monetization Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple tracking-wider uppercase">v4</span>
          <LiveDot color="green" size="sm" label="LIVE" />
        </div>
      </div>

      {/* ── Live Metrics ───────────────────────────── */}
      <div className="grid grid-cols-3 divide-x divide-brand-purple/[0.07] border-b border-brand-purple/[0.07]">
        {METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center py-2.5 text-center bg-white/60">
            <span className="text-[12px] font-bold text-gradient-brand leading-none">{m.value}</span>
            <span className="text-[8px] text-text-muted mt-0.5 leading-none">{m.label}</span>
            <span className="text-[7.5px] font-semibold text-brand-green mt-0.5">↑ {m.trend}</span>
          </div>
        ))}
      </div>

      {/* ── Revenue Health Score ────────────────────── */}
      <div className="px-4 pt-2.5 pb-2 border-b border-brand-purple/[0.07]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8.5px] font-semibold text-text-secondary uppercase tracking-wider">Revenue Health Score</span>
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold text-brand-green leading-none">94</span>
            <span className="text-[8px] text-text-muted">/100</span>
            <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green ml-1">EXCELLENT</span>
          </div>
        </div>
        <div className="h-[5px] w-full rounded-full bg-brand-purple/[0.08] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(to right, var(--color-brand-purple), var(--color-brand-green))" }}
            initial={{ width: "0%" }}
            whileInView={{ width: "94%" }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* ── RPM Sparkline ──────────────────────────── */}
      <div className="px-4 pt-2 pb-1.5 border-b border-brand-purple/[0.07]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8.5px] font-semibold text-text-secondary uppercase tracking-wider">RPM Trend</span>
          <span className="text-[8px] font-semibold text-brand-green">↗ 7-day high</span>
        </div>
        <svg viewBox="0 0 144 48" className="w-full h-7" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-brand-purple)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path d={SPARK_AREA} fill="url(#sparkFill)"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }} viewport={{ once: true }}
          />
          <motion.path d={SPARK_LINE} fill="none"
            stroke="var(--color-brand-purple)" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      {/* ── Live Activity Feed ─────────────────────── */}
      <div className="px-4 pt-2 pb-2 border-b border-brand-purple/[0.07]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[8.5px] font-semibold text-text-secondary uppercase tracking-wider">Live Activity</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-[ping-slow_1.5s_ease-out_infinite] flex-shrink-0" aria-hidden="true" />
        </div>
        <div className="relative h-[34px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={feedIdx} variants={feedSlide} initial="enter" animate="center" exit="exit"
              className="absolute inset-0 flex items-start gap-2"
            >
              <div className={cn(
                "mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0",
                active.live ? "bg-brand-green animate-[ping-slow_2s_ease-in-out_infinite]" : "bg-brand-purple/40"
              )} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-text-primary leading-tight truncate">{active.text}</p>
                <p className="text-[8.5px] text-text-muted mt-0.5">{active.detail}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-1 mt-1.5" aria-hidden="true">
          {FEED.map((_, i) => (
            <div key={i} className={cn(
              "rounded-full transition-all duration-300",
              i === feedIdx ? "w-3 h-[3px] bg-brand-purple" : "w-[3px] h-[3px] bg-brand-purple/25"
            )} />
          ))}
        </div>
      </div>

      {/* ── System Status ──────────────────────────── */}
      <div className="px-4 pt-2 pb-2.5 border-b border-brand-purple/[0.07]">
        <span className="text-[8.5px] font-semibold text-text-secondary uppercase tracking-wider block mb-2">System Status</span>
        <div className="flex flex-col gap-1.5">
          {STATUS_ROWS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
              <span className="text-[8.5px] text-text-secondary flex-1 truncate">{s.label}</span>
              <div className="w-14 h-[3px] rounded-full bg-brand-purple/[0.08] overflow-hidden flex-shrink-0">
                <motion.div className={cn("h-full rounded-full", s.color)}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${s.pct}%` }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-[7.5px] font-bold text-brand-green w-6 text-right flex-shrink-0">
                {s.pct === 100 ? "OK" : `${s.pct}%`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trust Badges ───────────────────────────── */}
      <div className="px-4 pt-2 pb-2.5 border-b border-brand-purple/[0.07] flex items-center gap-1.5 flex-wrap">
        {TRUST_BADGES.map((b) => (
          <span key={b} className="inline-flex items-center gap-1 text-[7.5px] font-bold px-2 py-0.5 rounded-full bg-brand-purple/[0.06] border border-brand-purple/[0.12] text-brand-purple leading-none">
            <CheckCircle2 aria-hidden="true" className="w-2 h-2 flex-shrink-0" />
            {b}
          </span>
        ))}
      </div>

      {/* ── Revenue CTA ────────────────────────────── */}
      <FooterRevenueCTA />

      {/* ── Status Bar ─────────────────────────────── */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.08] bg-brand-purple/[0.03]">
        <Zap aria-hidden="true" className="w-3 h-3 text-brand-purple flex-shrink-0" />
        <p className="text-[10px] text-text-secondary">
          System nominal ·{" "}
          <span className="font-semibold text-brand-green">{STATS.uptime} uptime</span>
        </p>
      </div>

    </motion.div>
  )
}
