"use client"

import { cn } from "@/lib/utils"

interface ChipSingleSelectProps {
  label: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export function ChipSingleSelect({ label, options, value, onChange, required }: ChipSingleSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">
        {label} {required && <span aria-hidden="true" className="text-brand-purple">*</span>}
      </span>
      <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt)}
              className={cn(
                "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                active
                  ? "bg-gradient-brand text-white shadow-[0_4px_16px_rgba(139,92,246,0.28)]"
                  : "bg-white/70 border border-brand-purple/[0.14] text-text-secondary hover:border-brand-purple/30"
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
