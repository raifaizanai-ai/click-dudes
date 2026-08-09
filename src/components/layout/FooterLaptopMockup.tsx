"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"

const SEQUENCE = [
  SCREENSHOTS.dashboard,
  SCREENSHOTS.submitPublisher,
  SCREENSHOTS.analytics,
  SCREENSHOTS.payments,
  SCREENSHOTS.notifications,
] as const

const INTERVAL_MS = 2800

export function FooterLaptopMockup() {
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || reducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % SEQUENCE.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [inView, reducedMotion])

  const activeShot = SEQUENCE[reducedMotion ? 0 : index]

  return (
    <div ref={containerRef} className="relative w-full flex justify-center" style={{ perspective: 900 }}>
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-24 rounded-full bg-gradient-purple-cyan opacity-25 blur-2xl pointer-events-none"
      />

      <div
        className="relative w-full max-w-[172px]"
        style={{ transform: "rotateX(3deg) rotateY(-4deg)", transformStyle: "preserve-3d" }}
      >
        {/* Screen */}
        <div
          className="relative rounded-t-[10px] border-[3px] border-[#DDE2F0] bg-[#0B1330] p-[3px] shadow-[0_20px_40px_rgba(7,17,47,0.35)]"
          style={{ background: "linear-gradient(155deg, #E9ECF7 0%, #CFD5EA 100%)" }}
        >
          {/* Camera notch */}
          <div className="absolute left-1/2 top-[3px] -translate-x-1/2 w-1 h-1 rounded-full bg-[#8890AA]" aria-hidden="true" />

          <div className="relative rounded-[6px] overflow-hidden bg-[#0B1330]" style={{ aspectRatio: "16/10" }}>
            <AnimatePresence mode="sync">
              <motion.div
                key={activeShot.src}
                className="absolute inset-0"
                initial={reducedMotion ? undefined : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={activeShot.src}
                  alt={activeShot.alt}
                  fill
                  sizes="172px"
                  priority={index < 2}
                  loading={index < 2 ? undefined : "lazy"}
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* Screen glow + edge fade for a live-product feel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(160deg, rgba(139,92,246,0.10) 0%, transparent 35%, transparent 70%, rgba(103,232,249,0.08) 100%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 14px 4px rgba(7,17,47,0.35)" }}
            />
            {/* Soft reflection sweep */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.10]"
              style={{ background: "linear-gradient(115deg, transparent 30%, white 48%, transparent 66%)" }}
            />
          </div>
        </div>

        {/* Base / keyboard silhouette */}
        <div
          className="relative h-[9px] rounded-b-[3px]"
          style={{ background: "linear-gradient(180deg, #E4E8F5 0%, #C7CDE2 100%)" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-[3px] rounded-b-md bg-[#B7BDD6]" aria-hidden="true" />
        </div>
        <div className="mx-auto h-[3px] w-[92%] rounded-b-full bg-[#B0B6CE]/70" aria-hidden="true" />
      </div>
    </div>
  )
}
