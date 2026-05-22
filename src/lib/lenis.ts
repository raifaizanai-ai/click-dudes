"use client"

import { useEffect } from "react"
import Lenis from "lenis"

let lenis: Lenis | null = null

export function initLenis(): Lenis {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis!.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenis
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
