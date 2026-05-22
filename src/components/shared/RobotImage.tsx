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
}: RobotImageProps) {
  const reduced = useReducedMotion()
  const dim     = DIMS[size]

  return (
    <div
      className={cn("relative inline-flex items-center justify-center flex-shrink-0", className)}
      style={{ width: dim, height: dim }}
    >
      {/* Outer atmospheric glow */}
      <div
        className={cn("absolute inset-0 rounded-full blur-3xl scale-90 opacity-60 pointer-events-none", GLOW_OUTER[glowColor])}
      />
      {/* Inner glow ring */}
      <div
        className={cn("absolute inset-0 rounded-full blur-xl scale-75 opacity-80 pointer-events-none", GLOW_INNER[glowColor])}
      />

      {/* Robot image — floating motion */}
      <motion.div
        className="relative z-10 w-full h-full cursor-default"
        animate={reduced ? {} : {
          y:      [0, -12, 0],
          rotate: [0, 1.0, 0, -1.0, 0],
          scale:  [1, 1.012, 1, 0.992, 1],
        }}
        whileHover={reduced ? {} : { scale: 1.07, rotate: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        transition={reduced ? {} : {
          y: {
            duration:   5.5,
            repeat:     Infinity,
            ease:       [0.45, 0, 0.55, 1] as const,
            delay:      floatDelay,
          },
          rotate: {
            duration:   7.0,
            repeat:     Infinity,
            ease:       [0.45, 0, 0.55, 1] as const,
            delay:      floatDelay + 0.3,
          },
          scale: {
            duration:   4.5,
            repeat:     Infinity,
            ease:       "easeInOut",
            delay:      floatDelay + 0.8,
          },
        }}
      >
        <Image
          src={SRC[variant]}
          alt=""
          width={dim}
          height={dim}
          className="w-full h-full object-contain drop-shadow-2xl"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  )
}
