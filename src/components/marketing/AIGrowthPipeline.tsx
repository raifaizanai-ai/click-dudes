"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  LineChart, Search, Megaphone, Share2,
  Palette, Code2, ShoppingCart, BrainCircuit,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { AICommandCenterWidget } from "@/components/marketing/AICommandCenterWidget"
import { useReducedMotion } from "@/hooks/use-media-query"

interface ServiceItem {
  id: string; icon: LucideIcon; label: string; metric: string; sub: string
  color: string; viz: "sparkline" | "bars" | "gauge" | "pulse"
  vd?: number[]; gv?: number
}

const LEFT_SVCS: ServiceItem[] = [
  { id:"seo",    icon:LineChart,  label:"SEO Services",  metric:"+180%", sub:"Organic Traffic", color:"#10B981", viz:"sparkline", vd:[18,32,28,50,60,78,92] },
  { id:"google", icon:Search,     label:"Google Ads",    metric:"7.2%",  sub:"Avg CTR",         color:"#A855F7", viz:"gauge",     gv:72 },
  { id:"meta",   icon:Megaphone,  label:"Meta Ads",      metric:"4.6×",  sub:"ROAS",            color:"#60A5FA", viz:"bars",      vd:[50,65,78,100] },
  { id:"social", icon:Share2,     label:"Social Media",  metric:"+400%", sub:"Audience Growth", color:"#8B5CF6", viz:"sparkline", vd:[8,18,28,45,65,88,100] },
]

const RIGHT_SVCS: ServiceItem[] = [
  { id:"design", icon:Palette,      label:"Graphic Design", metric:"1,200+", sub:"Assets / Month",  color:"#60A5FA", viz:"bars",      vd:[35,52,68,85,100] },
  { id:"webdev", icon:Code2,        label:"Web Dev",         metric:"90+",    sub:"Lighthouse Score",color:"#A855F7", viz:"gauge",     gv:90 },
  { id:"ecom",   icon:ShoppingCart, label:"E-Commerce",      metric:"+220%",  sub:"Revenue Growth",  color:"#10B981", viz:"sparkline", vd:[12,22,35,52,72,100] },
  { id:"rev",    icon:BrainCircuit, label:"Revenue Intel",   metric:"AI",     sub:"Powered Optimization", color:"#8B5CF6", viz:"pulse" },
]

const L_CHIPS = [
  { text: "Campaign Optimized", color: "#8B5CF6" },
  { text: "Traffic +180%",      color: "#10B981" },
]

const R_CHIPS = [
  { text: "ROAS 4.6×",          color: "#60A5FA" },
  { text: "Revenue Generated",  color: "#A855F7" },
]

const PARTICLES = [
  { sz: 7,  delay: 0    },
  { sz: 5,  delay: 0.85 },
  { sz: 9,  delay: 1.65 },
]

const cardReveal = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Gauge mini-viz ─────────────────────────────────────────────── */
function renderGauge(gv: number, color: string) {
  const r = 13, c = 2 * Math.PI * r
  const arc = "M-13 16 A13 13 0 1 0 13 16"
  const arcLen = Math.PI * r
  const dash = arcLen * gv / 100
  return (
    <svg width="34" height="20" viewBox="-17 0 34 20" aria-hidden="true">
      <path d={arc} fill="none" stroke={`${color}25`} strokeWidth="2.5" strokeLinecap="round" />
      <motion.path d={arc} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray={`${arcLen} ${c}`}
        initial={{ strokeDashoffset: arcLen }}
        animate={{ strokeDashoffset: arcLen - dash }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }} />
    </svg>
  )
}

/* ── AI pulse rings mini-viz ─────────────────────────────────────── */
function renderPulse(color: string) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 34, height: 20 }}>
      {[6, 13, 20].map((sz, i) => (
        <motion.div key={sz} className="absolute rounded-full border"
          style={{ width: sz, height: sz, borderColor: `${color}${["99","58","28"][i]}` }}
          animate={{ scale: [1, 1.45, 1], opacity: [0.9, 0.1, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.42 }} />
      ))}
    </div>
  )
}

