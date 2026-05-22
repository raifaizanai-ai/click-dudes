"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface DrawPathProps {
  /** SVG path data string */
  d: string
  viewBox: string
  width?: number | string
  height?: number | string
  stroke?: string
  strokeWidth?: number
  fill?: string
  duration?: number
  delay?: number
  className?: string
  svgClassName?: string
}

export function DrawPath({
  d,
  viewBox,
  width = "100%",
  height = "100%",
  stroke = "currentColor",
  strokeWidth = 2,
  fill = "none",
  duration = 1.8,
  delay = 0,
  className,
  svgClassName,
}: DrawPathProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
        opacity: { duration: 0.3, delay },
      },
    },
  }

  const reducedVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay } },
  }

  return (
    <div className={cn("relative", className)}>
      <svg
        ref={ref}
        viewBox={viewBox}
        width={width}
        height={height}
        className={svgClassName}
        aria-hidden="true"
      >
        <motion.path
          d={d}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={prefersReducedMotion ? reducedVariants : pathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </svg>
    </div>
  )
}
