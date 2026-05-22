"use client"

import { Globe, DollarSign, Sparkles, RotateCcw } from "lucide-react"
import type { CalcInputs } from "@/lib/revenueCalculator"
import { fmtPageviews } from "@/lib/revenueCalculator"
import { CATEGORY_LABELS, GEO_LABELS, PLATFORM_LABELS } from "@/lib/revenueBenchmarks"
import type { CategoryKey, GeoKey, PlatformKey } from "@/lib/revenueBenchmarks"
import { cn } from "@/lib/utils"

interface CalculatorInputsProps {
  inputs:   CalcInputs
  onChange: (updates: Partial<CalcInputs>) => void
  onReset:  () => void
}

type QualityKey =
  | "adPlacementQuality" | "contentQuality" | "viewabilityRate"
  | "userExperience"     | "coreWebVitals"  | "pageLoadSpeed"

const QUALITY_FIELDS: { key: QualityKey; label: string }[] = [
  { key: "adPlacementQuality", label: "Ad Placement Quality"  },
  { key: "contentQuality",     label: "Content Quality"       },
  { key: "viewabilityRate",    label: "Viewability Rate"      },
  { key: "userExperience",     label: "User Experience Score" },
  { key: "coreWebVitals",      label: "Core Web Vitals"       },
  { key: "pageLoadSpeed",      label: "Page Load Speed"       },
]

const FLD = cn(
  "w-full px-3 py-2.5 rounded-xl text-sm text-text-primary bg-white/70",
  "border border-brand-purple/[0.12] backdrop-blur-sm",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40",
  "transition-[border-color] duration-200"
)
const SLIDER = "w-full h-1.5 rounded-full appearance-none cursor-pointer accent-violet-500 bg-brand-purple/10"
const LABEL  = "text-[10px] font-semibold tracking-widest uppercase text-text-muted"

function SectionCard({ icon: Icon, title, step, children }: {
  icon: typeof Globe; title: string; step: string; children: React.ReactNode
}) {
  return (
    <div className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] flex flex-col gap-4"
      style={{ boxShadow: "0 4px 24px rgba(7,17,47,0.05)" }}
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-brand-purple/10 flex items-center justify-center">
          <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
        </div>
        <span className="text-sm font-bold text-text-primary">{title}</span>
        <span className="text-[10px] text-text-muted px-2 py-0.5 rounded-full bg-surface-section ml-auto">{step}</span>
      </div>
      {children}
    </div>
  )
}

