"use client"

import type { PartnerTypeOption } from "@/sections/become-a-partner/data"
import { cn } from "@/lib/utils"

interface Props {
  options: PartnerTypeOption[]
  activeKey: string
  onSelect: (key: string) => void
}

export function PartnerTypeSelector({ options, activeKey, onSelect }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Partner type"
      className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none"
    >
      {options.map((opt) => {
        const active = opt.key === activeKey
        return (
          <button
            key={opt.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(opt.key)}
            className={cn(
              "flex items-center gap-3 text-left px-4 py-3 rounded-xl border transition-all duration-200 flex-shrink-0 snap-start focus-ring",
              "min-w-[220px] lg:min-w-0 lg:w-full",
              active
                ? "bg-gradient-brand text-white border-transparent shadow-[0_4px_20px_rgba(139,92,246,0.28)]"
                : "bg-white text-text-primary border-[rgba(7,17,47,0.08)] hover:border-brand-purple/25 hover:bg-surface-section"
            )}
          >
            <opt.icon aria-hidden="true" className={cn("w-4 h-4 flex-shrink-0", active ? "text-white" : "text-brand-purple")} />
            <span className="text-sm font-semibold">{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
