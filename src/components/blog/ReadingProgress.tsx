"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  const raw    = useMotionValue(0)
  const spring = useSpring(raw, { stiffness: 180, damping: 28 })
  const scaleX = useTransform(spring, [0, 100], [0, 1])

  useEffect(() => {
    const onScroll = () => {
      const el     = document.documentElement
      const total  = el.scrollHeight - el.clientHeight
      const pct    = total > 0 ? (el.scrollTop / total) * 100 : 0
      setProgress(pct)
      raw.set(pct)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [raw])

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent"
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: "linear-gradient(to right, #8B5CF6, #60A5FA, #67E8F9)",
        }}
      />
    </div>
  )
}
