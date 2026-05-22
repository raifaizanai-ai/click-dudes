"use client"

import { motion } from "framer-motion"
import { Check, TrendingUp } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const barReveal = {
  hidden:  { width: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
  }),
}

interface Bidder {
  name:    string
  bid:     string
  pct:     number
  winner?: boolean
}

const BIDDERS: Bidder[] = [
  { name: "Google AdX",      bid: "$9.80", pct: 100, winner: true },
  { name: "Index Exchange",  bid: "$8.60", pct: 88 },
  { name: "PubMatic",        bid: "$7.40", pct: 76 },
  { name: "Magnite",         bid: "$6.80", pct: 69 },
  { name: "OpenX",           bid: "$6.20", pct: 63 },
]

export function HBHeroPanel() {
  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className="glass-strong rounded-3xl border border-brand-purple/[0.12] overflow-hidden w-full max-w-[420px]"
      style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.08)" }}
    >
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="p-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <LiveDot color="green" size="sm" />
            <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Live Auction</span>
          </div>
          <div className="flex items-center gap-1.5 bg-brand-green/[0.08] rounded-full px-2.5 py-1">
            <span className="text-[10px] font-bold text-brand-green">187ms</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent mb-4" />

        {/* Bidders */}
        <div className="space-y-2.5">
          {BIDDERS.map((bidder, i) => (
            <motion.div
              key={bidder.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "rounded-xl p-2.5 border",
                bidder.winner
                  ? "bg-brand-green/[0.06] border-brand-green/20"
                  : "bg-white/30 border-brand-purple/[0.06]"
              )}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={cn(
                  "text-[11px] font-semibold",
                  bidder.winner ? "text-text-primary" : "text-text-secondary"
                )}>
                  {bidder.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className={cn(
                    "text-xs font-bold",
                    bidder.winner ? "text-brand-green" : "text-text-primary"
                  )}>
                    {bidder.bid}
                  </span>
                  {bidder.winner && (
                    <span className="flex items-center gap-1 text-[9px] font-bold text-brand-green bg-brand-green/10 rounded-full px-1.5 py-0.5">
                      <Check aria-hidden="true" className="w-2.5 h-2.5" />
                      Winner
                    </span>
                  )}
                </div>
              </div>

              {/* Bar */}
              <div className="h-1.5 w-full rounded-full bg-brand-navy/[0.06] overflow-hidden">
                <motion.div
                  custom={bidder.pct}
                  variants={barReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  className={cn(
                    "h-full rounded-full",
                    bidder.winner
                      ? "bg-gradient-to-r from-brand-green to-brand-cyan"
                      : "bg-gradient-to-r from-brand-purple/50 to-brand-blue/50"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent my-4" />

        {/* Stats footer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-brand-purple/[0.08] rounded-xl px-3 py-2 flex-1">
            <span className="text-[10px] text-text-muted">Bid Density</span>
            <span className="text-xs font-bold text-brand-purple ml-auto">14.2×</span>
          </div>
          <div className="flex items-center gap-1.5 bg-brand-green/[0.08] rounded-xl px-3 py-2 flex-1">
            <TrendingUp aria-hidden="true" className="w-3 h-3 text-brand-green flex-shrink-0" />
            <span className="text-[10px] text-brand-green font-bold">47% CPM lift</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
