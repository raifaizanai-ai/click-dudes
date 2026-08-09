"use client"

import { motion } from "framer-motion"
import { VIEWPORT_ONCE } from "@/lib/animations"
import type { RevenueShareExample } from "@/sections/become-a-partner/data"

export function RevenueShareCard({ example }: { example: RevenueShareExample }) {
  return (
    <div className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] flex flex-col gap-4">
      <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{example.channel}</span>

      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-text-primary">{example.publisherShare}</span>
        <span className="text-sm text-text-muted">/ {example.partnerShare}</span>
      </div>

      <div className="h-2.5 rounded-full bg-surface-section overflow-hidden flex">
        <motion.div
          initial={{ width: "50%" }}
          whileInView={{ width: `${example.publisherShare}%` }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-brand rounded-l-full"
        />
        <div className="h-full flex-1 bg-brand-cyan/25 rounded-r-full" />
      </div>

      <div className="flex items-center justify-between text-[11px] text-text-muted">
        <span>Publisher</span>
        <span>Click-Dudes</span>
      </div>
    </div>
  )
}
