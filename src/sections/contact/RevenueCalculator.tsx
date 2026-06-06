"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, ArrowRight, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const REVENUE_STEPS = [100, 500, 1000, 2500, 5000, 10000, 25000, 50000]
const TRAFFIC_STEPS = [10000, 50000, 100000, 250000, 500000, 1000000, 2500000]
const LIFT = 0.32

function fmtCurrency(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`
  return `$${n}`
}

function fmtTraffic(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`
  return `${n}`
}

const CARD_SHADOW = "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)"

export function RevenueCalculator() {
  const [revIdx, setRevIdx]         = useState(2)
  const [trafficIdx, setTrafficIdx] = useState(2)

  const currentRevenue = REVENUE_STEPS[revIdx]
  const traffic        = TRAFFIC_STEPS[trafficIdx]

  const { estimatedRevenue, monthlyLift, currentRPM, estimatedRPM } = useMemo(() => {
    const estimated    = Math.round(currentRevenue * (1 + LIFT))
    const lift         = estimated - currentRevenue
    const curRPM       = (currentRevenue / traffic) * 1000
    const estRPM       = curRPM * (1 + LIFT)
    return { estimatedRevenue: estimated, monthlyLift: lift, currentRPM: curRPM, estimatedRPM: estRPM }
  }, [currentRevenue, traffic])

  return (
    <Section background="section" padding="xl" aria-label="Revenue share calculator">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="-top-32 left-1/2" />
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">Revenue Calculator</span>
          <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
            Estimate Your{" "}<GradientText gradient="brand">Revenue Potential</GradientText>
          </h2>
          <p className="text-sm text-text-secondary mt-3 max-w-lg mx-auto">
            See how much additional revenue you could unlock with Click Dudes. Based on average publisher results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Controls */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]" style={{ boxShadow: CARD_SHADOW }}>
            <h3 className="text-sm font-bold text-text-primary mb-6">Your Current Numbers</h3>

            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest">Monthly Revenue</label>
                <span className="text-base font-bold text-brand-purple">{fmtCurrency(currentRevenue)}</span>
              </div>
              <input type="range" min={0} max={REVENUE_STEPS.length - 1} value={revIdx}
                onChange={e => setRevIdx(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-purple"
                style={{ background: `linear-gradient(to right, #8B5CF6 ${(revIdx / (REVENUE_STEPS.length - 1)) * 100}%, rgba(139,92,246,0.15) ${(revIdx / (REVENUE_STEPS.length - 1)) * 100}%)` }}
                aria-label="Monthly revenue"
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-text-muted">{fmtCurrency(REVENUE_STEPS[0])}</span>
                <span className="text-[10px] text-text-muted">{fmtCurrency(REVENUE_STEPS[REVENUE_STEPS.length - 1])}</span>
              </div>
            </div>

            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest">Monthly Pageviews</label>
                <span className="text-base font-bold text-brand-blue">{fmtTraffic(traffic)}</span>
              </div>
              <input type="range" min={0} max={TRAFFIC_STEPS.length - 1} value={trafficIdx}
                onChange={e => setTrafficIdx(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-blue"
                style={{ background: `linear-gradient(to right, #60A5FA ${(trafficIdx / (TRAFFIC_STEPS.length - 1)) * 100}%, rgba(96,165,250,0.15) ${(trafficIdx / (TRAFFIC_STEPS.length - 1)) * 100}%)` }}
                aria-label="Monthly pageviews"
              />
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-text-muted">{fmtTraffic(TRAFFIC_STEPS[0])}</span>
                <span className="text-[10px] text-text-muted">{fmtTraffic(TRAFFIC_STEPS[TRAFFIC_STEPS.length - 1])}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-purple/5 border border-brand-purple/10">
              <Zap aria-hidden="true" className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary leading-relaxed">
                Based on our average +25–40% RPM lift across 250+ publishers using Google AdX and Header Bidding.
              </p>
            </div>
          </motion.div>

          {/* Projection */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10] flex flex-col gap-5"
            style={{ boxShadow: CARD_SHADOW }}>
            <h3 className="text-sm font-bold text-text-primary">Revenue Projection</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-subtle rounded-xl p-4 border border-brand-purple/[0.08]">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5">Current Revenue</p>
                <p className="text-2xl font-bold text-text-primary tracking-tight">{fmtCurrency(currentRevenue)}</p>
                <p className="text-xs text-text-muted mt-0.5">per month</p>
              </div>
              <div className="rounded-xl p-4 border border-brand-green/20 bg-brand-green/5">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5">Estimated Revenue</p>
                <motion.p key={estimatedRevenue} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
                  className="text-2xl font-bold text-brand-green tracking-tight">{fmtCurrency(estimatedRevenue)}</motion.p>
                <p className="text-xs text-text-muted mt-0.5">per month</p>
              </div>
              <div className="glass-subtle rounded-xl p-4 border border-brand-blue/[0.10]">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5">RPM Increase</p>
                <p className="text-2xl font-bold text-brand-blue tracking-tight">+32%</p>
                <p className="text-xs text-text-muted mt-0.5">avg RPM lift</p>
              </div>
              <div className="rounded-xl p-4 border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5">Monthly Lift</p>
                <motion.p key={monthlyLift} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
                  className="text-2xl font-bold text-brand-purple tracking-tight">+{fmtCurrency(monthlyLift)}</motion.p>
                <p className="text-xs text-text-muted mt-0.5">additional/mo</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-brand-purple/8 to-brand-blue/5 border border-brand-purple/12">
              <TrendingUp aria-hidden="true" className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-text-primary">AI Recommendation</p>
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                  Google AdX + Header Bidding recommended for your traffic level. Estimated 90-day payback.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a href="/about/contact-us"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60">
                Apply For Monetization
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </a>
              <a href="#contact-form"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-brand-purple glass border border-brand-purple/20 hover:border-brand-purple/35 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
                <DollarSign aria-hidden="true" className="w-4 h-4" />
                Get Exact Estimate
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
