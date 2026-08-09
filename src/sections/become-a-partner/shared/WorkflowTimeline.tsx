"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { WORKFLOW_STAGES } from "@/sections/become-a-partner/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

function StickyStageCard({ activeIndex }: { activeIndex: number }) {
  const stage = WORKFLOW_STAGES[activeIndex]
  const reduced = useReducedMotion()

  return (
    <div className="glass-strong rounded-3xl p-8 border border-brand-purple/[0.10] shadow-[0_24px_64px_rgba(7,17,47,0.10)] flex flex-col items-center text-center gap-4">
      <div className="relative w-full flex justify-center gap-1.5 mb-2">
        {WORKFLOW_STAGES.map((s, i) => (
          <span
            key={s.step}
            className={cn("h-1 flex-1 rounded-full transition-colors duration-300", i <= activeIndex ? "bg-gradient-brand" : "bg-surface-section")}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stage.step}
          initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-[0_8px_28px_rgba(139,92,246,0.35)]">
            <stage.icon aria-hidden="true" className="w-7 h-7 text-white" />
          </div>
          <span className="px-3 py-1 rounded-full glass text-[10px] font-semibold tracking-widest uppercase text-brand-purple">
            Step {stage.step} · {stage.statusLabel}
          </span>
          <h3 className="text-lg font-bold text-text-primary">{stage.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xs">{stage.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function StageListItem({ stage, active, index }: { stage: (typeof WORKFLOW_STAGES)[number]; active: boolean; index: number }) {
  return (
    <div
      data-workflow-trigger
      data-index={index}
      className={cn(
        "flex gap-4 p-5 rounded-2xl border transition-all duration-300",
        active ? "bg-white border-brand-purple/25 shadow-[0_8px_28px_rgba(139,92,246,0.12)]" : "bg-transparent border-transparent opacity-60"
      )}
    >
      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs", active ? "bg-gradient-brand text-white" : "bg-surface-section text-text-muted")}>
        {stage.step}
      </div>
      <div>
        <h4 className="text-sm font-bold text-text-primary">{stage.title}</h4>
        <p className="text-sm text-text-secondary mt-1 leading-relaxed">{stage.description}</p>
      </div>
    </div>
  )
}

export function WorkflowTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-workflow-trigger]"))
    if (triggers.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"))
            if (!Number.isNaN(idx)) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )
    triggers.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop: sticky stage card + scrolling stage list */}
      <div className="hidden lg:grid grid-cols-5 gap-10">
        <div className="col-span-2 sticky top-28 self-start">
          <StickyStageCard activeIndex={activeIndex} />
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          {WORKFLOW_STAGES.map((s, i) => (
            <StageListItem key={s.step} stage={s} active={i === activeIndex} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile: static vertical list */}
      <div className="flex lg:hidden flex-col gap-4">
        {WORKFLOW_STAGES.map((s) => (
          <div key={s.step} className="flex gap-4 p-5 rounded-2xl bg-white border border-brand-purple/15 shadow-[0_8px_24px_rgba(7,17,47,0.06)]">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
              {s.step}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-text-primary">{s.title}</h4>
                <span className="text-[10px] font-semibold text-brand-purple">{s.statusLabel}</span>
              </div>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
