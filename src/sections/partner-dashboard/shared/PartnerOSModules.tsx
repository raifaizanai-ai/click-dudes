"use client"

import {
  Users, Wallet, BarChart3, FileText, MessageCircle, Building2,
  Globe, Smartphone, Tv, CheckCircle2, Bell, MessageSquare,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface OSModule {
  key: string
  icon: LucideIcon
  title: string
  caption: string
  leftPct: number
  topPct: number
  width: number
  render: () => React.ReactElement
}

function StatusPill({ label, tone }: { label: string; tone: "green" | "amber" | "blue" | "purple" }) {
  const toneMap: Record<typeof tone, string> = {
    green: "bg-brand-green/10 text-brand-green",
    amber: "bg-amber-500/10 text-amber-600",
    blue: "bg-brand-blue/10 text-brand-blue",
    purple: "bg-brand-purple/10 text-brand-purple",
  }
  return <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", toneMap[tone])}>{label}</span>
}

function PublisherManagementContent() {
  const rows: { name: string; icon: LucideIcon; type: string; label: string; tone: "green" | "amber" | "blue" }[] = [
    { name: "Acme Media", icon: Globe, type: "Web", label: "Live", tone: "green" },
    { name: "AppVenture", icon: Smartphone, type: "App", label: "Review", tone: "amber" },
    { name: "StreamCast", icon: Tv, type: "CTV", label: "Approved", tone: "blue" },
  ]
  return (
    <div className="flex flex-col gap-2">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between gap-2 rounded-lg bg-surface-section px-2.5 py-2">
          <div className="flex items-center gap-2 min-w-0">
            <r.icon aria-hidden="true" className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
            <span className="text-xs font-medium text-text-primary truncate">{r.name}</span>
          </div>
          <StatusPill label={r.label} tone={r.tone} />
        </div>
      ))}
    </div>
  )
}

function CommissionVisibilityContent() {
  const stats = [
    { label: "On Hold", value: "$0" },
    { label: "Available", value: "$0" },
    { label: "Paid", value: "$482" },
  ]
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-0.5 rounded-lg bg-surface-section px-2 py-2 text-center">
          <span className="text-sm font-bold text-text-primary">{s.value}</span>
          <span className="text-[10px] text-text-muted leading-tight">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

function AnalyticsContent() {
  return (
    <div className="flex flex-col gap-2">
      <svg viewBox="0 0 160 44" className="w-full h-11" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,36 25,30 50,32 75,18 100,22 125,8 160,12"
          fill="none"
          stroke="var(--color-brand-purple)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-text-muted">Approval Rate</span>
        <span className="text-sm font-bold text-brand-purple">100%</span>
      </div>
    </div>
  )
}

function AgreementsContent() {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-surface-section px-3 py-3">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex-shrink-0">
        <FileText aria-hidden="true" className="w-4 h-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-semibold text-text-primary truncate">Partner Agreement</span>
        <span className="text-[10px] text-text-muted">v2 · NET-45 terms</span>
      </div>
      <StatusPill label="Signed" tone="green" />
    </div>
  )
}

function CommunicationContent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-2 rounded-lg bg-surface-section px-2.5 py-2">
        <Bell aria-hidden="true" className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
        <span className="text-[11px] text-text-secondary leading-snug">New announcement from Click-Dudes</span>
      </div>
      <div className="flex items-start gap-2 rounded-lg bg-brand-purple/5 px-2.5 py-2">
        <MessageSquare aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple flex-shrink-0 mt-0.5" />
        <span className="text-[11px] text-text-primary leading-snug">Your publisher was approved</span>
      </div>
    </div>
  )
}

function OrganizationContent() {
  const rows = [
    { label: "Partner Code", value: "CDP-69A254" },
    { label: "Payment Method", value: "Bank Transfer" },
  ]
  return (
    <div className="flex flex-col gap-1.5">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between gap-2 py-1">
          <span className="text-[11px] text-text-muted">{r.label}</span>
          <span className="text-xs font-medium text-text-primary">{r.value}</span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 pt-1">
        <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5 text-brand-green" />
        <span className="text-[11px] font-medium text-brand-green">Profile Complete</span>
      </div>
    </div>
  )
}

export const OS_MODULES: OSModule[] = [
  { key: "publishers", icon: Users, title: "Publisher Management",
    caption: "Every submitted opportunity, tracked in one table.",
    leftPct: 12, topPct: 24, width: 260, render: PublisherManagementContent },
  { key: "commission", icon: Wallet, title: "Commission Visibility",
    caption: "Track commission from on-hold to paid.",
    leftPct: 88, topPct: 22, width: 230, render: CommissionVisibilityContent },
  { key: "analytics", icon: BarChart3, title: "Analytics",
    caption: "See performance trends as your network grows.",
    leftPct: 90, topPct: 58, width: 250, render: AnalyticsContent },
  { key: "agreements", icon: FileText, title: "Agreements",
    caption: "Every partnership agreement, always accessible.",
    leftPct: 88, topPct: 87, width: 240, render: AgreementsContent },
  { key: "communication", icon: MessageCircle, title: "Communication",
    caption: "Announcements, notifications and live chat, connected.",
    leftPct: 12, topPct: 85, width: 250, render: CommunicationContent },
  { key: "organization", icon: Building2, title: "Organization",
    caption: "Manage your partner profile and payment details.",
    leftPct: 10, topPct: 57, width: 230, render: OrganizationContent },
]
