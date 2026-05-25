"use client"

import { motion } from "framer-motion"
import { Tv2, Layers, BarChart3, TrendingUp, Monitor, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STEPS = [
  {
    icon: Tv2, title: "CTV Inventory Audit", duration: "Day 1–3",
    color: "text-brand-violet", border: "rgba(168,85,247,0.22)", glow: "rgba(168,85,247,0.14)",
    body: "We analyze your streaming platform, existing ad stack, content categories, and audience demographics to build a monetization strategy specific to your CTV property.",
  },
  {
    icon: Layers, title: "SSAI Setup", duration: "Day 4–10",
    color: "text-brand-purple", border: "rgba(139,92,246,0.22)", glow: "rgba(139,92,246,0.14)",
    body: "Deploy server-side ad insertion pipeline, configure VAST/VMAP compliance, connect demand partners, and establish pod and separation rules — fully managed.",
  },
  {
    icon: BarChart3, title: "Demand Onboarding", duration: "Day 11–21",
    color: "text-brand-blue", border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)",
    body: "Negotiate and activate programmatic direct deals and PMP packages with premium CTV advertisers matched to your content vertical and audience demographics.",
  },
  {
    icon: TrendingUp, title: "Revenue Maximization", duration: "Day 22+",
    color: "text-brand-purple", border: "rgba(103,232,249,0.22)", glow: "rgba(103,232,249,0.14)",
    body: "Ongoing CPM floor optimization, new advertiser deal development, and seasonal campaign activation compound CTV revenue month over month.",
  },
]

const AD_BREAKS = [
  { label: "Pre-Roll",   cpm: "$28.40", completion: 97, dotColor: "bg-brand-violet" },
  { label: "Mid-Roll",   cpm: "$31.20", completion: 94, dotColor: "bg-brand-purple" },
  { label: "Post-Roll",  cpm: "$22.80", completion: 88, dotColor: "bg-brand-blue"   },
  { label: "Companion",  cpm: "$18.50", completion: 96, dotColor: "bg-brand-cyan"   },
]

const stepVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function CtvMonetizationProcessSection() {
  return (
    <Section background="navy" padding="lg" aria-label="CTV Setup Process">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[400px] rounded-full bg-brand-violet/[0.10] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-violet/25 text-xs font-semibold tracking-widest uppercase text-brand-violet">
            Integration Process
          </span>
          <h2 className="font-bold text-text-primary tracking-heading text-balance text-h3 sm:text-h2 lg:text-h1" style={{ letterSpacing: "-0.025em" }}>
            CTV Stack Live in 21 Days,{" "}
            <span className="text-gradient-brand">Premium Deals in 30</span>
          </h2>
          <p className="text-text-secondary text-body-lg leading-relaxed max-w-xl text-pretty">
            From SSAI infrastructure setup to premium advertiser onboarding — we handle every layer of your CTV monetization stack.
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

          {/* Right: CTV streaming dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-3xl border border-brand-violet/[0.20] overflow-hidden"
              style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.08), 0 0 40px rgba(168,85,247,0.08)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.09]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center">
                    <Monitor className="w-3.5 h-3.5 text-brand-violet" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">CTV Revenue Console</p>
                    <p className="text-[10px] text-text-muted">Streaming CPM intelligence</p>
                  </div>
                </div>
                <LiveDot color="purple" size="sm" label="LIVE" />
              </div>

              {/* Average CPM */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold mb-1">Average CTV CPM</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] text-text-secondary">$</span>
                  <p className="text-[36px] font-black tabular-nums text-brand-violet leading-none">
                    <CountUp end={28} duration={2.2} />
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-brand-green font-bold">↑ 44% CPM lift</span>
                    <span className="text-[9px] text-text-muted">vs open auction</span>
                  </div>
                </div>
              </div>

              {/* Ad break CPM table */}
              <div className="px-5 pb-4 space-y-2">
                <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Ad Break Performance</p>
                {AD_BREAKS.map((b, i) => (
                  <motion.div key={b.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.07]"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${b.dotColor}`} />
                    <span className="text-[11px] text-text-secondary flex-1">{b.label}</span>
                    <span className="text-[11px] font-bold text-text-primary tabular-nums">{b.cpm}</span>
                    <span className="text-[9px] text-text-muted">{b.completion}% VCR</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { label: "Avg CPM",     end: 28,   suffix: "$",  color: "text-brand-violet", prefix: true },
                  { label: "VCR",         end: 97,   suffix: "%",  color: "text-brand-purple"   },
                  { label: "CPM Uplift",  end: 44,   suffix: "%",  color: "text-brand-green"  },
                ].map(({ label, end, suffix, color, prefix }) => (
                  <div key={label} className="rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.08] p-3 text-center">
                    <p className={`text-[14px] font-bold tabular-nums ${color}`}>
                      {prefix && suffix}<CountUp end={end} suffix={prefix ? "" : suffix} duration={2.2} />
                    </p>
                    <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.08] bg-brand-purple/[0.02]">
                <Zap className="w-3.5 h-3.5 text-brand-violet shrink-0" aria-hidden="true" />
                <p className="text-[11px] text-text-secondary">
                  <span className="font-bold text-brand-violet">SSAI active</span> · Broadcast-quality insertion · 99.9% uptime SLA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
