"use client"

import { motion } from "framer-motion"
import { RobotImage } from "@/components/shared/RobotImage"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { VIEWPORT_ONCE } from "@/lib/animations"
import { DASHBOARD_CHIPS } from "@/components/marketing/partner-dashboard-home/dashboardChips"
import { cn } from "@/lib/utils"

export function DashboardStageMobile() {
  return (
    <div className="lg:hidden flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative px-2"
      >
        <BrowserFrame screenshot={SCREENSHOTS.dashboard} glow="purple" priority sizes="92vw" />
        <div className="absolute -bottom-3 -right-1">
          <RobotImage variant="analytics" size="xs" glowColor="cyan" />
        </div>
      </motion.div>

      <div className="flex gap-2.5 overflow-x-auto px-2 pb-1 snap-x snap-mandatory">
        {DASHBOARD_CHIPS.map((chip, i) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-strong border whitespace-nowrap flex-shrink-0 snap-start"
            style={{ borderColor: chip.glow, boxShadow: `0 8px 20px ${chip.glow}` }}
          >
            <chip.icon aria-hidden="true" className={cn("w-3.5 h-3.5 flex-shrink-0", chip.color)} />
            <span className="text-[11px] font-bold text-text-primary">{chip.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
