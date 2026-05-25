"use client"

import { motion } from "framer-motion"
import { Target, ArrowRight, TrendingUp, CheckCircle2, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TRUST = ["5.8× Avg ROAS", "44% Lower CPL", "In-House Creatives", "Meta Certified"]

const ROAS_BARS = [
  { label: "Month 1", roas: 2.1, pct: 30, note: "Learning" },
  { label: "Month 2", roas: 3.8, pct: 52, note: "Growing"  },
  { label: "Month 3", roas: 5.2, pct: 72, note: "Scaling"  },
  { label: "Month 4", roas: 6.8, pct: 92, note: "Peak"     },
]

export function MetaAdsCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="Meta ads get started CTA">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[450px] h-[400px] rounded-full bg-brand-blue/[0.07] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-purple/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-7">
              <Target className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Launch Campaigns</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Meta Ads That Pay <span className="text-gradient-brand">for Themselves</span>
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-md text-pretty">
              ClickDudes builds and manages Meta advertising campaigns that deliver consistent ROAS, quality leads, and scalable revenue growth through certified expertise and in-house creatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(96,165,250,0.25)]">
                Launch Meta Ads Campaign
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass-dark border border-brand-purple/[0.14] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 transition-all">
                Free Account Audit
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full glass-dark border border-brand-purple/[0.10] text-text-muted flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: ROAS growth visualization */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass-dark rounded-3xl p-6 border border-brand-purple/[0.09]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">ROAS Growth Trajectory</p>
              </div>
              <LiveDot color="blue" size="sm" label="Live" />
            </div>

            <div className="space-y-4 mb-6">
              {ROAS_BARS.map(({ label, roas, pct, note }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[10px] text-text-muted w-14 shrink-0">{label}</span>
                  <div className="flex-1 h-7 bg-brand-purple/[0.04] rounded-lg overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-lg bg-gradient-to-r from-brand-blue/70 to-brand-purple/60 flex items-center justify-end pr-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}>
                      <span className="text-[9px] font-bold text-text-primary/80">{note}</span>
                    </motion.div>
                  </div>
                  <span className="text-[12px] font-bold text-brand-purple w-9 text-right shrink-0 tabular-nums">{roas}×</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-brand-purple/[0.09] grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Avg ROAS",    val: 5.8,  suffix: "×",  color: "text-brand-purple", decimals: 1 },
                { label: "CTR",         val: 3.4,  suffix: "%",  color: "text-brand-blue",   decimals: 1 },
                { label: "Cost / Lead", val: 8,    suffix: "",   color: "text-brand-green",  decimals: 0, prefix: "$" },
              ].map(({ label, val, suffix, color, decimals, prefix }) => (
                <div key={label}>
                  <p className={`text-[17px] font-bold tabular-nums ${color}`}>
                    {prefix ?? ""}<CountUp end={val} decimals={decimals} suffix={suffix} />
                  </p>
                  <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 pt-4 border-t border-brand-purple/[0.09]">
              <TrendingUp className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-text-secondary">Average client reaches 5.8× ROAS by month 4</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
