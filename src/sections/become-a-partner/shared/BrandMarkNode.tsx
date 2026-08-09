import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandMarkSize = "sm" | "md" | "lg"

interface BrandMarkNodeProps {
  size?: BrandMarkSize
  glow?: boolean
  className?: string
}

const WRAPPER_SIZE: Record<BrandMarkSize, string> = {
  sm: "w-10 h-10 p-1.5",
  md: "w-14 h-14 p-2",
  lg: "w-16 h-16 p-2.5",
}

const IMG_PX: Record<BrandMarkSize, number> = { sm: 32, md: 44, lg: 52 }

/**
 * The Click-Dudes icon mark. /public/icon.png is the only clean standalone
 * mark in the project, but it's a fully opaque PNG (no alpha channel) with
 * a baked-in light-lavender square background — confirmed by sampling its
 * corner pixels (236,241,254,255). The combined wordmark lockup
 * (/logo/clickdudes-logo.png) does have real alpha transparency, but pixel
 * scanning shows the mark and the "Click" text touch with zero gap at some
 * rows, so no rectangular crop can isolate the mark from the text via
 * layout alone. Given that, this renders icon.png inside a circular
 * frosted-glass badge — matching every other node chip in these partner
 * diagrams — rather than a mismatched opaque white square.
 */
export function BrandMarkNode({ size = "md", glow = true, className }: BrandMarkNodeProps) {
  return (
    <div className={cn("relative flex-shrink-0", WRAPPER_SIZE[size])}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-[-45%] rounded-full bg-gradient-purple-cyan opacity-20 blur-lg pointer-events-none"
        />
      )}
      <div
        className={cn(
          "relative w-full h-full rounded-full glass-strong border border-brand-purple/15 flex items-center justify-center overflow-hidden",
          className
        )}
      >
        <Image
          src="/icon.png"
          alt="Click-Dudes"
          width={IMG_PX[size]}
          height={IMG_PX[size]}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}
