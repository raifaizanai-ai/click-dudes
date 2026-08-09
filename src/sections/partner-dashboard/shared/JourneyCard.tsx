"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Clock, Globe, ArrowRight, TrendingUp } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export type JourneyStepKey = "connect" | "review" | "onboard" | "monetize" | "earn"

interface StatusPillInfo {
  label: string
  className: string
}

const STATUS_PILL: Record<JourneyStepKey, StatusPillInfo> = {
  connect: { label: "Draft", className: "bg-surface-section text-text-secondary border-[rgba(7,17,47,0.08)]" },
  review: { label: "In Review", className: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  onboard: { label: "Approved", className: "bg-brand-blue/10 text-brand-blue border-brand-blue/20" },
  monetize: { label: "Live", className: "bg-brand-green/10 text-brand-green border-brand-green/20" },
  earn: { label: "Paid", className: "bg-brand-purple/10 text-brand-purple border-brand-purple/20" },
}

function FieldRow({ label, value, pill }: { label: string; value: string; pill?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[rgba(7,17,47,0.06)] last:border-b-0">
      <span className="text-xs text-text-muted">{label}</span>
      {pill ? (
        <span className="text-xs font-semibold text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full">{value}</span>
      ) : (
        <span className="text-sm font-medium text-text-primary">{value}</span>
      )}
    </div>
  )
}

function ChecklistRow({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[rgba(7,17,47,0.06)] last:border-b-0">
      <span className="text-sm text-text-primary font-medium">{label}</span>
      {done ? (
        <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-green">
          <Check aria-hidden="true" className="w-3.5 h-3.5" /> Passed
        </span>
      ) : (
        <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-600">
          <Clock aria-hidden="true" className="w-3.5 h-3.5" /> Pending
        </span>
      )}
    </div>
  )
}

function ConnectContent() {
  return (
    <div className="flex flex-col gap-1">
      <FieldRow label="Publisher Name" value="Acme Media" />
      <FieldRow label="Publisher Type" value="Web Publisher" pill />
      <FieldRow label="Property URL" value="acme-media.com" />
      <FieldRow label="GAM Network Code" value="123-456-7890" />
      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-purple text-white text-sm font-semibold py-2.5">
        Submit Publisher <ArrowRight aria-hidden="true" className="w-4 h-4" />
      </div>
    </div>
  )
}

function ReviewContent() {
  return (
    <div className="flex flex-col gap-1">
      <ChecklistRow label="Account Health" done />
      <ChecklistRow label="Traffic Quality" done />
      <ChecklistRow label="Payment History" done={false} />
      <ChecklistRow label="Policy Review" done={false} />
    </div>
  )
}

function OnboardContent() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-3 py-2 border-b border-[rgba(7,17,47,0.06)]">
        <span className="text-sm text-text-primary font-medium">Approved</span>
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/10 text-brand-green">
          <Check aria-hidden="true" className="w-3.5 h-3.5" />
        </span>
      </div>
      <FieldRow label="Assigned Partner" value="Partnerships Team" />
      <FieldRow label="Invitation" value="Sent" />
      <div className="flex flex-col gap-1.5 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Activation</span>
          <span className="text-xs font-semibold text-brand-blue">In Progress</span>
        </div>
        <div className="h-1.5 rounded-full bg-brand-blue/10 overflow-hidden">
          <div className="h-full w-[55%] rounded-full bg-brand-blue" />
        </div>
      </div>
    </div>
  )
}

function MonetizeContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="relative flex items-center justify-center w-2 h-2 rounded-full bg-brand-green">
          <span className="absolute inset-0 rounded-full bg-brand-green animate-[ping-slow_1.8s_ease-out_infinite]" />
        </span>
        <span className="text-sm font-semibold text-text-primary">Monetization Active</span>
      </div>
      <svg viewBox="0 0 200 60" className="w-full h-14" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,50 30,44 60,46 90,30 120,32 150,14 180,18 200,6"
          fill="none"
          stroke="var(--color-brand-purple)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <TrendingUp aria-hidden="true" className="w-3.5 h-3.5 text-brand-cyan" />
        AdX + Header Bidding enabled
      </div>
      <FieldRow label="Ad Units" value="Active" pill />
    </div>
  )
}

function EarnContent() {
  return (
    <div className="flex flex-col gap-1">
      <FieldRow label="Commission Recorded" value="$482.10" />
      <FieldRow label="Payment Status" value="Processing" pill />
      <FieldRow label="Month" value="This Month" />
      <div className="flex flex-col gap-1.5 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Payout Progress · NET-45</span>
          <span className="text-xs font-semibold text-brand-purple">64%</span>
        </div>
        <div className="h-1.5 rounded-full bg-brand-purple/10 overflow-hidden">
          <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan" />
        </div>
      </div>
    </div>
  )
}

const CONTENT: Record<JourneyStepKey, () => React.ReactElement> = {
  connect: ConnectContent,
  review: ReviewContent,
  onboard: OnboardContent,
  monetize: MonetizeContent,
  earn: EarnContent,
}

interface JourneyCardProps {
  activeKey: JourneyStepKey
  className?: string
}

export function JourneyCard({ activeKey, className }: JourneyCardProps) {
  const reducedMotion = useReducedMotion()
  const Content = CONTENT[activeKey]
  const status = STATUS_PILL[activeKey]

  return (
    <div className={cn("card-base p-6 flex flex-col gap-5", className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex-shrink-0">
            <Globe aria-hidden="true" className="w-4 h-4" />
          </span>
          <span className="text-sm font-semibold text-text-primary">acme-media.com</span>
        </div>
        <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors duration-300", status.className)}>
          {status.label}
        </span>
      </div>

      <div className="relative min-h-[220px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeKey}
            className="absolute inset-0"
            initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
