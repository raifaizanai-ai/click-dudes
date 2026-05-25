"use client"

import React from "react"
import { motion } from "framer-motion"
import { BrainCircuit, Zap, BarChart3, Shield } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroBadge } from "@/components/marketing/HeroBadge"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"
import { useReducedMotion } from "@/hooks/use-media-query"

const STATS = [
  { value: "28%",    label: "AI yield lift" },
  { value: "98%",    label: "Prediction accuracy" },
  { value: "24/7",   label: "Live monitoring" },
  { value: "$200M+", label: "Training data" },
]

const AI_BADGES = [
  { icon: BrainCircuit, label: "Floor Pricing AI", value: "98.1%", color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/15", pos: "absolute top-[68px] left-[8px]" },
  { icon: Shield,       label: "Anomaly Guard",    value: "24/7",  color: "text-brand-blue",   bg: "bg-brand-blue/10",   border: "border-brand-blue/15",   pos: "absolute top-[68px] right-[4px]" },
  { icon: BarChart3,    label: "Revenue Forecast", value: "+28%",  color: "text-brand-green",  bg: "bg-brand-green/10",  border: "border-brand-green/15",  pos: "absolute bottom-[72px] left-1/2 -translate-x-1/2" },
  { icon: Zap,          label: "A/B Engine",       value: "142 tests", color: "text-brand-violet", bg: "bg-brand-violet/10", border: "border-brand-violet/15", pos: "absolute top-[44%] -left-[4px]" },
]

const contentVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

const badgeVariants = [
  { hidden: { opacity: 0, x: -20, y: -20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.55, ease: [0.16,1,0.3,1] as const } } },
  { hidden: { opacity: 0, x: 20,  y: -20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.70, ease: [0.16,1,0.3,1] as const } } },
  { hidden: { opacity: 0, y: 20  },          visible: { opacity: 1, y: 0,        transition: { duration: 0.7, delay: 0.85, ease: [0.16,1,0.3,1] as const } } },
  { hidden: { opacity: 0, x: -20 },          visible: { opacity: 1, x: 0,        transition: { duration: 0.7, delay: 0.65, ease: [0.16,1,0.3,1] as const } } },
]

export function AIOptimizationHero() {
  const noMot = useReducedMotion()

  return (
    <Section background="transparent" padding="none" aria-label="AI Ad Optimization Hero" className="mesh-animated overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-24">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.18} animate className="-top-40 -left-40" />
      <GradientOrb color="violet" size="xl"  blur="2xl" opacity={0.12}        className="-top-20 right-0" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.09}        className="bottom-0 left-1/3" />
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.14]" />

      {/* Neural network dot pattern overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle 1.5px at center, rgba(139,92,246,1) 100%, transparent 100%)", backgroundSize: "24px 24px" }} />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-8 items-center py-2 lg:py-8">

          {/* Left: content */}
          <motion.div variants={contentVariants} initial="hidden" animate="visible"
            className="flex flex-col gap-6 lg:pr-6">

            <motion.div variants={itemVariant}>
              <HeroBadge showDot dotColor="green"
                prefix={<BrainCircuit className="w-3.5 h-3.5" aria-hidden="true" />}>
                AI Ad Optimization
              </HeroBadge>
            </motion.div>

            <motion.div variants={itemVariant}>
              <h1 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}>
                AI That Optimizes Your Revenue{" "}
                <span className="text-gradient-brand">While You Sleep</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariant}>
              <p className="text-base md:text-body-lg text-text-secondary leading-relaxed text-pretty max-w-lg">
                Machine learning price floors, real-time anomaly detection, and predictive revenue forecasting — running autonomously 24/7. Publishers see an average 28% yield lift over manual optimization.
              </p>
            </motion.div>

            <motion.div variants={itemVariant}>
              <CTAButtonGroup
                primary={{ label: "Activate AI Optimization", href: "/about/contact-us" }}
                secondary={{ label: "Book Revenue Audit", href: "/about/contact-us" }}
                align="left" size="lg" stackOnMobile
                caption="No setup fees · Live in 3 days · Results in 30 days"
              />
            </motion.div>

            <motion.div variants={itemVariant}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {STATS.map((s) => (
                  <div key={s.label} className="glass rounded-2xl px-3.5 py-3 text-center border border-brand-purple/[0.10]">
                    <p className="text-xl font-bold text-gradient-brand leading-none">{s.value}</p>
                    <p className="text-[10px] text-text-muted mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: large robot + neural network composition */}
          <div className="relative flex items-center justify-center min-h-[480px] lg:min-h-[560px]">

            {/* Atmospheric center glow */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-brand-purple/10 blur-[60px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-brand-violet/12 blur-[40px]" />
            </div>

            {/* Platform ring under robot */}
            <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{ bottom: "88px", width: "260px", height: "44px" }}>
              <div className="absolute inset-0 rounded-full bg-brand-purple/15 blur-xl" />
              <svg viewBox="0 0 260 44" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="aiRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="rgba(139,92,246,0.08)" />
                    <stop offset="40%"  stopColor="rgba(139,92,246,0.55)" />
                    <stop offset="60%"  stopColor="rgba(168,85,247,0.80)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0.08)" />
                  </linearGradient>
                </defs>
                <ellipse cx="130" cy="26" rx="128" ry="14" fill="none" stroke="url(#aiRingGrad)" strokeWidth="1.5" />
                <ellipse cx="130" cy="26" rx="96"  ry="10" fill="none" stroke="url(#aiRingGrad)" strokeWidth="0.8" opacity="0.5" />
              </svg>
              <motion.div className="absolute inset-0 rounded-full border border-brand-purple/20"
                animate={noMot ? {} : { scale: [1, 1.14, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} />
            </div>

            {/* Large AI robot — centered, dominant */}
            <motion.div
              initial={noMot ? {} : { opacity: 0, scale: 0.80, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="relative z-20">
              <RobotImage variant="analytics" size="xl" floatDelay={0.4} glowColor="purple" />
            </motion.div>

            {/* AI module badges orbiting the robot */}
            {AI_BADGES.map((badge, i) => (
              <motion.div key={badge.label}
                variants={noMot ? {} : badgeVariants[i]}
                initial="hidden"
                animate="visible"
                className={`${badge.pos} z-30 pointer-events-none`}>
                <motion.div
                  animate={noMot ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 4.5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
                  className={`glass-strong rounded-2xl border ${badge.border} px-3 py-2 flex items-center gap-2`}
                  style={{ boxShadow: "0 4px 20px rgba(7,17,47,0.06)" }}>
                  <div className={`w-6 h-6 rounded-lg ${badge.bg} flex items-center justify-center flex-shrink-0`}>
                    <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`text-[9px] font-bold ${badge.color} leading-none`}>{badge.label}</p>
                    <p className="text-[11px] font-black text-text-primary leading-tight mt-0.5">{badge.value}</p>
                  </div>
                  <LiveDot color={badge.label === "Anomaly Guard" ? "blue" : badge.label === "Revenue Forecast" ? "green" : badge.label === "A/B Engine" ? "purple" : "purple"} size="sm" />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  )
}
