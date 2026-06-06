"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Zap, BarChart3, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"

const SERP_RESULTS = [
  {
    isAd: true, url: "yourstore.com", title: "Best Widgets, Official Store | Free Shipping",
    desc: "Award-winning collection. 4.9★ · 50K+ Happy Customers · Same-Day Delivery Available.",
    extensions: ["Free Shipping", "4.9 ★ Reviews", "Same Day Delivery", "30-Day Returns"],
  },
  { isAd: false, url: "competitor-one.com",  title: "Cheap Widgets, Up to 30% Off Now" },
  { isAd: false, url: "randomstore.net",      title: "Buy Widgets Online, Huge Selection"  },
]

const KEYWORD_INTELLIGENCE = [
  { kw: "buy premium widgets",    qs: 9, cpc: "$1.24", trend: "up"   },
  { kw: "widget store near me",   qs: 8, cpc: "$0.88", trend: "up"   },
  { kw: "best widget deals 2025", qs: 8, cpc: "$1.05", trend: "same" },
  { kw: "premium widget reviews", qs: 9, cpc: "$0.72", trend: "up"   },
]

const PERF_METRICS = [
  { label: "Quality Score",  value: 9.2,  suffix: "",  color: "text-brand-purple", decimals: 1 },
  { label: "Avg CTR",        value: 12.4, suffix: "%", color: "text-brand-blue",   decimals: 1 },
  { label: "Conv. Rate",     value: 6.8,  suffix: "%", color: "text-brand-green",  decimals: 1 },
  { label: "ROAS",           value: 5.4,  suffix: "x", color: "text-brand-purple",   decimals: 1 },
]

export function GoogleAdsShowcaseSection() {
  return (
    <Section background="white" padding="xl" aria-label="Google Ads capabilities showcase">
      <Container>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-green/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/[0.08] border border-brand-green/[0.12] mb-6">
            <Search className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-green">Search Intelligence</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Dominate Search Results{" "}
            <span className="text-gradient-brand">With Every Click</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto text-pretty">
            We build Google Ads campaigns engineered for Quality Scores above 8, conversion rates that crush the industry average, and ROAS that grows month over month.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SERP mockup */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-5 border border-white/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/30">
              <div className="flex gap-1.5">
                {["bg-red-400/60", "bg-yellow-400/60", "bg-green-400/60"].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 flex items-center gap-2 bg-white/60 rounded-lg px-3 py-1.5 border border-white/50">
                <Search className="w-3 h-3 text-text-muted shrink-0" aria-hidden="true" />
                <span className="text-[11px] text-text-secondary">buy premium widgets online</span>
              </div>
            </div>
            <div className="space-y-2">
              {SERP_RESULTS.map(({ isAd, url, title, desc, extensions }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.35 }} viewport={{ once: true }}
                  className={`rounded-xl overflow-hidden border ${isAd ? "border-brand-green/[0.18] bg-brand-green/[0.03]" : "border-white/30 opacity-45"}`}>
                  <div className="px-3 py-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      {isAd && <span className="text-[8px] font-bold px-1.5 py-px rounded-sm bg-brand-green/[0.14] text-brand-green border border-brand-green/[0.20]">Sponsored</span>}
                      <span className="text-[10px] text-brand-green/80 truncate">{url}</span>
                    </div>
                    <p className={`text-[12px] font-semibold truncate ${isAd ? "text-brand-blue" : "text-text-secondary"}`}>{title}</p>
                    {isAd && desc && <p className="text-[10px] text-text-muted mt-0.5">{desc}</p>}
                  </div>
                  {isAd && extensions && (
                    <div className="flex flex-wrap gap-1.5 px-3 pb-2.5">
                      {extensions.map((ext) => (
                        <span key={ext} className="text-[8px] font-semibold px-1.5 py-px rounded-full bg-white/70 border border-white/50 text-text-secondary">{ext}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3">
              {PERF_METRICS.map(({ label, value, suffix, color, decimals }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-4 border border-white/50 text-center">
                  <p className={`text-xl font-bold tabular-nums ${color}`}>
                    <CountUp end={value} decimals={decimals} suffix={suffix} />
                  </p>
                  <p className="text-[10px] text-text-muted mt-1">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Keyword intelligence */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="glass rounded-3xl p-5 border border-white/50">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                <p className="text-[11px] font-bold text-text-primary uppercase tracking-wider">Keyword Intelligence</p>
              </div>
              <div className="space-y-2">
                {KEYWORD_INTELLIGENCE.map(({ kw, qs, cpc, trend }) => (
                  <div key={kw} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 border border-white/35">
                    <span className="text-[11px] text-text-secondary flex-1 truncate">{kw}</span>
                    <span className="text-[10px] font-semibold text-brand-blue shrink-0">{cpc}</span>
                    <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${qs >= 9 ? "text-brand-green" : "text-brand-blue"}`}>Q{qs}</span>
                    <TrendingUp className={`w-3 h-3 shrink-0 ${trend === "up" ? "text-brand-green" : "text-text-muted"}`} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/30 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
                <span className="text-[11px] text-brand-green font-semibold">+68% conversion uplift in first 90 days</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
              className="glass rounded-2xl p-4 border border-white/50 flex items-center gap-3">
              <Zap className="w-5 h-5 text-brand-purple shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[12px] font-bold text-text-primary">Smart Bidding + Automated Rules</p>
                <p className="text-[10px] text-text-muted">AI-powered bid strategies optimised for your target ROAS every hour</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
