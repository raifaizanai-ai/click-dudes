"use client"

import { FIELD_INPUT_CLS } from "@/sections/become-a-partner/form/TextField"
import { cn } from "@/lib/utils"

interface TextAreaFieldProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  optional?: boolean
  rows?: number
}

export function TextAreaField({ id, label, value, onChange, placeholder, optional, rows = 4 }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-text-muted uppercase tracking-widest">
        {label}
        {optional && <span className="normal-case font-normal text-text-muted/70"> (optional)</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(FIELD_INPUT_CLS, "resize-none")}
      />
    </div>
  )
}
