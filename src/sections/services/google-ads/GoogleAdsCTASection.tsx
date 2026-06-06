"use client"

import { motion } from "framer-motion"
import { Search, ArrowRight, TrendingUp, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"

const TRUST = ["5.4× Avg ROAS", "12.4% Avg CTR", "Quality Score 9+", "Google Certified"]

const SERP_AD = {
  url: "yourstore.com",
  title: "Best Widgets — Official Store | Free Shipping",
  desc: "Award-winning collection. 4.9★ ratings · 50K+ customers. Shop the #1 rated store.",
  extensions: ["Free Shipping", "4.9 ★ Reviews", "Same Day Delivery"],
}

export function GoogleAdsCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Google Ads get started CTA">
      <Container>
        <div className="absolute top-0 right-0 w-[400px] h-[350px] rounded-full bg-brand-green/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/[0.08] border border-brand-green/[0.12] mb-7">
              <Search className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
              <span className="text-label font-semibold text-brand-green">Own Position #1</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Dominate Google <span className="text-gradient-brand">Search Results</span>
            </h2>
            <p className="text-body-lg text-text-muted leading-relaxed mb-8 max-w-md text-pretty">
              Click Dudes builds Google Ads campaigns that put your business at the top of search results, with Quality Scores above 8, CTRs that beat the industry average, and ROAS that compounds month over month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-cyan text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
                Launch Google Ads Campaign
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass border border-white/50 text-text-primary font-semibold text-[14px] hover:border-brand-green/25 transition-all">
                Free Account Audit
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-brand-green/[0.07] border border-brand-green/[0.12] text-brand-green flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: SERP position #1 visual */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="space-y-4">
            {/* SERP preview */}
            <div className="glass rounded-3xl overflow-hidden border border-white/50 shadow-[0_16px_48px_rgba(7,17,47,0.07)]">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-navy/[0.03] border-b border-white/30">
                <div className="flex gap-1.5">
                  {["bg-red-400/50","bg-yellow-400/50","bg-green-400/50"].map((c,i)=>(
                    <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="flex-1 flex items-center gap-1.5 bg-white/50 rounded-md px-2.5 py-1 border border-white/40">
                  <Search className="w-3 h-3 text-text-muted shrink-0" aria-hidden="true" />
                  <span className="text-[11px] text-text-muted truncate">buy premium widgets online</span>
                </div>
              </div>
              <div className="p-4">
                <motion.div
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}
                  className="rounded-xl border border-brand-green/[0.20] bg-brand-green/[0.03] overflow-hidden">
                  <div className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[8px] font-bold px-1.5 py-px rounded-sm bg-brand-green/[0.14] text-brand-green border border-brand-green/[0.20]">Sponsored</span>
                      <span className="text-[10px] text-brand-green/75 truncate">{SERP_AD.url}</span>
                    </div>
                    <p className="text-[13px] font-semibold text-brand-blue mb-1">{SERP_AD.title}</p>
                    <p className="text-[11px] text-text-muted">{SERP_AD.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 px-3 pb-2.5">
                    {SERP_AD.extensions.map((ext) => (
                      <span key={ext} className="text-[8px] font-semibold px-1.5 py-px rounded-full bg-white/70 border border-white/50 text-text-secondary">{ext}</span>
                    ))}
                  </div>
                </motion.div>
                <div className="mt-2 space-y-1.5">
                  {["competitor-one.com", "randomstore.net"].map((u) => (
                    <div key={u} className="rounded-lg border border-white/25 px-3 py-2 opacity-35">
                      <span className="text-[10px] text-text-muted">{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Quality Score", val: 9.2, suffix: "",  color: "text-brand-purple", decimals: 1 },
                { label: "Avg CTR",       val: 12.4,suffix: "%", color: "text-brand-blue",   decimals: 1 },
                { label: "ROAS",          val: 5.4, suffix: "×", color: "text-brand-green",  decimals: 1 },
              ].map(({ label, val, suffix, color, decimals }) => (
                <div key={label} className="glass rounded-xl p-3 border border-white/50 text-center">
                  <p className={`text-[16px] font-bold tabular-nums ${color}`}>
                    <CountUp end={val} decimals={decimals} suffix={suffix} />
                  </p>
                  <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-4 border border-white/50 flex items-center gap-3">
              <Zap className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[12px] font-bold text-text-primary">Smart Bidding + AI Optimisation</p>
                <p className="text-[10px] text-text-muted">Bids adjusted every hour for maximum efficiency</p>
              </div>
              <TrendingUp className="w-4 h-4 text-brand-green shrink-0 ml-auto" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
