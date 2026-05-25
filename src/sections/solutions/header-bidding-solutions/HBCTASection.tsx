"use client"

import { motion } from "framer-motion"
import { ArrowRight, Layers, Sparkles, CheckCircle2, GitMerge } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const BENEFITS = [
  "Server-side Prebid.js — zero client-side JavaScript overhead",
  "15+ premium SSPs competing simultaneously for every impression",
  "AI floor pricing — always optimal, never stale",
  "Zero developer effort — we handle all configuration and updates",
]

const AUCTION_LOG = [
  { ssp: "Google AdX",     bid: "$8.42", status: "WON",  statusColor: "text-brand-green",  dot: "bg-brand-blue"   },
  { ssp: "Index Exchange", bid: "$7.90", status: "Lost", statusColor: "text-text-muted",    dot: "bg-brand-purple" },
  { ssp: "Magnite",        bid: "$7.15", status: "Lost", statusColor: "text-text-muted",    dot: "bg-brand-cyan"   },
  { ssp: "PubMatic",       bid: "$6.80", status: "Lost", statusColor: "text-text-muted",    dot: "bg-brand-green"  },
]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function HBCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Start Header Bidding">
      <GradientOrb color="blue" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="purple" size="lg" blur="xl" opacity={0.07} className="-bottom-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Live auction preview card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-brand-blue/[0.14]"
              style={{ boxShadow: "0 24px 80px rgba(96,165,250,0.12), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-blue/[0.10]"
                style={{ background: "rgba(96,165,250,0.05)" }}>
                <div className="flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">Unified Auction Live</span>
                </div>
                <LiveDot color="blue" size="sm" label="" />
              </div>

              <div className="p-5 space-y-5">
                {/* CPM counter */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">Avg CPM with Header Bidding</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[11px] text-text-muted">$</span>
                    <p className="text-[38px] font-black tabular-nums leading-none" style={{ background: "linear-gradient(135deg, #60A5FA, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      <CountUp end={8.42} decimals={2} duration={2.2} />
                    </p>
                    <span className="text-[12px] text-brand-green font-bold ml-1">↑ 47% vs waterfall</span>
                  </div>
                </div>

                {/* Auction log */}
                <div className="space-y-2">
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Latest Auction — 187ms</p>
                  {AUCTION_LOG.map((row, i) => (
                    <motion.div key={row.ssp}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl"
                      style={{ background: "rgba(7,17,47,0.04)", border: "1px solid rgba(7,17,47,0.06)" }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.dot}`} />
                      <span className="text-[11px] text-text-secondary flex-1">{row.ssp}</span>
                      <span className="text-[11px] font-bold text-text-primary tabular-nums">{row.bid}</span>
                      <span className={`text-[10px] font-semibold ${row.statusColor}`}>{row.status}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "SSP Partners",  value: "15+",   color: "text-brand-blue"   },
                    { label: "CPM Increase",  value: "47%",   color: "text-brand-purple" },
                    { label: "Core Vitals",   value: "✓ Safe",color: "text-brand-green"  },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl p-3 text-center" style={{ background: "rgba(96,165,250,0.06)", border: "1px solid rgba(96,165,250,0.10)" }}>
                      <p className={`text-[13px] font-bold ${color}`}>{value}</p>
                      <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-blue/20 text-xs font-semibold tracking-widest uppercase text-brand-blue">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Header Bidding
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Ready to Maximize{" "}
              <span className="text-gradient-brand">Every Bid?</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 700+ publishers running Click Dudes' server-side header bidding infrastructure. Sub-200ms auctions, 15+ SSPs, and AI floor optimization — all managed for you.
            </motion.p>

            <motion.ul custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col gap-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                  <span className="text-[14px] text-text-secondary">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/about/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(96,165,250,0.35)] hover:shadow-[0_8px_40px_rgba(96,165,250,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                <Layers className="w-4 h-4" aria-hidden="true" />
                Optimize with Header Bidding
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-blue/25 transition-all duration-300">
                Auction Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
