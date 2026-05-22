import { cn } from "@/lib/utils"

type DividerVariant = "purple-to-base" | "navy-to-base" | "base-to-section" | "section-to-base" | "glow"

interface SectionDividerProps {
  variant?: DividerVariant
  className?: string
}

const variantStyles: Record<DividerVariant, string> = {
  "purple-to-base":   "from-brand-purple/10 via-surface-base/60 to-transparent",
  "navy-to-base":     "from-brand-navy/20    via-surface-section/50 to-transparent",
  "base-to-section":  "from-transparent      via-surface-section/40 to-surface-section",
  "section-to-base":  "from-surface-section  via-surface-base/60    to-transparent",
  "glow":             "from-brand-purple/[0.06] via-transparent to-transparent",
}

export function SectionDivider({ variant = "glow", className }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-24 -my-12 pointer-events-none overflow-hidden z-10",
        className
      )}
    >
      {/* Gradient blend layer */}
      <div className={cn("absolute inset-0 bg-gradient-to-b", variantStyles[variant])} />

      {/* Subtle glow orb at midpoint */}
      {variant === "glow" && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-16 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.07), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      )}
    </div>
  )
}
