"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2, TrendingUp } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const POSTS = [
  {
    platform: "Instagram", handle: "@yourstore", time: "2h",
    content: "New collection just dropped — shop the look before it's gone 🔥",
    likes: "4.2K", comments: "186", bg: "from-brand-purple/[0.06] to-brand-violet/[0.04]",
    dot: "purple" as const,
  },
  {
    platform: "LinkedIn", handle: "Your Brand", time: "5h",
    content: "Why 87% of growing businesses invest in social media management in 2025 →",
    likes: "1.8K", comments: "94", bg: "from-brand-blue/[0.06] to-brand-cyan/[0.04]",
    dot: "blue" as const,
  },
]

const CALENDAR_DAYS = ["M", "T", "W", "T", "F", "S", "S"]
const CALENDAR_STATUS = [
  "bg-brand-purple text-white",
  "bg-white/60 text-text-muted",
  "bg-brand-blue text-white",
  "bg-brand-purple text-white",
  "bg-white/60 text-text-muted",
  "bg-brand-cyan text-brand-navy",
  "bg-white/60 text-text-muted",
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

export function SocialMediaHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(103,232,249,0.12)]">

      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-cyan/[0.05] to-transparent border-b border-white/40">
        <div className="w-7 h-7 rounded-xl bg-brand-cyan/[0.12] flex items-center justify-center">
          <Share2 className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-text-primary leading-none">Social Dashboard</p>
          <p className="text-[9px] text-text-muted mt-0.5">5 accounts managed</p>
        </div>
        <LiveDot color="cyan" size="sm" label="Scheduling" />
      </div>

      {/* Growth metrics row */}
      <motion.div variants={cv(0.1)} className="grid grid-cols-3 border-b border-white/30">
        {[
          { label: "Monthly Reach", value: 284, suffix: "K", color: "text-brand-purple"   },
          { label: "Avg Engagement", value: 8.4, suffix: "%", color: "text-brand-purple", decimals: 1 },
          { label: "Follower Growth", value: 67, suffix: "%", color: "text-brand-green"  },
        ].map(({ label, value, suffix, color, decimals }, i) => (
          <div key={label} className={`py-3 px-3 text-center ${i < 2 ? "border-r border-white/25" : ""}`}>
            <p className={`text-[17px] font-bold tabular-nums ${color}`}>
              <CountUp end={value} decimals={decimals ?? 0} suffix={suffix} />
            </p>
            <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Post feed */}
      <motion.div variants={cv(0.18)} className="p-3.5 space-y-2.5 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1">Recent Posts</p>
        {POSTS.map(({ platform, handle, time, content, likes, comments, bg, dot }) => (
          <div key={platform} className={`rounded-2xl overflow-hidden border border-white/40 bg-gradient-to-br ${bg}`}>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/20">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-violet flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-white">YB</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-text-primary truncate">{handle}</p>
                <p className="text-[9px] text-text-muted">{platform} · {time} ago</p>
              </div>
              <LiveDot color={dot} size="sm" />
            </div>
            <p className="text-[11px] text-text-secondary px-3 py-2 leading-relaxed line-clamp-2">{content}</p>
            <div className="flex items-center gap-4 px-3 pb-2.5">
              <button className="flex items-center gap-1 text-[10px] text-text-muted hover:text-brand-purple transition-colors" aria-label="Like">
                <Heart className="w-3 h-3" aria-hidden="true" /> {likes}
              </button>
              <button className="flex items-center gap-1 text-[10px] text-text-muted hover:text-brand-purple transition-colors" aria-label="Comment">
                <MessageCircle className="w-3 h-3" aria-hidden="true" /> {comments}
              </button>
              <div className="ml-auto flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-brand-green">+High</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Content calendar */}
      <motion.div variants={cv(0.28)} className="px-4 py-3.5">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Content Calendar · This Week</p>
        <div className="grid grid-cols-7 gap-1.5">
          {CALENDAR_DAYS.map((day, i) => (
            <div key={`${day}-${i}`} className="flex flex-col items-center gap-1">
              <span className="text-[9px] text-text-muted">{day}</span>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.38 + i * 0.06, duration: 0.3, ease: "backOut" }}
                className={`w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-bold border border-white/30 ${CALENDAR_STATUS[i]}`}>
                {CALENDAR_STATUS[i].includes("white") ? "—" : "✓"}
              </motion.div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-text-muted mt-2 text-center">4 posts scheduled · 3 platforms</p>
      </motion.div>
    </motion.div>
  )
}
