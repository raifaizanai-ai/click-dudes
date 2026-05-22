"use client"

import { motion } from "framer-motion"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

interface HeroBadgeProps {
  children: React.ReactNode
  showDot?: boolean
  dotColor?: "green" | "purple" | "blue" | "cyan"
  /** Prefix icon or symbol before the dot + text */
  prefix?: React.ReactNode
  className?: string
}

const mountVariant = {
  hidden:  { opacity: 0, y: -12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function HeroBadge({
  children,
  showDot = true,
  dotColor = "green",
  prefix,
  className,
}: HeroBadgeProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={mountVariant}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full",
        "glass-strong border border-brand-purple/20",
        "shadow-[0_2px_16px_rgba(139,92,246,0.10)]",
        className
      )}
    >
      {prefix && (
        <span className="flex-shrink-0 text-text-muted">{prefix}</span>
      )}
      {showDot && <LiveDot color={dotColor} size="sm" />}
      <span className="text-sm font-medium text-text-secondary">{children}</span>
    </motion.div>
  )
}
