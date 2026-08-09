"use client"

import { Globe, Smartphone, Tv, Building2, GitBranch, User, ShieldCheck, Wallet, Play, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { cn } from "@/lib/utils"

function CornerBot() {
  return (
    <div className="absolute -bottom-3 -right-3 z-10">
      <RobotImage variant="main" size="xs" glowColor="purple" />
    </div>
  )
}

function WebPublisherStage() {
  return (
    <div className="relative">
      <div className="w-full rounded-2xl border border-[rgba(7,17,47,0.08)] bg-white overflow-hidden shadow-[0_20px_60px_rgba(7,17,47,0.08)]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[rgba(7,17,47,0.06)]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-[11px] text-text-muted">acme-media.com</span>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <div className="h-3 w-2/3 rounded bg-surface-section" />
          <div className="h-2.5 w-1/2 rounded bg-surface-section" />
          <div className="flex gap-3 mt-2">
            <div className="flex-1 h-16 rounded-lg bg-brand-purple/[0.06] border border-brand-purple/15 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-brand-purple">Ad Slot · Active</span>
            </div>
            <div className="flex-1 h-16 rounded-lg bg-brand-cyan/[0.08] border border-brand-cyan/20 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-brand-blue">Header Bidding</span>
            </div>
          </div>
          <div className="h-2 w-3/4 rounded bg-surface-section mt-1" />
          <div className="h-2 w-2/3 rounded bg-surface-section" />
        </div>
      </div>
      <CornerBot />
    </div>
  )
}

function AppPublisherStage() {
  return (
    <div className="relative flex justify-center py-2">
      <div className="w-[220px] rounded-[28px] border border-[rgba(7,17,47,0.1)] bg-white shadow-[0_20px_60px_rgba(7,17,47,0.1)] p-4">
        <div className="flex justify-center mb-3"><div className="w-14 h-1.5 rounded-full bg-surface-section" /></div>
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-surface-section" />
          ))}
        </div>
        <div className="rounded-xl bg-brand-purple/[0.06] border border-brand-purple/15 p-2.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-brand-purple">Rewarded Video</span>
          <span className="text-[9px] text-brand-green font-semibold">Active</span>
        </div>
      </div>
      <CornerBot />
    </div>
  )
}

function CtvPublisherStage() {
  return (
    <div className="relative flex flex-col items-center gap-2 py-2">
      <div className="relative w-full max-w-[360px] aspect-video rounded-2xl border-[3px] border-brand-navy bg-brand-navy overflow-hidden shadow-[0_20px_60px_rgba(7,17,47,0.18)]">
        <span className="absolute top-2.5 left-2.5 text-[9px] font-semibold text-brand-green bg-white/10 px-2 py-0.5 rounded-full">● Streaming</span>
        <div className="absolute inset-0 grid grid-cols-3 gap-1.5 p-6 pt-9">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md bg-white/10" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/25">
            <Play aria-hidden="true" className="w-4 h-4 text-white fill-white" />
          </span>
        </div>
      </div>
      <div className="w-16 h-1.5 rounded-full bg-[rgba(7,17,47,0.15)]" />
      <CornerBot />
    </div>
  )
}

function HubNode({ label, icon: Icon, leftPct, topPct }: { label: string; icon: LucideIcon; leftPct: number; topPct: number }) {
  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-full glass border border-brand-purple/15 text-brand-purple">
        <Icon aria-hidden="true" className="w-4 h-4" />
      </span>
      <span className="text-[10px] font-medium text-text-secondary whitespace-nowrap">{label}</span>
    </div>
  )
}

function AgencyStage() {
  const nodes = [
    { label: "Publisher A", icon: Globe, leftPct: 20, topPct: 20 },
    { label: "Publisher B", icon: Globe, leftPct: 80, topPct: 20 },
    { label: "Publisher C", icon: Smartphone, leftPct: 15, topPct: 84 },
    { label: "Publisher D", icon: Tv, leftPct: 85, topPct: 84 },
  ]
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-[4/3]">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
        {nodes.map((n) => (
          <line key={n.label} x1="50" y1="52" x2={n.leftPct} y2={n.topPct} stroke="rgba(139,92,246,0.22)" strokeWidth="0.4" strokeDasharray="1.2 2" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1.5">
        <span className="flex items-center justify-center w-16 h-16 rounded-full glass-strong border border-brand-purple/20 text-brand-purple shadow-[0_16px_40px_rgba(139,92,246,0.2)]">
          <Building2 aria-hidden="true" className="w-6 h-6" />
        </span>
        <span className="text-xs font-semibold text-text-primary">Your Agency</span>
      </div>
      {nodes.map((n) => <HubNode key={n.label} {...n} />)}
    </div>
  )
}

function FlowNode({ label, icon: Icon, isBrand }: { label: string; icon: LucideIcon; isBrand?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0">
      <span
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0",
          isBrand ? "bg-brand-purple text-white shadow-[0_10px_28px_rgba(139,92,246,0.3)]" : "glass border border-brand-purple/15 text-brand-purple"
        )}
      >
        <Icon aria-hidden="true" className="w-5 h-5" />
      </span>
      <span className="text-[11px] font-medium text-text-secondary text-center whitespace-nowrap">{label}</span>
    </div>
  )
}

function ReferralStage() {
  const nodes = [
    { label: "Partner", icon: GitBranch },
    { label: "Publisher", icon: Globe },
    { label: "Click-Dudes", icon: Building2, isBrand: true },
    { label: "Review", icon: ShieldCheck },
    { label: "Commission", icon: Wallet },
  ]
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-6 overflow-x-auto">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <FlowNode {...n} />
          {i < nodes.length - 1 && <ArrowRight aria-hidden="true" className="w-4 h-4 text-brand-purple/30 flex-shrink-0" />}
        </div>
      ))}
    </div>
  )
}

function IndividualStage() {
  const nodes = [
    { label: "You", icon: User },
    { label: "Publisher Opportunity", icon: Globe },
    { label: "Click-Dudes", icon: Building2, isBrand: true },
  ]
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 py-10">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-2 sm:gap-3">
          <FlowNode {...n} />
          {i < nodes.length - 1 && <ArrowRight aria-hidden="true" className="w-5 h-5 text-brand-purple/30 flex-shrink-0" />}
        </div>
      ))}
    </div>
  )
}

export interface PartnerType {
  key: string
  label: string
  icon: LucideIcon
  description: string
  Stage: () => React.ReactElement
}

export const PARTNER_TYPES: PartnerType[] = [
  { key: "web", label: "Web Publishers", icon: Globe, Stage: WebPublisherStage,
    description: "Submit qualified website publishers and track their opportunity through review, onboarding and activation." },
  { key: "app", label: "App Publishers", icon: Smartphone, Stage: AppPublisherStage,
    description: "Introduce qualified Android or iOS app publishers and follow their onboarding journey through one partner workflow." },
  { key: "ctv", label: "CTV Publishers", icon: Tv, Stage: CtvPublisherStage,
    description: "Connect eligible CTV publisher opportunities with the Click-Dudes partner ecosystem." },
  { key: "agency", label: "Agencies", icon: Building2, Stage: AgencyStage,
    description: "Manage multiple publisher introductions and partnership activity through a single organization profile." },
  { key: "referral", label: "Referral Partners", icon: GitBranch, Stage: ReferralStage,
    description: "Introduce qualified publishers, track progress and follow eligible commission activity under your agreed partner terms." },
  { key: "individual", label: "Individuals", icon: User, Stage: IndividualStage,
    description: "Qualified individuals with publisher relationships can participate without needing to operate a large agency." },
]
