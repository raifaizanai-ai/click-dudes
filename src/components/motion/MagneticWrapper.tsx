"use client"

import { useRef, type MouseEvent } from "react"
import { motion, useSpring } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface MagneticWrapperProps {
  children: React.ReactNode
  /**
   * Pull strength — fraction of distance moved toward cursor.
   * 0.3 = subtle, 0.6 = strong. Default 0.35.
   */
  strength?: number
  className?: string
}

const SPRING = { stiffness: 200, damping: 18, mass: 0.6 }

export function MagneticWrapper({
  children,
  strength = 0.35,
  className,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const x = useSpring(0, SPRING)
  const y = useSpring(0, SPRING)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  )
}
