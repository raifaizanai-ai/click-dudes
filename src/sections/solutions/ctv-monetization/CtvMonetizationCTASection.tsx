"use client"

import { motion } from "framer-motion"
import { ArrowRight, Tv2, Sparkles, CheckCircle2, Monitor } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const BENEFITS = [
  "Server-side ad insertion (SSAI), zero buffering, broadcast quality",
  "Programmatic direct & PMP deals with TV-quality brand advertisers",
  "Full VAST 4.2 and IAB CTV standards compliance, included",
  "Dedicated CTV specialist managing your streaming revenue",
]

const CPM_MONTHS = [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 42]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function CtvMonetizationCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Apply for CTV Monetization">
      <GradientOrb color="violet" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="purple" size="lg" blur="xl" opacity={0.07} className="-top-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: CTV revenue card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl overflow-hidden border border-brand-violet/[0.16]"
              style={{ boxShadow: "0 24px 80px rgba(168,85,247,0.12), 0 8px 32px rgba(7,17,47,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-violet/[0.12]"
                style={{ background: "rgba(168,85,247,0.05)" }}>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-brand-violet" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">CTV Revenue Intelligence</span>
                </div>
                <LiveDot color="purple" size="sm" label="" />
              </div>

              <div className="p-5 space-y-5">
                {/* CPM counter */}
                <div>
                  <p className="text-[11px] text-text-muted mb-1 uppercase tracking-wider font-semibold">Average CTV CPM</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[11px] text-text-muted">$</span>
                    <p className="text-[40px] font-black tabular-nums leading-none" style={{ background: "linear-gradient(135deg, #A855F7, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      <CountUp end={28} duration={2.2} />
                    </p>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-brand-green font-bold">↑ 44% CPM</span>
                      <span className="text-[9px] text-text-muted">vs open auction</span>
                    </div>
                  </div>
                </div>

                {/* CPM growth chart */}
                <div>
                  <p className="text-[10px] text-text-muted mb-2 font-medium">CPM Growth Over 12 Months</p>
                  <div className="flex items-end gap-1 h-14">
                    {CPM_MONTHS.map((v, i) => (
                      <motion.div key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-brand-violet/60 to-brand-purple/40"
                        style={{ height: `${(v / 42) * 56}px`, opacity: 0.3 + (i / CPM_MONTHS.length) * 0.7, transformOrigin: "bottom" }}
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
                    <span className="text-[9px] text-brand-violet font-semibold">$42 peak CPM</span>
                    <span className="text-[9px] text-text-muted">Month 12</span>
                  </div>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Video Completion",   value: "97%",  color: "text-brand-violet" },
                    { label: "Premium Demand",      value: "15+",  color: "text-brand-purple" },
                    { label: "SSAI Uptime",         value: "99.5%",color: "text-brand-green"  },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl p-3 text-center" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.10)" }}>
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-violet/20 text-xs font-semibold tracking-widest uppercase text-brand-violet">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                CTV Monetization
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Your CTV Inventory Deserves{" "}
              <span className="text-gradient-brand">Better CPMs.</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 100+ CTV publishers commanding premium CPMs through Click Dudes' managed SSAI infrastructure and programmatic direct deal network.
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-violet to-brand-purple text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(168,85,247,0.35)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                <Tv2 className="w-4 h-4" aria-hidden="true" />
                Monetize Your CTV Property
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-violet/25 transition-all duration-300">
                Schedule CTV Audit
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
