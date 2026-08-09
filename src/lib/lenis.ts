"use client"

import { useEffect } from "react"
import Lenis from "lenis"

let lenis: Lenis | null = null

interface InitLenisOptions {
  /**
   * Skip the internal requestAnimationFrame loop so the caller can drive
   * `lenis.raf()` from `gsap.ticker` instead — required to keep GSAP
   * ScrollTrigger positions in sync with Lenis's virtualized scroll.
   */
  driveWithGsapTicker?: boolean
}

export function initLenis(options: InitLenisOptions = {}): Lenis {
  const instance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
  })
  lenis = instance

  if (!options.driveWithGsapTicker) {
    function raf(time: number) {
      instance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  return instance
}

export function getLenis(): Lenis | null {
  return lenis
}

export function useLenis(
  callback?: (lenis: Lenis) => void,
  deps: unknown[] = []
): void {
  useEffect(() => {
    if (!lenis || !callback) return
    callback(lenis)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, ...deps])
}
