"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

const BENEFITS = [
  "No setup fees or monthly minimums",
  "Live in 7–14 days — no developer needed",
  "Google Certified MCM partner access",
  "Dedicated publisher manager included",
]

const BAR_HEIGHTS = [30, 42, 38, 55, 48, 70, 62, 85, 80, 100]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function WebMonetizationCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Apply for Web Monetization">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="blue" size="lg" blur="xl" opacity={0.07} className="-bottom-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Revenue preview card */}
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
                  <TrendingUp className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">Revenue Intelligence</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1">
                    <Info className="w-2.5 h-2.5 text-text-muted" aria-hidden="true" />
                    <span className="text-[8px] text-text-muted">Illustrative — aggregate network view</span>
                  </div>
                  <LiveDot color="green" size="sm" label="" />
                </div>
              </div>

              <div className="p-5 space-y-5">
                {/* RPM lift */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">Typical RPM Lift</p>
                  <p className="text-[36px] font-black text-gradient-brand tabular-nums leading-none">
                    {STATS.rpmLift}
                  </p>
                  <p className="text-[11px] text-text-muted mt-1">first 90 days · varies by site</p>
                </div>

                {/* Chart bars */}
                <div>
                  <p className="text-[10px] text-text-muted mb-2 font-medium">RPM Growth Trend</p>
                  <div className="flex items-end gap-1.5 h-12">
                    {BAR_HEIGHTS.map((h, i) => (
                      <motion.div key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple/60 to-brand-cyan/40"
                        style={{ height: `${(h / 100) * 48}px`, opacity: 0.25 + (i / BAR_HEIGHTS.length) * 0.75, transformOrigin: "bottom" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[9px] text-text-muted">Month 1</span>
                    <span className="text-[9px] text-brand-green font-semibold">{STATS.rpmLift} RPM lift</span>
                    <span className="text-[9px] text-text-muted">Month 3</span>
                  </div>
                </div>

                {/* Partner chips */}
                <div className="flex items-center gap-2 flex-wrap">
                  {["AdX", "OpenX", "Magnite", "PubMatic", "+11 more"].map((p) => (
                    <span key={p} className="text-[10px] font-semibold text-text-muted bg-brand-purple/[0.06] border border-brand-purple/[0.10] px-2 py-0.5 rounded-full">
                      {p}
                    </span>
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
                Get Started Today
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Ready to Turn Your Website Traffic Into{" "}
              <span className="text-gradient-brand">Higher Revenue?</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 250+ web publishers already earning more with Click Dudes' fully managed premium ad stack. No setup fees, no lock-in, results in 30 days.
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                Let's Monetize Your Website
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 transition-all duration-300">
                Book a Revenue Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
