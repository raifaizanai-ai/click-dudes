"use client"

import { useEffect, type RefObject } from "react"
import { useMotionValue, useSpring, type MotionValue } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"

interface PointerTiltOptions {
  /** Max rotation in degrees at the pointer's furthest extent. Default 10. */
  maxRotate?: number
  /** Max Z-axis lift in px at the pointer's closest point. Default 24. */
  maxTranslateZ?: number
  stiffness?: number
  damping?: number
}

interface PointerTilt {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  translateZ: MotionValue<number>
}

export function usePointerTilt(
  ref: RefObject<HTMLElement | null>,
  options: PointerTiltOptions = {}
): PointerTilt {
  const {
    maxRotate = 10,
    maxTranslateZ = 24,
    stiffness = 150,
    damping = 20,
  } = options

  const prefersReducedMotion = useReducedMotion()

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rawTranslateZ = useMotionValue(0)

  const springConfig = { stiffness, damping, mass: 0.5 }
  const rotateX = useSpring(rawRotateX, springConfig)
  const rotateY = useSpring(rawRotateY, springConfig)
  const translateZ = useSpring(rawTranslateZ, springConfig)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    function handlePointerMove(event: PointerEvent) {
      const rect = el!.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      const nx = px * 2 - 1
      const ny = py * 2 - 1

      rawRotateY.set(nx * maxRotate)
      rawRotateX.set(-ny * maxRotate)
      rawTranslateZ.set(maxTranslateZ)
    }

    function handlePointerLeave() {
      rawRotateX.set(0)
      rawRotateY.set(0)
      rawTranslateZ.set(0)
    }

    el.addEventListener("pointermove", handlePointerMove)
    el.addEventListener("pointerleave", handlePointerLeave)
    return () => {
      el.removeEventListener("pointermove", handlePointerMove)
      el.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [ref, prefersReducedMotion, maxRotate, maxTranslateZ, rawRotateX, rawRotateY, rawTranslateZ])

  return { rotateX, rotateY, translateZ }
}
