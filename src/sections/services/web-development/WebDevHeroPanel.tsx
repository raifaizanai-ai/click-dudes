"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Shield, Smartphone, CheckCircle2 } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"

const TECH_STACK = [
  { name: "Next.js",    color: "bg-brand-navy/[0.08]  text-text-primary" },
  { name: "React",      color: "bg-brand-blue/[0.09]  text-brand-blue"   },
  { name: "TypeScript", color: "bg-brand-purple/[0.09] text-brand-purple" },
  { name: "Tailwind",   color: "bg-brand-cyan/[0.09]  text-brand-purple"   },
  { name: "Shopify",    color: "bg-brand-green/[0.09]  text-brand-green"  },
  { name: "WordPress",  color: "bg-brand-violet/[0.09] text-brand-violet" },
]

const PERF = [
  { label: "Performance",   score: 98, color: "from-brand-green  to-brand-cyan",   text: "text-brand-green"  },
  { label: "Accessibility", score: 96, color: "from-brand-blue   to-brand-cyan",   text: "text-brand-blue"   },
  { label: "Best Practices",score: 100,color: "from-brand-purple to-brand-violet", text: "text-brand-purple" },
  { label: "SEO",           score: 100,color: "from-brand-purple to-brand-blue",   text: "text-brand-purple" },
]

const CHECKLIST = ["Mobile-first responsive", "Core Web Vitals 90+", "SSL & security hardened", "SEO foundations set"]

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

export function WebDevHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(96,165,250,0.12)]">

      {/* Browser chrome */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/55 border-b border-white/45">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 min-w-0 bg-white/70 rounded-full px-3 py-1 flex items-center gap-1.5 border border-white/55">
          <Shield className="w-2.5 h-2.5 text-brand-green shrink-0" aria-hidden="true" />
          <span className="text-[10px] text-text-muted truncate">yourwebsite.com</span>
        </div>
        <LiveDot color="green" size="sm" />
      </div>

      {/* Website wireframe preview */}
      <motion.div variants={cv(0.12)} className="p-3 border-b border-white/30">
        <div className="glass-subtle rounded-2xl overflow-hidden border border-white/40">
          {/* Nav */}
          <div className="h-7 flex items-center px-3 gap-2 bg-white/50 border-b border-white/30">
            <div className="w-10 h-2.5 rounded-full bg-gradient-to-r from-brand-purple/40 to-brand-blue/30" />
            <div className="flex gap-2 ml-auto">
              {[1,2,3].map(i => <div key={i} className="w-8 h-1.5 rounded-full bg-brand-navy/[0.10]" />)}
            </div>
            <div className="w-12 h-4 rounded-full bg-brand-purple/[0.18]" />
          </div>
          {/* Hero */}
          <div className="h-14 flex items-center px-3 gap-3 bg-gradient-to-r from-brand-purple/[0.08] to-brand-blue/[0.05]">
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-brand-navy/[0.15]" />
              <div className="h-2 w-1/2 rounded-full bg-brand-navy/[0.10]" />
              <div className="h-4 w-16 rounded-full bg-brand-purple/[0.22] mt-1" />
            </div>
            <div className="w-20 h-10 rounded-xl bg-gradient-to-br from-brand-purple/[0.12] to-brand-blue/[0.08] border border-white/40" />
          </div>
          {/* Feature grid */}
          <div className="grid grid-cols-3 gap-1.5 p-2">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl bg-white/65 border border-white/50 p-2 space-y-1.5">
                <div className="w-5 h-5 rounded-lg bg-brand-purple/[0.10]" />
                <div className="h-1.5 w-4/5 rounded-full bg-brand-navy/[0.10]" />
                <div className="h-1.5 w-3/5 rounded-full bg-brand-navy/[0.07]" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lighthouse scores */}
      <motion.div variants={cv(0.22)} className="px-4 py-3 border-b border-white/30">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Zap className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
          <p className="text-[11px] font-semibold text-text-secondary">Lighthouse Audit</p>
          <span className="ml-auto text-[10px] font-bold text-brand-green">All Green ✓</span>
        </div>
        <div className="flex flex-col gap-2">
          {PERF.map(({ label, score, color, text }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-[10px] text-text-secondary w-28 shrink-0">{label}</span>
              <div className="flex-1 h-1.5 bg-brand-navy/[0.06] rounded-full overflow-hidden">
                <motion.div className={`h-full rounded-full bg-gradient-to-r ${color}`}
                  initial={{ width: 0 }} animate={{ width: `${score}%` }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }} />
              </div>
              <span className={`text-[11px] font-bold tabular-nums w-7 text-right ${text}`}>{score}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Device + tech row */}
      <motion.div variants={cv(0.32)} className="px-4 py-3 flex items-start gap-3">
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {TECH_STACK.map(({ name, color }, i) => (
              <motion.span key={name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.06, duration: 0.28 }}
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/30 ${color}`}>
                {name}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Delivered</p>
          <div className="flex flex-col gap-1">
            {CHECKLIST.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.28 }}
                className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-brand-green shrink-0" aria-hidden="true" />
                <span className="text-[10px] text-text-secondary whitespace-nowrap">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div variants={cv(0.40)} className="flex items-center justify-between px-4 py-2.5 bg-brand-blue/[0.03] border-t border-white/25">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-brand-purple" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-text-secondary">0.8s load time</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-3 h-3 text-brand-cyan" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-text-secondary">100% Responsive</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-brand-blue" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-text-secondary">SEO Ready</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
