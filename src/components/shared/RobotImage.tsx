"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export type RobotVariant =
  | "main" | "wave" | "search" | "analytics"
  | "laptop" | "energy" | "celebrate" | "rocket"

type RobotSize  = "xs" | "sm" | "md" | "lg" | "xl"
type GlowColor  = "purple" | "cyan" | "green" | "violet" | "blue"

interface RobotImageProps {
  variant:     RobotVariant
  size?:       RobotSize
  floatDelay?: number
  glowColor?:  GlowColor
  className?:  string
  priority?:   boolean
}

const SRC: Record<RobotVariant, string> = {
  main:      "/images/robot/robot-main.png",
  wave:      "/images/robot/robot-wave.png",
  search:    "/images/robot/robot-search.png",
  analytics: "/images/robot/robot-analytics.png",
  laptop:    "/images/robot/robot-laptop.png",
  energy:    "/images/robot/robot-energy.png",
  celebrate: "/images/robot/robot-celebrate.png",
  rocket:    "/images/robot/robot-rocket.png",
}

const DIMS: Record<RobotSize, number> = {
  xs: 80, sm: 120, md: 180, lg: 260, xl: 340,
}

const GLOW_INNER: Record<GlowColor, string> = {
  purple: "bg-brand-purple/28",
  cyan:   "bg-brand-cyan/22",
  green:  "bg-brand-green/22",
  violet: "bg-brand-violet/24",
  blue:   "bg-brand-blue/22",
}

const GLOW_OUTER: Record<GlowColor, string> = {
  purple: "bg-brand-purple/14",
  cyan:   "bg-brand-cyan/12",
  green:  "bg-brand-green/12",
  violet: "bg-brand-violet/12",
  blue:   "bg-brand-blue/12",
}

export function RobotImage({
  variant,
  size      = "md",
  floatDelay = 0,
  glowColor  = "purple",
  className,
  priority   = false,
}: RobotImageProps) {
  const reduced = useReducedMotion()
  const dim     = DIMS[size]

  return (
    <div
      className={cn("relative inline-flex items-center justify-center flex-shrink-0", className)}
      style={{ width: dim, height: dim, maxWidth: "100%" }}
    >
      {/* Outer atmospheric glow */}
      <div
        className={cn("absolute inset-0 rounded-full blur-3xl scale-90 opacity-60 pointer-events-none", GLOW_OUTER[glowColor])}
      />
      {/* Inner glow ring */}
      <div
        className={cn("absolute inset-0 rounded-full blur-xl scale-75 opacity-80 pointer-events-none", GLOW_INNER[glowColor])}
      />

      {/* Robot image — CSS float (GPU-animated, no JS per-frame cost) */}
      <div
        className="relative z-10 w-full h-full cursor-default"
        style={reduced ? {} : {
          animation: `float-gentle 5.5s ease-in-out infinite ${floatDelay}s`,
          willChange: "transform",
        }}
      >
        <motion.div
          className="w-full h-full"
          whileHover={reduced ? {} : { scale: 1.07, transition: { duration: 0.35, ease: "easeOut" } }}
        >
          <Image
            src={SRC[variant]}
            alt=""
            width={dim}
            height={dim}
            priority={priority}
            className="w-full h-full object-contain drop-shadow-2xl"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </div>
  )
}
