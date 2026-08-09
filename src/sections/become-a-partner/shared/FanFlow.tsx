"use client"

import { ArrowRight, type LucideIcon } from "lucide-react"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { cn } from "@/lib/utils"

interface FanFlowProps {
  source: { icon: LucideIcon; label: string }
  fanItems: { icon: LucideIcon; label: string }[]
  targetLabel?: string
  className?: string
}

function NodeChip({ icon: Icon, label, className }: { icon: LucideIcon; label: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 px-3 py-2 rounded-xl glass-strong border border-brand-purple/12", className)}>
      <Icon aria-hidden="true" className="w-4 h-4 text-brand-purple flex-shrink-0" />
      <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{label}</span>
    </div>
  )
}

export function FanFlow({ source, fanItems, targetLabel, className }: FanFlowProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3 sm:gap-5 w-full", className)}>
      <NodeChip icon={source.icon} label={source.label} className="bg-brand-purple/[0.06] border-brand-purple/25" />

      <ArrowRight aria-hidden="true" className="w-4 h-4 text-brand-purple/35 flex-shrink-0" />

      <div className="flex flex-col gap-1.5">
        {fanItems.map((item, i) => (
          <NodeChip key={item.label + i} icon={item.icon} label={item.label} className="py-1.5" />
        ))}
      </div>

      <ArrowRight aria-hidden="true" className="w-4 h-4 text-brand-purple/35 flex-shrink-0" />

      <div className="flex flex-col items-center gap-1.5">
        <BrandMarkNode size="sm" />
        {targetLabel && <span className="text-[10px] font-semibold text-brand-purple whitespace-nowrap">{targetLabel}</span>}
      </div>
    </div>
  )
}
