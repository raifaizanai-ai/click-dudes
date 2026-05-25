"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { AgencyCommandWidget } from "@/components/marketing/AgencyCommandWidgets"
import { useReducedMotion } from "@/hooks/use-media-query"
import type { WidgetType } from "@/components/marketing/AgencyCommandWidgets"

const W = 960
const H = 720
const CX = 480
const CY = 360

// ─── Layout data ─────────────────────────────────────────────────────────────

interface WidgetSlot {
  type: WidgetType
  leftPct: number
  topPct: number
  rotation: number
  floatDelay: number
  floatAmp: number
  svgX: number
  svgY: number
}

const SLOTS: WidgetSlot[] = [
  { type: "ai-engine",  leftPct: 50,  topPct: 4,   rotation: 0,  floatDelay: 0,   floatAmp: 6,  svgX: 480, svgY: 29  },
  { type: "meta-ads",   leftPct: 14,  topPct: 13,  rotation: -3, floatDelay: 0.8, floatAmp: 8,  svgX: 134, svgY: 94  },
  { type: "seo",        leftPct: 84,  topPct: 11,  rotation: 3,  floatDelay: 1.5, floatAmp: 7,  svgX: 806, svgY: 79  },
  { type: "social",     leftPct: 9,   topPct: 50,  rotation: -2, floatDelay: 2.2, floatAmp: 9,  svgX: 86,  svgY: 360 },
  { type: "google-ads", leftPct: 90,  topPct: 48,  rotation: 2,  floatDelay: 2.9, floatAmp: 7,  svgX: 864, svgY: 346 },
  { type: "ecom",       leftPct: 14,  topPct: 82,  rotation: 4,  floatDelay: 3.6, floatAmp: 10, svgX: 134, svgY: 590 },
  { type: "revenue",    leftPct: 83,  topPct: 80,  rotation: -2, floatDelay: 4.3, floatAmp: 8,  svgX: 797, svgY: 576 },
  { type: "webdev",     leftPct: 50,  topPct: 94,  rotation: -1, floatDelay: 5.0, floatAmp: 6,  svgX: 480, svgY: 677 },
]

interface NotifData {
  text: string
  color: string
  leftPct: number
  topPct: number
  delay: number
}

const NOTIFS: NotifData[] = [
  { text: "Campaign optimized",  color: "#8B5CF6", leftPct: 33, topPct: 27, delay: 0   },
  { text: "+$1,240 revenue",     color: "#10B981", leftPct: 64, topPct: 70, delay: 1.2 },
  { text: "Rank #3 achieved",    color: "#60A5FA", leftPct: 72, topPct: 29, delay: 2.4 },
]

