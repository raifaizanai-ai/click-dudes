"use client"

import { useRef, useMemo } from "react"
import { motion } from "framer-motion"
import {
  UploadCloud, ShieldCheck, Rocket, Wallet, CreditCard, BarChart3, Bell, FileText, ChevronDown,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { FadeUp } from "@/components/motion/FadeUp"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { DashboardChip, type ChipAccent } from "@/sections/partner-dashboard/shared/DashboardChip"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { usePointerTilt } from "@/hooks/use-pointer-tilt"
import { useReducedMotion } from "@/hooks/use-media-query"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface OrbitChip {
  icon: LucideIcon
  label: string
  value: string
  accent: ChipAccent
  leftPct: number
  topPct: number
  floatDelay: number
}

const CHIPS: OrbitChip[] = [
  { icon: UploadCloud, label: "Publisher Submitted", value: "Website · GAM linked", accent: "purple", leftPct: 9,  topPct: 18, floatDelay: 0 },
  { icon: FileText,    label: "Agreement Active",     value: "NET-45 · Signed",     accent: "violet", leftPct: 50, topPct: 4,  floatDelay: 0.6 },
  { icon: ShieldCheck, label: "Approved",              value: "QC passed",           accent: "blue",   leftPct: 91, topPct: 18, floatDelay: 1.2 },
  { icon: Rocket,      label: "Live",                  value: "Publisher earning",   accent: "green",  leftPct: 93, topPct: 62, floatDelay: 1.8 },
  { icon: Wallet,      label: "Commission",            value: "$482.10 this month",  accent: "violet", leftPct: 82, topPct: 92, floatDelay: 2.4 },
  { icon: CreditCard,  label: "Payout",                value: "NET-45 schedule",     accent: "cyan",   leftPct: 50, topPct: 98, floatDelay: 3.0 },
  { icon: BarChart3,   label: "Analytics",             value: "94% approval rate",   accent: "purple", leftPct: 18, topPct: 92, floatDelay: 3.6 },
  { icon: Bell,        label: "Notification",          value: "Partner review ready",accent: "blue",   leftPct: 7,  topPct: 62, floatDelay: 4.2 },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const frameOuterRef = useRef<HTMLDivElement>(null)
  const frameTiltRef = useRef<HTMLDivElement>(null)
  const chipRefs = useRef<(HTMLDivElement | null)[]>([])
  const reducedMotion = useReducedMotion()
  const tilt = usePointerTilt(frameTiltRef, { maxRotate: 4, maxTranslateZ: 10 })

  const vectors = useMemo(
    () => CHIPS.map((c) => ({ dx: c.leftPct - 50, dy: c.topPct - 50 })),
    []
  )

  useGSAP(
    () => {
      if (reducedMotion) return
      const stage = stageRef.current
      if (!stage) return

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate(self) {
          const k = self.progress * 0.82
          const w = stage.clientWidth
          const h = stage.clientHeight
          chipRefs.current.forEach((el, i) => {
            if (!el) return
            const { dx, dy } = vectors[i]
            gsap.set(el, {
              xPercent: -50,
              yPercent: -50,
              x: -(dx / 100) * w * k,
              y: -(dy / 100) * h * k,
              opacity: 1 - k * 0.6,
              scale: 1 - k * 0.24,
            })
          })
          gsap.set(frameOuterRef.current, { xPercent: -50, yPercent: -50, scale: 1 + k * 0.14, z: k * 60 })
        },
      })

      return () => trigger.kill()
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <div ref={sectionRef} className="relative">
    <Section
      background="hero"
      padding="none"
      className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-14"
      aria-label="Partner ecosystem hero"
    >
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} className="-top-40 left-1/2 -translate-x-1/2" />
      <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.08} className="top-1/3 -left-40" />
      <GradientOrb color="violet" size="lg" blur="xl" opacity={0.08} className="top-1/4 -right-24" />

      <Container size="lg" className="relative z-10 flex flex-col items-center text-center gap-5">
        <FadeUp>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
            Click-Dudes Partner Ecosystem
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1 className="text-h1 sm:text-display font-bold tracking-display text-balance text-text-primary leading-[1.03] max-w-4xl">
            Turn Publisher Connections Into{" "}
            <span className="text-gradient-brand">Long-Term Partnerships.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
            Submit qualified web, app and CTV publishers, follow every opportunity from review to
            activation, track commissions and manage your Click-Dudes partnership from one
            intelligent dashboard.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <CTAButtonGroup
            primary={{ label: "Access Partner Dashboard", href: "https://partners.clickdudes.com/" }}
            secondary={{ label: "Become a Partner", href: "/become-a-partner" }}
            caption="For agencies, publishers, referral partners & qualified individuals."
            align="center"
            size="lg"
          />
        </FadeUp>
      </Container>

      <div
        ref={stageRef}
        className="relative mx-auto mt-10 md:mt-12 w-full px-8 sm:px-12"
        style={{ maxWidth: "1400px", aspectRatio: "16/9" }}
      >
        {CHIPS.map((chip, i) => (
          <div
            key={chip.label}
            ref={(el) => { chipRefs.current[i] = el }}
            className="hidden lg:block absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${chip.leftPct}%`,
              top: `${chip.topPct}%`,
              animation: reducedMotion ? undefined : `float-gentle ${5 + i * 0.3}s ease-in-out infinite ${chip.floatDelay}s`,
            }}
          >
            <DashboardChip icon={chip.icon} label={chip.label} value={chip.value} accent={chip.accent} size="lg" />
          </div>
        ))}

        <div
          ref={frameOuterRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[92%] sm:w-[85%] lg:w-[78%]"
          style={{ maxWidth: "1200px" }}
        >
          <motion.div
            ref={frameTiltRef}
            style={reducedMotion ? undefined : { rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1600 }}
          >
            <BrowserFrame screenshot={SCREENSHOTS.dashboard} urlLabel="partners.clickdudes.com/dashboard" priority glow="purple" sizes="1140px" />
            <div className="absolute -right-6 sm:-right-10 -top-8 sm:-top-12 z-40">
              <RobotImage variant="wave" size="md" glowColor="purple" />
            </div>
          </motion.div>
        </div>
      </div>

      {!reducedMotion && (
        <div className="relative z-10 flex justify-center mt-6 md:mt-4">
          <motion.div
            className="flex flex-col items-center gap-1.5 text-text-muted"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <ChevronDown aria-hidden="true" className="w-4 h-4" />
          </motion.div>
        </div>
      )}
    </Section>
    </div>
  )
}
