import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
  orientation?: "horizontal" | "vertical"
  gradient?: boolean
}

export function Divider({
  className,
  orientation = "horizontal",
  gradient = true,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "w-px self-stretch",
          gradient
            ? "bg-gradient-to-b from-transparent via-brand-purple/20 to-transparent"
            : "bg-[rgba(7,17,47,0.07)]",
          className
        )}
      />
    )
  }

  return (
    <hr
      aria-hidden="true"
      className={cn(
        "border-0 h-px",
        gradient
          ? "bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"
          : "bg-[rgba(7,17,47,0.07)]",
        className
      )}
    />
  )
}
