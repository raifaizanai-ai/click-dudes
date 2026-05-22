"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { staggerContainer, staggerContainerFast, VIEWPORT_ONCE } from "@/lib/animations"

interface StaggerGroupProps {
  children: React.ReactNode
  className?: string
  fast?: boolean
}

export function StaggerGroup({ children, className, fast = false }: StaggerGroupProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={fast ? staggerContainerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </motion.div>
  )
}
