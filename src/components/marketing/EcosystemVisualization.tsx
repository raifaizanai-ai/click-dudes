"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Monitor, Zap, GitBranch, Brain, BarChart3, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { EcosystemNode } from "@/components/marketing/EcosystemNode"
import { useReducedMotion } from "@/hooks/use-media-query"

type NodeAccent = "purple" | "cyan" | "blue" | "violet" | "green"

interface NodeDef {
  icon:          LucideIcon
  title:         string
  description:   string
  accent:        NodeAccent
  leftPct:       number
  topPct:        number
  floatDelay:    number
  lx:            number
  ly:            number
  orbitRx:       number
  orbitRy:       number
  initialAngle:  number
  orbitDuration: number
  orbitDir:      1 | -1
}

const INNER_DUR = 48
const OUTER_DUR = 72
const ORBIT_STEPS = 36

// Container viewBox: 960×760. Center: (480, 380).
// Inner orbit r=215; outer orbit rx=310 ry=248.
const NODES: NodeDef[] = [
  { icon: Brain,      title: "AI Optimization",   description: "ML floor & placement engine",   accent: "cyan",
    leftPct: 34.17, topPct: 30.00, floatDelay: 0, lx: 328, ly: 228,
    orbitRx: 215, orbitRy: 215, initialAngle: 225, orbitDuration: INNER_DUR, orbitDir:  1 },
  { icon: Zap,        title: "Google AdX",         description: "Premium demand pool access",    accent: "violet",
    leftPct: 65.83, topPct: 30.00, floatDelay: 1, lx: 632, ly: 228,
    orbitRx: 215, orbitRy: 215, initialAngle: 315, orbitDuration: INNER_DUR, orbitDir:  1 },
  { icon: GitBranch,  title: "Header Bidding",     description: "Unified auction yield",         accent: "purple",
    leftPct: 65.83, topPct: 70.00, floatDelay: 2, lx: 632, ly: 532,
    orbitRx: 215, orbitRy: 215, initialAngle:  45, orbitDuration: INNER_DUR, orbitDir:  1 },
  { icon: BarChart3,  title: "Revenue Analytics",  description: "Real-time monetization data",   accent: "blue",
    leftPct: 34.17, topPct: 70.00, floatDelay: 3, lx: 328, ly: 532,
    orbitRx: 215, orbitRy: 215, initialAngle: 135, orbitDuration: INNER_DUR, orbitDir:  1 },
  { icon: Sparkles,   title: "Premium Demand",     description: "Fortune 500 brand access",      accent: "purple",
    leftPct: 50.00, topPct: 17.37, floatDelay: 4, lx: 480, ly: 132,
    orbitRx: 310, orbitRy: 248, initialAngle: 270, orbitDuration: OUTER_DUR, orbitDir: -1 },
  { icon: Smartphone, title: "App Publishers",     description: "High-fill in-app monetization", accent: "cyan",
    leftPct: 82.29, topPct: 50.00, floatDelay: 5, lx: 790, ly: 380,
    orbitRx: 310, orbitRy: 248, initialAngle:   0, orbitDuration: OUTER_DUR, orbitDir: -1 },
  { icon: Monitor,    title: "CTV Publishers",     description: "Premium connected TV demand",   accent: "violet",
    leftPct: 50.00, topPct: 82.63, floatDelay: 6, lx: 480, ly: 628,
    orbitRx: 310, orbitRy: 248, initialAngle:  90, orbitDuration: OUTER_DUR, orbitDir: -1 },
  { icon: Globe,      title: "Web Publishers",     description: "Display, video & native yield", accent: "blue",
    leftPct: 17.71, topPct: 50.00, floatDelay: 7, lx: 170, ly: 380,
    orbitRx: 310, orbitRy: 248, initialAngle: 180, orbitDuration: OUTER_DUR, orbitDir: -1 },
]

const ORBIT_TIMES = Array.from({ length: ORBIT_STEPS + 1 }, (_, k) => k / ORBIT_STEPS)

const wrapReveal = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
}

