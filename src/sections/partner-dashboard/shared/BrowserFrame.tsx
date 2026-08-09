import Image from "next/image"
import { cn } from "@/lib/utils"
import { SCREENSHOT_ASPECT, type DashboardScreenshot } from "@/sections/partner-dashboard/data"
import { BrowserChrome } from "@/sections/partner-dashboard/shared/BrowserChrome"

interface BrowserFrameProps {
  screenshot: DashboardScreenshot
  urlLabel?: string
  priority?: boolean
  sizes?: string
  glow?: "purple" | "cyan" | "none"
  className?: string
}

const glowShadowMap = {
  purple: "shadow-[0_0_0_1px_rgba(139,92,246,0.14),0_24px_64px_rgba(139,92,246,0.16)]",
  cyan:   "shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_24px_64px_rgba(103,232,249,0.14)]",
  none:   "shadow-[0_20px_60px_rgba(7,17,47,0.10)]",
}

export function BrowserFrame({
  screenshot,
  urlLabel = "partners.clickdudes.com",
  priority = false,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 640px",
  glow = "purple",
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl overflow-hidden glass-strong border border-brand-purple/[0.10]",
        glowShadowMap[glow],
        className
      )}
    >
      <BrowserChrome urlLabel={urlLabel} />

      <div className="relative w-full" style={{ aspectRatio: SCREENSHOT_ASPECT }}>
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
