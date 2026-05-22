"use client"

import type { AdFormatItem, AdPosition } from "@/types/ad-formats"
import { cn } from "@/lib/utils"

interface Props { format: AdFormatItem }

const RPM_STYLE: Record<string, string> = {
  Standard: "bg-brand-blue/10 text-brand-blue",
  High:     "bg-brand-purple/10 text-brand-purple",
  Premium:  "bg-brand-violet/10 text-brand-violet",
}

const UX_STYLE: Record<string, string> = {
  "Minimal":    "bg-brand-green/10 text-brand-green",
  "Moderate":   "bg-brand-blue/10 text-brand-blue",
  "Noticeable": "bg-yellow-400/10 text-yellow-600",
}

function PhoneMockup({ position }: { position: AdPosition }) {
  const isTopBanner    = position === "mobile-banner"
  const isBottomSticky = position === "mobile-sticky"
  const isFullscreen   = position === "interstitial" || position === "rewarded"
  const isNative       = position === "native-mobile"
  const isInArticle    = position === "in-article"
  const isVideo        = position === "mobile-video"

  return (
    <div className="relative mx-auto"
      style={{ width: 80, height: 144 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[18px] border-2 border-brand-purple/25 bg-surface-base overflow-hidden"
        style={{ boxShadow: "0 4px 16px rgba(139,92,246,0.15)" }}>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-surface-section rounded-b-full z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 p-1 pt-4 flex flex-col gap-1">

          {isTopBanner && (
            <div className="w-full rounded bg-gradient-to-r from-brand-purple/30 to-brand-blue/20 flex items-center justify-center py-1 flex-shrink-0">
              <span className="text-[5px] font-bold text-brand-purple">320×50</span>
            </div>
          )}

          {isFullscreen ? (
            <div className="absolute inset-1 top-3 rounded-lg bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 flex flex-col items-center justify-center gap-1">
              <span className="text-[14px]">{position === "rewarded" ? "🎁" : "✕"}</span>
              <span className="text-[5px] font-bold text-brand-purple">FULL SCREEN AD</span>
            </div>
          ) : (
            <>
              <div className="h-1.5 bg-surface-section rounded w-full" />
              <div className="h-1.5 bg-surface-section rounded w-4/5" />

              {isNative && (
                <div className="w-full rounded border border-brand-purple/15 p-1 bg-white/50">
                  <div className="text-[5px] text-text-muted mb-0.5">SPONSORED</div>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded bg-brand-purple/20 flex-shrink-0" />
                    <div className="flex-1 space-y-0.5">
                      <div className="h-1 bg-surface-section rounded" />
                      <div className="h-1 bg-surface-section rounded w-2/3" />
                    </div>
                  </div>
                </div>
              )}

              {isInArticle && (
                <div className="w-full rounded bg-gradient-to-r from-brand-purple/25 to-brand-blue/15 flex items-center justify-center py-1">
                  <span className="text-[5px] font-bold text-brand-purple">IN-ARTICLE AD</span>
                </div>
              )}

              {isVideo && (
                <div className="w-full rounded bg-gradient-to-r from-brand-purple/20 to-brand-cyan/15 flex items-center justify-center py-2.5">
                  <span className="text-[12px] text-brand-purple/70">▶</span>
                </div>
              )}

              <div className="h-1.5 bg-surface-section rounded w-5/6" />
              <div className="h-1.5 bg-surface-section rounded w-2/3" />
            </>
          )}

          {isBottomSticky && !isFullscreen && (
            <div className="absolute bottom-1 left-1 right-1 rounded bg-gradient-to-r from-brand-purple/30 to-brand-blue/20 flex items-center justify-center py-1">
              <span className="text-[5px] font-bold text-brand-purple">STICKY AD</span>
            </div>
          )}
        </div>

        {/* Home bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-purple/20 rounded-full" />
      </div>
    </div>
  )
}

export function AdFormatMobileCard({ format }: Props) {
  return (
    <div className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] h-full flex flex-col gap-4"
      style={{ boxShadow: "0 8px 32px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

      <PhoneMockup position={format.adPosition} />

      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-bold text-text-primary leading-snug">{format.name}</h3>
          {format.size && (
            <span className="text-[10px] font-mono font-semibold text-text-muted bg-surface-section px-2 py-0.5 rounded-full flex-shrink-0">
              {format.size}
            </span>
          )}
        </div>
        <p className="text-[12px] text-text-secondary leading-relaxed">{format.description}</p>
        <p className="text-[10px] text-text-muted"><span className="font-semibold">Best for:</span> {format.bestFor}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", RPM_STYLE[format.rpmPotential])}>
          {format.rpmPotential} Revenue
        </span>
        <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", UX_STYLE[format.uxImpact])}>
          {format.uxImpact} UX Impact
        </span>
      </div>
    </div>
  )
}
