"use client"

import { motion } from "framer-motion"
import { TrendingUp, type LucideIcon } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { HeroMiniChart } from "@/components/marketing/HeroMiniChart"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface HeroMetricCardProps {
  icon:       LucideIcon
  value:      number
  prefix?:    string
  suffix?:    string
  decimals?:  number
  label:      string
  trend:      string
  chartType?: "line" | "bar"
  floatDelay?: number
  className?: string
}

export function HeroMetricCard({
  icon: Icon,
  value,
  prefix,
  suffix,
  decimals  = 0,
  label,
  trend,
  chartType  = "line",
  floatDelay = 0,
  className,
}: HeroMetricCardProps) {
  const noMot = useReducedMotion()

  return (
    <motion.div
      animate={noMot ? {} : { y: [0, -8, 0] }}
      transition={{
        duration:   4.5,
        delay:      floatDelay,
        repeat:     Infinity,
        ease:       "easeInOut",
        repeatType: "loop",
      }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-4 w-[188px] xl:w-[208px] flex-shrink-0",
        "bg-white/82 backdrop-blur-[22px]",
        "border border-brand-purple/[0.14]",
        "shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]",
        className
      )}
    >
      {/* Top-edge gloss */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent 8%, rgba(255,255,255,0.90) 38%, rgba(139,92,246,0.22) 68%, transparent 92%)",
        }}
      />
      {/* Corner ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-brand-purple/[0.07] blur-2xl pointer-events-none"
      />

      {/* Icon chip */}
      <div className="mb-3 w-8 h-8 rounded-xl bg-brand-purple/[0.09] flex items-center justify-center flex-shrink-0">
        <Icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
      </div>

      {/* Metric */}
      <CountUp
        end={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="block text-[22px] font-bold text-text-primary tracking-tight leading-none"
      />
      <p className="mt-1 text-[12px] text-text-muted leading-snug">{label}</p>

      {/* Trend */}
      <div className="flex items-center gap-1 mt-2.5">
        <TrendingUp aria-hidden="true" className="w-3 h-3 text-brand-green flex-shrink-0" />
        <span className="text-[11px] font-semibold text-brand-green">{trend}</span>
      </div>

      {/* Mini chart */}
      <div className="mt-3 -mx-0.5">
        <HeroMiniChart type={chartType} />
      </div>
    </motion.div>
  )
}
