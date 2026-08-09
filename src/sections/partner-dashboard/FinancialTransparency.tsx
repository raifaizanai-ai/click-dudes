"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Wallet, FileText, Building2, Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS, SCREENSHOT_ASPECT, type ScreenshotKey } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface Tab {
  key: ScreenshotKey
  label: string
  icon: LucideIcon
  urlLabel: string
  description: string
  facts: string[]
}

const TABS: Tab[] = [
  { key: "payments", label: "Payments", icon: Wallet, urlLabel: "partners.clickdudes.com/payments",
    description: "Track commission balances from on-hold to paid, with a clear NET-45 payout schedule and threshold.",
    facts: ["On Hold", "Available", "Processing", "Paid", "NET-45 Payout Schedule"] },
  { key: "agreements", label: "Agreements", icon: FileText, urlLabel: "partners.clickdudes.com/agreements",
    description: "Every partnership agreement issued to your organization, with full version history.",
    facts: ["Agreement Access", "Terms", "Status"] },
  { key: "organization", label: "Organization", icon: Building2, urlLabel: "partners.clickdudes.com/organization",
    description: "Company profile, partner code, commission rate and payment method, all in one place.",
    facts: ["Company Profile", "Partner Code", "Commission Rate", "Payment Method"] },
]

export function FinancialTransparency() {
  const [activeKey, setActiveKey] = useState<ScreenshotKey>(TABS[0].key)
  const active = TABS.find((t) => t.key === activeKey) ?? TABS[0]
  const reducedMotion = useReducedMotion()

  return (
    <Section background="base" padding="lg" aria-label="Financial transparency">
      <Container size="xl" className="flex flex-col gap-10">
        <SectionHeader
          badge="Financial Records"
          heading="Your Earnings. Your Records. Your Partnership."
          align="center"
        />

        <div className="flex justify-center gap-2 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              aria-pressed={activeKey === tab.key}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-ring",
                activeKey === tab.key ? "bg-brand-purple text-white shadow-[0_8px_24px_rgba(139,92,246,0.28)]" : "glass text-text-secondary hover:text-text-primary"
              )}
            >
              <tab.icon aria-hidden="true" className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card-base grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-start p-6 sm:p-8 lg:p-10">
          <div className="relative min-h-[140px] lg:pt-2">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.key}
                className="absolute inset-0 flex flex-col gap-4"
                initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-body text-text-secondary leading-relaxed">{active.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {active.facts.map((fact) => (
                    <li key={fact} className="flex items-center gap-2.5 text-sm text-text-primary font-medium">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex-shrink-0">
                        <Check aria-hidden="true" className="w-3 h-3" />
                      </span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative" style={{ aspectRatio: SCREENSHOT_ASPECT }}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.key}
                className="absolute inset-0"
                initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <BrowserFrame screenshot={SCREENSHOTS[active.key]} urlLabel={active.urlLabel} sizes="(max-width: 1024px) 92vw, 900px" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}
