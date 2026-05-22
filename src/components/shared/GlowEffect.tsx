import { cn } from "@/lib/utils"

interface GlowEffectProps {
  className?: string
  color?: "purple" | "violet" | "blue" | "cyan"
  size?: "sm" | "md" | "lg" | "xl"
  intensity?: "low" | "medium" | "high"
  animate?: boolean
}

const colorMap: Record<NonNullable<GlowEffectProps["color"]>, Record<NonNullable<GlowEffectProps["intensity"]>, string>> = {
  purple: {
    low:    "bg-brand-purple/10",
    medium: "bg-brand-purple/20",
    high:   "bg-brand-purple/35",
  },
  violet: {
    low:    "bg-brand-violet/10",
    medium: "bg-brand-violet/20",
    high:   "bg-brand-violet/35",
  },
  blue: {
    low:    "bg-brand-blue/10",
    medium: "bg-brand-blue/16",
    high:   "bg-brand-blue/28",
  },
  cyan: {
    low:    "bg-brand-cyan/10",
    medium: "bg-brand-cyan/16",
    high:   "bg-brand-cyan/28",
  },
}

const sizeMap: Record<NonNullable<GlowEffectProps["size"]>, string> = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-[500px] h-[500px]",
  xl: "w-[800px] h-[800px]",
}

export function GlowEffect({
  className,
  color = "purple",
  size = "md",
  intensity = "medium",
  animate = false,
}: GlowEffectProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        sizeMap[size],
        colorMap[color][intensity],
        animate && "[animation:pulse-glow_4s_ease-in-out_infinite]",
        className
      )}
    />
  )
}
