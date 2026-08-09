"use client"

import { cn } from "@/lib/utils"

export const FIELD_INPUT_CLS = cn(
  "w-full px-4 py-3 rounded-xl text-sm text-text-primary",
  "bg-white/70 border border-brand-purple/[0.14] backdrop-blur-sm",
  "placeholder:text-text-muted/60",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus:border-brand-purple/30",
  "transition-[border-color,box-shadow] duration-200"
)

interface TextFieldProps {
  id: string
  label: string
  type?: "text" | "email" | "tel" | "url"
  value: string
  onChange: (value: string) => void
  required?: boolean
  optional?: boolean
  placeholder?: string
  autoComplete?: string
}

export function TextField({ id, label, type = "text", value, onChange, required, optional, placeholder, autoComplete }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-text-muted uppercase tracking-widest">
        {label} {required && <span aria-hidden="true" className="text-brand-purple">*</span>}
        {optional && <span className="normal-case font-normal text-text-muted/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={FIELD_INPUT_CLS}
      />
    </div>
  )
}
