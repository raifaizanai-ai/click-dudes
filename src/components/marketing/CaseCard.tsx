"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { cn } from "@/lib/utils"

export interface CaseStat {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

interface CaseCardProps {
  category: string
  publisherType: string
  headline: string
  stats: [CaseStat, CaseStat, CaseStat]
  timeframe: string
  index: number
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
}

export function CaseCard({ category, publisherType, headline, stats, timeframe, index }: CaseCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={cn(
        "glass-strong rounded-3xl p-7 flex flex-col gap-6 cursor-default",
        "border border-brand-purple/[0.12]",
        "shadow-[0_8px_40px_rgba(7,17,47,0.08)]",
        "hover:shadow-[0_16px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.12)]",
        "transition-[box-shadow] duration-300"
      )}
    >
      {/* Category pill */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold">
          {publisherType}
        </span>
        <span className="text-xs text-text-muted">{category}</span>
      </div>

      {/* Headline */}
      <p className="text-base font-semibold text-text-primary leading-snug">{headline}</p>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-card/60 rounded-2xl p-3 border border-brand-purple/[0.07]">
            <CountUp
              end={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
              className="text-xl font-bold text-text-primary"
            />
            <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 pt-1 border-t border-brand-purple/[0.08]">
        <TrendingUp aria-hidden="true" className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
        <p className="text-xs text-text-muted">
          <span className="font-medium text-text-secondary">Example results</span> · {timeframe}
        </p>
      </div>
    </motion.div>
  )
}
