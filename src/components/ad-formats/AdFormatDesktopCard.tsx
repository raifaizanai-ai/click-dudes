"use client"

import { motion } from "framer-motion"
import type { AdFormatItem, AdPosition } from "@/types/ad-formats"
import { cn } from "@/lib/utils"

interface Props { format: AdFormatItem }

const RPM_STYLE: Record<string, string> = {
  Standard: "bg-brand-blue/10 text-brand-blue",
  High:     "bg-brand-purple/10 text-brand-purple",
  Premium:  "bg-brand-violet/10 text-brand-violet",
}

const VIEW_STYLE: Record<string, string> = {
  "Good":      "bg-brand-green/10 text-brand-green",
  "High":      "bg-brand-green/15 text-brand-green",
  "Very High": "bg-brand-green/20 text-brand-green",
}

function DesktopMockup({ position }: { position: AdPosition }) {
  const isTop     = position === "top-banner"
  const isBboard  = position === "billboard"
  const isSide    = position === "sidebar" || position === "half-page" || position === "sticky-sidebar"
  const isInline  = position === "in-content"
  const isVideo   = position === "video-display"

  return (
    <div className="rounded-xl overflow-hidden border border-brand-purple/12 bg-surface-base" style={{ aspectRatio: "16/9" }}>
      {/* Browser chrome */}
      <div className="h-[18px] bg-surface-section border-b border-brand-purple/10 flex items-center px-2 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-300/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-300/50" />
        <div className="mx-1 flex-1 h-2 rounded-full bg-white/60 border border-brand-purple/10" />
      </div>

      {/* Page area */}
      <div className="flex flex-col h-[calc(100%-18px)] p-1.5 gap-1">
        {isTop && (
          <div className="w-full rounded bg-gradient-to-r from-brand-purple/30 to-brand-blue/20 flex items-center justify-center py-1.5 flex-shrink-0">
            <span className="text-[7px] font-bold text-brand-purple">728×90 AD</span>
          </div>
        )}
        {isBboard && (
          <div className="w-full rounded bg-gradient-to-r from-brand-purple/25 to-brand-cyan/15 flex items-center justify-center py-3 flex-shrink-0">
            <span className="text-[8px] font-bold text-brand-purple">970×250 BILLBOARD</span>
          </div>
        )}

        <div className={cn("flex gap-1 flex-1 min-h-0", isBboard && "hidden")}>
          <div className="flex-1 flex flex-col gap-1">
            {!isTop && <div className="h-1.5 bg-surface-section rounded w-full" />}
            <div className="h-1.5 bg-surface-section rounded w-3/4" />
            {isInline && (
              <div className="w-full rounded bg-gradient-to-r from-brand-purple/25 to-brand-blue/15 flex items-center justify-center py-1.5">
                <span className="text-[6px] font-bold text-brand-purple">IN-CONTENT AD</span>
              </div>
            )}
            {isVideo && (
              <div className="w-full rounded bg-gradient-to-r from-brand-purple/20 to-brand-cyan/15 flex items-center justify-center py-3">
                <span className="text-[14px] text-brand-purple/70">▶</span>
              </div>
            )}
            <div className="h-1.5 bg-surface-section rounded" />
            <div className="h-1.5 bg-surface-section rounded w-5/6" />
            <div className="h-1.5 bg-surface-section rounded w-2/3" />
          </div>

          {isSide && (
            <div className={cn(
              "rounded bg-gradient-to-b from-brand-purple/25 to-brand-blue/15 flex flex-col items-center justify-center flex-shrink-0",
              position === "half-page" ? "w-9" : "w-7",
              position === "sticky-sidebar" && "relative"
            )}>
              <span className="text-[5px] font-bold text-brand-purple/80">AD</span>
              {position === "sticky-sidebar" && (
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-brand-green animate-pulse" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function AdFormatDesktopCard({ format }: Props) {
  return (
    <div className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] h-full flex flex-col gap-4"
      style={{ boxShadow: "0 8px 32px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

      <DesktopMockup position={format.adPosition} />

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
          {format.rpmPotential} RPM
        </span>
        <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full", VIEW_STYLE[format.viewability])}>
          {format.viewability} Viewability
        </span>
      </div>
    </div>
  )
}
