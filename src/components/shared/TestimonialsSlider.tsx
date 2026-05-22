"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import type { PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { cn } from "@/lib/utils"

export interface TestimonialItem {
  quote:      string
  name:       string
  role:       string
  company:    string
  metric:     string
  vertical:   string
  initials:   string
  accentBg:   string
  accentText: string
}

export interface TestimonialsSliderProps {
  badge?:       string
  heading:      React.ReactNode
  subtext:      string
  testimonials: TestimonialItem[]
  background?:  "base" | "section"
}

const GAP            = 20
const AUTOPLAY_MS    = 4000
const DRAG_THRESHOLD = 50

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function TestimonialsSlider({
  badge,
  heading,
  subtext,
  testimonials,
  background = "base",
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused,     setIsPaused]     = useState(false)
  const [cardWidth,    setCardWidth]     = useState(340)
  const [perView,      setPerView]       = useState(3)

  const containerRef  = useRef<HTMLDivElement>(null)
  const pointerStartX = useRef(0)

  const maxIndex = Math.max(0, testimonials.length - perView)
  const clampIdx = (v: number) => Math.max(0, Math.min(maxIndex, v))

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
      setCurrentIndex(idx => (idx >= maxIndex ? 0 : idx + 1))
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
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev() }
    else if (e.key === "ArrowRight") { e.preventDefault(); next() }
  }

  const trackX = -currentIndex * (cardWidth + GAP)

  return (
    <Section background={background} padding="lg" aria-label="Publisher testimonials" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-1/4" />

      <Container>
        <SectionHeader
          badge={badge}
          heading={heading}
          subtext={subtext}
          align="center"
          subtextWidth="md"
          className="mb-12"
        />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Prev arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/[0.15] flex items-center justify-center hover:border-brand-purple/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
            >
              <ChevronLeft aria-hidden="true" className="w-5 h-5 text-brand-purple" />
            </button>
          )}

          {/* Next arrow */}
          {currentIndex < maxIndex && (
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/[0.15] flex items-center justify-center hover:border-brand-purple/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
            >
              <ChevronRight aria-hidden="true" className="w-5 h-5 text-brand-purple" />
            </button>
          )}

          {/* Track */}
          <div
            ref={containerRef}
            className="overflow-hidden rounded-2xl"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ gap: GAP }}
              animate={{ x: trackX }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: -(maxIndex * (cardWidth + GAP)), right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  data-card
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                  className={cn(
                    "flex-shrink-0 glass-strong rounded-3xl p-6 border border-brand-purple/[0.10]",
                    "flex flex-col gap-5 relative overflow-hidden",
                    "w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                  )}
                  style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
                >
                  {/* Top gradient line */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent pointer-events-none"
                  />

                  {/* Quote icon + metric */}
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-xl bg-brand-purple/[0.08] flex items-center justify-center">
                      <Quote aria-hidden="true" className="w-4 h-4 text-brand-purple/60" />
                    </div>
                    <span className={cn("text-xs font-bold px-3 py-1.5 rounded-full", t.accentBg, t.accentText)}>
                      {t.metric}
                    </span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-brand-purple/[0.08]">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", t.accentBg)}>
                      <span className={cn("text-xs font-bold", t.accentText)}>{t.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary leading-tight">{t.name}</p>
                      <p className="text-[11px] text-text-muted mt-0.5">{t.role} · {t.company}</p>
                      <p className="text-[10px] text-text-muted/70 mt-0.5">{t.vertical}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={currentIndex === i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40",
                currentIndex === i
                  ? "w-6 h-2 bg-brand-purple"
                  : "w-2 h-2 bg-brand-purple/25 hover:bg-brand-purple/50"
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
