"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Zap, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { useReducedMotion } from "@/hooks/use-media-query"
import { STATS } from "@/lib/stats"
import { cn } from "@/lib/utils"

/* ── Stat tile data ──────────────────────────────────────────── */

interface HeroStatTile {
  icon: LucideIcon
  value: string
  label: string
  sub: string
  accent: string
  floatDelay: number
}

const TILES: HeroStatTile[] = [
  { icon: Users,      value: STATS.publishers,  label: "Publishers",  sub: "In Our Network",      accent: "text-brand-purple", floatDelay: 0   },
  { icon: TrendingUp, value: STATS.rpmLift,     label: "RPM Lift",    sub: "First 90 Days",       accent: "text-brand-green",  floatDelay: 1.1 },
  { icon: Zap,        value: STATS.goLive,      label: "Go-Live",     sub: "From Approval",       accent: "text-brand-blue",   floatDelay: 2.2 },
  { icon: Shield,     value: STATS.partnership, label: "Partnership", sub: "Google MCM Verified", accent: "text-brand-purple", floatDelay: 3.3 },
]

/* ── Animation Variants ──────────────────────────────────────── */

const robotVariants = {
  hidden:  { opacity: 0, scale: 0.82, y: 24 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 } },
}
const ringVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const, delay: 0.35 } },
}
const cornerVariants = [
  { hidden: { opacity: 0, x: -20, y: -20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.50 } } },
  { hidden: { opacity: 0, x:  20, y: -20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.65 } } },
  { hidden: { opacity: 0, x: -20, y:  20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.80 } } },
  { hidden: { opacity: 0, x:  20, y:  20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.95 } } },
]

const CORNER_POSITIONS = [
  "absolute top-[52px] left-0 z-20 w-[178px] xl:w-[200px]",
  "absolute top-[52px] right-0 z-20 w-[178px] xl:w-[200px]",
  "absolute bottom-[52px] left-0 z-20 w-[178px] xl:w-[200px]",
  "absolute bottom-[52px] right-0 z-20 w-[178px] xl:w-[200px]",
]

/* ── Stat card ───────────────────────────────────────────────── */

interface StatTileCardProps { tile: HeroStatTile; noMot: boolean }

function StatTileCard({ tile, noMot }: StatTileCardProps) {
  return (
    <motion.div
      animate={noMot ? {} : { y: [0, -6, 0] }}
      transition={{ duration: 5.5 + tile.floatDelay * 0.3, repeat: Infinity, ease: "easeInOut", delay: tile.floatDelay }}
      className={cn(
        "glass-strong rounded-2xl px-4 py-3.5",
        "border border-brand-purple/[0.14]",
        "shadow-[0_8px_32px_rgba(7,17,47,0.08),0_0_0_1px_rgba(139,92,246,0.10)]",
        "hover:shadow-[0_12px_40px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.20)]",
        "transition-shadow duration-300",
      )}
    >
      <tile.icon aria-hidden="true" className={cn("w-3.5 h-3.5 mb-2 opacity-65", tile.accent)} />
      <p className="text-[20px] font-bold text-text-primary leading-none tabular-nums">{tile.value}</p>
      <p className="text-[11px] font-semibold text-text-secondary mt-1.5 leading-tight">{tile.label}</p>
      <p className="text-[10px] text-text-muted leading-tight">{tile.sub}</p>
    </motion.div>
  )
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

        {/* ── Corner stat tiles ── */}
        {TILES.map((tile, i) => (
          <motion.div
            key={tile.label}
            variants={noMot ? {} : cornerVariants[i]}
            initial="hidden"
            animate="visible"
            className={CORNER_POSITIONS[i]}
          >
            <StatTileCard tile={tile} noMot={noMot} />
          </motion.div>
        ))}
      </div>

      {/* ── Mobile visual (< lg) ─────────────────────────────── */}
      <div className="lg:hidden flex flex-col items-center gap-6">
        <motion.div
          initial={noMot ? {} : { opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className="relative"
        >
          <GradientOrb color="purple" size="md" blur="2xl" opacity={0.20} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <RobotImage variant="celebrate" size="lg" floatDelay={0.4} glowColor="purple" />
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 w-full max-w-[420px]">
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={noMot ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + i * 0.1 }}
              className="w-full"
            >
              <StatTileCard tile={tile} noMot={noMot} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
