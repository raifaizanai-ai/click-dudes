"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Users } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const barReveal = {
  hidden:  { width: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const, delay: 0.35 },
  }),
}

export function AdxHeroPanelV2() {
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
          <span className="text-xs font-bold text-text-primary uppercase tracking-widest">Demand Competition</span>
          <span className="text-[9px] font-semibold text-brand-purple bg-brand-purple/10 rounded-full px-2 py-0.5">Live</span>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent mb-4" />

        {/* AdSense Only row */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-text-muted">AdSense Only</span>
              <span className="text-[9px] text-text-muted bg-brand-navy/[0.06] rounded px-1.5 py-0.5">Basic</span>
            </div>
            <span className="text-xs font-bold text-text-secondary">$4.20 RPM</span>
          </div>
          <div className="h-2 w-full rounded-full bg-brand-navy/[0.06] overflow-hidden">
            <motion.div
              custom={42}
              variants={barReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              className="h-full rounded-full bg-brand-navy/20"
            />
          </div>
        </div>

        {/* VS divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="flex-1 h-px bg-brand-purple/10" />
          <span className="text-[10px] font-bold text-text-muted uppercase">vs</span>
          <div className="flex-1 h-px bg-brand-purple/10" />
        </div>

        {/* Click Dudes AdX row */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-text-primary">Click Dudes AdX</span>
              <span className="text-[9px] text-brand-purple bg-brand-purple/10 rounded px-1.5 py-0.5 font-semibold">Premium</span>
            </div>
            <span className="text-xs font-bold text-brand-purple">$7.80 RPM</span>
          </div>
          <div className="h-2 w-full rounded-full bg-brand-navy/[0.06] overflow-hidden">
            <motion.div
              custom={82}
              variants={barReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-blue"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 mb-4">
          <div className={cn("flex items-center gap-1.5 rounded-xl px-3 py-2 flex-1 bg-brand-purple/[0.08]")}>
            <TrendingUp aria-hidden="true" className="w-3 h-3 text-brand-purple flex-shrink-0" />
            <span className="text-[10px] font-bold text-brand-purple">+86% Uplift</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl px-3 py-2 flex-1 bg-brand-blue/[0.08]">
            <Users aria-hidden="true" className="w-3 h-3 text-brand-blue flex-shrink-0" />
            <span className="text-[10px] font-bold text-brand-blue">15+ Demand</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl px-3 py-2 flex-1 bg-brand-green/[0.08]">
            <Shield aria-hidden="true" className="w-3 h-3 text-brand-green flex-shrink-0" />
            <span className="text-[10px] font-bold text-brand-green">GCPP</span>
          </div>
        </div>

        {/* Preferred deal */}
        <div className="rounded-xl bg-brand-purple/[0.06] border border-brand-purple/[0.14] p-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <LiveDot color="purple" size="sm" />
              <span className="text-[9px] font-bold text-brand-purple uppercase tracking-wider">Preferred Deal Active</span>
            </div>
          </div>
          <p className="text-[11px] text-text-secondary">
            Finance Advertiser · <span className="font-bold text-text-primary">$11.40 CPM</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
