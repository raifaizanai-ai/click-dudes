"use client"

import { motion } from "framer-motion"
import { Award, ArrowRight, TrendingUp, CheckCircle2, Users } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TRUST = ["93.5K+ Followers Built", "Authority Score 94/100", "LinkedIn & Instagram", "Founder-Ready Content"]

const PLATFORMS = [
  { name: "LinkedIn",   val: "42.8K", growth: "+18%", color: "text-brand-blue",   dot: "blue"   as const },
  { name: "Instagram",  val: "31.5K", growth: "+24%", color: "text-brand-purple", dot: "purple" as const },
  { name: "X/Twitter",  val: "19.2K", growth: "+11%", color: "text-brand-purple",   dot: "cyan"   as const },
]

export function PersonalSocialCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="Personal brand get started CTA">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-purple/[0.08] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[300px] rounded-full bg-brand-blue/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-7">
              <Award className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Creator Studio</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Become the Name <span className="text-gradient-brand">Everyone Knows</span>
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-md text-pretty">
              ClickDudes helps founders and executives become the name in their niche. We build your audience, grow your authority, and generate real business opportunities through strategic personal branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(139,92,246,0.25)]">
                Build My Personal Brand
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass-dark border border-brand-purple/[0.14] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 hover:text-text-primary transition-all">
                Talk to Our Team
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full glass-dark border border-brand-purple/[0.10] text-text-muted">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: creator authority card */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="space-y-3">
            {/* Profile authority card */}
            <div className="glass-dark rounded-3xl p-5 border border-brand-purple/[0.09]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-violet flex items-center justify-center border-2 border-brand-purple/30 shrink-0">
                  <span className="text-white font-bold text-sm">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold text-text-primary">John Doe</p>
                  <p className="text-[11px] text-text-muted">Founder & CEO · Tech Leader</p>
                </div>
                <LiveDot color="purple" size="sm" label="Active" />
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] text-text-secondary flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-brand-purple" aria-hidden="true" />
                    Authority Score
                  </span>
                  <span className="text-[13px] font-bold text-brand-purple">94 / 100</span>
                </div>
                <div className="h-2.5 bg-brand-purple/[0.07] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                    initial={{ width: 0 }} whileInView={{ width: "94%" }}
                    transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }} viewport={{ once: true }} />
                </div>
              </div>
              <div className="pt-3 border-t border-brand-purple/[0.08]">
                <p className="text-[10px] text-text-muted mb-2 flex items-center gap-1.5">
                  <Users className="w-3 h-3" aria-hidden="true" /> Total Audience
                </p>
                <p className="text-[22px] font-bold text-text-primary tabular-nums">
                  <CountUp end={93.5} decimals={1} duration={2.0} suffix="K" />
                </p>
              </div>
            </div>

            {/* Platform breakdown */}
            <div className="grid grid-cols-3 gap-2">
              {PLATFORMS.map(({ name, val, growth, color, dot }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }} viewport={{ once: true }}
                  className="glass-dark rounded-2xl p-3 text-center border border-brand-purple/[0.08]">
                  <LiveDot color={dot} size="sm" />
                  <p className={`text-[13px] font-bold ${color} tabular-nums mt-1.5`}>{val}</p>
                  <p className="text-[9px] text-text-muted mt-0.5">{name}</p>
                  <p className="text-[9px] font-bold text-brand-green mt-0.5">{growth}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-dark rounded-2xl p-4 border border-brand-purple/[0.09] flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-brand-green shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-[12px] font-bold text-text-primary">+34% audience growth this quarter</p>
                <p className="text-[10px] text-text-muted">124 inbound leads from personal brand content</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
