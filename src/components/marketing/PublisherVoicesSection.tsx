"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { TestimonialCarouselCard } from "@/components/marketing/TestimonialCarouselCard"
import { TESTIMONIALS } from "@/components/marketing/testimonial-carousel-data"

const TOTAL = TESTIMONIALS.length
const CARD_W = 340
const CARD_H = 460
const RAIL_H = 530
const SIDE_X = 285
const SIDE2_X = 470

const slideTx = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }

function circularOffset(index: number, active: number): number {
  let off = index - active
  if (off > TOTAL / 2) off -= TOTAL
  if (off < -TOTAL / 2) off += TOTAL
  return off
}

function cardAnimate(off: number) {
  const abs = Math.abs(off)
  const x = abs === 0 ? 0 : off * (abs === 1 ? SIDE_X : SIDE2_X)
  return {
    x,
    scale: abs === 0 ? 1 : abs === 1 ? 0.83 : abs === 2 ? 0.65 : 0.5,
    rotateY: -(off * 18),
    opacity: abs === 0 ? 1 : abs === 1 ? 0.72 : abs === 2 ? 0.35 : 0,
    filter:
      abs === 0 ? "blur(0px) brightness(1)"
      : abs === 1 ? "blur(1.5px) brightness(0.78)"
      : "blur(3px) brightness(0.55)",
  }
}

export function PublisherVoicesSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const dragStartX = useRef<number | null>(null)

  const next = useCallback(() => setActive(a => (a + 1) % TOTAL), [])
  const prev = useCallback(() => setActive(a => (a - 1 + TOTAL) % TOTAL), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  function handlePointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX
    setPaused(true)
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(delta) > 48) {
      if (delta < 0) next()
      else prev()
    }
    setPaused(false)
  }

  return (
    <Section background="base" padding="xl" aria-label="Client Testimonials">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.07} animate className="-top-40 left-1/3 -translate-x-1/2" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.05} className="bottom-0 right-1/4" />

      <Container size="lg">
        <SectionHeader
          badge="Client Success"
          heading={
            <>
              What Publishers &amp; Clients<br />
              <span className="text-gradient-brand">Say About Us</span>
            </>
          }
          subtext="Real results from web publishers, app publishers, CTV networks, and brand clients who trust Click Dudes to transform their revenue."
          align="center"
          subtextWidth="md"
        />

        {/* ── Carousel stage ───────────────────────────────────────────── */}
        <div className="relative mt-14 rounded-3xl" aria-label="Testimonials showcase">
          {/* Atmospheric dark backdrop — only this carousel gets depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, rgba(7,17,47,0.04) 0%, rgba(7,17,47,0.11) 50%, rgba(7,17,47,0.05) 100%)",
              border: "1px solid rgba(7,17,47,0.07)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          />

          {/* Inner depth orbs */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -top-28 left-1/4  w-80 h-80 rounded-full bg-brand-purple/[0.05] blur-3xl" />
            <div className="absolute -bottom-16 right-1/3 w-64 h-64 rounded-full bg-brand-cyan/[0.04]   blur-3xl" />
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Previous testimonial"
            className="absolute left-3 md:left-5 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center glass-strong border border-brand-purple/[0.12] hover:border-brand-purple/28 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            style={{ boxShadow: "0 4px 24px rgba(7,17,47,0.10)" }}
          >
            <ChevronLeft className="w-5 h-5 text-text-secondary" aria-hidden="true" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Next testimonial"
            className="absolute right-3 md:right-5 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center glass-strong border border-brand-purple/[0.12] hover:border-brand-purple/28 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            style={{ boxShadow: "0 4px 24px rgba(7,17,47,0.10)" }}
          >
            <ChevronRight className="w-5 h-5 text-text-secondary" aria-hidden="true" />
          </button>

          {/* ── 3-D card rail ─────────────────────────────────────────── */}
          <div
            role="region"
            aria-label="Testimonial carousel"
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ perspective: "1400px", perspectiveOrigin: "50% 50%", height: RAIL_H }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {TESTIMONIALS.map((item, i) => {
              const off = circularOffset(i, active)
              const abs = Math.abs(off)
              const anim = cardAnimate(off)

              return (
                <motion.div
                  key={item.id}
                  animate={anim}
                  transition={slideTx}
                  style={{
                    position: "absolute",
                    top: (RAIL_H - CARD_H) / 2,
                    left: "50%",
                    marginLeft: -(CARD_W / 2),
                    width: CARD_W,
                    height: CARD_H,
                    zIndex: abs === 0 ? 20 : abs === 1 ? 12 : abs === 2 ? 5 : 0,
                    pointerEvents: abs === 0 ? "auto" : "none",
                  }}
                >
                  <TestimonialCarouselCard item={item} isActive={i === active} />
                </motion.div>
              )
            })}
          </div>

          {/* ── Dot pagination ─────────────────────────────────────────── */}
          <div
            className="flex items-center justify-center gap-1.5 pb-8 pt-2"
            role="tablist"
            aria-label="Testimonial pagination"
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => { setActive(i); setPaused(false) }}
                className="rounded-full transition-all duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                style={{
                  width:      i === active ? 24 : 8,
                  height:     8,
                  background: i === active ? "#8B5CF6" : "rgba(7,17,47,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
