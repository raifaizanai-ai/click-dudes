import { cn } from "@/lib/utils"

type GradientVariant = "default" | "brand" | "violet" | "cyan"
type TextTag = "span" | "h1" | "h2" | "h3" | "h4" | "p" | "strong"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: GradientVariant
  as?: TextTag
}

const gradientClassMap: Record<GradientVariant, string> = {
  default: "text-gradient",
  brand:   "text-gradient-brand",
  violet:  "text-gradient-violet",
  cyan:    "text-gradient-cyan",
}

export function GradientText({
  children,
  className,
  gradient = "default",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={cn(gradientClassMap[gradient], className)}>
      {children}
    </Tag>
  )
}
