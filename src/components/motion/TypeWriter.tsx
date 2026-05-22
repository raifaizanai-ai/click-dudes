"use client"

import { useState, useEffect, useRef } from "react"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface TypeWriterProps {
  /** Array of strings to cycle through */
  words: string[]
  /** Milliseconds per character typed */
  typeSpeed?: number
  /** Milliseconds per character deleted */
  deleteSpeed?: number
  /** Pause duration after finishing a word (ms) */
  pauseAfterWord?: number
  /** Pause duration before typing next word (ms) */
  pauseBeforeNext?: number
  className?: string
  cursorClassName?: string
  /** Static prefix shown before the animated word */
  prefix?: string
}

export function TypeWriter({
  words,
  typeSpeed = 60,
  deleteSpeed = 35,
  pauseAfterWord = 2000,
  pauseBeforeNext = 400,
  className,
  cursorClassName,
  prefix,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return

    const current = words[wordIndex % words.length]

    function tick() {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === current) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseAfterWord)
          return
        }
        timeoutRef.current = setTimeout(tick, typeSpeed)
      } else {
        const next = displayed.slice(0, -1)
        setDisplayed(next)
        if (next === "") {
          setIsDeleting(false)
          setWordIndex((i) => i + 1)
          timeoutRef.current = setTimeout(tick, pauseBeforeNext)
          return
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed)
      }
    }

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterWord, pauseBeforeNext, prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {prefix && <span>{prefix}</span>}
        {words[0]}
      </span>
    )
  }

  return (
    <span className={className}>
      {prefix && <span>{prefix}</span>}
      {displayed}
      <span
        aria-hidden="true"
        className={cn(
          "inline-block w-[2px] h-[1em] align-middle ml-0.5 animate-[blink_1s_step-end_infinite]",
          "bg-current opacity-80",
          cursorClassName
        )}
      />
    </span>
  )
}
