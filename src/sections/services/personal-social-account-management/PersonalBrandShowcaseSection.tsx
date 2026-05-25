"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Users, Star, Zap, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const AUTHORITY_ITEMS = [
  { label: "Thought Leadership Posts",   value: 48, suffix: "/mo", color: "text-brand-purple" },
  { label: "Inbound DMs & Leads",        value: 124, suffix: "",   color: "text-brand-blue"   },
  { label: "Speaking Invitations",       value: 6,  suffix: "/mo", color: "text-brand-purple"   },
  { label: "Brand Deals Fielded",        value: 14, suffix: "",    color: "text-brand-green"  },
]

const PLATFORM_GROWTH = [
  { name: "LinkedIn",  before: "4.2K",  after: "42.8K", pct: 78, color: "from-brand-blue to-brand-cyan"     },
  { name: "Instagram", before: "8.1K",  after: "31.5K", pct: 64, color: "from-brand-purple to-brand-violet" },
  { name: "X / Twitter",before: "3.9K", after: "19.2K", pct: 48, color: "from-brand-cyan to-brand-blue"     },
]

const CONTENT_TYPES = [
  { emoji: "📝", type: "Long-form Articles", result: "22K avg views"    },
  { emoji: "🎠", type: "Carousel Carousels",  result: "8.9K avg reach"  },
  { emoji: "🎬", type: "Short-Form Videos",  result: "31K avg views"    },
  { emoji: "🧵", type: "Engagement Threads", result: "4.2K avg replies" },
]

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 } }),
}

export function PersonalBrandShowcaseSection() {
  return (
    <Section background="base" padding="xl" aria-label="Personal brand growth capabilities">
      <Container>
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-purple/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/[0.08] border border-brand-purple/[0.12] mb-6">
            <Award className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Creator Ecosystem</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Build Real Authority{" "}
            <span className="text-gradient-brand">That Opens Doors</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto text-pretty">
            We help founders and executives become recognized category leaders — building audience, growing authority, and generating real business from their personal brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Authority metrics */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
              Authority Dashboard
            </p>
            {AUTHORITY_ITEMS.map(({ label, value, suffix, color }, i) => (
              <motion.div key={label} custom={i} variants={fade} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="glass rounded-2xl p-4 border border-white/50 flex items-center justify-between">
                <span className="text-[12px] text-text-secondary">{label}</span>
                <span className={`text-[15px] font-bold tabular-nums ${color}`}>
                  <CountUp end={value} duration={1.8} />{suffix}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Platform growth */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-6 border border-white/50">
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
              6-Month Growth
            </p>
            <div className="space-y-5">
              {PLATFORM_GROWTH.map(({ name, before, after, pct, color }, i) => (
                <div key={name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <LiveDot color="purple" size="sm" />
                      <span className="text-[12px] font-semibold text-text-primary">{name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-text-muted">{before}</span>
                      <span className="text-text-muted">→</span>
                      <span className="font-bold text-brand-green">{after}</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-brand-navy/[0.05] rounded-full overflow-hidden">
                    <motion.div className={`h-full rounded-full bg-gradient-to-r ${color}`}
                      initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                      viewport={{ once: true }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/40 text-center">
              <p className="text-[20px] font-bold text-text-primary tabular-nums">
                <CountUp end={93.5} decimals={1} duration={2.0} suffix="K" />
              </p>
              <p className="text-[11px] text-text-muted">Total followers across platforms</p>
            </div>
          </motion.div>

          {/* Content performance */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-6 border border-white/50">
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-5 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
              Content Performance
            </p>
            <div className="space-y-3 mb-5">
              {CONTENT_TYPES.map(({ emoji, type, result }, i) => (
                <motion.div key={type} custom={i} variants={fade} initial="hidden"
                  whileInView="visible" viewport={{ once: true }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/50 border border-white/40">
                  <span className="text-[18px]" role="img" aria-hidden="true">{emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-text-primary truncate">{type}</p>
                    <p className="text-[10px] text-text-muted">{result}</p>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                <span className="text-[11px] font-bold text-text-primary">Authority Score</span>
              </div>
              <div className="h-3 bg-brand-navy/[0.05] rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                  initial={{ width: 0 }} whileInView={{ width: "94%" }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-text-muted">0</span>
                <span className="text-[11px] font-bold text-brand-purple">94 / 100</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
