import { Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureBulletProps {
  children: React.ReactNode
  icon?: LucideIcon
  /** "check" uses the default Check icon — "icon" uses the provided icon prop */
  variant?: "check" | "icon"
  size?: "sm" | "md" | "lg"
  iconColor?: "purple" | "green" | "blue" | "cyan"
  className?: string
}

const sizeMap = {
  sm: { wrap: "w-5 h-5", icon: "w-3 h-3",   text: "text-sm" },
  md: { wrap: "w-6 h-6", icon: "w-3.5 h-3.5", text: "text-base" },
  lg: { wrap: "w-7 h-7", icon: "w-4 h-4",   text: "text-lg" },
}

const iconColorMap: Record<NonNullable<FeatureBulletProps["iconColor"]>, { bg: string; icon: string }> = {
  purple: { bg: "bg-brand-purple/10", icon: "text-brand-purple" },
  green:  { bg: "bg-brand-green/10",  icon: "text-brand-green" },
  blue:   { bg: "bg-brand-blue/10",   icon: "text-brand-blue" },
  cyan:   { bg: "bg-brand-cyan/20",   icon: "text-brand-cyan" },
}

export function FeatureBullet({
  children,
  icon: Icon = Check,
  variant = "check",
  size = "md",
  iconColor = "purple",
  className,
}: FeatureBulletProps) {
  const { wrap, icon, text } = sizeMap[size]
  const { bg, icon: iconCls } = iconColorMap[iconColor]
  const IconComponent = variant === "check" ? Check : Icon

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <span
        className={cn(
          "flex-shrink-0 rounded-lg flex items-center justify-center",
          wrap,
          bg
        )}
      >
        <IconComponent aria-hidden="true" className={cn(icon, iconCls)} />
      </span>
      <span className={cn("text-text-secondary leading-relaxed", text)}>
        {children}
      </span>
    </div>
  )
}
