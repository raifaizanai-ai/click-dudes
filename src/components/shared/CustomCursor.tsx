"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"

const DOT_SPRING       = { stiffness: 600, damping: 28, mass: 0.5 }
const RING_SPRING      = { stiffness: 120, damping: 20, mass: 0.8 }
const SPOTLIGHT_SPRING = { stiffness: 55,  damping: 18, mass: 1.4 }

const INTERACTIVE = "a, button, [role=button], input, textarea, select, label, [tabindex]"

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX       = useSpring(mouseX, DOT_SPRING)
  const dotY       = useSpring(mouseY, DOT_SPRING)
  const ringX      = useSpring(mouseX, RING_SPRING)
  const ringY      = useSpring(mouseY, RING_SPRING)
  const spotlightX = useSpring(mouseX, SPOTLIGHT_SPRING)
  const spotlightY = useSpring(mouseY, SPOTLIGHT_SPRING)

  const isHovering = useMotionValue(0)
  const ringScale = useSpring(1, { stiffness: 200, damping: 20 })
  const dotScale = useSpring(1, { stiffness: 300, damping: 22 })

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true)
      return
    }

    function onMove(e: PointerEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    function onOver(e: PointerEvent) {
      if ((e.target as Element | null)?.closest(INTERACTIVE)) {
        ringScale.set(2)
        dotScale.set(0)
        isHovering.set(1)
      }
    }

    function onOut(e: PointerEvent) {
      if ((e.target as Element | null)?.closest(INTERACTIVE)) {
        ringScale.set(1)
        dotScale.set(1)
        isHovering.set(0)
      }
    }

    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerover", onOver)
    window.addEventListener("pointerout", onOut)

    document.documentElement.style.cursor = "none"

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerover", onOver)
      window.removeEventListener("pointerout", onOut)
      document.documentElement.style.cursor = ""
    }
  }, [mouseX, mouseY, ringScale, dotScale, isHovering])

  if (prefersReducedMotion || isTouch) return null

  return (
    <>
      {/* Spotlight — soft diffuse glow, lags behind cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9997] -translate-x-1/2 -translate-y-1/2"
        style={{ x: spotlightX, y: spotlightY }}
        aria-hidden="true"
      >
        <div className="w-64 h-64 rounded-full bg-brand-purple/[0.045] blur-3xl" />
      </motion.div>

      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY, scale: dotScale }}
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-brand-purple" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY, scale: ringScale }}
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full border border-brand-purple/50 bg-brand-purple/5 backdrop-blur-sm" />
      </motion.div>
    </>
  )
}
