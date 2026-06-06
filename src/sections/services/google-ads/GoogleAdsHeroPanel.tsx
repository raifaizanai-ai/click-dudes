"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const SERP = [
  {
    isAd: true, url: "yourstore.com", title: "Premium Widgets, Official Store",
    desc: "Free shipping on orders $50+. 50K happy customers. Shop the #1 rated collection.",
    extensions: ["Free Shipping", "4.9 ★ Reviews", "Same Day Delivery"],
  },
  { isAd: false, url: "competitor.com",  title: "Cheap Widgets Online, Up to 30% Off" },
  { isAd: false, url: "randomstore.net", title: "Buy Widgets, Large Selection"          },
]

const KEYWORDS = [
  { kw: "buy premium widgets",     cpc: "$1.24", clks: 842,  qs: 9  },
  { kw: "widget store near me",    cpc: "$0.88", clks: 614,  qs: 8  },
  { kw: "best widget deals 2025",  cpc: "$1.05", clks: 391,  qs: 8  },
  { kw: "premium widget reviews",  cpc: "$0.72", clks: 275,  qs: 9  },
]

const CHART_BARS = [44, 58, 50, 70, 62, 80, 74, 92, 86, 100]

const pe = {
  hidden:  { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
}
const cv = (delay: number) => ({
  hidden:  { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay } },
})

export function GoogleAdsHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(16,185,129,0.12)]">

      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-green/[0.05] to-transparent border-b border-white/40">
        <div className="w-7 h-7 rounded-xl bg-brand-green/[0.12] flex items-center justify-center">
          <Search className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-text-primary leading-none">Google Ads Dashboard</p>
          <p className="text-[9px] text-text-muted mt-0.5">Search · Display · YouTube</p>
        </div>
        <LiveDot color="green" size="sm" label="Live" />
      </div>

      {/* KPI row */}
      <motion.div variants={cv(0.10)} className="grid grid-cols-4 border-b border-white/30">
        {[
          { label: "Quality Score", value: 9.2,  suffix: "",   color: "text-brand-purple", decimals: 1 },
          { label: "CTR",           value: 12.4, suffix: "%",  color: "text-brand-blue",   decimals: 1 },
          { label: "Conv. Rate",    value: 6.8,  suffix: "%",  color: "text-brand-green",  decimals: 1 },
          { label: "ROAS",          value: 5.4,  suffix: "x",  color: "text-brand-purple",   decimals: 1 },
        ].map(({ label, value, suffix, color, decimals }, i) => (
          <div key={label} className={`py-2.5 text-center ${i < 3 ? "border-r border-white/25" : ""}`}>
            <p className={`text-[14px] font-bold tabular-nums ${color}`}>
              <CountUp end={value} decimals={decimals} suffix={suffix} />
            </p>
            <p className="text-[8px] text-text-muted mt-0.5 leading-tight">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* SERP mockup */}
      <motion.div variants={cv(0.18)} className="px-4 py-3 border-b border-white/30">
        {/* Search bar */}
        <div className="flex items-center gap-2 glass-subtle rounded-xl px-3 py-2 mb-2.5 border border-white/40">
          <Search className="w-3.5 h-3.5 text-text-muted shrink-0" aria-hidden="true" />
          <span className="text-[11px] text-text-secondary flex-1 truncate">buy premium widgets online</span>
          <Zap className="w-3 h-3 text-brand-green" aria-hidden="true" />
        </div>
        {/* Results */}
        <div className="space-y-1.5">
          {SERP.map(({ isAd, url, title, desc, extensions }, i) => (
            <div key={i} className={`rounded-xl overflow-hidden border ${isAd ? "border-brand-green/[0.15] bg-brand-green/[0.03]" : "border-white/25 opacity-40"}`}>
              <div className="px-2.5 py-1.5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {isAd && <span className="text-[8px] font-bold px-1.5 py-px rounded-sm bg-brand-green/[0.12] text-brand-green border border-brand-green/[0.18]">Sponsored</span>}
                  <span className="text-[9px] text-brand-green/80 truncate">{url}</span>
                </div>
                <p className={`text-[11px] font-semibold truncate ${isAd ? "text-brand-blue" : "text-text-secondary"}`}>{title}</p>
                {isAd && desc && <p className="text-[9px] text-text-muted mt-0.5 line-clamp-2">{desc}</p>}
              </div>
              {isAd && extensions && (
                <div className="flex gap-1.5 px-2.5 pb-2">
                  {extensions.map((ext) => (
                    <span key={ext} className="text-[8px] font-semibold px-1.5 py-px rounded-full bg-white/60 border border-white/50 text-text-secondary">{ext}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Campaign performance chart + keywords */}
      <motion.div variants={cv(0.28)} className="px-4 py-3 border-b border-white/30">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-brand-blue" aria-hidden="true" />
            Conversion Trend
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-brand-green">+68% this month</span>
          </div>
        </div>
        <div className="flex items-end gap-[3px] h-8">
          {CHART_BARS.map((v, i) => (
            <motion.div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-green/70 to-brand-cyan/50"
              style={{ height: `${(v / 100) * 32}px`, opacity: 0.5 + (i / CHART_BARS.length) * 0.5 }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.04, ease: "easeOut" }} />
          ))}
        </div>
      </motion.div>

      {/* Keywords */}
      <motion.div variants={cv(0.36)} className="px-4 py-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Top Keywords</p>
        <div className="flex flex-col gap-1">
          {KEYWORDS.map(({ kw, cpc, clks, qs }) => (
            <div key={kw} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/40 border border-white/35">
              <span className="text-[10px] text-text-secondary flex-1 truncate">{kw}</span>
              <span className="text-[10px] font-semibold text-brand-blue shrink-0">{cpc}</span>
              <span className="text-[9px] text-text-muted shrink-0">{clks}</span>
              <span className="text-[10px] font-bold text-brand-green shrink-0 w-5">Q{qs}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
