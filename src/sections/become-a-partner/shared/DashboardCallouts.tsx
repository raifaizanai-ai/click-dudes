"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { DASHBOARD_CALLOUTS } from "@/sections/become-a-partner/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { VIEWPORT_ONCE } from "@/lib/animations"

export function DashboardCallouts() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [16, -16])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98])

  return (
    <div ref={ref} className="relative">
      <motion.div style={reduced ? undefined : { y, scale }} className="relative">
        <BrowserFrame screenshot={SCREENSHOTS.dashboard} glow="purple" priority sizes="(max-width: 1024px) 92vw, 900px" />
      </motion.div>

      {DASHBOARD_CALLOUTS.map((c, i) => (
        <motion.span
          key={c.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:inline-flex absolute px-3 py-1.5 rounded-full glass-strong border border-brand-purple/15 text-[11px] font-semibold text-text-primary whitespace-nowrap shadow-[0_8px_24px_rgba(7,17,47,0.10)]"
          style={{ left: c.x, top: c.y }}
        >
          {c.label}
        </motion.span>
      ))}
    </div>
  )
}
