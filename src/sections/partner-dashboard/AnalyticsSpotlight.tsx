"use client"

import { BarChart3, TrendingUp, Wallet, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { RobotImage } from "@/components/shared/RobotImage"
import { FadeUp } from "@/components/motion/FadeUp"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"

interface Metric {
  icon: LucideIcon
  value: number
  suffix?: string
  prefix?: string
  label: string
}

const METRICS: Metric[] = [
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Approval Rate" },
  { icon: BarChart3, value: 4, label: "Publishers Submitted" },
  { icon: TrendingUp, value: 68, suffix: "%", label: "Conversion Rate" },
  { icon: Wallet, prefix: "$", value: 482, label: "Commission Earned" },
]

export function AnalyticsSpotlight() {
  const reducedMotion = useReducedMotion()

  return (
    <Section background="section" padding="lg" aria-label="Your partnership at a glance">
      <Container size="xl" className="flex flex-col gap-10">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              Partnership Insights
            </span>
            <h2 className="text-h3 sm:text-h2 lg:text-h1 font-bold text-text-primary tracking-heading text-balance">
              Know What&apos;s Happening. Without Chasing Updates.
            </h2>
          </div>
        </FadeUp>

        <div className="relative rounded-3xl bg-gradient-navy overflow-hidden p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-brand-purple/20 blur-[100px]" />
          <div aria-hidden="true" className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-cyan/15 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_360px] gap-10 items-start">
            <FadeUp>
              <BrowserFrame screenshot={SCREENSHOTS.analytics} urlLabel="partners.clickdudes.com/analytics" glow="cyan" sizes="900px" />
            </FadeUp>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {METRICS.map((m, i) => (
                  <FadeUp key={m.label} delay={i * 0.06}>
                    <div className="glass-on-navy rounded-2xl p-3.5 flex flex-col gap-1.5">
                      <m.icon aria-hidden="true" className="w-4 h-4 text-brand-cyan" />
                      <CountUp
                        end={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        className="text-xl font-bold text-white tracking-tight"
                      />
                      <span className="text-[11px] text-white/75 leading-tight">{m.label}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.24}>
                <div className="glass-on-navy rounded-2xl p-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/75">Payout Progress</span>
                    <span className="text-[11px] font-semibold text-brand-cyan">64%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                      initial={reducedMotion ? { width: "64%" } : { width: "0%" }}
                      whileInView={{ width: "64%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                </div>
              </FadeUp>

              {/* Data-pulse connector into ClickBot */}
              <div className="relative h-5 flex items-center justify-center" aria-hidden="true">
                <div className="w-px h-full bg-gradient-to-b from-brand-cyan/40 to-brand-purple/40" />
                {!reducedMotion && (
                  <motion.span
                    className="absolute w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(103,232,249,0.8)]"
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </div>

              <FadeUp delay={0.34}>
                <div className="glass-on-navy rounded-2xl p-4 flex items-center gap-3 border border-brand-cyan/[0.25]">
                  <RobotImage variant="analytics" size="xs" glowColor="cyan" />
                  <div>
                    <p className="text-xs font-semibold text-white">ClickBot Insights</p>
                    <p className="text-[11px] text-white/75 leading-snug mt-0.5">
                      Automated notes on account health and opportunities.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
