"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"
import { LayoutDashboard, CheckCircle2 } from "lucide-react"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { ENGINE_NODES, CHANNEL_DEVICES } from "@/components/marketing/become-partner-home/engineData"
import { ChannelDevice } from "@/components/marketing/become-partner-home/ChannelDevice"

const RADIUS = 128

export function PartnershipEngineStage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(3, Math.floor(v * 4))
    setPhase(idx)
  })

  const nodesIn = phase >= 0
  const channelsIn = phase >= 1
  const linesIn = phase >= 2
  const resultIn = phase >= 3

  return (
    <div ref={wrapperRef} className="relative hidden lg:block" style={{ height: reducedMotion ? undefined : "145vh" }}>
      <div className="sticky top-20 flex items-center justify-center" style={{ height: reducedMotion ? undefined : "calc(100vh - 5rem)" }}>
        <div className="relative w-full h-[560px] flex items-center justify-center">
          {/* Spatial background context — subtle */}
          <div aria-hidden="true" className="absolute inset-0 grid-depth opacity-50 pointer-events-none" />
          <div aria-hidden="true" className="absolute w-[420px] h-[420px] rounded-full border border-brand-purple/[0.08] pointer-events-none" />
          <div aria-hidden="true" className="absolute w-[520px] h-[520px] rounded-full border border-brand-cyan/[0.06] pointer-events-none" />

          <div className="relative" style={{ width: RADIUS * 2 + 100, height: RADIUS * 2 + 100 }}>
            {/* Ambient breathing field behind center icon */}
            <div
              aria-hidden="true"
              className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-gradient-purple-cyan opacity-20 blur-2xl animate-[glow-pulse_4s_ease-in-out_infinite] pointer-events-none"
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={reducedMotion ? undefined : { scale: linesIn ? [1, 1.14, 1] : 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandMarkNode size="lg" />
            </motion.div>

            {/* Partner-node connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" aria-hidden="true">
              {ENGINE_NODES.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180
                const x = Math.cos(rad) * RADIUS
                const y = Math.sin(rad) * RADIUS
                return (
                  <motion.line
                    key={node.label}
                    x1="50%" y1="50%" x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                    stroke="var(--color-brand-purple)"
                    strokeWidth={hovered === i ? 2 : 1.25}
                    initial={false}
                    animate={{ pathLength: linesIn ? 1 : 0, opacity: hovered === i ? 0.6 : linesIn ? 0.18 : 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                )
              })}
            </svg>

            {ENGINE_NODES.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const x = Math.cos(rad) * RADIUS
              const y = Math.sin(rad) * RADIUS
              const isNear = node.depth === "near"
              return (
                <motion.div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)", zIndex: isNear ? 10 : 5 }}
                  initial={reducedMotion ? undefined : { opacity: 0, scale: 0.5 }}
                  animate={{ opacity: nodesIn ? (isNear ? 1 : 0.75) : 0, scale: nodesIn ? (isNear ? 1.08 : 0.85) : 0.5 }}
                  whileHover={{ scale: (isNear ? 1.08 : 0.85) * 1.05 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={cn(
                    "rounded-xl glass-strong border flex items-center justify-center transition-colors duration-200",
                    isNear ? "w-11 h-11" : "w-9 h-9",
                    hovered === i ? "border-brand-purple/40 shadow-[0_8px_24px_rgba(139,92,246,0.30)]" : "border-brand-purple/15"
                  )}>
                    <node.icon aria-hidden="true" className={cn(isNear ? "w-4.5 h-4.5" : "w-3.5 h-3.5", "text-brand-purple")} />
                  </div>
                  <span className="hidden xl:block text-[9px] font-semibold text-text-muted text-center leading-tight max-w-[74px]">
                    {node.label}
                  </span>

                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full z-20 px-3 py-1.5 rounded-lg bg-brand-navy text-white text-[10px] font-medium whitespace-nowrap shadow-[0_8px_20px_rgba(7,17,47,0.30)]"
                      >
                        {node.tooltip}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}

            {/* Channel devices — lower/outer layer, flow up into the center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-end gap-6" style={{ bottom: -118 }}>
              {CHANNEL_DEVICES.map((ch, i) => (
                <motion.div
                  key={ch.key}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
                  animate={{ opacity: channelsIn ? 1 : 0, y: channelsIn ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChannelDevice channel={ch} />
                </motion.div>
              ))}
            </div>

            {/* Channel connector lines up to center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" aria-hidden="true" style={{ top: 0 }}>
              {CHANNEL_DEVICES.map((ch, i) => (
                <motion.line
                  key={ch.key}
                  x1={`${38 + i * 12}%`} y1="calc(100% + 108px)" x2="50%" y2="58%"
                  stroke="var(--color-brand-cyan)" strokeWidth="1.25"
                  initial={false}
                  animate={{ pathLength: linesIn ? 1 : 0, opacity: linesIn ? 0.2 : 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                />
              ))}
            </svg>

            {/* Result card */}
            <AnimatePresence>
              {resultIn && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-full ml-6 -translate-y-1/2 flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-strong border border-brand-green/25 shadow-[0_12px_32px_rgba(16,185,129,0.18)] whitespace-nowrap"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard aria-hidden="true" className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-text-primary flex items-center gap-1">
                      Partner Portal
                      <CheckCircle2 aria-hidden="true" className="w-3 h-3 text-brand-green" />
                    </p>
                    <p className="text-[10px] text-text-muted">Opportunity Tracked</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
