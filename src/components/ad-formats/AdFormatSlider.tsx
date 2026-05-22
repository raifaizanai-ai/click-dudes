"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import type { PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { AdFormatDesktopCard } from "@/components/ad-formats/AdFormatDesktopCard"
import { AdFormatMobileCard } from "@/components/ad-formats/AdFormatMobileCard"
import type { AdFormatItem } from "@/types/ad-formats"
import { cn } from "@/lib/utils"

export interface AdFormatSliderProps {
  badge?:    string
  heading:   React.ReactNode
  subtext:   string
  formats:   AdFormatItem[]
  variant:   "desktop" | "mobile"
  background?: "base" | "section"
}

const GAP = 20
const AUTOPLAY_MS = 4200
const DRAG_THRESHOLD = 50

export function AdFormatSlider({ badge, heading, subtext, formats, variant, background = "base" }: AdFormatSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused,     setIsPaused]     = useState(false)
  const [cardWidth,    setCardWidth]     = useState(340)
  const [perView,      setPerView]       = useState(3)

  const containerRef = useRef<HTMLDivElement>(null)
  const pointerStartX = useRef(0)

  const maxIndex = Math.max(0, formats.length - perView)
  const clampIdx  = (v: number) => Math.max(0, Math.min(maxIndex, v))

  const measure = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const card = container.querySelector("[data-card]") as HTMLElement | null
    if (!card) return
    const cw = card.offsetWidth
    const pv = Math.max(1, Math.floor((container.offsetWidth + GAP) / (cw + GAP)))
    setCardWidth(cw)
    setPerView(pv)
  }, [])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [measure])

  useEffect(() => {
    setCurrentIndex(idx => clampIdx(idx))
  }, [maxIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => {
      setCurrentIndex(idx => idx >= maxIndex ? 0 : idx + 1)
    }, AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [isPaused, maxIndex])

  const goTo = (idx: number) => setCurrentIndex(clampIdx(idx))
  const prev = () => goTo(currentIndex - 1)
  const next = () => goTo(currentIndex + 1)

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -DRAG_THRESHOLD) next()
    else if (info.offset.x > DRAG_THRESHOLD) prev()
  }

  const handlePointerDown = (e: React.PointerEvent) => { pointerStartX.current = e.clientX }
  const handlePointerUp   = (e: React.PointerEvent) => {
    const delta = e.clientX - pointerStartX.current
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      if (delta < 0) next(); else prev()
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
    else if (e.key === "ArrowRight") { e.preventDefault(); next() }
  }

  const trackX = -currentIndex * (cardWidth + GAP)

  return (
    <Section background={background} padding="lg" aria-label={`${variant} ad format showcase`} className="mesh-bg">
      {variant === "desktop"
        ? <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 right-0" />
        : <GradientOrb color="cyan"   size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-0" />}

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-12" />

        <div className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}>

          {/* Arrows */}
          {currentIndex > 0 && (
            <button onClick={prev} aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/[0.15] flex items-center justify-center hover:border-brand-purple/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronLeft aria-hidden="true" className="w-5 h-5 text-brand-purple" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button onClick={next} aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/[0.15] flex items-center justify-center hover:border-brand-purple/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronRight aria-hidden="true" className="w-5 h-5 text-brand-purple" />
            </button>
          )}

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden rounded-2xl"
            tabIndex={0} onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ gap: GAP }}
              animate={{ x: trackX }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: -(maxIndex * (cardWidth + GAP)), right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}>
              {formats.map(fmt => (
                <div key={fmt.id} data-card
                  className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                  {variant === "desktop"
                    ? <AdFormatDesktopCard format={fmt} />
                    : <AdFormatMobileCard  format={fmt} />}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Slide navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} role="tab" aria-selected={currentIndex === i} aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40",
                currentIndex === i
                  ? "w-6 h-2 bg-brand-purple"
                  : "w-2 h-2 bg-brand-purple/25 hover:bg-brand-purple/50"
              )} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
