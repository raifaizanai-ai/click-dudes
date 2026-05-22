import { cn } from "@/lib/utils"

interface LiveDotProps {
  color?: "green" | "purple" | "blue" | "cyan"
  size?: "sm" | "md"
  label?: string
  className?: string
}

const colorMap: Record<NonNullable<LiveDotProps["color"]>, string> = {
  green:  "bg-brand-green",
  purple: "bg-brand-purple",
  blue:   "bg-brand-blue",
  cyan:   "bg-brand-cyan",
}

const sizeMap: Record<NonNullable<LiveDotProps["size"]>, string> = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
}

export function LiveDot({
  color = "green",
  size = "sm",
  label,
  className,
}: LiveDotProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className={cn("relative flex flex-shrink-0", sizeMap[size])}>
        <span
          aria-hidden="true"
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            "animate-[ping-slow_1.5s_ease-out_infinite]",
            colorMap[color]
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-full w-full",
            colorMap[color]
          )}
        />
      </span>
      {label && (
        <span className="text-xs font-medium text-text-muted">{label}</span>
      )}
    </span>
  )
}
