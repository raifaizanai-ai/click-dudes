"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  COMMISSION_DEMO_RATES, COMMISSION_DEMO_BASE_EARNINGS,
} from "@/sections/become-a-partner/data"
import { cn } from "@/lib/utils"

const FLOW_STAGES = ["Publisher", "Monetization", "Click-Dudes Eligible Net Earnings", "Your Agreed Partner %"]

export function CommissionCalculator() {
  const [rate, setRate] = useState<number>(COMMISSION_DEMO_RATES[0])
  const commission = Math.round(COMMISSION_DEMO_BASE_EARNINGS * (rate / 100))

  return (
    <div className="flex flex-col gap-8">
      {/* Flow diagram */}
      <div className="glass rounded-2xl p-5 sm:p-6 border border-brand-purple/[0.08] overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
          {FLOW_STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className={cn(
                  "px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap",
                  i === FLOW_STAGES.length - 1
                    ? "bg-gradient-brand text-white shadow-[0_4px_16px_rgba(139,92,246,0.30)]"
                    : "glass-strong text-text-primary border border-brand-purple/12"
                )}
              >
                {s}
              </span>
              {i < FLOW_STAGES.length - 1 && <ArrowRight aria-hidden="true" className="w-4 h-4 text-brand-purple/40 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Demo calculator */}
      <div className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]">
        <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">Illustrative Demo Calculator</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-text-muted mb-2">Illustrative Click-Dudes eligible net earnings</p>
            <p className="text-2xl font-bold text-text-primary">${COMMISSION_DEMO_BASE_EARNINGS.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-2">Partner rate</p>
            <div className="flex gap-2">
              {COMMISSION_DEMO_RATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRate(r)}
                  aria-pressed={rate === r}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-ring",
                    rate === r
                      ? "bg-gradient-brand text-white shadow-[0_4px_16px_rgba(139,92,246,0.30)]"
                      : "bg-white border border-[rgba(7,17,47,0.08)] text-text-secondary hover:border-brand-purple/25"
                  )}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[rgba(7,17,47,0.06)] flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-text-muted mb-1">Illustrative partner commission</p>
            <p className="text-3xl font-bold text-gradient-brand">${commission.toLocaleString()}</p>
          </div>
        </div>

        <p className="text-xs text-text-muted mt-5 leading-relaxed">
          Illustrative only. Actual partner rates and earnings depend on the approved agreement, publisher activity,
          adjustments, traffic quality and monetization performance.
        </p>
      </div>
    </div>
  )
}
