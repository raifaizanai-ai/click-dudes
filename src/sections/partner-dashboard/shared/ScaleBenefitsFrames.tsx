"use client"

import { Users, ShieldCheck, Wallet, BarChart3, FileText, MessageCircle, Globe, Smartphone, Tv, Bell, MessageSquare, LifeBuoy, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Pill({ label, tone }: { label: string; tone: "green" | "amber" | "blue" | "neutral" }) {
  const toneMap: Record<typeof tone, string> = {
    green: "bg-brand-green/10 text-brand-green",
    amber: "bg-amber-500/10 text-amber-600",
    blue: "bg-brand-blue/10 text-brand-blue",
    neutral: "bg-surface-section text-text-secondary",
  }
  return <span className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", toneMap[tone])}>{label}</span>
}

function ManageFrame() {
  const rows: { name: string; icon: LucideIcon; type: string; tone: "green" | "amber" | "blue" }[] = [
    { name: "Acme Media", icon: Globe, type: "Web", tone: "green" },
    { name: "AppVenture", icon: Smartphone, type: "App", tone: "amber" },
    { name: "StreamCast", icon: Tv, type: "CTV", tone: "blue" },
    { name: "Northline Group", icon: Globe, type: "Web", tone: "green" },
  ]
  const toneLabel = { green: "Live", amber: "In Review", blue: "Approved" }
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-[1fr_80px_90px] gap-2 px-3 py-2 text-[11px] font-semibold text-text-muted uppercase tracking-label">
        <span>Publisher</span><span>Type</span><span>Status</span>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="grid grid-cols-[1fr_80px_90px] items-center gap-2 rounded-lg px-3 py-2.5 odd:bg-surface-section">
          <span className="flex items-center gap-2 text-sm font-medium text-text-primary truncate">
            <r.icon aria-hidden="true" className="w-3.5 h-3.5 text-text-muted flex-shrink-0" /> {r.name}
          </span>
          <span className="text-xs text-text-secondary">{r.type}</span>
          <Pill label={toneLabel[r.tone]} tone={r.tone} />
        </div>
      ))}
    </div>
  )
}

function ReviewFrame() {
  const stats = [
    { label: "Submitted", value: 4, tone: "neutral" as const },
    { label: "In Review", value: 0, tone: "amber" as const },
    { label: "Approved", value: 4, tone: "green" as const },
    { label: "Rejected", value: 0, tone: "blue" as const },
  ]
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 rounded-xl bg-surface-section px-3 py-3 text-center">
            <span className="text-xl font-bold text-text-primary">{s.value}</span>
            <span className="text-[10px] text-text-muted">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck aria-hidden="true" className="w-4 h-4 text-brand-green flex-shrink-0" />
        <div className="h-2 flex-1 rounded-full bg-surface-section overflow-hidden">
          <div className="h-full w-full rounded-full bg-brand-green" />
        </div>
        <span className="text-xs font-semibold text-brand-green">100%</span>
      </div>
    </div>
  )
}

function EarnFrame() {
  const cards = [
    { label: "On Hold", value: "$0.00" },
    { label: "Available", value: "$0.00" },
    { label: "Processing", value: "$482.10" },
    { label: "Paid", value: "$0.00" },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {cards.map((c) => (
        <div key={c.label} className="flex flex-col gap-1.5 rounded-xl bg-surface-section px-3 py-3">
          <span className="text-base font-bold text-text-primary">{c.value}</span>
          <span className="text-[10px] text-text-muted">{c.label}</span>
        </div>
      ))}
    </div>
  )
}

function AnalyzeFrame() {
  return (
    <div className="flex flex-col gap-4">
      <svg viewBox="0 0 300 80" className="w-full h-20" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,66 40,58 80,60 120,38 160,42 200,20 240,26 300,10"
          fill="none"
          stroke="var(--color-brand-purple)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1 rounded-xl bg-surface-section px-3 py-3">
          <span className="text-lg font-bold text-brand-purple">100%</span>
          <span className="text-[10px] text-text-muted">Approval Rate</span>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-surface-section px-3 py-3">
          <span className="text-lg font-bold text-brand-purple">4</span>
          <span className="text-[10px] text-text-muted">Publishers Submitted</span>
        </div>
      </div>
    </div>
  )
}

function OrganizeFrame() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 rounded-xl bg-surface-section px-3.5 py-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-purple/10 text-brand-purple flex-shrink-0">
          <FileText aria-hidden="true" className="w-4 h-4" />
        </span>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm font-semibold text-text-primary truncate">Partner Agreement</span>
          <span className="text-[11px] text-text-muted">v2 · NET-45 terms</span>
        </div>
        <Pill label="Signed" tone="green" />
      </div>
      <div className="flex flex-col gap-1.5 rounded-xl bg-surface-section px-3.5 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-text-muted">Partner Code</span>
          <span className="text-xs font-medium text-text-primary">CDP-69A254</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-text-muted">Payment Method</span>
          <span className="text-xs font-medium text-text-primary">Bank Transfer</span>
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-[11px] font-medium text-brand-green">Profile Complete</span>
        </div>
      </div>
    </div>
  )
}

function CommunicateFrame() {
  const items = [
    { icon: Bell, text: "New announcement from Click-Dudes", tone: "text-brand-blue" },
    { icon: MessageSquare, text: "Your publisher was approved", tone: "text-brand-purple" },
    { icon: LifeBuoy, text: "Support ticket #204 resolved", tone: "text-brand-green" },
  ]
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((it) => (
        <div key={it.text} className="flex items-start gap-2.5 rounded-xl bg-surface-section px-3.5 py-3">
          <it.icon aria-hidden="true" className={cn("w-4 h-4 flex-shrink-0 mt-0.5", it.tone)} />
          <span className="text-sm text-text-secondary leading-snug">{it.text}</span>
        </div>
      ))}
    </div>
  )
}

export interface CapabilityItem {
  key: string
  step: string
  title: string
  icon: LucideIcon
  Frame: () => React.ReactElement
}

export const CAPABILITIES: CapabilityItem[] = [
  { key: "manage", step: "01", title: "Manage", icon: Users, Frame: ManageFrame },
  { key: "review", step: "02", title: "Review", icon: ShieldCheck, Frame: ReviewFrame },
  { key: "earn", step: "03", title: "Earn", icon: Wallet, Frame: EarnFrame },
  { key: "analyze", step: "04", title: "Analyze", icon: BarChart3, Frame: AnalyzeFrame },
  { key: "organize", step: "05", title: "Organize", icon: FileText, Frame: OrganizeFrame },
  { key: "communicate", step: "06", title: "Communicate", icon: MessageCircle, Frame: CommunicateFrame },
]
