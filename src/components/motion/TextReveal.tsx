"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { EASE_OUT_EXPO } from "@/lib/animations"

interface TextRevealProps {
  children: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  split?: "chars" | "words" | "lines"
  stagger?: number
  delay?: number
  duration?: number
  className?: string
  /** ScrollTrigger start position — default "top 85%" */
  triggerStart?: string
}

const reducedVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
}

export function TextReveal({
  children,
  as: Tag = "p",
  split = "words",
  stagger = 0.04,
  delay = 0,
  duration = 0.7,
  className,
  triggerStart = "top 85%",
}: TextRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      if (!wrapper || prefersReducedMotion) return

      const textEl = wrapper.firstElementChild as HTMLElement | null
      if (!textEl) return

      const splitInstance = new SplitText(textEl, { type: split })
      const targets =
        split === "chars"
          ? splitInstance.chars
          : split === "words"
            ? splitInstance.words
            : splitInstance.lines

      gsap.set(targets, { opacity: 0, y: 24, rotateX: -12 })

      ScrollTrigger.create({
        trigger: wrapper,
        start: triggerStart,
        once: true,
        onEnter() {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration,
            stagger,
            delay,
            ease: "power3.out",
          })
        },
      })

      return () => splitInstance.revert()
    },
    {
      scope: wrapperRef,
      dependencies: [children, split, stagger, delay, duration, triggerStart, prefersReducedMotion],
    }
  )

  if (prefersReducedMotion) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reducedVariant}
        style={{ display: "contents" }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    )
  }

  return (
    <div ref={wrapperRef} style={{ display: "contents" }}>
      <Tag className={cn("perspective-1000", className)}>{children}</Tag>
    </div>
  )
}
