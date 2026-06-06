"use client"

import { motion } from "framer-motion"
import { BarChart3, Layers, Zap, TrendingUp, LayoutDashboard } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: BarChart3, title: "AdSense Audit", duration: "Day 1–2",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "Full review of your current placement configuration, RPM performance, viewability metrics, Core Web Vitals scores, and policy compliance status.",
  },
  {
    icon: Layers, title: "Layout Redesign", duration: "Day 3–7",
    color: "text-brand-blue", border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)",
    body: "We redesign your ad unit placement, sizes, and format mix based on your content template and audience behavior — with measurable RPM improvement targets.",
  },
  {
    icon: Zap, title: "A/B Testing Phase", duration: "Day 8–21",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "Systematic testing of placement variations, format combinations, and density configurations. Statistical significance gates all changes before permanent deployment.",
  },
  {
    icon: TrendingUp, title: "Compound Optimization", duration: "Month 2+",
    color: "text-brand-green", border: "rgba(16,185,129,0.22)", glow: "rgba(16,185,129,0.14)",
    body: "Ongoing quarterly audits, policy compliance monitoring, and upgrade planning, including readiness assessment for AdX migration when the time is right.",
  },
]

const AB_VARIANTS = [
  { label: "Variant A, Top leaderboard",  rpm: "$4.20", viewability: 74, winner: false, color: "text-brand-blue",   bar: "bg-brand-blue" },
  { label: "Variant B, In-content 2x",    rpm: "$6.80", viewability: 88, winner: true,  color: "text-brand-green",  bar: "bg-brand-green" },
  { label: "Variant C, Sidebar sticky",   rpm: "$5.10", viewability: 81, winner: false, color: "text-brand-purple", bar: "bg-brand-purple" },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdsenseProcessSection() {
  return (
    <Section background="section" padding="lg" aria-label="AdSense Optimization Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[400px] h-[350px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[300px] rounded-full bg-brand-blue/[0.05] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
            Optimization Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            Optimized in 2–7 days,{" "}
            <span className="text-gradient-brand">Compounding in 30</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            Data-driven AdSense optimization that improves RPM without sacrificing user experience or putting your account at risk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* Left: Process steps */}
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <motion.div key={step.title} custom={i} variants={stepVariants}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-4 glass rounded-2xl p-4 border"
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
                    <span className="text-[10px] text-text-muted bg-brand-purple/[0.06] px-2 py-0.5 rounded-full border border-brand-purple/[0.10]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: A/B test panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-strong rounded-3xl border border-brand-purple/[0.16] overflow-hidden"
              style={{ boxShadow: "0 24px 80px rgba(139,92,246,0.10), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10]"
                style={{ background: "rgba(139,92,246,0.04)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                    <LayoutDashboard className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">A/B Placement Test</p>
                    <p className="text-[10px] text-text-muted">Layout optimization engine</p>
                  </div>
                </div>
                <LiveDot color="green" size="sm" label="TESTING" />
              </div>

              {/* RPM counter */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">Optimized Page RPM</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[11px] text-text-muted">$</span>
                  <p className="text-[32px] font-black tabular-nums text-gradient-brand leading-none">
                    <CountUp end={6.80} decimals={2} duration={2.2} />
                  </p>
                  <span className="text-[11px] text-brand-green font-bold ml-1">↑ 62% vs baseline</span>
                </div>
              </div>

              {/* A/B variants */}
              <div className="px-5 pb-4 space-y-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Layout Variants Tested</p>
                {AB_VARIANTS.map((v, i) => (
                  <motion.div key={v.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  >
                    <div className={`flex items-center gap-2 mb-1.5 p-2.5 rounded-xl ${v.winner ? "bg-brand-green/[0.06] border border-brand-green/[0.14]" : "bg-black/[0.03] border border-black/[0.04]"}`}>
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${v.bar}`} />
                      <span className="text-[10px] text-text-secondary flex-1 leading-tight">{v.label}</span>
                      <span className={`text-[12px] font-bold tabular-nums ${v.color}`}>{v.rpm} RPM</span>
                      {v.winner && <span className="text-[9px] text-brand-green font-bold">BEST</span>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "RPM Lift",    end: 62,   suffix: "%",  color: "text-brand-purple" },
                  { label: "Viewability", end: 84,   suffix: "%",  color: "text-brand-blue"   },
                  { label: "Avg CTR",     end: 2.8,  suffix: "%",  color: "text-brand-green", decimals: 1 },
                ].map(({ label, end, suffix, color, decimals }) => (
                  <div key={label} className="rounded-xl p-3 text-center" style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.10)" }}>
                    <p className={`text-[14px] font-bold tabular-nums ${color}`}>
                      <CountUp end={end} suffix={suffix} duration={2.2} decimals={decimals} />
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
