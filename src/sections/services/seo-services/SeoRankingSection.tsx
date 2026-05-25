"use client"

import { motion } from "framer-motion"
import { TrendingUp, Search, Shield, Globe, BarChart3, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const KEYWORD_RANKINGS = [
  { kw: "best ecommerce platform",   pos: 1,  prev: 12, vol: "22K", color: "text-brand-green"  },
  { kw: "buy widgets online",        pos: 3,  prev: 18, vol: "18K", color: "text-brand-purple"   },
  { kw: "shopify development",       pos: 2,  prev: 9,  vol: "9.4K",color: "text-brand-blue"   },
  { kw: "premium widget deals",      pos: 5,  prev: 24, vol: "6.1K",color: "text-brand-purple" },
  { kw: "widget store near me",      pos: 4,  prev: 15, vol: "14K", color: "text-brand-purple"   },
]

const TRAFFIC_BARS = [22, 34, 28, 46, 40, 58, 52, 70, 64, 82, 92, 100]

const HEALTH_CHECKS = [
  { label: "Core Web Vitals", status: "Pass",   dot: "green"  as const, color: "text-brand-green"  },
  { label: "Mobile UX",       status: "Pass",   dot: "green"  as const, color: "text-brand-green"  },
  { label: "Schema Markup",   status: "Active", dot: "blue"   as const, color: "text-brand-blue"   },
  { label: "SSL & Security",  status: "Secure", dot: "purple" as const, color: "text-brand-purple" },
  { label: "Page Speed",      status: "94/100", dot: "cyan"   as const, color: "text-brand-purple"   },
  { label: "Link Authority",  status: "DA 64",  dot: "blue"   as const, color: "text-brand-blue"   },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const row = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
}

export function SeoRankingSection() {
  return (
    <Section background="navy" padding="xl" aria-label="SEO ranking intelligence">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/[0.05] blur-3xl" />
        </div>

        <div className="relative z-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-6">
            <Search className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Ranking Intelligence</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Invisible to{" "}
            <span className="text-gradient-brand">Page One Domination</span>
          </h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto text-pretty">
            We track every keyword, fix every technical barrier, and build the authority your site needs to own the top positions in Google search results.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Keyword ranking table */}
          <div className="lg:col-span-2 glass-dark rounded-3xl p-6 border border-brand-purple/[0.09]">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                Keyword Ranking Changes
              </p>
              <LiveDot color="purple" size="sm" label="Live tracking" />
            </div>

            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-2 pb-2 border-b border-brand-purple/[0.10]">
              <span className="text-[9px] font-semibold text-text-muted uppercase">Keyword</span>
              <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-12">Now</span>
              <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-12">Before</span>
              <span className="text-[9px] font-semibold text-text-muted uppercase text-center w-10">Vol</span>
            </div>

            <motion.div variants={container} initial="hidden"
              whileInView="visible" viewport={{ once: true }}
              className="mt-2 space-y-1.5">
              {KEYWORD_RANKINGS.map(({ kw, pos, prev, vol, color }) => (
                <motion.div key={kw} variants={row}
                  className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center px-3 py-2.5 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.08]">
                  <span className="text-[11px] text-text-secondary truncate">{kw}</span>
                  <span className={`text-[12px] font-bold text-center tabular-nums w-12 ${color}`}>#{pos}</span>
                  <span className="text-[11px] text-text-muted text-center w-12">#{prev}</span>
                  <span className="text-[10px] text-text-muted text-center w-10">{vol}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Traffic chart */}
            <div className="mt-5 pt-4 border-t border-brand-purple/[0.10]">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Organic Traffic Growth</p>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-brand-green">+284% in 12 months</span>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-10">
                {TRAFFIC_BARS.map((v, i) => (
                  <motion.div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple/60 to-brand-cyan/40"
                    style={{ height: `${(v / 100) * 40}px`, opacity: 0.35 + (i / TRAFFIC_BARS.length) * 0.65, transformOrigin: "bottom" }}
                    initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats + health checks */}
          <div className="space-y-4">
            {/* Top stats */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Avg Traffic Growth",  value: 284, suffix: "%", color: "text-brand-purple" },
                { label: "Keywords Ranked",      value: 1840, suffix: "+", color: "text-brand-purple"  },
                { label: "DA Improvement",       value: 18,  suffix: " pts", color: "text-brand-green" },
              ].map(({ label, value, suffix, color }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="glass-dark rounded-2xl p-4 border border-brand-purple/[0.09] flex items-center justify-between">
                  <span className="text-[11px] text-text-secondary">{label}</span>
                  <span className={`text-[16px] font-bold tabular-nums ${color}`}>
                    <CountUp end={value} duration={2.0} suffix={suffix} />
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Technical health */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }} viewport={{ once: true }}
              className="glass-dark rounded-3xl p-4 border border-brand-purple/[0.09]">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                Technical Health
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {HEALTH_CHECKS.map(({ label, status, dot, color }) => (
                  <div key={label} className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-brand-purple/[0.04] border border-brand-purple/[0.07]">
                    <div className="flex items-center gap-1.5">
                      <LiveDot color={dot} size="sm" />
                      <span className="text-[9px] text-text-secondary truncate">{label}</span>
                    </div>
                    <span className={`text-[8px] font-bold ${color}`}>{status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }} viewport={{ once: true }}
              className="glass-dark rounded-2xl p-4 border border-brand-purple/[0.09] flex items-center gap-3">
              <Globe className="w-5 h-5 text-brand-blue shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[12px] font-bold text-text-primary">Domain Authority 64</p>
                <p className="text-[10px] text-text-muted">+18 DA improvement in 12 months</p>
              </div>
              <Zap className="w-4 h-4 text-brand-green shrink-0 ml-auto" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
