"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Brain, Zap, TrendingUp, Globe2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"

interface EcoNode {
  icon:    LucideIcon
  label:   string
  color:   string
  bg:      string
  border:  string
  cx:      number
  cy:      number
  delay:   number
}

const NODES: EcoNode[] = [
  { icon: Shield,      label: "Google AdX",       color: "text-brand-green",  bg: "bg-brand-green/10",  border: "border-brand-green/20",  cx: 50,  cy: 4,   delay: 0.3  },
  { icon: Brain,       label: "AI Optimization",  color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/20", cx: 92,  cy: 33,  delay: 0.45 },
  { icon: Zap,         label: "Header Bidding",   color: "text-brand-blue",   bg: "bg-brand-blue/10",   border: "border-brand-blue/20",   cx: 82,  cy: 80,  delay: 0.6  },
  { icon: TrendingUp,  label: "Revenue Growth",   color: "text-brand-cyan",   bg: "bg-brand-cyan/10",   border: "border-brand-cyan/20",   cx: 18,  cy: 80,  delay: 0.75 },
  { icon: Globe2,      label: "Premium Demand",   color: "text-brand-violet", bg: "bg-brand-violet/10", border: "border-brand-violet/20", cx: 8,   cy: 33,  delay: 0.9  },
]

const heroStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function MissionHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 section-hero" aria-label="Mission hero">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-32 left-1/3" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
      <GradientOrb color="blue"   size="md"  blur="xl"  opacity={0.06}        className="bottom-0 left-0" />

      <Container size="xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            variants={heroStagger} initial="hidden" animate="visible"
            className="flex flex-col gap-7 order-2 lg:order-1"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <LiveDot color="purple" size="sm" />
              Our Mission
            </motion.span>

            <motion.h1 variants={fadeUp}
              className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-[1.08]"
            >
              Helping Publishers Earn More{" "}
              <GradientText gradient="brand">From Every Impression</GradientText>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-body-lg text-text-secondary leading-relaxed max-w-lg text-pretty"
            >
              Click Dudes helps publishers, apps, and CTV platforms increase revenue through better demand access, smarter optimization, and long-term growth strategies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="/publisher-solutions/monetization-eligibility-criteria"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-semibold text-sm shadow-[0_4px_24px_rgba(139,92,246,0.38)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Check Your Eligibility
                <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-brand-purple/15 text-text-primary font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(7,17,47,0.06)" }}
              >
                Talk To Our Team
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {["450+ Publishers", "50+ Demand Partners", "2–7 Days Go-Live"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Ecosystem visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[380px] sm:h-[440px] order-1 lg:order-2"
            aria-hidden="true"
          >
            {/* SVG connection lines */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              {NODES.map((n, i) => (
                <motion.line key={i}
                  x1="50" y1="50" x2={n.cx} y2={n.cy}
                  stroke="rgba(139,92,246,0.22)" strokeWidth="0.5" strokeDasharray="80"
                  initial={{ strokeDashoffset: 80, opacity: 0 }}
                  animate={{ strokeDashoffset: 0, opacity: 1 }}
                  transition={{ duration: 1.0, delay: n.delay, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Robot center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <RobotImage variant="main" size="lg" glowColor="purple" priority />
            </div>

            {/* Ecosystem node chips */}
            {NODES.map((n) => {
              const left = `${n.cx}%`
              const top  = `${n.cy}%`
              return (
                <motion.div key={n.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: n.delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left, top }}
                >
                  <div className={`flex items-center gap-1.5 px-3 py-2 rounded-xl glass-strong border ${n.border} whitespace-nowrap`}
                    style={{ boxShadow: "0 4px 20px rgba(7,17,47,0.08)" }}>
                    <n.icon aria-hidden="true" className={`w-3.5 h-3.5 flex-shrink-0 ${n.color}`} />
                    <span className="text-[10px] font-bold text-text-primary">{n.label}</span>
                  </div>
                </motion.div>
              )
            })}

            {/* Pulsing center glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-brand-purple/08 blur-2xl pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
