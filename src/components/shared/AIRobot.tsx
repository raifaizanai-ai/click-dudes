"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface AIRobotProps {
  size?: "sm" | "md" | "lg"
  floatDelay?: number
  className?: string
}

const sizeMap = { sm: 120, md: 180, lg: 240 }

export function AIRobot({ size = "md", floatDelay = 0, className }: AIRobotProps) {
  const prefersReducedMotion = useReducedMotion()
  const d = sizeMap[size]
  const cx = d / 2
  const cy = d / 2
  const r = d * 0.38

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{ width: d, height: d }}
      animate={prefersReducedMotion ? {} : {
        y: [0, -10, 0],
        rotate: [0, 1.5, 0, -1.5, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] as const, delay: floatDelay }}
    >
      <svg
        width={d}
        height={d}
        viewBox={`0 0 ${d} ${d}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/* Glass sphere gradient */}
          <radialGradient id={`rb-glass-${size}`} cx="40%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.95)" />
            <stop offset="60%"  stopColor="rgba(248,250,255,0.85)" />
            <stop offset="100%" stopColor="rgba(238,242,255,0.78)" />
          </radialGradient>
          {/* Outer ring gradient */}
          <linearGradient id={`rb-ring-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="rgba(139,92,246,0.6)" />
            <stop offset="50%"  stopColor="rgba(103,232,249,0.4)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.5)" />
          </linearGradient>
          {/* Eye glow */}
          <radialGradient id={`rb-eye-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="rgba(103,232,249,1)" />
            <stop offset="60%" stopColor="rgba(96,165,250,0.8)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.3)" />
          </radialGradient>
          {/* Drop shadow filter */}
          <filter id={`rb-shadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy={d * 0.04} stdDeviation={d * 0.05} floodColor="rgba(139,92,246,0.25)" />
          </filter>
          {/* Eye blur */}
          <filter id={`rb-eye-blur-${size}`}>
            <feGaussianBlur stdDeviation={d * 0.025} />
          </filter>
        </defs>

        {/* Outer rotating orbit ring */}
        <circle
          cx={cx} cy={cy} r={r * 1.28}
          stroke={`url(#rb-ring-${size})`}
          strokeWidth={d * 0.008}
          strokeDasharray={`${d * 0.04} ${d * 0.08}`}
          style={{ animation: prefersReducedMotion ? "none" : `orbit-slow ${16}s linear infinite`, transformOrigin: "50% 50%" }}
        />

        {/* Inner counter-orbit ring */}
        <circle
          cx={cx} cy={cy} r={r * 1.14}
          stroke="rgba(139,92,246,0.12)"
          strokeWidth={d * 0.005}
          strokeDasharray={`${d * 0.02} ${d * 0.06}`}
          style={{ animation: prefersReducedMotion ? "none" : `orbit-reverse 10s linear infinite`, transformOrigin: "50% 50%" }}
        />

        {/* Main glass orb */}
        <circle
          cx={cx} cy={cy} r={r}
          fill={`url(#rb-glass-${size})`}
          filter={`url(#rb-shadow-${size})`}
        />
        {/* Orb border */}
        <circle
          cx={cx} cy={cy} r={r}
          stroke="rgba(139,92,246,0.22)"
          strokeWidth={d * 0.007}
          fill="none"
        />
        {/* Orb highlight */}
        <ellipse
          cx={cx - r * 0.15} cy={cy - r * 0.3}
          rx={r * 0.35} ry={r * 0.2}
          fill="rgba(255,255,255,0.55)"
        />

        {/* Left eye glow halo */}
        <circle
          cx={cx - r * 0.32} cy={cy - r * 0.02}
          r={r * 0.20}
          fill="rgba(103,232,249,0.12)"
          filter={`url(#rb-eye-blur-${size})`}
          style={{ animation: prefersReducedMotion ? "none" : "eye-glow 2.8s ease-in-out infinite" }}
        />
        {/* Left eye */}
        <circle cx={cx - r * 0.32} cy={cy - r * 0.02} r={r * 0.13} fill={`url(#rb-eye-${size})`} />
        <circle cx={cx - r * 0.32} cy={cy - r * 0.02} r={r * 0.06} fill="rgba(255,255,255,0.9)" />

        {/* Right eye glow halo */}
        <circle
          cx={cx + r * 0.32} cy={cy - r * 0.02}
          r={r * 0.20}
          fill="rgba(103,232,249,0.12)"
          filter={`url(#rb-eye-blur-${size})`}
          style={{ animation: prefersReducedMotion ? "none" : "eye-glow 2.8s ease-in-out infinite 0.3s" }}
        />
        {/* Right eye */}
        <circle cx={cx + r * 0.32} cy={cy - r * 0.02} r={r * 0.13} fill={`url(#rb-eye-${size})`} />
        <circle cx={cx + r * 0.32} cy={cy - r * 0.02} r={r * 0.06} fill="rgba(255,255,255,0.9)" />

        {/* Mouth bar */}
        <rect
          x={cx - r * 0.3} y={cy + r * 0.3}
          width={r * 0.6} height={r * 0.06}
          rx={r * 0.04}
          fill="rgba(139,92,246,0.35)"
        />

        {/* Side data lines */}
        <line x1={cx - r * 0.82} y1={cy - r * 0.1} x2={cx - r * 0.58} y2={cy - r * 0.1} stroke="rgba(103,232,249,0.4)" strokeWidth={d * 0.006} />
        <line x1={cx - r * 0.82} y1={cy + r * 0.1} x2={cx - r * 0.62} y2={cy + r * 0.1} stroke="rgba(103,232,249,0.25)" strokeWidth={d * 0.004} />
        <line x1={cx + r * 0.58} y1={cy - r * 0.1} x2={cx + r * 0.82} y2={cy - r * 0.1} stroke="rgba(103,232,249,0.4)" strokeWidth={d * 0.006} />
        <line x1={cx + r * 0.62} y1={cy + r * 0.1} x2={cx + r * 0.82} y2={cy + r * 0.1} stroke="rgba(103,232,249,0.25)" strokeWidth={d * 0.004} />
      </svg>

      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
          animation: prefersReducedMotion ? "none" : "glow-pulse 3s ease-in-out infinite",
        }}
      />
    </motion.div>
  )
}
