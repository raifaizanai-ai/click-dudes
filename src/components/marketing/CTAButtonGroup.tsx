import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { MagneticWrapper } from "@/components/motion/MagneticWrapper"
import { cn } from "@/lib/utils"

interface CTALink {
  label: string
  href: string
}

interface CTAButtonGroupProps {
  primary: CTALink
  secondary?: CTALink
  /** Small text below buttons — e.g. "No credit card required" */
  caption?: string
  align?: "center" | "left"
  size?: "md" | "lg" | "xl"
  /** Stack buttons vertically on mobile (default true) */
  stackOnMobile?: boolean
  className?: string
}

export function CTAButtonGroup({
  primary,
  secondary,
  caption,
  align = "center",
  size = "lg",
  stackOnMobile = true,
  className,
}: CTAButtonGroupProps) {
  const alignClass = align === "center" ? "items-center justify-center" : "items-start justify-start"

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      <div
        className={cn(
          "flex gap-3",
          alignClass,
          stackOnMobile ? "flex-col sm:flex-row" : "flex-row"
        )}
      >
        <MagneticWrapper strength={0.25}>
          <Link
            href={primary.href}
            className={cn(
              buttonVariants({ variant: "primary", size }),
              "group"
            )}
          >
            {primary.label}
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </MagneticWrapper>

        {secondary && (
          <Link
            href={secondary.href}
            className={buttonVariants({ variant: "secondary", size })}
          >
            {secondary.label}
          </Link>
        )}
      </div>

      {caption && (
        <p className="text-xs text-text-muted">{caption}</p>
      )}
    </div>
  )
}
