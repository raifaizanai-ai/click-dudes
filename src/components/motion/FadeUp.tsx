"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { VIEWPORT_ONCE } from "@/lib/animations"

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: FadeUpProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
