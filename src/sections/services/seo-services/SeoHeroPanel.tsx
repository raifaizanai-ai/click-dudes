"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Minus, Globe, Activity, Shield } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const KEYWORDS = [
  { kw: "best ecommerce platform", pos: 1,  prev: 5,  vol: "22K", dir: "up"   },
  { kw: "buy widgets online",      pos: 3,  prev: 8,  vol: "18K", dir: "up"   },
  { kw: "shopify development",     pos: 2,  prev: 2,  vol: "9.4K", dir: "same" },
  { kw: "premium widget deals",    pos: 5,  prev: 12, vol: "6.1K", dir: "up"   },
  { kw: "widget store near me",    pos: 7,  prev: 5,  vol: "14K", dir: "down"  },
]

const TRAFFIC_BARS = [32, 44, 38, 56, 50, 66, 60, 76, 70, 84, 92, 100]
const MAX_BARS      = Math.max(...TRAFFIC_BARS)

const HEALTH_CHECKS = [
  { label: "Core Web Vitals", status: "Pass",   color: "text-brand-green",  bg: "bg-brand-green/[0.08]"  },
  { label: "Mobile-Friendly", status: "Pass",   color: "text-brand-green",  bg: "bg-brand-green/[0.08]"  },
  { label: "Schema Markup",   status: "Active", color: "text-brand-blue",   bg: "bg-brand-blue/[0.08]"   },
  { label: "SSL Certificate", status: "Secure", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]" },
]

function DirIcon({ dir }: { dir: string }) {
  if (dir === "up")   return <TrendingUp   className="w-3 h-3 text-brand-green" aria-hidden="true" />
  if (dir === "down") return <TrendingDown className="w-3 h-3 text-red-400"     aria-hidden="true" />
  return                     <Minus        className="w-3 h-3 text-text-muted"  aria-hidden="true" />
}

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

export function SeoHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.12)]">

      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-purple/[0.06] to-transparent border-b border-white/40">
        <div className="w-7 h-7 rounded-xl bg-brand-purple/[0.12] flex items-center justify-center">
          <Activity className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-text-primary leading-none">SEO Dashboard</p>
          <p className="text-[9px] text-text-muted mt-0.5">yourwebsite.com · Tracking 1,840 keywords</p>
        </div>
        <LiveDot color="purple" size="sm" label="Tracking" />
      </div>

      {/* Top metrics */}
      <motion.div variants={cv(0.10)} className="grid grid-cols-3 border-b border-white/30">
        <div className="py-3 px-3 border-r border-white/25">
          <p className="text-[10px] text-text-muted">Organic Traffic</p>
          <p className="text-[17px] font-bold text-text-primary tabular-nums">
            <CountUp end={48.6} duration={2.0} decimals={1} />K
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5 text-brand-green" aria-hidden="true" />
            <span className="text-[9px] font-semibold text-brand-green">+128%</span>
          </div>
        </div>
        <div className="py-3 px-3 text-center border-r border-white/25">
          <Globe className="w-4 h-4 text-brand-blue mx-auto mb-0.5" aria-hidden="true" />
          <p className="text-[10px] text-text-muted">Domain Auth</p>
          <p className="text-[17px] font-bold text-brand-purple tabular-nums">
            <CountUp end={64} duration={1.8} />
          </p>
        </div>
        <div className="py-3 px-3 text-center">
          <Shield className="w-4 h-4 text-brand-green mx-auto mb-0.5" aria-hidden="true" />
          <p className="text-[10px] text-text-muted">Health Score</p>
          <p className="text-[17px] font-bold text-brand-green tabular-nums">
            <CountUp end={94} duration={1.8} />%
          </p>
        </div>
      </motion.div>

      {/* Traffic chart */}
      <motion.div variants={cv(0.18)} className="px-4 py-3 border-b border-white/30">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">12-Month Traffic</p>
          <span className="text-[10px] font-bold text-brand-purple">Jan → Dec</span>
        </div>
        <div className="flex items-end gap-[3px] h-12">
          {TRAFFIC_BARS.map((v, i) => (
            <motion.div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple to-brand-violet"
              style={{ height: `${(v / MAX_BARS) * 48}px`, opacity: 0.35 + (i / TRAFFIC_BARS.length) * 0.65 }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.45, delay: 0.28 + i * 0.04, ease: "easeOut" }} />
          ))}
        </div>
      </motion.div>

      {/* Keywords table */}
      <motion.div variants={cv(0.26)} className="px-4 py-3 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Keyword Rankings</p>
        <div className="space-y-1">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 pb-1">
            <span className="text-[9px] font-semibold text-text-muted uppercase">Keyword</span>
            <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-7">Pos</span>
            <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-8">Vol</span>
            <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-5">Δ</span>
          </div>
          {KEYWORDS.map(({ kw, pos, vol, dir }, i) => (
            <motion.div key={kw} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 + i * 0.07, duration: 0.3 }}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center px-2 py-1.5 rounded-xl bg-white/40 border border-white/35">
              <span className="text-[10px] text-text-secondary truncate">{kw}</span>
              <span className="text-[11px] font-bold text-brand-purple text-center tabular-nums w-7">#{pos}</span>
              <span className="text-[9px] text-text-muted text-center w-8">{vol}</span>
              <span className="flex justify-center w-5"><DirIcon dir={dir} /></span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Site health checks */}
      <motion.div variants={cv(0.36)} className="px-4 py-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Technical Health</p>
        <div className="grid grid-cols-2 gap-1.5">
          {HEALTH_CHECKS.map(({ label, status, color, bg }) => (
            <div key={label} className={`${bg} rounded-xl px-2.5 py-2 flex items-center justify-between border border-white/30`}>
              <span className="text-[10px] text-text-secondary">{label}</span>
              <span className={`text-[9px] font-bold ${color}`}>{status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