const nodeReveal = {
  hidden:  { opacity: 0, scale: 0.72 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.6, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

// Computes x/y pixel-offset keyframes for one full orbit.
// scale = containerWidth / 960 (so that 960-space → screen pixels).
function computeOrbit(
  initialAngle: number, rx: number, ry: number,
  dir: 1 | -1, scale: number
): { x: number[]; y: number[] } {
  const a0 = (initialAngle * Math.PI) / 180
  const cos0 = Math.cos(a0), sin0 = Math.sin(a0)
  const x: number[] = [], y: number[] = []
  for (let k = 0; k <= ORBIT_STEPS; k++) {
    const a = a0 + dir * (k / ORBIT_STEPS) * 2 * Math.PI
    x.push((rx * Math.cos(a) - rx * cos0) * scale)
    y.push((ry * Math.sin(a) - ry * sin0) * scale)
  }
  return { x, y }
}

export function EcosystemVisualization() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const noMot  = useReducedMotion()

  const [scale, setScale] = useState(1)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 960)
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const orbitData = useMemo(
    () => NODES.map((n) => computeOrbit(n.initialAngle, n.orbitRx, n.orbitRy, n.orbitDir, scale)),
    [scale]
  )

  return (
    <motion.div
      ref={ref}
      variants={wrapReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative w-full max-w-[960px] mx-auto"
      style={{ aspectRatio: "960/760" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-brand-purple/7 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[80px]" />
      </div>

      {/* SVG layer — orbital rings, connection lines, dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 960 760"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {NODES.map((n, i) => (
            <linearGradient key={`eco-lg-${i}`} id={`eco-line-${i}`}
              x1="480" y1="380" x2={n.lx} y2={n.ly} gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="rgba(139,92,246,0.45)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.06)" />
            </linearGradient>
          ))}
          <radialGradient id="eco-platform-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(103,232,249,0.25)" />
            <stop offset="100%" stopColor="rgba(103,232,249,0)" />
          </radialGradient>
        </defs>

        {/* Platform glow disc */}
        <motion.ellipse cx="480" cy="465" rx="210" ry="52"
          fill="url(#eco-platform-glow)"
          animate={{ opacity: [0.45, 0.90, 0.45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Concentric platform rings */}
        {([70, 108, 150] as const).map((r, i) => (
          <motion.circle key={`eco-pr-${r}`} cx="480" cy="380" r={r}
            fill="none" stroke="rgba(103,232,249,0.14)" strokeWidth="1"
            animate={{ opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 3.8 + i * 1.0, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
          />
        ))}

        {/* Connection lines — flowing dashes toward node home positions */}
        {NODES.map((n, i) => (
          <motion.line key={`eco-cl-${n.title}`}
            x1="480" y1="380" x2={n.lx} y2={n.ly}
            stroke={`url(#eco-line-${i})`} strokeWidth="1.2" strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -12] }}
            transition={{ duration: 1.4 + i * 0.09, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Outer orbit ring — clockwise indicator */}
        <g className="svg-orbit-cw">
          <ellipse cx="480" cy="380" rx="310" ry="248"
            fill="none" stroke="rgba(139,92,246,0.20)" strokeWidth="1.2" strokeDasharray="8 16" />
        </g>

        {/* Inner orbit ring — counter-clockwise indicator */}
        <g className="svg-orbit-ccw">
          <circle cx="480" cy="380" r="215"
            fill="none" stroke="rgba(139,92,246,0.26)" strokeWidth="1" strokeDasharray="5 10" />
        </g>

        {/* Pulsing dots at node home positions */}
        {NODES.map((n, i) => (
          <motion.circle key={`eco-dot-${n.title}`} cx={n.lx} cy={n.ly} r="3.5"
            fill="rgba(139,92,246,0.60)"
            animate={{ opacity: [0.35, 0.90, 0.35] }}
            transition={{ duration: 2.2 + i * 0.28, repeat: Infinity, ease: "easeInOut", delay: i * 0.42 }}
          />
        ))}
      </svg>

      {/* Robot — centered, dominant */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <RobotImage variant="main" size="xl" floatDelay={0} glowColor="purple" priority />
      </div>

      {/* Ecosystem nodes — orbiting around the robot */}
      {NODES.map((node, i) => (
        <motion.div
          key={node.title}
          className="absolute z-30"
          style={{ left: `${node.leftPct}%`, top: `${node.topPct}%`, transform: "translate(-50%, -50%)" }}
          animate={inView && !noMot ? { x: orbitData[i].x, y: orbitData[i].y } : { x: 0, y: 0 }}
          transition={inView && !noMot ? {
            duration: node.orbitDuration,
            repeat: Infinity,
            ease: "linear",
            times: ORBIT_TIMES,
          } : { duration: 0 }}
        >
          <motion.div custom={i} variants={nodeReveal} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <EcosystemNode
              icon={node.icon}
              title={node.title}
              description={node.description}
              accent={node.accent}
              floatDelay={node.floatDelay}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
