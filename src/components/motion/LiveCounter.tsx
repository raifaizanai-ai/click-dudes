"use client"

import { useEffect, useRef } from "react"
import { animate } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiveCounterProps {
  base: number
  range: number
  cycleDuration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function LiveCounter({
  base,
  range,
  cycleDuration = 9,
  prefix = "",
  suffix = "",
  decimals = 2,
  className,
}: LiveCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const controls = animate(base, base + range, {
      duration: cycleDuration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
      onUpdate(v) {
        el.textContent = prefix + v.toFixed(decimals) + suffix
      },
    })

    return () => controls.stop()
  }, [base, range, cycleDuration, prefix, suffix, decimals])

  return (
    <span ref={spanRef} className={cn("tabular-nums", className)}>
      {prefix}{base.toFixed(decimals)}{suffix}
    </span>
  )
}
