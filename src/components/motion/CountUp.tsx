"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  /** ScrollTrigger start position — default "top 85%" */
  triggerStart?: string
}

export function CountUp({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  triggerStart = "top 85%",
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const el = spanRef.current
      if (!el) return

      if (prefersReducedMotion) {
        el.textContent = prefix + end.toFixed(decimals) + suffix
        return
      }

      const obj = { value: 0 }

      ScrollTrigger.create({
        trigger: el,
        start: triggerStart,
        once: true,
        onEnter() {
          gsap.to(obj, {
            value: end,
            duration,
            ease: "power2.out",
            onUpdate() {
              if (el) {
                el.textContent = prefix + obj.value.toFixed(decimals) + suffix
              }
            },
          })
        },
      })
    },
    {
      scope: spanRef,
      dependencies: [end, duration, decimals, prefix, suffix, triggerStart, prefersReducedMotion],
    }
  )

  return (
    <span ref={spanRef} className={cn("tabular-nums", className)}>
      {prefix}
      {end.toFixed(decimals)}
      {suffix}
    </span>
  )
}
