"use client"

import { motion } from "framer-motion"
import { Share2, TrendingUp, Calendar, Heart, MessageCircle, BarChart3 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const PLATFORMS = [
  { name: "Instagram",  followers: "31.5K", growth: "+24%", eng: "8.4%", color: "text-brand-purple", bg: "bg-brand-purple/[0.07]", border: "border-brand-purple/[0.12]", dot: "purple" as const },
  { name: "LinkedIn",   followers: "42.8K", growth: "+18%", eng: "5.2%", color: "text-brand-blue",   bg: "bg-brand-blue/[0.07]",   border: "border-brand-blue/[0.12]",   dot: "blue"   as const },
  { name: "TikTok",     followers: "28.3K", growth: "+41%", eng: "12.7%",color: "text-brand-purple",   bg: "bg-brand-cyan/[0.07]",   border: "border-brand-cyan/[0.12]",   dot: "cyan"   as const },
  { name: "Facebook",   followers: "19.1K", growth: "+12%", eng: "4.8%", color: "text-brand-violet", bg: "bg-brand-violet/[0.07]", border: "border-brand-violet/[0.12]", dot: "purple" as const },
]

const CALENDAR_WEEK = [
  { day: "Mon", posts: 2, color: "bg-brand-purple" },
  { day: "Tue", posts: 1, color: "bg-brand-blue"   },
  { day: "Wed", posts: 3, color: "bg-brand-purple" },
  { day: "Thu", posts: 1, color: "bg-brand-cyan"   },
  { day: "Fri", posts: 2, color: "bg-brand-purple" },
  { day: "Sat", posts: 1, color: "bg-brand-blue"   },
  { day: "Sun", posts: 0, color: ""                },
]

const REACH_BARS = [38, 52, 44, 68, 60, 80, 72, 90, 84, 100, 94, 110]

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.06 } }),
}

export function SocialShowcaseSection() {
  return (
    <Section background="section" padding="xl" aria-label="Social media management capabilities">
      <Container>
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-cyan/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/[0.08] border border-brand-cyan/[0.12] mb-6">
            <Share2 className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Social Intelligence</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Your Brand, Active{" "}
            <span className="text-gradient-brand">Across Every Platform</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto text-pretty">
            We manage content strategy, creation, scheduling, and analytics across all major social platforms — so your audience grows while you focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Platform cards — left */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
              <LiveDot color="cyan" size="sm" /> Platform Performance
            </p>
            {PLATFORMS.map(({ name, followers, growth, eng, color, bg, border, dot }, i) => (
              <motion.div key={name} custom={i} variants={fade} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className={`${bg} ${border} rounded-2xl p-4 border flex items-center gap-4`}>
                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center shrink-0`}>
                  <LiveDot color={dot} size="sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-text-primary">{name}</p>
                  <p className={`text-[11px] font-bold ${color}`}>{followers}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[11px] font-bold text-brand-green">{growth}</p>
                  <p className="text-[10px] text-text-muted">{eng} eng</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center — reach chart + calendar */}
          <div className="lg:col-span-3 space-y-4">
            {/* Reach chart */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="glass rounded-3xl p-5 border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] text-text-muted font-semibold uppercase tracking-wider">Monthly Reach</p>
                  <p className="text-2xl font-bold text-text-primary tabular-nums">
                    <CountUp end={284} duration={2.0} suffix="K" />
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-brand-green">+67% growth</span>
                </div>
              </div>
              <div className="flex items-end gap-[4px] h-14">
                {REACH_BARS.map((v, i) => (
                  <motion.div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-cyan/70 to-brand-purple/50"
                    style={{ height: `${(v / 110) * 56}px`, opacity: 0.4 + (i / REACH_BARS.length) * 0.6 }}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                    viewport={{ once: true }} />
                ))}
              </div>
            </motion.div>

            {/* Content calendar */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="glass rounded-3xl p-5 border border-white/50">
              <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                Content Calendar — This Week
              </p>
              <div className="grid grid-cols-7 gap-2">
                {CALENDAR_WEEK.map(({ day, posts, color }) => (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <span className="text-[9px] text-text-muted font-medium">{day}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold border ${posts > 0 ? `${color} text-white border-transparent` : "bg-white/60 text-text-muted border-white/40"}`}>
                      {posts > 0 ? posts : "—"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-brand-purple" aria-hidden="true" />
                    <span className="text-[10px] text-text-muted">10 posts/week</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                    <span className="text-[10px] text-text-muted">4 platforms</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-brand-green" aria-hidden="true" />
                  <span className="text-[10px] font-semibold text-brand-green">AI-optimised timing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
