import Image from "next/image"
import { cn } from "@/lib/utils"
import type { DashboardScreenshot } from "@/sections/partner-dashboard/data"

interface ScreenshotCropProps {
  screenshot: DashboardScreenshot
  /** CSS object-position, e.g. "20% 30%" — which part of the real screenshot to reveal. */
  focal: string
  /** Zoom multiplier applied to the underlying image so the focal region reads clearly. */
  zoom?: number
  className?: string
  sizes?: string
}

export function ScreenshotCrop({ screenshot, focal, zoom = 2.2, className, sizes = "400px" }: ScreenshotCropProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: focal, transform: `scale(${zoom})`, transformOrigin: focal }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
