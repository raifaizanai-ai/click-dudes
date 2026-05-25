"use client"

import { useEffect, useRef, useState } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    setIsPointer(true)

    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (!isPointer) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[560px] h-[560px] rounded-full will-change-transform"
      style={{
        zIndex: 1,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.048) 0%, rgba(103,232,249,0.024) 38%, transparent 68%)",
        mixBlendMode: "multiply",
        transition: "none",
      }}
    />
  )
}
