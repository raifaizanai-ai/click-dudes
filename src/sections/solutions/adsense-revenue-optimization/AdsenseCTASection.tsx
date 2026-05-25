"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Sparkles, CheckCircle2, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const BENEFITS = [
  "Policy-safe optimization — no account risk, no violations",
  "A/B testing of placement, formats, and density scientifically",
  "Core Web Vitals protected — faster pages, better SEO",
  "AdX upgrade pathway — when you're ready, we migrate you",
]

const RPM_WEEKS = [28, 34, 36, 42, 40, 52, 56, 64, 60, 75, 80, 100]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdsenseCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Optimize Your AdSense Revenue">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.09} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="blue" size="lg" blur="xl" opacity={0.06} className="-top-16 right-1/3" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: RPM intelligence card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-brand-purple/[0.14]"
              style={{ boxShadow: "0 24px 80px rgba(139,92,246,0.12), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10]"
                style={{ background: "rgba(139,92,246,0.05)" }}>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">AdSense RPM Intelligence</span>
                </div>
                <LiveDot color="green" size="sm" label="" />
              </div>

              <div className="p-5 space-y-5">
                {/* RPM counter */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">Optimized Page RPM</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[11px] text-text-muted">$</span>
                    <p className="text-[38px] font-black tabular-nums text-gradient-brand leading-none">
                      <CountUp end={6.80} decimals={2} duration={2.2} />
                    </p>
                    <div className="flex flex-col ml-1">
                      <span className="text-[11px] text-brand-green font-bold">↑ 62% RPM lift</span>
                      <span className="text-[9px] text-text-muted">vs baseline AdSense</span>
                    </div>
                  </div>
                </div>

                {/* RPM trend chart */}
                <div>
                  <p className="text-[10px] text-text-muted mb-2 font-medium">RPM Growth — 12 Week Trend</p>
                  <div className="flex items-end gap-1 h-12">
                    {RPM_WEEKS.map((v, i) => (
                      <motion.div key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple/60 to-brand-blue/40"
                        style={{ height: `${(v / 100) * 48}px`, opacity: 0.25 + (i / RPM_WEEKS.length) * 0.75, transformOrigin: "bottom" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[9px] text-text-muted">Week 1</span>
                    <span className="text-[9px] text-brand-purple font-semibold">84% avg viewability</span>
                    <span className="text-[9px] text-text-muted">Week 12</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "RPM Lift",   value: "62%",  color: "text-brand-purple" },
                    { label: "Viewability",value: "84%",  color: "text-brand-blue"   },
                    { label: "CTR",        value: "2.8%", color: "text-brand-green"  },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl p-3 text-center" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.10)" }}>
                      <p className={`text-[14px] font-bold ${color}`}>{value}</p>
                      <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                AdSense Optimization
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Grow Beyond Basic{" "}
              <span className="text-gradient-brand">AdSense Revenue</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 400+ publishers who raised their AdSense RPM with Click Dudes. Optimized placement, compliance audit, and better viewability — without changing a word of content.
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                Optimize My AdSense Revenue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 transition-all duration-300">
                Free RPM Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
