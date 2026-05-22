"use client"

import { motion } from "framer-motion"
import { DollarSign, BarChart3, Zap, Activity } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroMetricCard } from "@/components/marketing/HeroMetricCard"
import { useReducedMotion } from "@/hooks/use-media-query"

/* ── Animation Variants ──────────────────────────────────────── */

const robotVariants = {
  hidden:  { opacity: 0, scale: 0.82, y: 24 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 } },
}
const ringVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const, delay: 0.35 } },
}
const tlVariants = {
  hidden:  { opacity: 0, x: -20, y: -20 },
  visible: { opacity: 1, x: 0,   y: 0,   transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.50 } },
}
const trVariants = {
  hidden:  { opacity: 0, x: 20,  y: -20 },
  visible: { opacity: 1, x: 0,   y: 0,   transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.65 } },
}
const blVariants = {
  hidden:  { opacity: 0, x: -20, y: 20  },
  visible: { opacity: 1, x: 0,   y: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.80 } },
}
const brVariants = {
  hidden:  { opacity: 0, x: 20,  y: 20  },
  visible: { opacity: 1, x: 0,   y: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.95 } },
}

/* ── Component ───────────────────────────────────────────────── */

export function HeroRight() {
  const noMot = useReducedMotion()

  return (
    <>
      {/* ── Desktop visual (lg+) ─────────────────────────────── */}
      <div className="hidden lg:block relative min-h-[580px] w-full">

        {/* Atmosphere */}
        <GradientOrb color="purple" size="lg" blur="2xl" opacity={0.22} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.14}        className="bottom-16 right-4" />
        <GradientOrb color="violet" size="sm" blur="xl"  opacity={0.10}        className="top-12 left-8" />

        {/* Circuit grid texture */}
        <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-40 rounded-3xl" />

        {/* ── Holographic platform ring ── */}
        <motion.div
          variants={noMot ? {} : ringVariants}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ bottom: "108px", width: "280px", height: "48px" }}
        >
          <div className="absolute inset-0 rounded-full bg-brand-purple/20 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-brand-cyan/10 blur-2xl scale-110" />
          <svg viewBox="0 0 280 48" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="ringGradOuter" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="var(--color-brand-purple)" stopOpacity="0.10" />
                <stop offset="30%"  stopColor="var(--color-brand-purple)" stopOpacity="0.60" />
                <stop offset="50%"  stopColor="var(--color-brand-cyan)"   stopOpacity="0.90" />
                <stop offset="70%"  stopColor="var(--color-brand-purple)" stopOpacity="0.60" />
                <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0.10" />
              </linearGradient>
              <linearGradient id="ringGradInner" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="var(--color-brand-purple)" stopOpacity="0.05" />
                <stop offset="50%"  stopColor="var(--color-brand-cyan)"   stopOpacity="0.40" />
                <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="28" rx="137" ry="16" fill="none" stroke="url(#ringGradOuter)" strokeWidth="1.5" />
            <ellipse cx="140" cy="28" rx="105" ry="11" fill="none" stroke="url(#ringGradInner)" strokeWidth="1" />
            <ellipse cx="140" cy="28" rx="68"  ry="6"  fill="none" stroke="url(#ringGradInner)" strokeWidth="0.7" opacity="0.6" />
          </svg>
          {/* Ring pulse */}
          <motion.div
            className="absolute inset-0 rounded-full border border-brand-purple/20"
            animate={noMot ? {} : { scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ── Robot — centered ── */}
        <motion.div
          variants={noMot ? {} : robotVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] z-30"
        >
          <RobotImage variant="celebrate" size="xl" floatDelay={0.4} glowColor="purple" />
        </motion.div>

        {/* ── Card: top-left ── */}
        <motion.div
          variants={noMot ? {} : tlVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-[52px] left-0 z-20 w-[178px] xl:w-[200px]"
        >
          <HeroMetricCard
            icon={DollarSign} value={2847} prefix="$" suffix="K" decimals={0}
            label="Revenue This Month" trend="+38% vs last month"
            chartType="line" floatDelay={0}
          />
        </motion.div>

        {/* ── Card: top-right ── */}
        <motion.div
          variants={noMot ? {} : trVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-[52px] right-0 z-20 w-[178px] xl:w-[200px]"
        >
          <HeroMetricCard
            icon={BarChart3} value={2.4} prefix="$" suffix="M" decimals={1}
            label="Total Revenue" trend="All-time high"
            chartType="line" floatDelay={1.1}
          />
        </motion.div>

        {/* ── Card: bottom-left ── */}
        <motion.div
          variants={noMot ? {} : blVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-[52px] left-0 z-20 w-[178px] xl:w-[200px]"
        >
          <HeroMetricCard
            icon={Zap} value={8.42} prefix="$" decimals={2}
            label="Avg CPM" trend="+$1.24 vs Q3"
            chartType="line" floatDelay={2.2}
          />
        </motion.div>

        {/* ── Card: bottom-right ── */}
        <motion.div
          variants={noMot ? {} : brVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-[52px] right-0 z-20 w-[178px] xl:w-[200px]"
        >
          <HeroMetricCard
            icon={Activity} value={94.2} suffix="%" decimals={1}
            label="Avg Fill Rate" trend="Top 5th percentile"
            chartType="bar" floatDelay={3.3}
          />
        </motion.div>
      </div>

      {/* ── Mobile visual (< lg) ─────────────────────────────── */}
      <div className="lg:hidden flex flex-col items-center gap-6">
        {/* Robot */}
        <motion.div
          initial={noMot ? {} : { opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className="relative"
        >
          <GradientOrb color="purple" size="md" blur="2xl" opacity={0.20} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <RobotImage variant="celebrate" size="lg" floatDelay={0.4} glowColor="purple" />
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-2 gap-2.5 w-full max-w-[420px]">
          {[
            { icon: DollarSign, value: 2847,  prefix: "$", suffix: "K",  decimals: 0, label: "Revenue This Month", trend: "+38% vs last month",   chartType: "line"  as const, floatDelay: 0   },
            { icon: BarChart3,  value: 2.4,   prefix: "$", suffix: "M",  decimals: 1, label: "Total Revenue",      trend: "All-time high",        chartType: "line"  as const, floatDelay: 1.1 },
            { icon: Zap,        value: 8.42,  prefix: "$", suffix: undefined, decimals: 2, label: "Avg CPM",        trend: "+$1.24 vs Q3",         chartType: "line"  as const, floatDelay: 2.2 },
            { icon: Activity,   value: 94.2,  prefix: undefined, suffix: "%", decimals: 1, label: "Avg Fill Rate",  trend: "Top 5th percentile",   chartType: "bar"   as const, floatDelay: 3.3 },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={noMot ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + i * 0.1 }}
              className="w-full"
            >
              <HeroMetricCard
                icon={card.icon}
                value={card.value}
                prefix={card.prefix}
                suffix={card.suffix}
                decimals={card.decimals}
                label={card.label}
                trend={card.trend}
                chartType={card.chartType}
                floatDelay={card.floatDelay}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
