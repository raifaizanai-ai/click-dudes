"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Smartphone, Monitor } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TRAFFIC_BARS = [22, 28, 24, 34, 30, 44, 40, 56, 62, 78, 88, 100]
const MOBILE_BARS  = [30, 42, 36, 52, 44, 64, 58, 72, 82, 90, 96, 100]
const CTV_BARS     = [18, 28, 32, 46, 40, 58, 50, 70, 76, 86, 92, 100]

const WINDOWS = [
  {
    icon: Globe,
    label: "Web Publisher",
    category: "News & Media",
    color: "text-brand-blue",
    accent: "rgba(96,165,250,0.14)",
    border: "rgba(96,165,250,0.22)",
    glow: "rgba(96,165,250,0.10)",
    metrics: [
      { label: "RPM Uplift",   end: 38,   suffix: "%",  color: "text-brand-blue" },
      { label: "Fill Rate",    end: 96.1, suffix: "%",  color: "text-brand-purple", decimals: 1 },
      { label: "Monthly Gain", end: 22,   prefix: "+$", suffix: "K", color: "text-brand-green" },
    ],
    bars: TRAFFIC_BARS,
    barColor: "from-brand-blue/60 to-brand-cyan/40",
    timeframe: "90 days · Example result",
    dotColor: "blue" as const,
  },
  {
    icon: Smartphone,
    label: "App Publisher",
    category: "Mobile Gaming",
    color: "text-brand-purple",
    accent: "rgba(139,92,246,0.14)",
    border: "rgba(139,92,246,0.22)",
    glow: "rgba(139,92,246,0.10)",
    metrics: [
      { label: "RPM Uplift",   end: 45,   suffix: "%",  color: "text-brand-purple" },
      { label: "Avg eCPM",     end: 9.82, prefix: "$",  suffix: "",  color: "text-brand-violet", decimals: 2 },
      { label: "Revenue Lift", end: 28,   prefix: "+$", suffix: "K", color: "text-brand-green" },
    ],
    bars: MOBILE_BARS,
    barColor: "from-brand-purple/60 to-brand-violet/40",
    timeframe: "60 days · Example result",
    dotColor: "purple" as const,
  },
  {
    icon: Monitor,
    label: "CTV Publisher",
    category: "Streaming Network",
    color: "text-brand-violet",
    accent: "rgba(168,85,247,0.14)",
    border: "rgba(168,85,247,0.22)",
    glow: "rgba(168,85,247,0.10)",
    metrics: [
      { label: "Avg CPM",    end: 14.5, prefix: "$",  suffix: "",   color: "text-brand-violet", decimals: 1 },
      { label: "Fill Rate",  end: 89.4, suffix: "%",  suffix2: "",  color: "text-brand-purple", decimals: 1 },
      { label: "CPM Uplift", end: 52,   suffix: "%",  color: "text-brand-green" },
    ],
    bars: CTV_BARS,
    barColor: "from-brand-violet/60 to-brand-purple/40",
    timeframe: "90 days · Example result",
    dotColor: "cyan" as const,
  },
]

export function SuccessStoriesSection() {
  return (
    <Section background="white" padding="lg" aria-label="Publisher Analytics Intelligence">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-0 w-[400px] h-[350px] rounded-full bg-brand-blue/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[300px] rounded-full bg-brand-purple/[0.05] blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <SectionHeader
          badge="Publisher Intelligence"
          heading={<>Real Numbers.<br /><span className="text-gradient-brand">Real Publishers.</span></>}
          subtext="These aren't best-case projections. They're typical outcomes from publishers who switched their ad stack to Click Dudes."
          align="center"
          subtextWidth="md"
        />

        {/* Floating analytics windows — staggered depth layout */}
        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-8">
          {WINDOWS.map((win, i) => (
            <motion.div key={win.category}
              initial={{ opacity: 0, y: 32 + i * 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="glass rounded-3xl overflow-hidden border"
              style={{
                borderColor: win.border,
                boxShadow: `0 8px 40px ${win.glow}, 0 24px 64px rgba(7,17,47,0.06)`,
                marginTop: i === 1 ? "20px" : i === 2 ? "10px" : 0,
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: win.border, background: win.accent }}>
                <div className="flex items-center gap-2">
                  <win.icon className={`w-4 h-4 ${win.color}`} aria-hidden="true" />
                  <div>
                    <p className="text-[12px] font-bold text-text-primary">{win.category}</p>
                    <p className={`text-[10px] ${win.color} font-semibold`}>{win.label}</p>
                  </div>
                </div>
                <LiveDot color={win.dotColor} size="sm" label="" />
              </div>

              <div className="p-4 space-y-4">
                {/* Revenue chart */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <TrendingUp className={`w-3 h-3 ${win.color}`} aria-hidden="true" />
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Revenue Growth</p>
                  </div>
                  <div className="flex items-end gap-[3px] h-10">
                    {win.bars.map((v, bi) => (
                      <motion.div key={bi}
                        className={`flex-1 rounded-sm bg-gradient-to-t ${win.barColor}`}
                        style={{ height: `${(v / 100) * 40}px`, opacity: 0.3 + (bi / win.bars.length) * 0.7, transformOrigin: "bottom" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + bi * 0.03, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {win.metrics.map(({ label, end, prefix, suffix, color, decimals }) => (
                    <div key={label} className="text-center rounded-xl py-2.5 px-1"
                      style={{ background: win.accent }}>
                      <p className={`text-[14px] font-bold tabular-nums ${color}`}>
                        {prefix}<CountUp end={end} suffix={suffix ?? ""} decimals={decimals} duration={2.2} />
                      </p>
                      <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[9px] text-text-muted text-center">{win.timeframe}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          * Illustrative examples. Actual publisher results vary based on traffic quality, geography, and inventory type.
        </p>
      </Container>
    </Section>
  )
}
