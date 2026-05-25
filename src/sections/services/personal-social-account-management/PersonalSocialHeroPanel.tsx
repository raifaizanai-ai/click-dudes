"use client"

import { motion } from "framer-motion"
import { TrendingUp, Award, CheckCircle2 } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const FOLLOWER_SPARK = [22, 28, 25, 36, 44, 38, 52, 60, 55, 70, 78, 88]
const MAX_SPARK      = Math.max(...FOLLOWER_SPARK)

const PLATFORMS = [
  { name: "LinkedIn",    followers: "42.8K", growth: "+18%", color: "text-brand-blue",   bg: "bg-brand-blue/[0.08]"   },
  { name: "Instagram",   followers: "31.5K", growth: "+24%", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]" },
  { name: "X / Twitter", followers: "19.2K", growth: "+11%", color: "text-brand-purple",   bg: "bg-brand-cyan/[0.08]"   },
]

const RECENT_CONTENT = [
  { type: "Article",   title: "How I scaled from 0 to $1M ARR",     eng: "12.4K views",  emoji: "📝" },
  { type: "Carousel",  title: "5 leadership lessons no one tells you", eng: "8.9K reach",  emoji: "🎠" },
  { type: "Video",     title: "Day in my life as a founder",         eng: "21K views",    emoji: "🎬" },
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

export function PersonalSocialHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.12)]">

      {/* Profile card */}
      <motion.div variants={cv(0.08)} className="relative overflow-hidden">
        {/* Banner */}
        <div className="h-14 bg-gradient-to-r from-brand-purple/[0.18] via-brand-violet/[0.14] to-brand-blue/[0.12]" aria-hidden="true">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139,92,246,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(96,165,250,0.3) 0%, transparent 50%)" }} />
        </div>
        {/* Profile info */}
        <div className="px-4 pb-3 border-b border-white/35">
          <div className="flex items-end gap-3 -mt-5 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-violet flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.35)] border-2 border-white shrink-0">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <p className="text-[13px] font-bold text-text-primary">John Doe</p>
              <p className="text-[10px] text-text-muted">Founder & CEO · Tech Leader</p>
            </div>
            <LiveDot color="purple" size="sm" label="Active" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3 text-brand-purple" aria-hidden="true" />
              <span className="text-[10px] font-semibold text-brand-purple">Authority Score: 94/100</span>
            </div>
            <div className="flex gap-1 ml-auto">
              {["🔵", "📸", "𝕏"].map((icon, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-white/60 border border-white/50 flex items-center justify-center text-[10px]">{icon}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Follower growth chart */}
      <motion.div variants={cv(0.18)} className="px-4 py-3 border-b border-white/30">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[10px] text-text-muted">Total Followers</p>
            <p className="text-xl font-bold text-text-primary tabular-nums">
              <CountUp end={93.5} duration={2.0} decimals={1} />K
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-brand-green">+34% this quarter</span>
            </div>
            <p className="text-[10px] text-text-muted mt-0.5">across all platforms</p>
          </div>
        </div>
        <div className="flex items-end gap-[3px] h-10">
          {FOLLOWER_SPARK.map((v, i) => (
            <motion.div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple/70 to-brand-violet/40"
              style={{ height: `${(v / MAX_SPARK) * 40}px` }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.05, ease: "easeOut" }} />
          ))}
        </div>
      </motion.div>

      {/* Platform breakdown */}
      <motion.div variants={cv(0.26)} className="px-4 py-3 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Platform Breakdown</p>
        <div className="grid grid-cols-3 gap-2">
          {PLATFORMS.map(({ name, followers, growth, color, bg }) => (
            <div key={name} className={`${bg} rounded-xl p-2.5 text-center border border-white/35`}>
              <p className={`text-[13px] font-bold tabular-nums ${color}`}>{followers}</p>
              <p className="text-[9px] text-text-muted mt-0.5 truncate">{name}</p>
              <p className="text-[10px] font-semibold text-brand-green mt-0.5">{growth}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent content */}
      <motion.div variants={cv(0.34)} className="px-4 py-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Recent Content</p>
        <div className="flex flex-col gap-1.5">
          {RECENT_CONTENT.map(({ type, title, eng, emoji }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42 + i * 0.08, duration: 0.3 }}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl bg-white/40 border border-white/40">
              <span className="text-[16px]" role="img" aria-hidden="true">{emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-text-primary truncate">{title}</p>
                <p className="text-[9px] text-text-muted">{type} · {eng}</p>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
