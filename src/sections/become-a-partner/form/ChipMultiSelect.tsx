"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChipMultiSelectProps {
  label: string
  options: readonly string[]
  values: string[]
  onChange: (values: string[]) => void
  required?: boolean
}

export function ChipMultiSelect({ label, options, values, onChange, required }: ChipMultiSelectProps) {
  const toggle = (opt: string) => {
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt])
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">
        {label} {required && <span aria-hidden="true" className="text-brand-purple">*</span>}
      </span>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt)
          return (
            <button
              key={opt}
              type="button"
              role="checkbox"
              aria-checked={active}
              onClick={() => toggle(opt)}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                active
                  ? "bg-gradient-brand text-white shadow-[0_4px_16px_rgba(139,92,246,0.28)]"
                  : "bg-white/70 border border-brand-purple/[0.14] text-text-secondary hover:border-brand-purple/30"
              )}
            >
              {active && <Check aria-hidden="true" className="w-3.5 h-3.5" />}
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
