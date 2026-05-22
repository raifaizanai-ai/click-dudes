import { FadeUp } from "@/components/motion/FadeUp"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  /** Small label displayed as a badge above the heading */
  badge?: string
  /** Main heading — accepts ReactNode for gradient text composition */
  heading: React.ReactNode
  /** Supporting paragraph below the heading */
  subtext?: string
  align?: "center" | "left"
  /** Optional max width cap on subtext for readability */
  subtextWidth?: "sm" | "md" | "lg" | "full"
  className?: string
}

const alignMap = {
  center: "items-center text-center",
  left:   "items-start text-left",
}

const subtextWidthMap = {
  sm:   "max-w-md",
  md:   "max-w-xl",
  lg:   "max-w-2xl",
  full: "max-w-none",
}

export function SectionHeader({
  badge,
  heading,
  subtext,
  align = "center",
  subtextWidth = "md",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", alignMap[align], className)}>

      {badge && (
        <FadeUp delay={0}>
          <span
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
              "glass border border-brand-purple/20",
              "text-xs font-semibold tracking-widest uppercase text-brand-purple",
            )}
          >
            {badge}
          </span>
        </FadeUp>
      )}

      <FadeUp delay={badge ? 0.08 : 0}>
        <h2
          className={cn(
            "text-h3 sm:text-h2 lg:text-h1 font-bold text-text-primary tracking-heading text-balance",
          )}
        >
          {heading}
        </h2>
      </FadeUp>

      {subtext && (
        <FadeUp delay={badge ? 0.16 : 0.08}>
          <p
            className={cn(
              "text-body-lg text-text-secondary text-pretty leading-relaxed",
              subtextWidthMap[subtextWidth]
            )}
          >
            {subtext}
          </p>
        </FadeUp>
      )}

    </div>
  )
}
