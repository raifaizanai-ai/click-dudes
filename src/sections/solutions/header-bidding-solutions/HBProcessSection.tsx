"use client"

import { motion } from "framer-motion"
import { BarChart3, Layers, Zap, TrendingUp, GitMerge } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: BarChart3, title: "Auction Audit", duration: "Day 1–2",
    color: "text-brand-blue", border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)",
    body: "We analyze your current ad stack, waterfall configuration, SSP relationships, and existing floor logic to identify the highest-impact header bidding opportunities.",
  },
  {
    icon: Layers, title: "Prebid Configuration", duration: "Day 3–7",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "Deploy server-side Prebid.js infrastructure, configure all SSP adapters, establish initial floor logic, and connect your GAM account — zero developer effort.",
  },
  {
    icon: Zap, title: "Latency Optimization", duration: "Day 8–14",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "Tune timeout thresholds, enable bid caching, configure lazy loading and lazy bidding — ensuring your Core Web Vitals improve alongside revenue.",
  },
  {
    icon: TrendingUp, title: "Floor & Yield Growth", duration: "Day 15+",
    color: "text-brand-green", border: "rgba(16,185,129,0.22)", glow: "rgba(16,185,129,0.14)",
    body: "AI price floors calibrate to your specific traffic. New SSPs onboarded quarterly. Ongoing A/B testing compounds revenue growth continuously.",
  },
]

const SSP_NODES = [
  { label: "Google AdX",      cpm: "$8.42",  color: "text-brand-blue",   dot: "bg-brand-blue"   },
  { label: "Index Exchange",  cpm: "$7.90",  color: "text-brand-purple", dot: "bg-brand-purple" },
  { label: "Magnite",         cpm: "$7.15",  color: "text-brand-purple",   dot: "bg-brand-cyan"   },
  { label: "PubMatic",        cpm: "$6.80",  color: "text-brand-green",  dot: "bg-brand-green"  },
  { label: "OpenX",           cpm: "$6.50",  color: "text-brand-violet", dot: "bg-brand-violet" },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function HBProcessSection() {
  return (
    <Section background="navy" padding="lg" aria-label="Header Bidding Integration Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[500px] h-[400px] rounded-full bg-brand-blue/[0.10] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-blue/25 text-xs font-semibold tracking-widest uppercase text-brand-blue">
            Integration Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            Prebid Live in 7 Days,{" "}
            <span className="text-gradient-brand">Revenue Growing in 15</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            Server-side header bidding configured and managed entirely by our team. Your developers write zero code — we handle everything.
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

          {/* Right: Unified auction panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-3xl border border-brand-blue/[0.18] overflow-hidden"
              style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.08), 0 0 40px rgba(96,165,250,0.08)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.09]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
                    <GitMerge className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">Unified Auction Feed</p>
                    <p className="text-[10px] text-text-muted">Real-time SSP bid competition</p>
                  </div>
                </div>
                <LiveDot color="blue" size="sm" label="LIVE" />
              </div>

              {/* Winning bid display */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">Winning Bid — Last Impression</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] text-text-secondary">$</span>
                  <p className="text-[34px] font-black tabular-nums text-brand-blue leading-none">
                    <CountUp end={8.42} decimals={2} duration={2.2} />
                  </p>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-brand-green font-bold">Google AdX wins</span>
                    <span className="text-[9px] text-text-muted">187ms auction time</span>
                  </div>
                </div>
              </div>

              {/* SSP bid ranking */}
              <div className="px-5 pb-4 space-y-2">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">SSP Bid Ranking</p>
                {SSP_NODES.map((ssp, i) => (
                  <motion.div key={ssp.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border ${i === 0 ? "border-brand-blue/25" : "border-brand-purple/[0.06]"}`}
                    style={{ background: i === 0 ? "rgba(96,165,250,0.08)" : "rgba(139,92,246,0.03)" }}
                  >
                    <span className="text-[10px] text-text-muted w-4 tabular-nums">{i + 1}</span>
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${ssp.dot}`} />
                    <span className="text-[11px] text-text-secondary flex-1">{ssp.label}</span>
                    <span className={`text-[12px] font-bold tabular-nums ${ssp.color}`}>{ssp.cpm}</span>
                    {i === 0 && <span className="text-[9px] text-brand-green font-semibold">WINNER</span>}
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "SSP Partners",   end: 15,  suffix: "+",  color: "text-brand-blue"   },
                  { label: "CPM Increase",   end: 47,  suffix: "%",  color: "text-brand-purple" },
                  { label: "Auction Speed",  end: 187, suffix: "ms", color: "text-brand-green"  },
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
