"use client"

import { cn } from "@/lib/utils"

const STEP_LABELS = ["About You", "Publisher Network", "Commercial Info", "Confirm"]

export function FormProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="sticky top-16 z-20 -mx-6 lg:mx-0 px-6 lg:px-0 py-3 lg:py-0 bg-white/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
      <ol className="flex items-center gap-2 sm:gap-3" aria-label="Application progress">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1
          const active = stepNum === currentStep
          const done = stepNum < currentStep
          return (
            <li key={label} className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0 transition-colors duration-300",
                    done ? "bg-brand-green text-white" : active ? "bg-gradient-brand text-white" : "bg-surface-section text-text-muted"
                  )}
                >
                  {stepNum}
                </span>
                <span className={cn("hidden sm:inline text-xs font-semibold truncate", active ? "text-text-primary" : "text-text-muted")}>
                  {label}
                </span>
              </div>
              {stepNum < STEP_LABELS.length && (
                <div className="h-[2px] flex-1 rounded-full bg-surface-section overflow-hidden">
                  <div className={cn("h-full rounded-full bg-gradient-brand transition-all duration-500", done ? "w-full" : "w-0")} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
