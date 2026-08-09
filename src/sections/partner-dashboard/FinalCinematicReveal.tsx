"use client"

import { useRef } from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { FadeUp } from "@/components/motion/FadeUp"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { ScreenshotCrop } from "@/sections/partner-dashboard/shared/ScreenshotCrop"
import { SCREENSHOTS, SCREENSHOT_ASPECT, type ScreenshotKey } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface FloatingScreen {
  key: ScreenshotKey
  label: string
  focal: string
  leftPct: number
  topPct: number
}

// Positions are pre-computed (pixel offsets from the 1450x760 lg stage center,
// converted to %) so every satellite clears the large central Dashboard panel
// with margin. Do not shrink the central panel or the stage without re-checking.
const SCREENS: FloatingScreen[] = [
  { key: "publishers", label: "Publishers", focal: "50% 18%", leftPct: 85, topPct: 18 },
  { key: "announcements", label: "Communication", focal: "9% 45%", leftPct: 84, topPct: 55 },
  { key: "analytics", label: "Analytics", focal: "58% 26%", leftPct: 85, topPct: 83 },
  { key: "agreements", label: "Agreements", focal: "55% 15%", leftPct: 16, topPct: 20 },
  { key: "payments", label: "Payments", focal: "50% 26%", leftPct: 16, topPct: 86 },
]

export function FinalCinematicReveal() {
  const stageRef = useRef<HTMLDivElement>(null)
  const tileRefs = useRef<(HTMLDivElement | null)[]>([])
  const centralRef = useRef<HTMLDivElement>(null)
  const robotRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return
      const stage = stageRef.current
      if (!stage) return

      const trigger = ScrollTrigger.create({
        trigger: stage,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        onUpdate(self) {
          const k = self.progress
          // Phase 1 (0 -> 0.32): calm — headline alone, screens still gathering off-canvas.
          // Phase 2 (0.32 -> 1): screens fade in and converge as the headline recedes.
          const reveal = Math.min(1, Math.max(0, (k - 0.32) / 0.68))
          const w = stage.clientWidth
          const h = stage.clientHeight

          gsap.set(introRef.current, { opacity: 1 - Math.min(1, k / 0.3), scale: 1 - Math.min(1, k / 0.3) * 0.06 })

          tileRefs.current.forEach((el, i) => {
            if (!el) return
            const { leftPct, topPct } = SCREENS[i]
            const dx = ((leftPct - 50) / 100) * w
            const dy = ((topPct - 50) / 100) * h
            gsap.set(el, {
              xPercent: -50,
              yPercent: -50,
              x: -dx * reveal * 0.7,
              y: -dy * reveal * 0.7,
              opacity: Math.min(1, reveal / 0.25) * (1 - reveal * 0.55),
              scale: 0.9 + reveal * 0.1 - reveal * 0.22,
            })
          })
          gsap.set(centralRef.current, { xPercent: -50, yPercent: -50, scale: 0.8 + reveal * 0.24, opacity: 0.35 + reveal * 0.65 })
          gsap.set(robotRef.current, { xPercent: -50, yPercent: -50, opacity: Math.max(0, reveal - 0.3) / 0.7, scale: 0.6 + reveal * 0.4 })
        },
      })

      return () => trigger.kill()
    },
    { scope: stageRef, dependencies: [reducedMotion] }
  )

  return (
    <Section background="hero" padding="none" className="relative overflow-hidden" aria-label="Final CTA">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} className="top-0 left-1/2 -translate-x-1/2" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #F4F0FF)" }}
      />

      <div ref={stageRef} className="relative w-full max-w-[1450px] h-[380px] sm:h-[560px] lg:h-[760px] mx-auto px-6">
        <div ref={introRef} className="absolute inset-0 flex items-center justify-center z-40 px-6 pointer-events-none">
          <h2 className="text-h2 sm:text-h1 font-bold tracking-display text-balance text-text-primary leading-[1.05] max-w-2xl text-center">
            Your Publisher Network Deserves More Than a Spreadsheet.
          </h2>
        </div>

        {SCREENS.map((s, i) => (
          <div
            key={s.key}
            ref={(el) => { tileRefs.current[i] = el }}
            className="hidden lg:block absolute z-10 w-[260px] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${s.leftPct}%`, top: `${s.topPct}%`, opacity: reducedMotion ? 1 : 0 }}
          >
            <ScreenshotCrop screenshot={SCREENSHOTS[s.key]} focal={s.focal} zoom={1.8} className="h-40 shadow-[0_20px_50px_rgba(139,92,246,0.18)] border border-brand-purple/10" sizes="260px" />
            <p className="text-[13px] font-medium text-text-muted text-center mt-2">{s.label}</p>
          </div>
        ))}

        <div
          ref={centralRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] sm:w-[460px] lg:w-[650px]"
          style={reducedMotion ? undefined : { opacity: 0.35 }}
        >
          <div className="rounded-2xl overflow-hidden glass-strong border border-brand-purple/[0.14] shadow-[0_40px_100px_rgba(139,92,246,0.24)]">
            <div className="relative w-full" style={{ aspectRatio: SCREENSHOT_ASPECT }}>
              <ScreenshotCrop screenshot={SCREENSHOTS.dashboard} focal="55% 22%" zoom={1.5} className="w-full h-full rounded-none" sizes="640px" />
            </div>
          </div>
          <p className="text-center text-sm font-semibold text-text-primary mt-3">Dashboard</p>
        </div>

        <div ref={robotRef} className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-30" style={reducedMotion ? undefined : { opacity: 0 }}>
          <RobotImage variant="celebrate" size="md" glowColor="purple" />
        </div>
      </div>

      <Container size="md" className="relative z-30 pb-20 sm:pb-28">
        <div className="flex flex-col items-center text-center gap-6">
          <FadeUp>
            <h2 className="text-h2 sm:text-h1 font-bold tracking-display text-balance text-text-primary leading-[1.05] max-w-3xl">
              One Portal. <span className="text-gradient-brand">Every Partnership.</span> Every Opportunity.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-xl">
              Built to help web, app and CTV publishers, agencies, referral partners and qualified
              individuals manage publisher opportunities through one connected partnership experience.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <CTAButtonGroup
              primary={{ label: "Access Partner Dashboard", href: "https://partners.clickdudes.com/" }}
              secondary={{ label: "Become a Partner", href: "/become-a-partner" }}
              align="center"
              size="lg"
            />
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