/* ── Service module ──────────────────────────────────────────────── */
function ServiceModule({ item, idx, inView, noMot }: {
  item: ServiceItem; idx: number; inView: boolean; noMot: boolean
}) {
  const spacing = item.vd ? 48 / Math.max(item.vd.length - 1, 1) : 0
  return (
    <motion.div
      custom={idx} variants={cardReveal} initial="hidden" animate={inView ? "visible" : "hidden"}
      whileHover={noMot ? {} : {
        y: -5,
        boxShadow: `0 10px 36px rgba(7,17,47,0.12), 0 0 0 1px ${item.color}38`,
        transition: { duration: 0.2 },
      }}
      className="w-full rounded-xl p-4 cursor-default"
      style={{
        background:     "rgba(255,255,255,0.96)",
        backdropFilter: "blur(20px)",
        border:         `1px solid ${item.color}22`,
        boxShadow:      `0 4px 24px rgba(7,17,47,0.07), 0 0 0 1px ${item.color}10`,
      }}
    >
      {/* Row 1: Icon + service title */}
      <div className="flex items-center gap-2.5 mb-3">

        {/* Icon — gradient bg + subtle glow edge */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${item.color}26, ${item.color}0e)`,
            boxShadow:  `0 0 0 1px ${item.color}28, 0 2px 6px ${item.color}1a`,
          }}
        >
          <item.icon style={{ width: 17, height: 17, color: item.color }} aria-hidden="true" />
        </div>

        {/* Service name — primary label, high contrast */}
        <p className="text-[13px] font-bold text-text-primary leading-tight flex-1 tracking-tight">{item.label}</p>

        {/* Live pulse indicator */}
        <motion.div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: item.color }}
          animate={{ opacity: [1, 0.25, 1], scale: [1, 1.55, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.22 }}
        />
      </div>

      {/* Row 2: Metric + visualization */}
      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-[18px] font-black text-text-primary leading-none">{item.metric}</p>
          <p className="text-[9px] text-text-muted mt-1.5 leading-tight">{item.sub}</p>
        </div>
        <div className="flex-shrink-0 mb-0.5">
          {item.viz === "sparkline" && item.vd !== undefined && (
            <svg width="50" height="22" viewBox="-1 0 50 22" fill="none" aria-hidden="true">
              <polyline
                points={item.vd.map((d, i) => `${i * spacing},${22 - d * 0.22}`).join(" ")}
                stroke={item.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"
              />
              <circle cx={(item.vd.length - 1) * spacing} cy={22 - item.vd[item.vd.length - 1] * 0.22} r="2.5" fill={item.color} />
            </svg>
          )}
          {item.viz === "bars" && item.vd !== undefined && (
            <div className="flex items-end gap-[3px]" style={{ height: 22 }}>
              {item.vd.map((h, i) => (
                <div key={i} style={{ width: 7, height: h * 0.22, borderRadius: 2, background: item.color, opacity: 0.5 + i * 0.12 }} />
              ))}
            </div>
          )}
          {item.viz === "gauge" && typeof item.gv === "number" && renderGauge(item.gv, item.color)}
          {item.viz === "pulse" && renderPulse(item.color)}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Animated flow connector between columns ─────────────────────── */
function FlowConnector({
  chips, noMot, inView,
}: { chips: { text: string; color: string }[]; noMot: boolean; inView: boolean }) {
  return (
    <div className="relative flex-1 flex items-center" style={{ minWidth: 40 }} aria-hidden="true">
      {/* Neon pipeline line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2" style={{
        height: 3,
        background: "linear-gradient(to right, rgba(139,92,246,0.35), rgba(139,92,246,0.9), rgba(96,165,250,0.75))",
        boxShadow:  "0 0 10px rgba(139,92,246,0.5), 0 0 22px rgba(139,92,246,0.2)",
      }} />

      {/* Animated energy particles */}
      {!noMot && (
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 overflow-hidden" style={{ height: 22 }}>
          {PARTICLES.map((p, i) => (
            <motion.div key={i}
              className="absolute top-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: p.sz, height: p.sz, left: 0,
                background: "radial-gradient(circle, #C084FC, #7C3AED)",
                boxShadow:  "0 0 6px #C084FCCC",
              }}
              animate={{ x: [-p.sz, 600] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: p.delay }}
            />
          ))}
        </div>
      )}

      {/* Status chips */}
      {chips.map((chip, i) => (
        <motion.div key={i}
          className="absolute flex items-center gap-1 px-2 py-[3px] rounded-full pointer-events-none whitespace-nowrap z-10"
          style={{
            top:            i === 0 ? "-30px" : "20px",
            left:           i === 0 ? "15%" : "52%",
            background:     "rgba(255,255,255,0.96)",
            backdropFilter: "blur(12px)",
            border:         `1px solid ${chip.color}22`,
            boxShadow:      "0 2px 10px rgba(7,17,47,0.06)",
          }}
          initial={{ opacity: 0, y: i === 0 ? -6 : 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 + i * 0.18 }}
        >
          <motion.div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: chip.color }}
            animate={{ opacity: [1, 0.28, 1], scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }} />
          <span className="text-[8px] font-semibold text-text-primary">{chip.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Main exported component ─────────────────────────────────────── */
export function AIGrowthPipeline() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const noMot  = useReducedMotion()

  return (
    <div ref={ref}>

      {/* ── Desktop (lg+): left services | flow | hub | flow | right services ── */}
      <div className="hidden lg:flex items-center" style={{ minHeight: "460px" }}>

        {/* Left: input service modules */}
        <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: "27%" }}>
          {LEFT_SVCS.map((item, i) => (
            <ServiceModule key={item.id} item={item} idx={i} inView={inView} noMot={noMot} />
          ))}
        </div>

        {/* Animated left connector — services → hub */}
        <FlowConnector chips={L_CHIPS} noMot={noMot} inView={inView} />

        {/* Center: ClickBot AI Command Hub */}
        <div className="flex-shrink-0 relative z-10" style={{ width: "34%" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <AICommandCenterWidget />
          </motion.div>
        </div>

        {/* Animated right connector — hub → services */}
        <FlowConnector chips={R_CHIPS} noMot={noMot} inView={inView} />

        {/* Right: output service modules */}
        <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: "27%" }}>
          {RIGHT_SVCS.map((item, i) => (
            <ServiceModule key={item.id} item={item} idx={i + 4} inView={inView} noMot={noMot} />
          ))}
        </div>

      </div>

      {/* ── Tablet (md–lg) ────────────────────────────────────────── */}
      <div className="hidden md:flex lg:hidden flex-col gap-5">
        <div className="grid grid-cols-2 gap-3">
          {[...LEFT_SVCS, ...RIGHT_SVCS].map((item, i) => (
            <ServiceModule key={item.id} item={item} idx={i} inView={inView} noMot={noMot} />
          ))}
        </div>
        <motion.div className="flex justify-center"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <div style={{ width: "75%" }}><AICommandCenterWidget /></div>
        </motion.div>
      </div>

      {/* ── Mobile ────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-2.5">
        {LEFT_SVCS.map((item, i) => (
          <ServiceModule key={item.id} item={item} idx={i} inView={inView} noMot={noMot} />
        ))}
        <motion.div className="flex justify-center py-5"
          initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <AICommandCenterWidget />
        </motion.div>
        {RIGHT_SVCS.map((item, i) => (
          <ServiceModule key={item.id} item={item} idx={i + 4} inView={inView} noMot={noMot} />
        ))}
      </div>

    </div>
  )
}
