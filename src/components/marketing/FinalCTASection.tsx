"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Shield, Zap, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

interface CapabilityCard { icon: typeof TrendingUp; label: string; value: string; sub: string; color: string; glow: string; border: string; dotColor: "green" | "purple" | "blue" | "cyan" }

const CARDS: CapabilityCard[] = [
  { icon: Users,      label: "Active Publishers",  value: STATS.publishers,  sub: "and growing daily",      color: "text-brand-purple", glow: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.20)", dotColor: "purple" },
  { icon: TrendingUp, label: "Avg RPM Lift",       value: STATS.rpmLift,     sub: "first 90 days",          color: "text-brand-purple",   glow: "rgba(103,232,249,0.12)", border: "rgba(103,232,249,0.20)", dotColor: "cyan" },
  { icon: Shield,     label: "Google Certified",     value: "100%",            sub: "GCPP Verified Partners Network",  color: "text-brand-green",  glow: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.20)",  dotColor: "green" },
  { icon: Zap,        label: "Go-Live Time",       value: STATS.goLive,      sub: "from approval",          color: "text-brand-blue",   glow: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.20)",  dotColor: "blue" },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 + i * 0.08 } }),
}

export function FinalCTASection() {
  return (
    <Section background="transparent" padding="xl" aria-label="Launch Your Revenue Growth" className="mesh-animated overflow-hidden">
      {/* Deep atmosphere */}
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.18} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.10}        className="-bottom-16 right-1/4" />
      <GradientOrb color="violet" size="md"  blur="xl"  opacity={0.08}        className="-top-16 left-1/4" />
      <GradientOrb color="blue"   size="md"  blur="xl"  opacity={0.06}        className="top-1/3 right-1/6" />

      {/* AI grid */}
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-40" />

      {/* Animated connection lines from cards to center */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none hidden xl:block"
        viewBox="0 0 1280 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(139,92,246,0.0)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.35)" />
            <stop offset="100%" stopColor="rgba(103,232,249,0.0)" />
          </linearGradient>
        </defs>
        {[
          { x1: 160, y1: 140, x2: 640, y2: 300 },
          { x1: 1120, y1: 140, x2: 640, y2: 300 },
          { x1: 160, y1: 460, x2: 640, y2: 300 },
          { x1: 1120, y1: 460, x2: 640, y2: 300 },
        ].map((l, i) => (
          <motion.line key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="120"
            initial={{ strokeDashoffset: 120, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.6 + i * 0.15 }}
          />
        ))}
      </svg>

      <Container size="lg" className="relative z-10">
        <div className="grid xl:grid-cols-3 gap-8 items-center">

          {/* Left capability cards */}
          <div className="hidden xl:flex flex-col gap-4">
            {CARDS.slice(0, 2).map((card, i) => (
              <motion.div key={card.label} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-elevated rounded-2xl p-4 border"
                style={{ borderColor: card.border, boxShadow: `0 8px 32px ${card.glow}` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: card.glow }}>
                    <card.icon className={`w-4 h-4 ${card.color}`} aria-hidden="true" />
                  </div>
                  <LiveDot color={card.dotColor} size="sm" label="" />
                </div>
                <p className={`text-[22px] font-bold tabular-nums ${card.color}`}>{card.value}</p>
                <p className="text-[12px] font-semibold text-text-primary">{card.label}</p>
                <p className="text-[10px] text-text-muted">{card.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Center CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center gap-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Join the Network
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(1.9rem, 5vw, 3.8rem)" }}>
                Let&apos;s Grow Your Revenue{" "}
                <span className="text-gradient-brand">The Right Way</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-md">
                Apply to the Click Dudes network. We review every property individually. If it&apos;s a fit, we&apos;ll have you live and earning more within 2–7 days.
              </p>
            </motion.div>

            {/* Mobile capability cards */}
            <motion.div variants={itemVariants} className="xl:hidden grid grid-cols-2 gap-3 w-full max-w-sm">
              {CARDS.map((card) => (
                <div key={card.label} className="glass-elevated rounded-xl p-3 border text-center"
                  style={{ borderColor: card.border, boxShadow: `0 4px 20px ${card.glow}` }}>
                  <p className={`text-[16px] font-bold ${card.color}`}>{card.value}</p>
                  <p className="text-[10px] text-text-muted">{card.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Link href="/about/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.50)] transition-all duration-300 hover:-translate-y-0.5">
                Apply For Monetization
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 hover:bg-brand-purple/[0.04] transition-all duration-300">
                Book Revenue Audit
              </Link>
            </motion.div>
          </motion.div>

          {/* Right capability cards */}
          <div className="hidden xl:flex flex-col gap-4">
            {CARDS.slice(2, 4).map((card, i) => (
              <motion.div key={card.label} custom={i + 2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-elevated rounded-2xl p-4 border"
                style={{ borderColor: card.border, boxShadow: `0 8px 32px ${card.glow}` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: card.glow }}>
                    <card.icon className={`w-4 h-4 ${card.color}`} aria-hidden="true" />
                  </div>
                  <LiveDot color={card.dotColor} size="sm" label="" />
                </div>
                <p className={`text-[22px] font-bold tabular-nums ${card.color}`}>{card.value}</p>
                <p className="text-[12px] font-semibold text-text-primary">{card.label}</p>
                <p className="text-[10px] text-text-muted">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
