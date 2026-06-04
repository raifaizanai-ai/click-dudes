"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "@/hooks/use-media-query"

const LINE =
  "M 0,62 C 18,58 32,56 50,52 C 68,48 84,46 104,40 " +
  "C 124,34 138,36 158,28 C 178,20 196,24 216,18 " +
  "C 236,12 254,16 272,11 C 290,6 310,5 334,4 " +
  "C 356,3 374,4 400,2"

const AREA = LINE + " L 400,72 L 0,72 Z"

export function DashboardLiveChart() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduced = useReducedMotion()

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 72"
      className="w-full h-auto"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rv-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-brand-purple)" />
          <stop offset="100%" stopColor="var(--color-brand-cyan)" />
        </linearGradient>
        <linearGradient id="rv-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand-purple)" stopOpacity="0.20" />
          <stop offset="100%" stopColor="var(--color-brand-purple)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Faint grid lines — CSS animation */}
      {([18, 36, 54] as const).map((y) => (
        <line
          key={y}
          x1="0" y1={y} x2="400" y2={y}
          stroke="rgba(139,92,246,0.07)"
          strokeWidth="1"
          strokeDasharray="4 8"
          style={reduced ? {} : { animation: `rv-grid-pulse 3.5s ease-in-out infinite`, animationDelay: `${y / 30}s` }}
        />
      ))}

      {/* Area fill */}
      <motion.path
        d={AREA}
        fill="url(#rv-area-grad)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: reduced ? 1 : [0.65, 1, 0.65] } : { opacity: 0 }}
        transition={reduced ? { duration: 0.3 } : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Main line — draws in on scroll */}
      <motion.path
        d={LINE}
        stroke="url(#rv-line-grad)"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={
          reduced
            ? { duration: 0.3 }
            : {
                pathLength: { duration: 2.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
                opacity:    { duration: 0.2, delay: 0.3 },
              }
        }
      />

      {/* Shimmer highlight — sweeps along the line path */}
      {!reduced && (
        <motion.path
          d={LINE}
          stroke="rgba(255,255,255,0.50)"
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          strokeDasharray="35 380"
          animate={{ strokeDashoffset: [0, -420] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5, delay: 2.6 }}
        />
      )}

      {/* Endpoint outer glow ring */}
      <motion.circle
        cx={400} cy={2} r={5}
        fill="none"
        stroke="var(--color-brand-cyan)"
        strokeWidth={1.5}
        animate={reduced ? {} : { r: [5, 13, 5], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 2.6 }}
      />

      {/* Endpoint dot — subtle vertical drift */}
      <motion.circle
        cx={400}
        r={3.5}
        fill="var(--color-brand-cyan)"
        stroke="white"
        strokeWidth={1.5}
        initial={{ opacity: 0, cy: 2 }}
        animate={
          inView
            ? reduced
              ? { opacity: 1, cy: 2 }
              : { opacity: 1, cy: [2, 1, 2.5, 1.2, 2] }
            : { opacity: 0, cy: 2 }
        }
        transition={
          reduced
            ? { duration: 0.3, delay: 2.5 }
            : {
                opacity: { duration: 0.3, delay: 2.5 },
                cy:      { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.6 },
              }
        }
      />
    </svg>
  )
}
