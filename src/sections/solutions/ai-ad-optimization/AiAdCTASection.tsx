"use client"

import { motion } from "framer-motion"
import { ArrowRight, Brain, Sparkles, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const BENEFITS = [
  "Dynamic floor pricing, self-learning, always optimal",
  "Revenue anomaly detection, alerts within 5 minutes",
  "30-day predictive revenue forecasting included",
  "Models improve continuously, 3–5% monthly compound yield",
]

const AI_METRICS = [
  { label: "Floors Updated",  value: "Every 30 min", color: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { label: "Alert Speed",      value: "< 5 min",      color: "text-brand-purple",   glow: "rgba(103,232,249,0.10)" },
  { label: "Prediction Acc.",  value: "98%",           color: "text-brand-green",  glow: "rgba(16,185,129,0.10)" },
  { label: "Training Data",    value: "$200M+",        color: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AiAdCTASection() {
  return (
    <Section background="base" padding="xl" aria-label="Start AI Ad Optimization">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="violet" size="lg" blur="xl" opacity={0.07} className="-top-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: AI intelligence card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-brand-purple/[0.18]"
              style={{ boxShadow: "0 24px 80px rgba(139,92,246,0.14), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.12]"
                style={{ background: "rgba(139,92,246,0.06)" }}>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">AI Yield Intelligence</span>
                </div>
                <LiveDot color="purple" size="sm" label="" />
              </div>

              <div className="p-5 space-y-5">
                {/* AI yield counter */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">AI-Driven Yield Increase</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-[42px] font-black tabular-nums text-gradient-brand leading-none">
                      <CountUp end={28} duration={2.2} />
                      <span className="text-[28px]">%</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-text-muted mt-1">Average across all managed publishers</p>
                </div>

                {/* AI capability cards */}
                <div className="grid grid-cols-2 gap-2">
                  {AI_METRICS.map((m) => (
                    <div key={m.label} className="rounded-xl p-3"
                      style={{ background: m.glow, border: `1px solid ${m.glow.replace("0.10", "0.18")}` }}>
                      <p className={`text-[14px] font-bold tabular-nums ${m.color}`}>{m.value}</p>
                      <p className="text-[10px] text-text-muted mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Daily optimization count */}
                <div className="rounded-2xl p-4" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.12)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    <p className="text-[11px] font-bold text-text-primary">Today's Optimizations</p>
                  </div>
                  <p className="text-[28px] font-black tabular-nums text-gradient-brand">
                    <CountUp end={1247} duration={2.5} />
                  </p>
                  <p className="text-[10px] text-text-muted">autonomous AI adjustments across all publishers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                AI Ad Optimization
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Let AI Optimize{" "}
              <span className="text-gradient-brand">Every Impression</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join publishers whose revenue compounds monthly as Click Dudes' AI learns their audience. Dynamic floors, anomaly detection, and revenue forecasting, all on autopilot.
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                <Brain className="w-4 h-4" aria-hidden="true" />
                Start AI Ad Optimization
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 transition-all duration-300">
                AI Revenue Analysis
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
