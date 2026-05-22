"use client"

import { useId, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"

interface HeroMiniChartProps {
  type?: "line" | "bar"
}

const LINE_PATH = "M 0,28 C 14,24 24,22 38,18 C 52,14 62,16 76,11 C 88,7 98,9 112,5 C 120,3 124,3 128,2"
const AREA_PATH = LINE_PATH + " L 128,32 L 0,32 Z"

const BARS = [
  { x: 4,   h: 14 },
  { x: 22,  h: 20 },
  { x: 40,  h: 12 },
  { x: 58,  h: 26 },
  { x: 76,  h: 18 },
  { x: 94,  h: 28 },
  { x: 112, h: 22 },
]

export function HeroMiniChart({ type = "line" }: HeroMiniChartProps) {
  const uid    = useId()
  const ref    = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20px" })
  const noMot  = useReducedMotion()

  const lineId = `mln_${uid}`
  const areaId = `mar_${uid}`
  const barId  = `mbr_${uid}`

  if (type === "bar") {
    return (
      <svg ref={ref} viewBox="0 0 128 32" className="w-full h-8" aria-hidden="true">
        <defs>
          <linearGradient id={barId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="var(--color-brand-purple)" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {BARS.map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x} y={32 - bar.h} width={14} height={bar.h}
            rx={3}
            fill={`url(#${barId})`}
            initial={{ scaleY: 0, originY: 1 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.45, delay: noMot ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ transformOrigin: `${bar.x + 7}px 32px` }}
          />
        ))}
      </svg>
    )
  }

  return (
    <svg
      ref={ref}
      viewBox="0 0 128 32"
      className="w-full h-8"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={lineId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--color-brand-purple)" />
          <stop offset="100%" stopColor="var(--color-brand-cyan)" />
        </linearGradient>
        <linearGradient id={areaId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="var(--color-brand-purple)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={AREA_PATH}
        fill={`url(#${areaId})`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: noMot ? 0 : 1.2 }}
      />
      <motion.path
        d={LINE_PATH}
        stroke={`url(#${lineId})`}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={noMot ? { duration: 0.3 } : {
          pathLength: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
          opacity:    { duration: 0.2, delay: 0.3 },
        }}
      />
      <motion.circle
        cx={128} cy={2} r={3}
        fill="var(--color-brand-cyan)"
        stroke="var(--color-surface-base)"
        strokeWidth={1.5}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.25, delay: noMot ? 0 : 1.6 }}
      />
    </svg>
  )
}
