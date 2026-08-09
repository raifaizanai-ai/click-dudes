"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Eye, Link2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { FadeUp } from "@/components/motion/FadeUp"
import { CAPABILITIES } from "@/sections/partner-dashboard/shared/ScaleBenefitsFrames"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const OUTCOMES = [
  { icon: CheckCircle2, label: "Everything Organized" },
  { icon: Eye, label: "Every Opportunity Visible" },
  { icon: Link2, label: "Every Partnership Connected" },
]

export function WhyPartnersSection() {
  const [activeKey, setActiveKey] = useState(CAPABILITIES[0].key)
  const reducedMotion = useReducedMotion()
  const active = CAPABILITIES.find((c) => c.key === activeKey) ?? CAPABILITIES[0]

  return (
    <Section background="section" padding="lg" aria-label="Why partners use the portal">
      <Container size="lg" className="flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-6">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                Why Partners Choose Click-Dudes
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="text-h2 sm:text-h1 font-bold tracking-display text-balance text-text-primary leading-[1.05]">
                Built to Help <span className="text-gradient-brand">Partnerships Scale.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-md">
                Every feature in the Partner Portal exists to remove friction from one thing:
                turning a publisher introduction into a lasting, organized partnership.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="flex flex-col gap-1 mt-2">
                {CAPABILITIES.map((c) => {
                  const isActive = c.key === activeKey
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setActiveKey(c.key)}
                      onMouseEnter={() => setActiveKey(c.key)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 focus-ring",
                        isActive ? "bg-brand-purple/10" : "hover:bg-surface-section"
                      )}
                    >
                      <span className={cn("text-xs font-semibold tabular-nums", isActive ? "text-brand-purple" : "text-text-muted")}>
                        {c.step}
                      </span>
                      <c.icon aria-hidden="true" className={cn("w-4 h-4 flex-shrink-0", isActive ? "text-brand-purple" : "text-text-muted")} />
                      <span className={cn("text-sm font-medium transition-colors", isActive ? "text-text-primary" : "text-text-secondary")}>
                        {c.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </FadeUp>
          </div>

          <div className="relative min-h-[340px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.key}
                className="absolute inset-0 card-base p-6 sm:p-8 flex flex-col justify-center"
                initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97, clipPath: "inset(6% round 24px)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0% round 24px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <active.icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-label">{active.title}</span>
                </div>
                <active.Frame />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[rgba(7,17,47,0.08)] pt-10">
          {OUTCOMES.map((o) => (
            <div key={o.label} className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-purple/10 text-brand-purple flex-shrink-0">
                <o.icon aria-hidden="true" className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold text-text-primary">{o.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
