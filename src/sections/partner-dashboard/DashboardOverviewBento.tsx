"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity, UploadCloud, Rocket, Clock, Target, Wallet, TrendingUp, LifeBuoy,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { OS_MODULES } from "@/sections/partner-dashboard/shared/PartnerOSModules"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface CentralMetric {
  icon: LucideIcon
  label: string
  value: string
  pill?: boolean
}

const CENTRAL_METRICS: CentralMetric[] = [
  { icon: Activity, label: "Partner Status", value: "Active", pill: true },
  { icon: UploadCloud, label: "Publishers Submitted", value: "4" },
  { icon: Rocket, label: "Live Publishers", value: "0" },
  { icon: Clock, label: "Pending Review", value: "0" },
  { icon: Target, label: "Approval Rate", value: "100%" },
  { icon: Wallet, label: "Commission Earned", value: "$0.00" },
  { icon: TrendingUp, label: "Payout Progress", value: "0%" },
  { icon: LifeBuoy, label: "Open Support Tickets", value: "0" },
]

function CentralDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="card-base p-5 sm:p-6 w-full">
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-xs font-semibold text-text-primary tracking-heading">Partner Dashboard</span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-green">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Live
        </span>
      </div>
      <div className={cn("grid gap-2.5", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4")}>
        {CENTRAL_METRICS.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5 rounded-xl bg-surface-section px-3 py-2.5">
            <m.icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
            {m.pill ? (
              <span className="text-xs font-bold text-brand-green">{m.value}</span>
            ) : (
              <span className="text-base font-bold text-text-primary">{m.value}</span>
            )}
            <span className="text-[10px] text-text-muted leading-tight">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DashboardOverviewBento() {
  const [active, setActive] = useState<string | null>(null)
  const reducedMotion = useReducedMotion()

  return (
    <Section background="base" padding="lg" aria-label="Everything your partnership needs">
      <Container size="xl" className="flex flex-col gap-10">
        <SectionHeader
          badge="One Dashboard"
          heading="Everything Your Partnership Needs. One Dashboard."
          subtext="From publisher submissions and review status to commissions, agreements and support — everything stays connected in one partner workspace."
          align="center"
        />

        {/* Desktop: connected asymmetric system */}
        <div className="hidden lg:block relative mx-auto w-full max-w-[1300px]" style={{ aspectRatio: "1300/800" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
            {OS_MODULES.map((m) => (
              <line
                key={m.key}
                x1="50" y1="50" x2={m.leftPct} y2={m.topPct}
                stroke={active === m.key ? "rgba(139,92,246,0.6)" : "rgba(139,92,246,0.14)"}
                strokeWidth={active === m.key ? 0.5 : 0.28}
                strokeDasharray="1.2 2"
                style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[50%]">
            <CentralDashboard />
          </div>

          {OS_MODULES.map((m) => {
            const isActive = active === m.key
            return (
              <motion.div
                key={m.key}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${m.leftPct}%`, top: `${m.topPct}%`, width: m.width }}
                onMouseEnter={() => setActive(m.key)}
                onMouseLeave={() => setActive(null)}
                whileHover={reducedMotion ? undefined : { scale: 1.05, zIndex: 30 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className={cn(
                    "card-base p-4 flex flex-col gap-3 transition-shadow duration-300",
                    isActive && "shadow-[0_16px_44px_rgba(139,92,246,0.22)] border-brand-purple/20"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-purple/10 text-brand-purple flex-shrink-0">
                      <m.icon aria-hidden="true" className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-semibold text-text-primary">{m.title}</span>
                  </div>
                  <m.render />
                  <p className={cn("text-[10px] text-text-muted leading-snug transition-opacity duration-300", isActive ? "opacity-100" : "opacity-70")}>
                    {m.caption}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: simplified dashboard + stacked connected modules */}
        <div className="flex lg:hidden flex-col gap-6">
          <CentralDashboard compact />
          <div className="flex flex-col">
            {OS_MODULES.map((m, i) => (
              <div key={m.key} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex-shrink-0">
                    <m.icon aria-hidden="true" className="w-4 h-4" />
                  </span>
                  {i < OS_MODULES.length - 1 && (
                    <div className="w-[2px] flex-1 mt-2 rounded-full bg-brand-purple/10" />
                  )}
                </div>
                <div className="card-base p-4 flex flex-col gap-3 flex-1 min-w-0">
                  <span className="text-xs font-semibold text-text-primary">{m.title}</span>
                  <m.render />
                  <p className="text-[10px] text-text-muted leading-snug">{m.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
