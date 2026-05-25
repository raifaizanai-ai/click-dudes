"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Users, Award, Zap, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const METRICS = [
  { label: "eCPM Uplift",    end: 38,   suffix: "%", prefix: "+", color: "text-brand-purple", bg: "bg-brand-purple/[0.07]", border: "rgba(139,92,246,0.14)" },
  { label: "Avg ARPDAU",     end: 0.24, suffix: "",  prefix: "$", color: "text-brand-blue",   bg: "bg-brand-blue/[0.06]",   border: "rgba(96,165,250,0.14)",  decimals: 2 },
  { label: "Fill Rate",      end: 96.8, suffix: "%", prefix: "",  color: "text-brand-green",  bg: "bg-brand-green/[0.06]",  border: "rgba(16,185,129,0.14)", decimals: 1 },
  { label: "Revenue Growth", end: 74,   suffix: "%", prefix: "+", color: "text-brand-violet", bg: "bg-brand-violet/[0.07]", border: "rgba(168,85,247,0.14)" },
]

const WHY_ITEMS = [
  {
    icon: Award, title: "Certified AdMob & AdX Partner",
    body: "Premium Google demand access that non-certified integrations simply don't get.",
    accent: "text-brand-purple", iconBg: "bg-brand-purple/10",
  },
  {
    icon: Zap, title: "Sub-300ms In-App Bidding",
    body: "Auction completes before users notice — zero UX impact, maximum revenue.",
    accent: "text-brand-blue", iconBg: "bg-brand-blue/10",
  },
  {
    icon: BarChart3, title: "Format Mix AI",
    body: "Proprietary models predict ARPDAU impact before deploying any change.",
    accent: "text-brand-purple", iconBg: "bg-brand-purple/10",
  },
  {
    icon: Users, title: "Dedicated App Monetization Manager",
    body: "Mobile ad-tech specialists who've worked with top-100 grossing apps.",
    accent: "text-brand-green", iconBg: "bg-brand-green/10",
  },
]

const DASHBOARD_BARS = [
  { label: "Rewarded",    pct: 88, color: "bg-gradient-to-r from-brand-purple to-brand-violet" },
  { label: "Interstitial",pct: 72, color: "bg-gradient-to-r from-brand-blue to-brand-purple"   },
  { label: "Native",      pct: 56, color: "bg-gradient-to-r from-brand-purple to-brand-cyan"   },
  { label: "Banner",      pct: 28, color: "bg-gradient-to-r from-brand-green to-brand-cyan"    },
]

const barVariants = {
  hidden:  { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AppGrowthSection() {
  return (
    <Section background="base" padding="xl" aria-label="App Revenue Growth">
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

          {/* Left: analytics dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {METRICS.map(({ label, end, suffix, prefix, color, bg, border, decimals = 0 }) => (
                <div key={label} className={`rounded-2xl p-4 ${bg}`}
                  style={{ border: `1px solid ${border}` }}>
                  <p className="text-[10px] text-text-muted mb-1 font-medium">{label}</p>
                  <p className={`text-[22px] font-black tabular-nums ${color} leading-none`}>
                    {prefix}<CountUp end={end} decimals={decimals} suffix={suffix} duration={2.2} />
                  </p>
                </div>
              ))}
            </div>

            {/* Dashboard card */}
            <div className="glass-dark rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(139,92,246,0.14)", boxShadow: "0 20px 60px rgba(7,17,47,0.08)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.08]">
                <div>
                  <p className="text-[12px] font-bold text-text-primary">ARPDAU Analytics</p>
                  <p className="text-[10px] text-text-muted">Format performance breakdown</p>
                </div>
                <LiveDot color="purple" size="sm" label="Live" />
              </div>

              <div className="p-5 space-y-3">
                {DASHBOARD_BARS.map(({ label, pct, color }, i) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[11px] text-text-secondary">{label}</span>
                      <span className="text-[11px] font-bold text-text-primary">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-brand-purple/[0.05] overflow-hidden">
                      <motion.div custom={i} variants={barVariants} initial="hidden"
                        whileInView="visible" viewport={{ once: true }}
                        className={`h-full rounded-full ${color} origin-left`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                {[
                  { l: "Networks", v: "12+",  c: "text-brand-purple" },
                  { l: "eCPM Lift", v: "38%", c: "text-brand-purple" },
                  { l: "Bid Speed", v: "<300ms", c: "text-brand-green" },
                ].map(({ l, v, c }) => (
                  <div key={l} className="rounded-xl p-2.5 text-center bg-brand-purple/[0.04] border border-brand-purple/[0.08]">
                    <p className={`text-[12px] font-bold ${c} tabular-nums`}>{v}</p>
                    <p className="text-[9px] text-text-muted mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: copy + why us */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
                <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                Why Click Dudes
              </span>
              <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
                App Monetization{" "}
                <span className="text-gradient-violet">Done Right</span>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed text-pretty">
                Purpose-built for app publishers who want enterprise-grade monetization without the enterprise-grade complexity. Our mobile specialists have managed top-100 grossing apps.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {WHY_ITEMS.map(({ icon: Icon, title, body, accent, iconBg }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 glass-dark rounded-2xl p-4"
                  style={{ border: "1px solid rgba(139,92,246,0.10)" }}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon className={`w-4 h-4 ${accent}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`text-[13px] font-bold ${accent} mb-1`}>{title}</p>
                    <p className="text-[12px] text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compliance checklist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-4"
              style={{ border: "1px solid rgba(139,92,246,0.12)" }}
            >
              <p className="text-[11px] font-bold text-text-primary mb-3">Managed Compliance</p>
              <div className="flex flex-col gap-2">
                {["ATT & iOS Privacy handled", "GDPR / COPPA compliance maintained", "Policy updates managed automatically"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
                    <span className="text-[12px] text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
