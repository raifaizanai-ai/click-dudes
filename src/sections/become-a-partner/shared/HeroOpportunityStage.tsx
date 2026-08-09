"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Globe, Smartphone, Tv2, ArrowRight } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const STATUS_STAGES = ["Review", "Approved", "Live", "Commission"]

function DeviceCard({
  icon: Icon, label, className, children,
}: { icon: typeof Globe; label: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("glass-strong rounded-2xl p-3 sm:p-4 border border-brand-purple/[0.12] shadow-[0_20px_60px_rgba(7,17,47,0.10)]", className)}>
      <div className="flex items-center gap-1.5 mb-2.5">
        <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
        <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{label}</span>
      </div>
      {children}
    </div>
  )
}

export function HeroOpportunityStage() {
  const stageRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "end start"] })

  const travel = useTransform(scrollYProgress, [0.1, 0.8], [1, 0])
  const webX  = useTransform(travel, [0, 1], [0, -120])
  const webY  = useTransform(travel, [0, 1], [0, -30])
  const appX  = useTransform(travel, [0, 1], [0, 120])
  const appY  = useTransform(travel, [0, 1], [0, 40])
  const ctvY  = useTransform(travel, [0, 1], [0, -80])
  const dashOpacity = useTransform(scrollYProgress, [0.35, 0.9], [0, 1])
  const dashScale   = useTransform(scrollYProgress, [0.35, 0.9], [0.92, 1])

  const zero = reduced ? 0 : undefined

  return (
    <div ref={stageRef} className="relative w-full h-[460px] sm:h-[560px] lg:h-[620px] perspective-1000" aria-hidden="true">
      <div className="absolute inset-0 blob-purple w-[380px] h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      {/* CTV — depth layer, top center */}
      <motion.div style={{ y: zero ?? ctvY }} className="absolute left-1/2 -translate-x-1/2 top-[2%] w-40 sm:w-56 z-0">
        <DeviceCard icon={Tv2} label="CTV">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-brand-navy to-[#0D1F52] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center">
              <Tv2 aria-hidden="true" className="w-4 h-4 text-brand-cyan" />
            </div>
          </div>
        </DeviceCard>
      </motion.div>

      {/* Center hub */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <RobotImage variant="main" size="lg" glowColor="purple" priority />
      </div>

      {/* Web mockup — left */}
      <motion.div style={{ x: zero ?? webX, y: zero ?? webY }} className="absolute left-[2%] sm:left-[6%] top-[26%] w-36 sm:w-52 z-20">
        <DeviceCard icon={Globe} label="Web Publisher">
          <div className="flex flex-col gap-1.5">
            <div className="h-2 rounded-full bg-surface-section w-3/4" />
            <div className="h-2 rounded-full bg-surface-section w-full" />
            <div className="flex gap-1.5 mt-1">
              <div className="h-6 flex-1 rounded-md bg-brand-purple/10" />
              <div className="h-6 flex-1 rounded-md bg-brand-cyan/10" />
            </div>
          </div>
        </DeviceCard>
      </motion.div>

      {/* App mockup — right */}
      <motion.div style={{ x: zero ?? appX, y: zero ?? appY }} className="absolute right-[2%] sm:right-[8%] top-[34%] w-24 sm:w-32 z-20">
        <DeviceCard icon={Smartphone} label="App">
          <div className="flex flex-col gap-1.5">
            <div className="h-10 rounded-lg bg-gradient-to-br from-brand-purple/15 to-brand-blue/10" />
            <div className="h-2 rounded-full bg-surface-section w-2/3" />
          </div>
        </DeviceCard>
      </motion.div>

      {/* Publisher opportunity status path */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[20%] sm:bottom-[16%] flex items-center gap-1.5 sm:gap-2 z-20">
        {STATUS_STAGES.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5 sm:gap-2">
            <span className="px-2 sm:px-3 py-1 rounded-full glass text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-brand-purple whitespace-nowrap">
              {s}
            </span>
            {i < STATUS_STAGES.length - 1 && <ArrowRight aria-hidden="true" className="w-3 h-3 text-brand-purple/40 flex-shrink-0" />}
          </div>
        ))}
      </div>

      {/* Partner Dashboard proof panel — depth reveal on scroll */}
      <motion.div
        style={{ opacity: reduced ? 1 : dashOpacity, scale: reduced ? 1 : dashScale }}
        className="absolute bottom-0 right-0 sm:right-[2%] w-44 sm:w-64 z-30"
      >
        <BrowserFrame screenshot={SCREENSHOTS.dashboard} glow="cyan" className="shadow-[0_24px_70px_rgba(7,17,47,0.18)]" />
      </motion.div>
    </div>
  )
}
