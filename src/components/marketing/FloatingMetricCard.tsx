"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface FloatingMetricCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
  /** e.g. "+12%" — auto-detects sign for color */
  trend?: string
  trendDirection?: "up" | "down" | "flat"
  surface?: "glass" | "strong" | "white"
  /** Custom float delay offset to stagger multiple cards */
  floatDelay?: number
  className?: string
}

const surfaceMap = {
  glass:  "glass",
  strong: "glass-strong",
  white:  "bg-surface-card border border-brand-purple/10 shadow-sm",
}

const trendIconMap = {
  up:   TrendingUp,
  down: TrendingDown,
  flat: Minus,
}

const trendColorMap = {
  up:   "text-brand-green",
  down: "text-red-400",
  flat: "text-text-muted",
}

export function FloatingMetricCard({
  value,
  label,
  prefix,
  suffix,
  decimals = 0,
  trend,
  trendDirection = "up",
  surface = "glass",
  floatDelay = 0,
  className,
}: FloatingMetricCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const TrendIcon = trendIconMap[trendDirection]

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
      transition={{
        duration: 4,
        delay: floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      }}
      className={cn(
        "rounded-2xl p-4 min-w-[148px]",
        surfaceMap[surface],
        className
      )}
    >
      <CountUp
        end={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="block text-2xl font-bold text-text-primary tracking-tight"
      />
      <p className="mt-0.5 text-xs text-text-muted leading-tight">{label}</p>

      {trend && (
        <div className={cn("flex items-center gap-1 mt-2", trendColorMap[trendDirection])}>
          <TrendIcon aria-hidden="true" className="w-3 h-3 flex-shrink-0" />
          <span className="text-xs font-medium">{trend}</span>
        </div>
      )}
    </motion.div>
  )
}
