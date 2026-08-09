import { CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/shared/GlassCard"
import type { EligibilityPillar } from "@/sections/become-a-partner/data"

export function EligibilityChecklistCard({ pillar }: { pillar: EligibilityPillar }) {
  return (
    <GlassCard variant="strong" padding="lg" hover rounded="2xl" className="h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
          <pillar.icon aria-hidden="true" className="w-6 h-6 text-brand-purple" />
        </div>
        <span className="w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
          <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-brand-green" />
        </span>
      </div>
      <h3 className="text-base font-bold text-text-primary mb-4">{pillar.title}</h3>
      <ul className="space-y-2.5">
        {pillar.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
            <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}
