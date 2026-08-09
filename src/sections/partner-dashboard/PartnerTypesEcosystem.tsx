"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { PARTNER_TYPES } from "@/sections/partner-dashboard/shared/PartnerTypeStages"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export function PartnerTypesEcosystem() {
  const [activeKey, setActiveKey] = useState(PARTNER_TYPES[0].key)
  const reducedMotion = useReducedMotion()
  const active = PARTNER_TYPES.find((t) => t.key === activeKey) ?? PARTNER_TYPES[0]

  return (
    <Section background="section" padding="lg" aria-label="Built for every type of partner">
      <Container size="xl" className="flex flex-col gap-10">
        <SectionHeader
          badge="One Ecosystem"
          heading="One Ecosystem. Different Ways to Partner."
          subtext="Publishers, agencies, referral partners and individuals — different roles, one connected partnership infrastructure."
          align="center"
        />

        <div className="flex justify-center gap-2 flex-wrap">
          {PARTNER_TYPES.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveKey(t.key)}
              aria-pressed={activeKey === t.key}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-ring",
                activeKey === t.key
                  ? "bg-brand-purple text-white shadow-[0_8px_24px_rgba(139,92,246,0.28)]"
                  : "glass text-text-secondary hover:text-text-primary"
              )}
            >
              <t.icon aria-hidden="true" className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 items-center">
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.key}
                className="w-full"
                initial={reducedMotion ? undefined : { opacity: 0, scale: 0.96, clipPath: "inset(8% round 24px)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0% round 24px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <active.Stage />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative min-h-[140px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.key}
                className="absolute inset-0 flex flex-col gap-4"
                initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold">
                  <active.icon aria-hidden="true" className="w-3.5 h-3.5" />
                  {active.label}
                </span>
                <p className="text-body-lg text-text-secondary leading-relaxed">{active.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}
