import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type ChipAccent = "purple" | "cyan" | "blue" | "green" | "violet"

interface DashboardChipProps {
  icon: LucideIcon
  label: string
  value?: string
  accent?: ChipAccent
  size?: "sm" | "md" | "lg"
  className?: string
}

const ICON_BG: Record<ChipAccent, string> = {
  purple: "bg-brand-purple/12 text-brand-purple",
  cyan: "bg-brand-cyan/15 text-brand-blue",
  blue: "bg-brand-blue/12 text-brand-blue",
  green: "bg-brand-green/12 text-brand-green",
  violet: "bg-brand-violet/12 text-brand-violet",
}

const PADDING: Record<NonNullable<DashboardChipProps["size"]>, string> = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2.5",
  lg: "px-5 py-3.5",
}

const ICON_WRAP: Record<NonNullable<DashboardChipProps["size"]>, string> = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
}

const ICON_SIZE: Record<NonNullable<DashboardChipProps["size"]>, string> = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
}

const LABEL_SIZE: Record<NonNullable<DashboardChipProps["size"]>, string> = {
  sm: "text-[11px]",
  md: "text-xs",
  lg: "text-sm",
}

const VALUE_SIZE: Record<NonNullable<DashboardChipProps["size"]>, string> = {
  sm: "text-[10px]",
  md: "text-[11px]",
  lg: "text-xs",
}

export function DashboardChip({ icon: Icon, label, value, accent = "purple", size = "md", className }: DashboardChipProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full glass-strong border border-brand-purple/[0.10]",
        "shadow-[0_0_0_1px_rgba(139,92,246,0.06),0_16px_40px_rgba(7,17,47,0.10)]",
        PADDING[size],
        className
      )}
    >
      <span className={cn("flex items-center justify-center rounded-full flex-shrink-0", ICON_BG[accent], ICON_WRAP[size])}>
        <Icon aria-hidden="true" className={ICON_SIZE[size]} />
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className={cn("font-semibold text-text-primary whitespace-nowrap", LABEL_SIZE[size])}>
          {label}
        </span>
        {value && (
          <span className={cn("text-text-muted whitespace-nowrap", VALUE_SIZE[size])}>
            {value}
          </span>
        )}
      </span>
    </div>
  )
}
