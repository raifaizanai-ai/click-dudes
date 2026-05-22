"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"

/* Pre-computed smooth upward revenue trend — 400×72 viewBox */
const LINE =
  "M 0,62 C 18,58 32,56 50,52 C 68,48 84,46 104,40 " +
  "C 124,34 138,36 158,28 C 178,20 196,24 216,18 " +
  "C 236,12 254,16 272,11 C 290,6 310,5 334,4 " +
  "C 356,3 374,4 400,2"

const AREA = LINE + " L 400,72 L 0,72 Z"

export function HeroSparkline() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReducedMotion = useReducedMotion()

  const lineTransition = prefersReducedMotion
    ? { duration: 0.3 }
    : {
        pathLength: {
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1] as const,
          delay: 0.4,
        },
        opacity: { duration: 0.2, delay: 0.4 },
      }

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 72"
      className="w-full h-auto"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--color-brand-purple)" />
          <stop offset="100%" stopColor="var(--color-brand-cyan)" />
        </linearGradient>
        <linearGradient id="heroAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="var(--color-brand-purple)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill — fades in after line draws */}
      <motion.path
        d={AREA}
        fill="url(#heroAreaGrad)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 1.6 }}
      />

      {/* Animated stroke */}
      <motion.path
        d={LINE}
        stroke="url(#heroLineGrad)"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={lineTransition}
      />

      {/* Terminal dot */}
      <motion.circle
        cx={400}
        cy={2}
        r={4}
        fill="var(--color-brand-cyan)"
        stroke="var(--color-surface-base)"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 2.5 }}
      />
    </svg>
  )
}
