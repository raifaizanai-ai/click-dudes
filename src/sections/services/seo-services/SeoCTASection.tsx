"use client"

import { motion } from "framer-motion"
import { LineChart, ArrowRight, TrendingUp, CheckCircle2, Shield } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TRUST = ["284% Avg Traffic Growth", "White-Hat Only", "All SEO Types", "Transparent Reporting"]

const RANKING_PROGRESS = [
  { kw: "best ecommerce platform",  before: "#42", after: "#1",  color: "text-brand-green"  },
  { kw: "buy widgets online",       before: "#31", after: "#3",  color: "text-brand-purple"   },
  { kw: "shopify development",      before: "#18", after: "#2",  color: "text-brand-blue"   },
  { kw: "premium widget deals",     before: "#55", after: "#5",  color: "text-brand-purple" },
]

const TRAFFIC_BARS = [18, 28, 24, 40, 34, 52, 46, 64, 72, 86, 94, 100]

export function SeoCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="SEO services get started CTA">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/[0.05] blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-7">
              <LineChart className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Rank Higher Today</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Own Page One, <span className="text-gradient-brand">Grow Organically</span>
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-md text-pretty">
              ClickDudes handles every layer of SEO — technical, on-page, off-page, and local — using only white-hat strategies that build lasting rankings. No shortcuts, no penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(139,92,246,0.25)]">
                Improve My SEO Growth
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass-dark border border-brand-purple/[0.14] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 transition-all">
                Get a Free SEO Audit
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full glass-dark border border-brand-purple/[0.10] text-text-muted">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: ranking intelligence panel */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="space-y-3">
            {/* Ranking table */}
            <div className="glass-dark rounded-3xl p-5 border border-brand-purple/[0.09]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Ranking Transformations</p>
                <LiveDot color="purple" size="sm" label="Live" />
              </div>
              <div className="space-y-2">
                {RANKING_PROGRESS.map(({ kw, before, after, color }, i) => (
                  <motion.div key={kw}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }} viewport={{ once: true }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.07]">
                    <span className="text-[11px] text-text-secondary flex-1 truncate">{kw}</span>
                    <span className="text-[11px] text-text-muted tabular-nums">{before}</span>
                    <ArrowRight className="w-3 h-3 text-text-muted shrink-0" aria-hidden="true" />
                    <span className={`text-[12px] font-bold tabular-nums ${color}`}>{after}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Traffic growth chart */}
            <div className="glass-dark rounded-3xl p-5 border border-brand-purple/[0.09]">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                  12-Month Organic Traffic
                </p>
                <span className="text-[10px] font-bold text-brand-green">
                  +<CountUp end={284} duration={2.0} suffix="%" />
                </span>
              </div>
              <div className="flex items-end gap-[3px] h-10">
                {TRAFFIC_BARS.map((v, i) => (
                  <motion.div key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple/60 to-brand-cyan/40"
                    style={{ height: `${(v / 100) * 40}px`, opacity: 0.35 + (i / TRAFFIC_BARS.length) * 0.65, transformOrigin: "bottom" }}
                    initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                    viewport={{ once: true }} aria-hidden="true" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="glass-dark rounded-2xl p-3 border border-brand-purple/[0.09] flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-bold text-text-primary">White-Hat Only</p>
                  <p className="text-[9px] text-text-muted">Zero-penalty guarantee</p>
                </div>
              </div>
              <div className="glass-dark rounded-2xl p-3 border border-brand-purple/[0.09] text-center">
                <p className="text-[17px] font-bold text-brand-purple tabular-nums">
                  <CountUp end={1840} duration={2.0} suffix="+" />
                </p>
                <p className="text-[9px] text-text-muted">Keywords ranked</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
