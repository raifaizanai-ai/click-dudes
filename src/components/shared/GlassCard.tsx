"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type GlassCardVariant = "default" | "strong" | "subtle" | "dark" | "navy"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: GlassCardVariant
  hover?: boolean
  glow?: boolean
  glowColor?: "purple" | "blue" | "cyan"
  padding?: "none" | "sm" | "md" | "lg"
  rounded?: "lg" | "xl" | "2xl" | "full"
  onClick?: () => void
}

const variantMap: Record<GlassCardVariant, string> = {
  default: "glass",
  strong:  "glass-strong",
  subtle:  "glass-subtle",
  dark:    "glass-dark",
  navy:    "card-navy",
}

const glowMap = {
  purple: "hover:glow-purple",
  blue:   "hover:glow-blue",
  cyan:   "hover:glow-cyan",
} as const

const paddingMap = {
  none: "p-0",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
} as const

const roundedMap = {
  lg:   "rounded-lg",
  xl:   "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
  glow = false,
  glowColor = "purple",
  padding = "md",
  rounded = "2xl",
  onClick,
}: GlassCardProps) {
  const baseClass = cn(
    "relative transition-all duration-300",
    variantMap[variant],
    paddingMap[padding],
    roundedMap[rounded],
    glow && "glow-sm",
    hover && glowMap[glowColor],
    onClick && "cursor-pointer",
    className
  )

  if (hover) {
    return (
      <motion.div
        className={baseClass}
        whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClass} onClick={onClick}>
      {children}
    </div>
  )
}
