import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoContext = "navbar" | "footer" | "default"

interface SiteLogoProps {
  context?: LogoContext
  className?: string
  priority?: boolean
  href?: string | null
}

const wrapperWidths: Record<LogoContext, string> = {
  navbar:  "",
  footer:  "w-[190px]",
  default: "w-[135px] md:w-[170px]",
}

export function SiteLogo({
  context = "default",
  className,
  priority = false,
  href = "/",
}: SiteLogoProps) {
  const isNavbar = context === "navbar"

  const img = isNavbar ? (
    // PNG is 800×800 (square). Container fixes the display size so the image
    // always renders fully visible without any clipping or scale tricks.
    <div
      className={cn(
        "flex-shrink-0",
        "h-[58px] w-[58px] sm:h-[66px] sm:w-[66px] md:h-[74px] md:w-[74px]",
        className,
      )}
    >
      <Image
        src="/logo/clickdudes-logo.png"
        alt="Click Dudes — Turning Clicks Into Revenue"
        width={800}
        height={800}
        priority={priority}

        sizes="(max-width: 767px) 70px, 78px"
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        className="select-none"
      />
    </div>
  ) : (
    <div className={cn(wrapperWidths[context], "flex-shrink-0", className)}>
      <Image
        src="/logo/clickdudes-logo.png"
        alt="Click Dudes — Turning Clicks Into Revenue"
        width={800}
        height={800}
        priority={priority}

        draggable={false}
        style={{ width: "100%", height: "auto" }}
        className="object-contain"
      />
    </div>
  )

  if (href === null) return img

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex items-center rounded-md",
        isNavbar && "transition-opacity duration-200 hover:opacity-80",
      )}
      aria-label="Click Dudes — go to homepage"
    >
      {img}
    </Link>
  )
}
