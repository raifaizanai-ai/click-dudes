"use client"

import { useEffect, useState } from "react"
import { UploadCloud, ShieldCheck, ClipboardCheck, Zap, Wallet } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { JourneyCard, type JourneyStepKey } from "@/sections/partner-dashboard/shared/JourneyCard"
import { cn } from "@/lib/utils"

interface Step {
  key: JourneyStepKey
  step: string
  title: string
  icon: LucideIcon
  description: string
}

const STEPS: Step[] = [
  { key: "connect", step: "01", title: "Connect", icon: UploadCloud,
    description: "You introduce and submit a qualified publisher opportunity." },
  { key: "review", step: "02", title: "Review", icon: ShieldCheck,
    description: "Click-Dudes evaluates publisher eligibility and traffic quality." },
  { key: "onboard", step: "03", title: "Onboard", icon: ClipboardCheck,
    description: "Approved opportunities move through partner onboarding and activation." },
  { key: "monetize", step: "04", title: "Monetize", icon: Zap,
    description: "Once activated, monetization begins through the assigned partner workflow." },
  { key: "earn", step: "05", title: "Earn", icon: Wallet,
    description: "Eligible partnership commission becomes visible inside the Partner Portal." },
]

function StepperDesktop({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center w-full">
      {STEPS.map((s, i) => (
        <div key={s.key} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <span
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 flex-shrink-0",
                i <= activeIndex
                  ? "bg-brand-purple border-brand-purple text-white"
                  : "bg-surface-card border-[rgba(7,17,47,0.12)] text-text-muted"
              )}
            >
              <s.icon aria-hidden="true" className="w-4 h-4" />
            </span>
            <span className={cn("text-xs font-semibold transition-colors duration-300", i <= activeIndex ? "text-text-primary" : "text-text-muted")}>
              {s.title}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="h-[2px] flex-1 mx-2 rounded-full bg-[rgba(7,17,47,0.08)] overflow-hidden -mt-6">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan transition-all duration-500 ease-out"
                style={{ width: i < activeIndex ? "100%" : "0%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function PartnershipJourney() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-journey-trigger]"))
    if (triggers.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"))
            if (!Number.isNaN(idx)) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )
    triggers.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const active = STEPS[activeIndex]

  return (
    <Section background="base" padding="lg" aria-label="How the partnership works">
      <Container size="lg" className="flex flex-col gap-10">
        <SectionHeader
          badge="How It Works"
          heading="From Introduction to Recurring Partnership Revenue."
          subtext="One publisher opportunity, followed from first submission to recurring commission."
          align="center"
        />

        {/* Desktop: sticky stepper + morphing card, driven by scroll trigger zones */}
        <div className="hidden lg:block relative">
          <div className="sticky top-28 z-10 flex flex-col gap-8 max-w-3xl mx-auto">
            <StepperDesktop activeIndex={activeIndex} />
            <div className="flex flex-col items-center gap-4">
              <p className="text-body text-text-secondary text-center max-w-md">{active.description}</p>
              <JourneyCard activeKey={active.key} className="w-full max-w-md" />
            </div>
          </div>

          {STEPS.map((s, i) => (
            <div key={s.key} data-journey-trigger data-index={i} className="h-[42vh]" aria-hidden="true" />
          ))}
        </div>

        {/* Mobile: real vertical journey, one card per step, connected by a line */}
        <div className="flex lg:hidden flex-col gap-0">
          {STEPS.map((s, i) => (
            <div key={s.key} className="relative flex gap-4 pb-10 last:pb-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white flex-shrink-0">
                  <s.icon aria-hidden="true" className="w-4 h-4" />
                </span>
                {i < STEPS.length - 1 && (
                  <div className="w-[2px] flex-1 mt-2 rounded-full bg-gradient-to-b from-brand-purple/40 to-brand-purple/10" />
                )}
              </div>
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div>
                  <h3 className="text-h4 font-semibold text-text-primary tracking-heading">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1">{s.description}</p>
                </div>
                <JourneyCard activeKey={s.key} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
