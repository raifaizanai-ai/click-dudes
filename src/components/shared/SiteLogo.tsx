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
    // 60px mobile / 68px desktop — fits the 74px pill with 3–7px breathing room.
    <div
      className={cn(
        "flex-shrink-0",
        "h-[70px] w-[70px] md:h-[78px] md:w-[78px]",
        className,
      )}
    >
      <Image
        src="/logo/clickdudes-logo.png"
        alt="Click Dudes — Turning Clicks Into Revenue"
        width={800}
        height={800}
        priority={priority}
        quality={100}
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
        quality={100}
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
