"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Play, Users } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const CAMPAIGNS = [
  {
    name: "Summer Sale — Conv",  status: "Active",  budget: "$4,200/mo", roas: "6.8x",
    bar: 82, dot: "green" as const, barColor: "from-brand-purple to-brand-violet",
  },
  {
    name: "Lead Gen — Retarget", status: "Scaling", budget: "$1,800/mo", roas: "4.2x",
    bar: 61, dot: "purple" as const, barColor: "from-brand-blue to-brand-cyan",
  },
]

const AUDIENCE = [
  { label: "Lookalike 1%",    pct: 78, color: "from-brand-purple to-brand-violet" },
  { label: "Interest Stack",  pct: 64, color: "from-brand-blue to-brand-cyan"     },
  { label: "Retargeting",     pct: 91, color: "from-brand-green to-brand-cyan"    },
]

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

export function MetaAdsHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(96,165,250,0.12)]">

      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-blue/[0.06] to-transparent border-b border-white/40">
        <div className="w-7 h-7 rounded-xl bg-brand-blue/[0.12] flex items-center justify-center">
          <Target className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-text-primary leading-none">Meta Ads Manager</p>
          <p className="text-[9px] text-text-muted mt-0.5">2 Active Campaigns</p>
        </div>
        <LiveDot color="blue" size="sm" label="Live" />
      </div>

      {/* Ad creative preview */}
      <motion.div variants={cv(0.10)} className="px-4 py-3 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Ad Creative Preview</p>
        <div className="glass-subtle rounded-2xl overflow-hidden border border-white/40">
          {/* Facebook ad header */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/25">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-white">CB</span>
            </div>
            <div>
              <p className="text-[11px] font-bold text-text-primary">ClickBrand</p>
              <p className="text-[9px] text-text-muted">Sponsored · Facebook & Instagram</p>
            </div>
          </div>
          {/* Ad body */}
          <div className="relative h-20 bg-gradient-to-br from-brand-blue/[0.10] via-brand-purple/[0.07] to-brand-cyan/[0.08] flex items-center justify-center overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 40% 40%, rgba(96,165,250,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(139,92,246,0.20) 0%, transparent 55%)" }} />
            <div className="relative text-center z-10">
              <p className="text-[13px] font-bold text-text-primary">Summer Sale — Up to 50% Off</p>
              <p className="text-[10px] text-text-secondary mt-0.5">Limited time. Shop now →</p>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-[9px] text-text-muted">yourstore.com</span>
            <div className="h-5 px-2 rounded-full bg-brand-blue/[0.12] text-brand-blue text-[9px] font-bold flex items-center">Shop Now</div>
          </div>
          <div className="px-3 py-1.5 flex items-center gap-3 border-t border-white/20">
            <span className="text-[10px] text-text-muted">❤️ 2.4K  💬 148  📤 312</span>
            <span className="ml-auto text-[10px] font-semibold text-brand-green">+62% eng rate</span>
          </div>
        </div>
      </motion.div>

      {/* ROAS metrics */}
      <motion.div variants={cv(0.20)} className="grid grid-cols-3 border-b border-white/30">
        {[
          { label: "Avg ROAS",  value: 5.8,  suffix: "x",  color: "text-brand-purple", decimals: 1 },
          { label: "CTR",       value: 3.4,  suffix: "%",  color: "text-brand-blue",   decimals: 1 },
          { label: "Cost/Lead", value: 8,    prefix: "$",  color: "text-brand-green"               },
        ].map(({ label, value, suffix, prefix, color, decimals }, i) => (
          <div key={label} className={`py-3 text-center ${i < 2 ? "border-r border-white/25" : ""}`}>
            <p className={`text-[16px] font-bold tabular-nums ${color}`}>
              <CountUp end={value} decimals={decimals ?? 0} prefix={prefix ?? ""} suffix={suffix ?? ""} />
            </p>
            <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Campaigns */}
      <motion.div variants={cv(0.28)} className="px-4 py-3 border-b border-white/30 space-y-2">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Active Campaigns</p>
        {CAMPAIGNS.map(({ name, status, budget, roas, bar, dot, barColor }) => (
          <div key={name} className="glass-subtle rounded-xl p-2.5 border border-white/35">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[11px] font-semibold text-text-primary truncate flex-1">{name}</p>
              <div className="flex items-center gap-1.5 ml-2 shrink-0">
                <LiveDot color={dot} size="sm" />
                <span className="text-[10px] font-semibold text-text-secondary">{status}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-brand-navy/[0.06] rounded-full overflow-hidden">
                <motion.div className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                  initial={{ width: 0 }} animate={{ width: `${bar}%` }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }} />
              </div>
              <span className="text-[11px] font-bold text-brand-purple shrink-0">{roas}</span>
              <span className="text-[10px] text-text-muted shrink-0">{budget}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Audience targeting */}
      <motion.div variants={cv(0.36)} className="px-4 py-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
          <Users className="w-3 h-3 inline mr-1 text-brand-blue" aria-hidden="true" />
          Audience Match Rate
        </p>
        <div className="space-y-2">
          {AUDIENCE.map(({ label, pct, color }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-[10px] text-text-secondary w-24 shrink-0">{label}</span>
              <div className="flex-1 h-1.5 bg-brand-navy/[0.06] rounded-full overflow-hidden">
                <motion.div className={`h-full rounded-full bg-gradient-to-r ${color}`}
                  initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }} />
              </div>
              <TrendingUp className="w-3 h-3 text-brand-green shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold text-brand-blue w-8 text-right tabular-nums">{pct}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
