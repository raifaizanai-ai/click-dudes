"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface ParallaxLayerProps {
  children: React.ReactNode
  /**
   * Parallax intensity. Positive = drifts up (slower than scroll).
   * Negative = drifts down (faster). Range: -1 to 1. Default 0.4.
   */
  speed?: number
  /** Spring stiffness for smoothing — higher = tighter follow */
  stiffness?: number
  className?: string
  innerClassName?: string
}

export function ParallaxLayer({
  children,
  speed = 0.4,
  stiffness = 80,
  className,
  innerClassName,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yRange = speed * 120
  const rawY = useTransform(scrollYProgress, [0, 1], [-yRange, yRange])
  const y = useSpring(rawY, { stiffness, damping: 30, mass: 0.5 })

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        <div className={innerClassName}>{children}</div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className={innerClassName}>
        {children}
      </motion.div>
    </div>
  )
}