const PARTICLES = [
  { x: "21%", y: "17%", sz: 3, op: 0.32, d: 0   },
  { x: "79%", y: "13%", sz: 4, op: 0.26, d: 1.1 },
  { x: "89%", y: "73%", sz: 3, op: 0.20, d: 2.0 },
  { x: "11%", y: "69%", sz: 4, op: 0.28, d: 0.7 },
  { x: "53%", y: "3%",  sz: 2, op: 0.22, d: 1.5 },
  { x: "41%", y: "97%", sz: 3, op: 0.18, d: 2.8 },
  { x: "65%", y: "93%", sz: 2, op: 0.20, d: 3.5 },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function curvePath(x2: number, y2: number): string {
  const mx = (CX + x2) / 2
  const my = (CY + y2) / 2
  const dx = x2 - CX
  const dy = y2 - CY
  const len = Math.max(1, Math.sqrt(dx * dx + dy * dy))
  const px = (-dy / len) * 38
  const py = (dx / len) * 38
  return `M ${CX} ${CY} Q ${Math.round(mx + px)} ${Math.round(my + py)} ${x2} ${y2}`
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const sceneReveal = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
}

const widgetReveal = {
  hidden:  { opacity: 0, scale: 0.70, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.65, delay: 0.35 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AgencyOrbitScene() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView  = useInView(wrapRef, { once: true, margin: "-80px" })
  const noMot   = useReducedMotion()

  return (
    <motion.div
      ref={wrapRef}
      variants={sceneReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative w-full max-w-[960px] mx-auto"
      style={{ aspectRatio: `${W}/${H}` }}
    >
      {/* ── Atmospheric depth ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/[0.07] blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-brand-cyan/[0.05] blur-[90px]" />
        <div className="absolute top-[18%] left-[18%] w-[220px] h-[220px] rounded-full bg-brand-blue/[0.04] blur-[80px]" />
        <div className="absolute bottom-[18%] right-[16%] w-[240px] h-[240px] rounded-full bg-brand-violet/[0.05] blur-[80px]" />
      </div>

      {/* ── Floating particles ────────────────────────────────────────── */}
      {!noMot && PARTICLES.map((p, i) => (
        <motion.div key={i} aria-hidden="true"
          className="absolute rounded-full pointer-events-none bg-brand-purple"
          style={{ left: p.x, top: p.y, width: p.sz, height: p.sz, opacity: p.op }}
          animate={{ y: [0, -12, 0], opacity: [p.op, p.op * 0.28, p.op] }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: p.d }}
        />
      ))}

      {/* ── SVG: rings + curved connection lines + endpoint dots ──────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          {SLOTS.map((s, i) => (
            <linearGradient key={i} id={`ag-lg-${i}`}
              x1={CX} y1={CY} x2={s.svgX} y2={s.svgY} gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="rgba(139,92,246,0.50)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.04)" />
            </linearGradient>
          ))}
          <radialGradient id="ag-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(139,92,246,0.22)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </radialGradient>
        </defs>

        {/* Ground glow disc */}
        <motion.ellipse cx={CX} cy={CY + 115} rx={210} ry={52}
          fill="url(#ag-core)"
          animate={{ opacity: [0.32, 0.80, 0.32] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulse rings */}
        {([78, 132, 196] as const).map((r, i) => (
          <motion.circle key={r} cx={CX} cy={CY} r={r}
            fill="none" stroke="rgba(139,92,246,0.10)" strokeWidth="1"
            animate={{ opacity: [0.05, 0.24, 0.05] }}
            transition={{ duration: 3.6 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
          />
        ))}

        {/* Curved connection lines */}
        {SLOTS.map((s, i) => (
          <motion.path key={`path-${i}`}
            d={curvePath(s.svgX, s.svgY)}
            fill="none"
            stroke={`url(#ag-lg-${i})`}
            strokeWidth="1.5"
            strokeDasharray="5 9"
            animate={{ strokeDashoffset: [0, -14] }}
            transition={{ duration: 1.8 + i * 0.12, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Endpoint pulse dots */}
        {SLOTS.map((s, i) => (
          <motion.circle key={`dot-${i}`} cx={s.svgX} cy={s.svgY} r="3.5"
            fill="rgba(139,92,246,0.70)"
            animate={{ opacity: [0.25, 0.92, 0.25], r: [3.5, 5.2, 3.5] }}
            transition={{ duration: 2.5 + i * 0.28, repeat: Infinity, ease: "easeInOut", delay: i * 0.38 }}
          />
        ))}
      </svg>

      {/* ── Robot — command center ────────────────────────────────────── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <RobotImage variant="energy" size="xl" floatDelay={0} glowColor="purple" />
      </div>

      {/* ── Widget panels — asymmetric orbit ─────────────────────────── */}
      {SLOTS.map((s, i) => (
        <div
          key={s.type}
          className="absolute z-30"
          style={{
            left: `${s.leftPct}%`,
            top: `${s.topPct}%`,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
          }}
        >
          <motion.div
            custom={i}
            variants={widgetReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              animate={inView && !noMot ? { y: [0, -(s.floatAmp), 0] } : { y: 0 }}
              transition={{ duration: 4.5 + s.floatDelay * 0.3, repeat: Infinity, ease: "easeInOut", delay: s.floatDelay }}
              whileHover={{ scale: 1.06, transition: { duration: 0.22, ease: "easeOut" } }}
            >
              <AgencyCommandWidget type={s.type} inView={inView} />
            </motion.div>
          </motion.div>
        </div>
      ))}

      {/* ── Notification bubbles ──────────────────────────────────────── */}
      {NOTIFS.map((n, i) => (
        <motion.div key={i} className="absolute z-40"
          style={{ left: `${n.leftPct}%`, top: `${n.topPct}%`, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.75, y: 8 }}
          animate={inView ? {
            opacity: [0, 1, 1, 0.9, 1],
            y:       [8, 0, -5, 0, -5, 0],
            scale:   1,
          } : { opacity: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 + n.delay }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(16px)",
              border: `1px solid ${n.color}22`,
              boxShadow: `0 4px 16px rgba(7,17,47,0.10), 0 0 0 1px ${n.color}14`,
            }}
          >
            <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: n.color }} aria-hidden="true" />
            <span className="text-[10px] font-semibold text-text-primary">{n.text}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
