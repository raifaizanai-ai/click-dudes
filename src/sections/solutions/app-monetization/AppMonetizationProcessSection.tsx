"use client"

import { motion } from "framer-motion"
import { Smartphone, Layers, BarChart3, TrendingUp, Play, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: Smartphone, title: "App Audit", duration: "Day 1–2",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "Review of current mediation setup, format mix, eCPM benchmarks, and compliance status to identify the highest-impact optimization opportunities.",
  },
  {
    icon: Layers, title: "SDK Integration", duration: "Day 3–7",
    color: "text-brand-blue", border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)",
    body: "Lightweight SDK deployment with in-app bidding configuration, demand network onboarding, and consent management setup, minimal developer effort.",
  },
  {
    icon: BarChart3, title: "Format Calibration", duration: "Day 8–21",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "AI optimizes rewarded video frequency, interstitial timing, and native placement based on your session data and retention curves.",
  },
  {
    icon: TrendingUp, title: "ARPDAU Growth", duration: "Day 22+",
    color: "text-brand-green", border: "rgba(16,185,129,0.22)", glow: "rgba(16,185,129,0.14)",
    body: "Continuous testing of new demand partners, format experiments, and seasonal floor adjustments compounds revenue growth month over month.",
  },
]

const FORMATS = [
  { label: "Rewarded Video", ecpm: "$12.40", fill: 94,  color: "bg-brand-purple", width: "w-[94%]",  textColor: "text-brand-purple" },
  { label: "Interstitial",   ecpm: "$8.80",  fill: 89,  color: "bg-brand-blue",   width: "w-[89%]",  textColor: "text-brand-blue"   },
  { label: "Native Ads",     ecpm: "$4.20",  fill: 96,  color: "bg-brand-cyan",   width: "w-[96%]",  textColor: "text-brand-purple"   },
  { label: "Banner",         ecpm: "$1.60",  fill: 98,  color: "bg-brand-green",  width: "w-[98%]",  textColor: "text-brand-green"  },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const barVariants = {
  hidden:  { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AppMonetizationProcessSection() {
  return (
    <Section background="navy" padding="lg" aria-label="SDK Integration Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[400px] rounded-full bg-brand-purple/[0.10] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-brand-cyan/[0.06] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-purple/25 text-xs font-semibold tracking-widest uppercase text-brand-purple">
            Integration Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            SDK Live in 2–7 days,{" "}
            <span className="text-gradient-brand">ARPDAU Growing in 30</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            Minimal developer effort. Our team handles SDK configuration, network onboarding, and compliance setup, you focus on your app.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* Left: Process steps */}
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <motion.div key={step.title} custom={i} variants={stepVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-4 glass-dark rounded-2xl p-4 border"
                style={{ borderColor: step.border, boxShadow: `0 6px 24px ${step.glow}` }}
              >
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: step.glow }}>
                    <step.icon className={`w-4 h-4 ${step.color}`} aria-hidden="true" />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px h-3" style={{ background: `linear-gradient(to bottom, ${step.border}, transparent)` }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-[13px] font-bold ${step.color}`}>{step.title}</h3>
                    <span className="text-[10px] text-text-muted bg-brand-purple/[0.04] px-2 py-0.5 rounded-full border border-brand-purple/[0.08]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: App revenue dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-3xl border border-brand-purple/[0.18] overflow-hidden"
              style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.08), 0 0 40px rgba(139,92,246,0.08)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.09]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">App Revenue Dashboard</p>
                    <p className="text-[10px] text-text-muted">Format performance · real-time</p>
                  </div>
                </div>
                <LiveDot color="purple" size="sm" label="ACTIVE" />
              </div>

              {/* ARPDAU counter */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">Today's ARPDAU</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[11px] text-text-secondary">$</span>
                  <p className="text-[32px] font-black tabular-nums text-brand-purple leading-none">
                    <CountUp end={0.24} decimals={2} duration={2.2} />
                  </p>
                  <span className="text-[11px] text-brand-green font-bold ml-1">↑ 38%</span>
                </div>
              </div>

              {/* Format breakdown */}
              <div className="px-5 pb-5 space-y-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Ad Format Performance</p>
                {FORMATS.map((f, i) => (
                  <div key={f.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-text-secondary">{f.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold tabular-nums ${f.textColor}`}>{f.ecpm}</span>
                        <span className="text-[9px] text-text-muted">{f.fill}% fill</span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-brand-purple/[0.06] overflow-hidden">
                      <motion.div custom={i} variants={barVariants} initial="hidden" whileInView="visible"
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${f.color} origin-left`}
                        style={{ width: f.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Metric footer */}
              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "Networks",    end: 12,   suffix: "+", color: "text-brand-purple" },
                  { label: "eCPM Lift",   end: 38,   suffix: "%", color: "text-brand-purple"   },
                  { label: "Bid Speed",   end: 300,  suffix: "ms",color: "text-brand-green"  },
                ].map(({ label, end, suffix, color }) => (
                  <div key={label} className="rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.08] p-3 text-center">
                    <p className={`text-[13px] font-bold tabular-nums ${color}`}>
                      <CountUp end={end} suffix={suffix} duration={2.2} />
                    </p>
                    <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.08] bg-brand-purple/[0.02]">
                <Zap className="w-3.5 h-3.5 text-brand-purple shrink-0" aria-hidden="true" />
                <p className="text-[11px] text-text-secondary">
                  <span className="font-bold text-brand-purple">In-app bidding active</span> · Sub-300ms auction · 12+ DSPs competing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
