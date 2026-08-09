"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS, SCREENSHOT_ASPECT, type ScreenshotKey } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface ExplorerItem {
  key: ScreenshotKey
  label: string
  urlLabel: string
  description: string
}

const ITEMS: ExplorerItem[] = [
  { key: "dashboard", label: "Overview", urlLabel: "partners.clickdudes.com/dashboard",
    description: "One screen shows everything about your partnership performance." },
  { key: "submitPublisher", label: "Submit Publishers", urlLabel: "partners.clickdudes.com/submit-publisher",
    description: "A short, structured form takes you from application to submission." },
  { key: "eligibility", label: "Eligibility", urlLabel: "partners.clickdudes.com/eligibility",
    description: "Every submission is checked against a consistent set of standards." },
  { key: "publishers", label: "Publishers", urlLabel: "partners.clickdudes.com/publishers",
    description: "Status, progress and revenue share for every publisher you've submitted." },
  { key: "payments", label: "Payments", urlLabel: "partners.clickdudes.com/payments",
    description: "Every dollar you've earned, tracked from commission to payout." },
  { key: "agreements", label: "Agreements", urlLabel: "partners.clickdudes.com/agreements",
    description: "Every partnership agreement, with full version history." },
  { key: "organization", label: "Organization", urlLabel: "partners.clickdudes.com/organization",
    description: "Company details, payment method, billing and your team, in one profile." },
  { key: "announcements", label: "Communication", urlLabel: "partners.clickdudes.com/announcements",
    description: "Announcements, notifications, live chat and support, always connected." },
  { key: "analytics", label: "Analytics", urlLabel: "partners.clickdudes.com/analytics",
    description: "One view of submissions, approvals and commission — updated as your network grows." },
]

export function ProductExplorer() {
  const [activeKey, setActiveKey] = useState<ScreenshotKey>(ITEMS[0].key)
  const reducedMotion = useReducedMotion()
  const active = ITEMS.find((i) => i.key === activeKey) ?? ITEMS[0]

  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-explorer-trigger]"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-key") as ScreenshotKey
            if (key) setActiveKey(key)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )
    triggers.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Section background="section" padding="lg" aria-label="Explore the partner portal">
      <Container size="xl" className="flex flex-col gap-10">
        <SectionHeader badge="Product Explorer" heading="Explore the Partner Portal." align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-6">
          <nav aria-label="Partner portal sections" className="hidden lg:block">
            <ul className="sticky top-32 flex flex-col gap-1">
              {ITEMS.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => document.querySelector(`[data-key="${item.key}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                      activeKey === item.key
                        ? "bg-brand-purple/10 text-brand-purple"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-section"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative">
            {/* Mobile: simple chip nav since there's no sticky frame on small screens */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 -mx-4 px-4">
              {ITEMS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveKey(item.key)}
                  className={cn(
                    "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus-ring",
                    activeKey === item.key ? "bg-brand-purple text-white" : "glass text-text-secondary"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="lg:hidden flex flex-col gap-4">
              <div>
                <h3 className="text-h4 font-semibold text-text-primary tracking-heading">{active.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-1">{active.description}</p>
              </div>
              <BrowserFrame screenshot={SCREENSHOTS[active.key]} urlLabel={active.urlLabel} sizes="92vw" />
            </div>

            {/* Desktop: sticky frame + invisible scroll-trigger zones */}
            <div className="hidden lg:block relative">
              <div className="sticky top-28 z-10 flex flex-col gap-5" style={{ maxWidth: "min(76vw, 1120px)" }}>
                <div className="relative min-h-[66px]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={active.key}
                      className="absolute inset-0"
                      initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-h3 font-semibold text-text-primary tracking-heading">{active.label}</h3>
                      <p className="text-body text-text-secondary leading-relaxed mt-1 max-w-lg">{active.description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative" style={{ aspectRatio: SCREENSHOT_ASPECT }}>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={active.key}
                      className="absolute inset-0"
                      initial={reducedMotion ? undefined : { opacity: 0, scale: 0.96, clipPath: "inset(8% round 24px)" }}
                      animate={{ opacity: 1, scale: 1, clipPath: "inset(0% round 24px)" }}
                      exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformPerspective: 1400 }}
                    >
                      <BrowserFrame screenshot={SCREENSHOTS[active.key]} urlLabel={active.urlLabel} sizes="1120px" priority={active.key === "dashboard"} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {ITEMS.map((item) => (
                <div key={item.key} data-explorer-trigger data-key={item.key} className="h-[46vh]" aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
