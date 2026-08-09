"use client"

import { useRef, useState } from "react"
import {
  motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring,
} from "framer-motion"
import { RobotImage } from "@/components/shared/RobotImage"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { DASHBOARD_CHIPS } from "@/components/marketing/partner-dashboard-home/dashboardChips"

const ENTRANCE_END = 0.22
const OPACITY_END = 0.06

export function DashboardStage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(-1)

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] })

  // Explicit 3-point ranges (rather than a truncated [0, X] range) so the
  // value is unambiguously held at its final state for the rest of scroll —
  // defensive against any scrollYProgress reporting > 1 with Lenis active.
  const entrance = useTransform(scrollYProgress, [0, ENTRANCE_END, 1], [0, 1, 1])
  const frameY = useTransform(entrance, [0, 1], [70, 0])
  const frameScale = useTransform(entrance, [0, 1], [0.92, 1])
  const frameRotateX = useTransform(entrance, [0, 1], [9, 3])
  const frameRotateY = useTransform(entrance, [0, 1], [-10, -4])
  const frameOpacity = useTransform(scrollYProgress, [0, OPACITY_END, 1], [0.35, 1, 1])

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < ENTRANCE_END) { setActiveIndex(-1); return }
    const storyProgress = (v - ENTRANCE_END) / (1 - ENTRANCE_END)
    const idx = Math.min(DASHBOARD_CHIPS.length - 1, Math.floor(storyProgress * DASHBOARD_CHIPS.length))
    setActiveIndex(idx)
  })

  // Pointer parallax (desktop only, subtle) — layered on top of scroll transforms.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const framePX = useSpring(useTransform(px, [-1, 1], [-5, 5]), { stiffness: 120, damping: 20 })
  const framePY = useSpring(useTransform(py, [-1, 1], [-5, 5]), { stiffness: 120, damping: 20 })
  const chipPX = useSpring(useTransform(px, [-1, 1], [-10, 10]), { stiffness: 120, damping: 20 })
  const chipPY = useSpring(useTransform(py, [-1, 1], [-10, 10]), { stiffness: 120, damping: 20 })

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }
  const handlePointerLeave = () => { px.set(0); py.set(0) }

  const clickBotVisible = activeIndex >= 3

  return (
    <div ref={wrapperRef} className="relative hidden lg:block" style={{ height: reducedMotion ? undefined : "165vh" }}>
      <div className="sticky top-20 flex items-center justify-center overflow-hidden" style={{ height: reducedMotion ? undefined : "calc(100vh - 5rem)" }}>
        <div
          ref={stageRef}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          className="relative w-full max-w-[1000px] mx-auto px-4"
        >
          {/* Depth texture behind the product */}
          <div aria-hidden="true" className="absolute -inset-x-10 -inset-y-16 grid-depth opacity-60 pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-x-16 top-1/2 -translate-y-1/2 h-40 rounded-full bg-gradient-purple-cyan opacity-[0.16] blur-3xl pointer-events-none" />

          <motion.div
            className="relative perspective-1000"
            style={reducedMotion ? undefined : { x: framePX, y: framePY }}
          >
            <motion.div
              className="relative"
              style={reducedMotion ? undefined : {
                y: frameY, scale: frameScale, opacity: frameOpacity,
                rotateX: frameRotateX, rotateY: frameRotateY, transformStyle: "preserve-3d",
              }}
            >
              <BrowserFrame
                screenshot={SCREENSHOTS.dashboard}
                glow="purple"
                priority
                sizes="(max-width: 1024px) 92vw, 900px"
                className="shadow-[0_40px_100px_rgba(139,92,246,0.20),0_14px_40px_rgba(7,17,47,0.16)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.18) 8%, transparent 30%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/40"
              />
            </motion.div>

            {/* Connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible hidden sm:block" aria-hidden="true">
              {DASHBOARD_CHIPS.map((chip, i) => (
                <motion.line
                  key={chip.label}
                  x1={chip.pos.x} y1={chip.pos.y} x2={chip.line.x} y2={chip.line.y}
                  stroke={chip.glow} strokeWidth={activeIndex === i ? 1.75 : 1}
                  initial={false}
                  animate={{ pathLength: activeIndex >= i ? 1 : 0, opacity: activeIndex === i ? 0.7 : activeIndex > i ? 0.2 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Status chips */}
          <motion.div className="absolute inset-0 pointer-events-none" style={reducedMotion ? undefined : { x: chipPX, y: chipPY }}>
            {DASHBOARD_CHIPS.map((chip, i) => {
              const state = activeIndex === i ? "active" : activeIndex > i ? "past" : "hidden"
              return (
                <motion.div
                  key={chip.label}
                  className="hidden sm:flex absolute items-center gap-2 px-3.5 py-2 rounded-full glass-strong border whitespace-nowrap pointer-events-auto"
                  style={{
                    left: chip.pos.x, top: chip.pos.y,
                    borderColor: state === "hidden" ? "rgba(139,92,246,0.12)" : chip.glow,
                    boxShadow: state === "active" ? `0 0 0 1px ${chip.glow}, 0 12px 32px ${chip.glow}` : "0 8px 20px rgba(7,17,47,0.10)",
                  }}
                  initial={false}
                  animate={{
                    opacity: state === "hidden" ? 0 : state === "active" ? 1 : 0.55,
                    scale: state === "active" ? 1.08 : state === "past" ? 0.95 : 0.8,
                    y: state === "hidden" ? 12 : 0,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <chip.icon aria-hidden="true" className={cn("w-3.5 h-3.5 flex-shrink-0", chip.color)} />
                  <span className="text-[11px] font-bold text-text-primary">{chip.label}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* ClickBot — appears once Live/Commission become active */}
          <motion.div
            className="hidden md:block absolute"
            style={{ right: "4%", bottom: "2%" }}
            initial={false}
            animate={{ opacity: clickBotVisible ? 1 : 0, scale: clickBotVisible ? 1 : 0.7, y: clickBotVisible ? 0 : 14 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <RobotImage variant="analytics" size="sm" glowColor="cyan" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
