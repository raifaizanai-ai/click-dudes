import { Star, Shield, Users, Award, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadgeProps {
  variant?: "rating" | "users" | "security" | "award" | "speed"
  value?: string
  label: string
  /** Override the default icon for this variant */
  icon?: LucideIcon
  size?: "sm" | "md"
  className?: string
}

const variantDefaults: Record<
  NonNullable<TrustBadgeProps["variant"]>,
  { icon: LucideIcon; iconClass: string }
> = {
  rating:   { icon: Star,   iconClass: "text-amber-400" },
  users:    { icon: Users,  iconClass: "text-brand-blue" },
  security: { icon: Shield, iconClass: "text-brand-green" },
  award:    { icon: Award,  iconClass: "text-brand-purple" },
  speed:    { icon: Zap,    iconClass: "text-brand-cyan" },
}

const sizeMap = {
  sm: { wrap: "px-3 py-1.5 gap-1.5 text-xs rounded-xl", icon: "w-3 h-3" },
  md: { wrap: "px-4 py-2   gap-2   text-sm rounded-2xl", icon: "w-4 h-4" },
}

export function TrustBadge({
  variant = "rating",
  value,
  label,
  icon,
  size = "sm",
  className,
}: TrustBadgeProps) {
  const defaults = variantDefaults[variant]
  const IconComponent = icon ?? defaults.icon
  const { wrap, icon: iconSize } = sizeMap[size]

  return (
    <div
      className={cn(
        "inline-flex items-center font-medium",
        "glass border border-brand-purple/12",
        "text-text-secondary",
        wrap,
        className
      )}
    >
      <IconComponent
        aria-hidden="true"
        className={cn(iconSize, defaults.iconClass, "flex-shrink-0")}
      />
      {value && (
        <span className="font-semibold text-text-primary">{value}</span>
      )}
      <span>{label}</span>
    </div>
  )
}
