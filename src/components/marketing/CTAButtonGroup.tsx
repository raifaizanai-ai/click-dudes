import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const isExternalHref = (href: string) => href.startsWith("http")

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
  /** Stack buttons vertically at every breakpoint — for narrow, non-viewport-relative columns where `sm:` would still switch to a row. */
  alwaysStack?: boolean
  className?: string
}

export function CTAButtonGroup({
  primary,
  secondary,
  caption,
  align = "center",
  size = "lg",
  stackOnMobile = true,
  alwaysStack = false,
  className,
}: CTAButtonGroupProps) {
  const alignClass = align === "center" ? "items-center justify-center" : "items-start justify-start"

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      <div
        className={cn(
          "flex gap-3",
          alignClass,
          alwaysStack ? "flex-col" : stackOnMobile ? "flex-col sm:flex-row" : "flex-row"
        )}
      >
        {isExternalHref(primary.href) ? (
          <a
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
          </a>
        ) : (
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
        )}

        {secondary && (
          isExternalHref(secondary.href) ? (
            <a
              href={secondary.href}
              className={buttonVariants({ variant: "secondary", size })}
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              href={secondary.href}
              className={buttonVariants({ variant: "secondary", size })}
            >
              {secondary.label}
            </Link>
          )
        )}
      </div>

      {caption && (
        <p className="text-xs text-text-muted">{caption}</p>
      )}
    </div>
  )
}
