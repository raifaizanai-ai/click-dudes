"use client"

import { motion } from "framer-motion"
import { Globe, Layers, BarChart3, TrendingUp, Zap, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: Globe, title: "Site Audit", duration: "Day 1–2",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "We review your traffic, content, ad placement layout, and existing revenue baseline to identify the highest-yield optimization opportunities.",
  },
  {
    icon: Layers, title: "Ad Stack Setup", duration: "Day 3–7",
    color: "text-brand-blue", border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)",
    body: "We configure GAM, deploy header bidding wrappers, integrate demand partners, and establish price floor baselines — zero developer effort required.",
  },
  {
    icon: BarChart3, title: "Calibration Phase", duration: "Day 8–21",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "AI models train on your specific traffic patterns. Floor prices, bid density, and timeout settings are tuned for maximum yield over the first 14 days.",
  },
  {
    icon: TrendingUp, title: "Scale & Optimize", duration: "Day 22+",
    color: "text-brand-green", border: "rgba(16,185,129,0.22)", glow: "rgba(16,185,129,0.14)",
    body: "Ongoing A/B testing, new demand partner onboarding, and seasonal CPM adjustments ensure revenue continues to grow month over month.",
  },
]

const PARTNERS = [
  { label: "Google AdX",     dot: "bg-brand-blue"   },
  { label: "OpenX",          dot: "bg-brand-cyan"   },
  { label: "Magnite",        dot: "bg-brand-purple" },
  { label: "Index Exchange", dot: "bg-brand-green"  },
  { label: "PubMatic",       dot: "bg-brand-violet" },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function WebMonetizationProcessSection() {
  return (
    <Section background="navy" padding="lg" aria-label="Integration Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[400px] rounded-full bg-brand-purple/[0.10] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand-blue/[0.06] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        {/* Section header — white text for navy bg */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-purple/25 text-xs font-semibold tracking-widest uppercase text-brand-purple">
            Integration Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            Live in 7–14 Days,{" "}
            <span className="text-gradient-brand">Optimized in 30</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            Our managed integration means your team doesn't write a single line of code. We configure everything — then hand you a dashboard and a dedicated manager.
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

          {/* Right: Demand ecosystem panel */}
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
                    <Zap className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">Demand Ecosystem</p>
                    <p className="text-[10px] text-text-muted">15+ SSPs competing for your inventory</p>
                  </div>
                </div>
                <LiveDot color="green" size="sm" label="LIVE" />
              </div>

              {/* Flow visualization */}
              <div className="px-5 py-6 flex items-center gap-3">
                <div className="shrink-0 flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full border border-brand-blue/40 bg-brand-blue/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <p className="text-[8px] text-text-muted text-center font-medium">Your<br />Traffic</p>
                </div>

                <div className="flex-1 flex items-center gap-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30" />
                  <ArrowRight className="w-3 h-3 text-brand-purple/50 shrink-0" aria-hidden="true" />
                </div>

                <div className="shrink-0 flex flex-col items-center gap-1.5">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-brand-purple/50 bg-brand-purple/15 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0 0 rgba(139,92,246,0.35)", "0 0 0 10px rgba(139,92,246,0)", "0 0 0 0 rgba(139,92,246,0)"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  >
                    <Zap className="w-6 h-6 text-brand-purple" aria-hidden="true" />
                  </motion.div>
                  <p className="text-[8px] text-brand-purple font-bold text-center">Platform</p>
                </div>

                <div className="flex-1 flex items-center gap-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-purple/30 to-transparent" />
                  <ArrowRight className="w-3 h-3 text-brand-purple/40 shrink-0" aria-hidden="true" />
                </div>

                <div className="shrink-0 flex flex-col gap-2">
                  {PARTNERS.map((p) => (
                    <div key={p.label} className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      <span className="text-[10px] text-text-secondary font-medium">{p.label}</span>
                    </div>
                  ))}
                  <p className="text-[9px] text-text-muted pl-3">+ 10 more SSPs</p>
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "Demand Partners", end: 15,  suffix: "+",  color: "text-brand-purple" },
                  { label: "Avg RPM Lift",    end: 41,  suffix: "%",  color: "text-brand-purple"   },
                  { label: "Auction Speed",   end: 200, suffix: "ms", color: "text-brand-green"  },
                ].map(({ label, end, suffix, color }) => (
                  <div key={label} className="rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.08] p-3 text-center">
                    <p className={`text-[14px] font-bold tabular-nums ${color}`}>
                      <CountUp end={end} suffix={suffix} duration={2.2} />
                    </p>
                    <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
