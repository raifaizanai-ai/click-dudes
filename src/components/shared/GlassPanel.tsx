import { cn } from "@/lib/utils"

interface GlassPanelProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  surface?: "default" | "strong" | "subtle"
  padding?: "none" | "sm" | "md" | "lg"
  rounded?: "xl" | "2xl" | "3xl"
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
  as?: "div" | "article" | "section" | "aside"
}

const surfaceMap: Record<NonNullable<GlassPanelProps["surface"]>, string> = {
  default: "glass",
  strong:  "glass-strong",
  subtle:  "glass-subtle",
}

const paddingMap: Record<NonNullable<GlassPanelProps["padding"]>, string> = {
  none: "p-0",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
}

const roundedMap: Record<NonNullable<GlassPanelProps["rounded"]>, string> = {
  xl:   "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
}

export function GlassPanel({
  children,
  header,
  footer,
  surface = "default",
  padding = "md",
  rounded = "2xl",
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  as: Tag = "div",
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        surfaceMap[surface],
        roundedMap[rounded],
        "overflow-hidden",
        className
      )}
    >
      {header && (
        <div
          className={cn(
            "border-b border-brand-purple/10",
            paddingMap[padding],
            headerClassName
          )}
        >
          {header}
        </div>
      )}

      <div className={cn(paddingMap[padding], bodyClassName)}>
        {children}
      </div>

      {footer && (
        <div
          className={cn(
            "border-t border-brand-purple/10",
            paddingMap[padding],
            footerClassName
          )}
        >
          {footer}
        </div>
      )}
    </Tag>
  )
}
