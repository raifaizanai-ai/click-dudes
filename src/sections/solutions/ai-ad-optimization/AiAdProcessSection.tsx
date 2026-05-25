"use client"

import { motion } from "framer-motion"
import { BarChart3, BrainCircuit, Zap, TrendingUp, Brain, Activity } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: BarChart3, title: "Baseline Analysis", duration: "Day 1–3",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "AI ingests 90 days of your historical auction data to establish CPM patterns, seasonal curves, and demand profiles — building the training foundation for your personalized model.",
  },
  {
    icon: BrainCircuit, title: "Model Deployment", duration: "Day 4–7",
    color: "text-brand-violet", border: "rgba(168,85,247,0.22)", glow: "rgba(168,85,247,0.14)",
    body: "Customized floor pricing and anomaly detection models go live against your inventory. Initial predictions are conservative — models widen confidence as they observe your specific traffic.",
  },
  {
    icon: Zap, title: "Active Optimization", duration: "Day 8–30",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "AI begins autonomous floor adjustments, anomaly alerting, and A/B test scheduling. You receive weekly AI-generated insights with recommended actions.",
  },
  {
    icon: TrendingUp, title: "Compound Intelligence", duration: "Month 2+",
    color: "text-brand-green", border: "rgba(16,185,129,0.22)", glow: "rgba(16,185,129,0.14)",
    body: "Models improve continuously as they accumulate data on your specific inventory. Yield improvements typically compound 3–5% monthly as prediction accuracy increases.",
  },
]

const LOG_ITEMS = [
  { action: "Floor recalibrated",      detail: "US Desktop → +$0.38",    dot: "bg-brand-green"  },
  { action: "Anomaly detected",        detail: "Fill drop EU · resolved", dot: "bg-brand-purple" },
  { action: "A/B test concluded",      detail: "Layout B wins +12% RPM",  dot: "bg-brand-cyan"   },
  { action: "Forecast generated",      detail: "30-day +$18K projected",  dot: "bg-brand-green"  },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AiAdProcessSection() {
  return (
    <Section background="navy" padding="lg" aria-label="AI Optimization Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[400px] rounded-full bg-brand-purple/[0.12] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand-violet/[0.08] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-purple/25 text-xs font-semibold tracking-widest uppercase text-brand-purple">
            <Brain className="w-3.5 h-3.5" aria-hidden="true" />
            AI Integration Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            AI Live in 7–14 Days,{" "}
            <span className="text-gradient-brand">Compounding for Years</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            Your personalized AI model is trained on your specific inventory, demand patterns, and audience — getting smarter with every impression.
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

          {/* Right: AI Intelligence panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-3xl border border-brand-purple/[0.20] overflow-hidden"
              style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.08), 0 0 40px rgba(139,92,246,0.10)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.09]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
                    <Brain className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">AI Intelligence Center</p>
                    <p className="text-[10px] text-text-muted">Click Dudes AI v4.2 · Active</p>
                  </div>
                </div>
                <LiveDot color="purple" size="sm" label="LEARNING" />
              </div>

              {/* Prediction accuracy */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">AI Prediction Accuracy</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-[36px] font-black tabular-nums text-brand-purple leading-none">
                    <CountUp end={98} duration={2.2} />
                    <span className="text-[24px]">%</span>
                  </p>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-brand-purple font-bold">$200M+ training data</span>
                    <span className="text-[9px] text-text-muted">floor price model</span>
                  </div>
                </div>
              </div>

              {/* AI action log */}
              <div className="px-5 pb-4 space-y-2">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">AI Activity Log — Live</p>
                {LOG_ITEMS.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.07]"
                  >
                    <div className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} style={{ animation: "ping-slow 2s ease-in-out infinite" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-text-primary truncate">{item.action}</p>
                      <p className="text-[9px] text-text-muted">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "AI Yield Lift",    end: 28,   suffix: "%",    color: "text-brand-purple" },
                  { label: "Pred. Accuracy",   end: 98,   suffix: "%",    color: "text-brand-purple"   },
                  { label: "Alert Time",        end: 5,    suffix: " min", color: "text-brand-green"  },
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
                <Activity className="w-3.5 h-3.5 text-brand-purple shrink-0" aria-hidden="true" />
                <p className="text-[11px] text-text-secondary">
                  <span className="font-bold text-brand-purple">
                    <CountUp end={1247} duration={2.5} />
                  </span> optimizations run today across all publishers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
