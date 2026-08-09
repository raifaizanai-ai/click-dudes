"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Megaphone, Bell, MessageCircle, LifeBuoy } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { FadeUp } from "@/components/motion/FadeUp"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS, type ScreenshotKey } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface Panel {
  key: ScreenshotKey
  label: string
  icon: LucideIcon
  urlLabel: string
  description: string
  pulse?: boolean
}

const PANELS: Panel[] = [
  { key: "announcements", label: "Announcements", icon: Megaphone, urlLabel: "partners.clickdudes.com/announcements",
    description: "Company-wide updates from Click-Dudes, the moment they're published." },
  { key: "notifications", label: "Notifications", icon: Bell, urlLabel: "partners.clickdudes.com/notifications",
    description: "Real-time alerts for review status, payouts and account activity.", pulse: true },
  { key: "liveChat", label: "Live Chat", icon: MessageCircle, urlLabel: "partners.clickdudes.com/live-chat",
    description: "Reach the Click-Dudes team directly for fast answers." },
  { key: "support", label: "Support", icon: LifeBuoy, urlLabel: "partners.clickdudes.com/support",
    description: "Open and track support tickets from submission to resolution." },
]

const OFFSETS = [-2, -0.7, 0.7, 2]

export function CommunicationStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  return (
    <Section background="base" padding="lg" aria-label="Communication">
      <Container size="xl" className="flex flex-col gap-10">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              Communication
            </span>
            <h2 className="text-h3 sm:text-h2 lg:text-h1 font-bold text-text-primary tracking-heading text-balance">
              You&apos;re Never Left Guessing.
            </h2>
            <p className="text-body-lg text-text-secondary max-w-xl">
              Updates, support and partnership communication stay connected inside the same ecosystem.
            </p>
          </div>
        </FadeUp>

        <div className="relative rounded-3xl bg-gradient-navy overflow-hidden p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-purple/20 blur-[100px]" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-cyan/15 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="flex flex-col gap-2">
              {PANELS.map((p, i) => {
                const isActive = i === activeIndex
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex items-start gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 focus-ring",
                      isActive ? "glass-on-navy-active border-l-2 border-l-brand-cyan" : "hover:bg-white/5"
                    )}
                  >
                    <span className={cn(
                      "relative flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0",
                      isActive ? "bg-brand-cyan text-brand-navy shadow-[0_0_16px_rgba(103,232,249,0.45)]" : "bg-white/10 text-white/70"
                    )}>
                      <p.icon aria-hidden="true" className="w-4 h-4" />
                      {p.pulse && !reducedMotion && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-green animate-[ping-slow_1.8s_ease-out_infinite]" />
                      )}
                    </span>
                    <div>
                      <p className={cn("text-sm font-semibold", isActive ? "text-white" : "text-white/70")}>{p.label}</p>
                      {isActive && (
                        <p className="text-[11px] text-white/75 leading-relaxed mt-1">{p.description}</p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="relative mx-auto w-full max-w-[560px]" style={{ perspective: 1400, aspectRatio: "6/5" }}>
              {PANELS.map((p, i) => {
                const distance = i - activeIndex
                const isActive = distance === 0
                return (
                  <motion.div
                    key={p.key}
                    className="absolute inset-0"
                    animate={
                      reducedMotion
                        ? { opacity: isActive ? 1 : 0 }
                        : {
                            rotateY: distance * 10,
                            x: distance * 40,
                            scale: 1 - Math.abs(distance) * 0.08,
                            opacity: Math.abs(distance) > 2 ? 0 : 1 - Math.abs(distance) * 0.22,
                            rotate: OFFSETS[i] * (isActive ? 0 : 1),
                          }
                    }
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ zIndex: 10 - Math.abs(distance) }}
                  >
                    <BrowserFrame
                      screenshot={SCREENSHOTS[p.key]}
                      urlLabel={p.urlLabel}
                      glow={isActive ? "cyan" : "none"}
                      sizes="900px"
                      className={cn(!isActive && "pointer-events-none")}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
