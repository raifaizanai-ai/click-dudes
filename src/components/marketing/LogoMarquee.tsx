"use client"

import { useState } from "react"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface LogoMarqueeProps {
  children: React.ReactNode
  /** Seconds for one full cycle — lower = faster */
  duration?: number
  /** Pause the animation when hovered */
  pauseOnHover?: boolean
  /** Reverse direction */
  reverse?: boolean
  /** Width of the gradient fade on each edge (Tailwind fraction or px string) */
  edgeFade?: boolean
  className?: string
  trackClassName?: string
}

export function LogoMarquee({
  children,
  duration = 32,
  pauseOnHover = true,
  reverse = false,
  edgeFade = true,
  className,
  trackClassName,
}: LogoMarqueeProps) {
  const [hovered, setHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-8 py-4",
          className
        )}
      >
        {children}
      </div>
    )
  }

  const animationName = reverse ? "marquee-reverse" : "marquee"
  const paused = pauseOnHover && hovered

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Edge fades */}
      {edgeFade && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(to right, var(--color-surface-base), transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(to left, var(--color-surface-base), transparent)",
            }}
          />
        </>
      )}

      {/* Scrolling track — items duplicated for seamless loop */}
      <div
        className={cn("flex w-max items-center", trackClassName)}
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {/* Original set */}
        <div className="flex items-center">{children}</div>
        {/* Duplicate for seamless loop */}
        <div aria-hidden="true" className="flex items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
