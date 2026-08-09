import { AlertCircle } from "lucide-react"
import type { LegalSectionData } from "@/lib/legal/types"

export function LegalSection({ id, number, title, body, callout }: LegalSectionData) {
  return (
    <div id={id} className="scroll-mt-28 pb-8 mb-8 border-b border-[rgba(7,17,47,0.06)] last:border-b-0 last:mb-0 last:pb-0">
      <h2 className="flex items-baseline gap-2.5 text-lg font-bold text-text-primary tracking-heading mb-3">
        <span className="text-brand-purple/50 text-sm font-mono flex-shrink-0">{String(number).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {body.map((paragraph, i) => (
          <p key={i} className="text-sm text-text-secondary leading-relaxed text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
      {callout && (
        <div className="flex items-start gap-2.5 mt-4 p-3.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
          <AlertCircle aria-hidden="true" className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">{callout}</p>
        </div>
      )}
    </div>
  )
}
