import { cn } from "@/lib/utils"

type SectionBackground =
  | "base"
  | "section"
  | "white"
  | "navy"
  | "hero"
  | "transparent"

type SectionPadding = "none" | "sm" | "md" | "lg" | "xl"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: "section" | "div" | "article" | "aside"
  background?: SectionBackground
  padding?: SectionPadding
  "aria-label"?: string
}

const backgroundMap: Record<SectionBackground, string> = {
  base:        "section-base",
  section:     "section-alt",
  white:       "section-white",
  navy:        "section-navy",
  hero:        "section-hero",
  transparent: "bg-transparent",
}

const paddingMap: Record<SectionPadding, string> = {
  none: "py-0",
  sm:   "py-8 sm:py-10 md:py-14",
  md:   "py-10 sm:py-12 md:py-20",
  lg:   "py-12 sm:py-16 md:py-24",
  xl:   "py-14 sm:py-20 md:py-28",
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  background = "base",
  padding = "lg",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative w-full",
        backgroundMap[background],
        paddingMap[padding],
        className
      )}
    >
      {children}
    </Tag>
  )
}
