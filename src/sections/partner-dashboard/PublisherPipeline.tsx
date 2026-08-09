"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate as animateValue } from "framer-motion"
import { Globe, Smartphone, Tv } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { ProcessPipeline } from "@/components/marketing/ProcessPipeline"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const STAGES = ["Submitted", "QC Review", "Approved", "Onboarding", "Live"]

const STAGE_COLOR: Record<number, string> = {
  0: "bg-brand-purple/10 text-brand-purple",
  1: "bg-amber-500/10 text-amber-600",
  2: "bg-brand-blue/10 text-brand-blue",
  3: "bg-brand-cyan/15 text-brand-blue",
  4: "bg-brand-green/10 text-brand-green",
}

// Percentage positions matching ProcessPipeline's 5 SVG nodes (viewBox 900x300).
const WAYPOINTS = [
  { left: 11.1, top: 26.7 },
  { left: 30.6, top: 73.3 },
  { left: 50.0, top: 26.7 },
  { left: 69.4, top: 73.3 },
  { left: 88.9, top: 26.7 },
]

interface Publisher {
  type: string
  id: string
  icon: LucideIcon
  delay: number
}

const PUBLISHERS: Publisher[] = [
  { type: "Web Publisher", id: "PUB-4821", icon: Globe, delay: 0 },
  { type: "App Publisher", id: "PUB-3312", icon: Smartphone, delay: 1.1 },
  { type: "CTV Publisher", id: "PUB-9047", icon: Tv, delay: 2.2 },
]

function TravelingPublisherCard({ pub, run }: { pub: Publisher; run: boolean }) {
  const t = useMotionValue(0)
  const [stageIndex, setStageIndex] = useState(0)
  const [pulsing, setPulsing] = useState(false)
  const left = useTransform(t, [0, 0.25, 0.5, 0.75, 1], WAYPOINTS.map((w) => `${w.left}%`))
  const top = useTransform(t, [0, 0.25, 0.5, 0.75, 1], WAYPOINTS.map((w) => `${w.top}%`))
  const opacity = useTransform(t, [0, 0.06, 1], [0, 1, 1])

  useEffect(() => {
    if (!run) return
    const controls = animateValue(t, 1, {
      duration: 3.6,
      delay: pub.delay,
      ease: [0.65, 0, 0.35, 1],
      onUpdate(v) {
        const idx = Math.min(4, Math.floor(v * 5))
        setStageIndex((prev) => {
          if (prev !== idx) {
            setPulsing(true)
            setTimeout(() => setPulsing(false), 260)
          }
          return idx
        })
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run])

  return (
    <motion.div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full glass-strong border border-brand-purple/10 pl-1.5 pr-3 py-1.5 shadow-[0_10px_28px_rgba(139,92,246,0.20)] whitespace-nowrap"
      style={{ left, top, opacity }}
      animate={pulsing ? { scale: 1.12 } : { scale: 1 }}
      transition={{ duration: 0.26, ease: "easeOut" }}
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple/10 text-brand-purple flex-shrink-0">
        <pub.icon aria-hidden="true" className="w-3 h-3" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold text-text-primary">{pub.type}</span>
        <span className="text-[9px] text-text-muted">{pub.id}</span>
      </span>
      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", STAGE_COLOR[stageIndex])}>
        {STAGES[stageIndex]}
      </span>
    </motion.div>
  )
}

export function PublisherPipeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()
  const run = inView && !reducedMotion

  return (
    <Section background="base" padding="lg" aria-label="Every publisher opportunity tracked from day one">
      <Container size="lg" className="flex flex-col gap-12">
        <SectionHeader
          badge="Manage Publishers"
          heading="Every Publisher Opportunity. Tracked From Day One."
          subtext="Publisher cards move through the same review lifecycle every submission follows — from first submission to live monetization."
          align="center"
        />

        <div ref={containerRef} className="relative mx-auto w-full max-w-5xl" style={{ aspectRatio: "3/1" }}>
          <ProcessPipeline className="absolute inset-0 w-full h-full" />

          {reducedMotion ? (
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full glass-strong border border-brand-purple/10 pl-1.5 pr-3 py-1.5 shadow-[0_10px_28px_rgba(139,92,246,0.20)] whitespace-nowrap"
              style={{ left: `${WAYPOINTS[4].left}%`, top: `${WAYPOINTS[4].top}%` }}
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple/10 text-brand-purple flex-shrink-0">
                <Globe aria-hidden="true" className="w-3 h-3" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold text-text-primary">Web Publisher</span>
                <span className="text-[9px] text-text-muted">PUB-4821</span>
              </span>
              <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", STAGE_COLOR[4])}>Live</span>
            </div>
          ) : (
            PUBLISHERS.map((pub) => <TravelingPublisherCard key={pub.type} pub={pub} run={run} />)
          )}
        </div>

        <div className="flex justify-between max-w-5xl mx-auto w-full px-2 -mt-6">
          {STAGES.map((stage) => (
            <span key={stage} className="text-xs sm:text-sm font-medium text-text-secondary text-center flex-1">
              {stage}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  )
}
