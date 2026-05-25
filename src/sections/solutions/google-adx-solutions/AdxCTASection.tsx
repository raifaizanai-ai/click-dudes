"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2, ShieldCheck, Info } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

const BENEFITS = [
  "Full Google AdX demand pool — exclusive to certified MCM partners",
  "Programmatic direct & preferred deal access at premium CPMs",
  "Zero setup fees — revenue share on incremental gains only",
  "Live in 7–14 days — our team handles all technical integration",
]

const LIVE_DATA = [
  { label: "AdX Impression",   cpm: "$12.40", winner: "Google AdX",     dot: "bg-brand-blue"   },
  { label: "PMP Deal",          cpm: "$18.60", winner: "Premium Buyer",  dot: "bg-brand-purple" },
  { label: "Open Auction",      cpm: "$9.20",  winner: "Multiple DSPs",  dot: "bg-brand-cyan"   },
]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdxCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Get Google AdX Access">
      <GradientOrb color="blue" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="purple" size="lg" blur="xl" opacity={0.07} className="-top-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: AdX revenue intelligence card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-brand-blue/[0.16]"
              style={{ boxShadow: "0 24px 80px rgba(96,165,250,0.12), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-blue/[0.12]"
                style={{ background: "rgba(96,165,250,0.05)" }}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">AdX Revenue Intelligence</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1">
                    <Info className="w-3 h-3 text-text-muted/50 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[9px] text-text-muted/60 leading-tight">Illustrative — aggregate network view</span>
                  </div>
                  <LiveDot color="blue" size="sm" label="" />
                </div>
              </div>

              <div className="p-5 space-y-5">
                {/* RPM lift */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">Avg RPM Lift — Publisher Network</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-[40px] font-black tabular-nums leading-none" style={{ background: "linear-gradient(135deg, #60A5FA, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {STATS.rpmLift}
                    </p>
                    <span className="text-[12px] text-brand-green font-bold ml-1">vs prior setup</span>
                  </div>
                </div>

                {/* Live impression feed */}
                <div className="space-y-2">
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Live Impression Feed</p>
                  {LIVE_DATA.map((row, i) => (
                    <motion.div key={row.label}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl"
                      style={{ background: "rgba(7,17,47,0.04)", border: "1px solid rgba(7,17,47,0.06)" }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.dot}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-text-secondary">{row.label}</p>
                        <p className="text-[9px] text-text-muted">{row.winner}</p>
                      </div>
                      <span className="text-[13px] font-bold text-text-primary tabular-nums">{row.cpm}</span>
                    </motion.div>
                  ))}
                </div>

                {/* MCM status */}
                <div className="flex items-center gap-3 p-3 rounded-2xl" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.14)" }}>
                  <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">Google Certified MCM Partner</p>
                    <p className="text-[10px] text-text-muted">Full AdX demand pool access · 250+ publishers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-blue/20 text-xs font-semibold tracking-widest uppercase text-brand-blue">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Google AdX Access
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Get Off AdSense.{" "}
              <span className="text-gradient-brand">Start Earning AdX Revenue.</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 250+ publishers accessing the full Google AdX demand pool through Click Dudes' certified MCM partnership. Premium CPMs, programmatic direct deals, and zero setup fees.
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
                Get Google AdX Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-blue/25 transition-all duration-300">
                AdX Eligibility Check
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