export function CalculatorInputs({ inputs, onChange, onReset }: CalculatorInputsProps) {
  const mobileVal = Math.max(5, 100 - inputs.deviceDesktop - 5)
  const tabletVal = Math.max(0, 100 - inputs.deviceDesktop - mobileVal)

  return (
    <div className="flex flex-col gap-5">

      {/* Section 1 — Website & Traffic */}
      <SectionCard icon={Globe} title="Website & Traffic" step="1 / 3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-domain" className={LABEL}>Website Domain</label>
          <input id="c-domain" type="text" placeholder="yourdomain.com"
            value={inputs.domain} onChange={e => onChange({ domain: e.target.value })}
            className={FLD}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-category" className={LABEL}>Category</label>
            <select id="c-category" value={inputs.category} onChange={e => onChange({ category: e.target.value as CategoryKey })} className={cn(FLD, "cursor-pointer")}>
              {(Object.entries(CATEGORY_LABELS) as [CategoryKey, string][]).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-geo" className={LABEL}>Traffic Geo</label>
            <select id="c-geo" value={inputs.geography} onChange={e => onChange({ geography: e.target.value as GeoKey })} className={cn(FLD, "cursor-pointer")}>
              {(Object.entries(GEO_LABELS) as [GeoKey, string][]).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between"><label className={LABEL}>Monthly Pageviews</label><span className="text-xs font-bold text-brand-purple">{fmtPageviews(inputs.monthlyPageviews)}</span></div>
          <input type="range" min={50000} max={20000000} step={50000} value={inputs.monthlyPageviews}
            onChange={e => onChange({ monthlyPageviews: Number(e.target.value) })} className={SLIDER} aria-label="Monthly pageviews"
          />
          <div className="flex justify-between text-[10px] text-text-muted"><span>50K</span><span>20M</span></div>
        </div>

        <div className="flex flex-col gap-2">
          <span className={LABEL}>Device Split</span>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between"><span className="text-xs text-text-secondary">Desktop</span><span className="text-xs font-bold text-brand-purple">{inputs.deviceDesktop}%</span></div>
            <input type="range" min={10} max={90} step={5} value={inputs.deviceDesktop}
              onChange={e => onChange({ deviceDesktop: Number(e.target.value) })} className={SLIDER} aria-label="Desktop percentage"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="glass-subtle rounded-xl p-2"><p className="text-[10px] text-text-muted">Mobile</p><p className="text-sm font-bold text-brand-blue">{mobileVal}%</p></div>
            <div className="glass-subtle rounded-xl p-2"><p className="text-[10px] text-text-muted">Tablet</p><p className="text-sm font-bold text-brand-cyan">{tabletVal}%</p></div>
          </div>
        </div>
      </SectionCard>

      {/* Section 2 — Monetization */}
      <SectionCard icon={DollarSign} title="Monetization & Performance" step="2 / 3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-platform" className={LABEL}>Current Monetization Platform</label>
          <select id="c-platform" value={inputs.platform} onChange={e => onChange({ platform: e.target.value as PlatformKey })} className={cn(FLD, "cursor-pointer")}>
            {(Object.entries(PLATFORM_LABELS) as [PlatformKey, string][]).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-rpm" className={LABEL}>Current RPM ($)</label>
            <input id="c-rpm" type="number" min={0} max={100} step={0.1}
              value={inputs.currentRPM} onChange={e => onChange({ currentRPM: Number(e.target.value) })} className={FLD}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-session" className={LABEL}>Avg Session (min)</label>
            <input id="c-session" type="number" min={1} max={30} step={0.5}
              value={inputs.sessionDuration} onChange={e => onChange({ sessionDuration: Number(e.target.value) })} className={FLD}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between"><label className={LABEL}>Fill Rate</label><span className="text-xs font-bold text-brand-purple">{inputs.fillRate}%</span></div>
          <input type="range" min={30} max={100} step={1} value={inputs.fillRate}
            onChange={e => onChange({ fillRate: Number(e.target.value) })} className={SLIDER} aria-label="Fill rate"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between"><label className={LABEL}>Ad Units / Page</label><span className="text-xs font-bold text-brand-blue">{inputs.adUnitsPerPage}</span></div>
            <input type="range" min={1} max={10} step={1} value={inputs.adUnitsPerPage}
              onChange={e => onChange({ adUnitsPerPage: Number(e.target.value) })} className={SLIDER} aria-label="Ad units per page"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between"><label className={LABEL}>Direct Sold %</label><span className="text-xs font-bold text-brand-cyan">{inputs.directSoldPercent}%</span></div>
            <input type="range" min={0} max={80} step={5} value={inputs.directSoldPercent}
              onChange={e => onChange({ directSoldPercent: Number(e.target.value) })} className={SLIDER} aria-label="Direct sold percentage"
            />
          </div>
        </div>
      </SectionCard>

      {/* Section 3 — Quality */}
      <SectionCard icon={Sparkles} title="Website Quality & Optimization" step="3 / 3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUALITY_FIELDS.map(({ key, label }) => (
            <div key={key} className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className={LABEL}>{label}</label>
                <span className="text-[10px] font-bold text-brand-purple">{inputs[key]}%</span>
              </div>
              <input type="range" min={0} max={100} step={5} value={inputs[key]}
                onChange={e => onChange({ [key]: Number(e.target.value) })}
                className={SLIDER} aria-label={label}
              />
            </div>
          ))}
        </div>
      </SectionCard>

      <button onClick={onReset}
        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-text-muted border border-brand-purple/[0.12] glass hover:border-brand-purple/25 hover:text-brand-purple transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
      >
        <RotateCcw aria-hidden="true" className="w-3.5 h-3.5" />
        Reset Calculator
      </button>
    </div>
  )
}
