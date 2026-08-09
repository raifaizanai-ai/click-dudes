"use client"

import type { PartnerApplicationState } from "@/sections/become-a-partner/form/formState"
import { cn } from "@/lib/utils"

interface Props {
  state: PartnerApplicationState
  set: <K extends keyof PartnerApplicationState>(key: K, value: PartnerApplicationState[K]) => void
}

function ConsentCheckbox({
  id, checked, onChange, children, required,
}: { id: string; checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={id} className={cn(
      "flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors duration-200",
      checked ? "border-brand-purple/30 bg-brand-purple/[0.04]" : "border-[rgba(7,17,47,0.08)] bg-white/60"
    )}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-4 h-4 rounded border-brand-purple/30 text-brand-purple focus-ring flex-shrink-0"
      />
      <span className="text-sm text-text-secondary leading-relaxed">{children}</span>
    </label>
  )
}

export function FormStep4Confirm({ state, set }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-bold text-text-primary mb-1">Confirmation</h3>

      {/* Honeypot — hidden from real users, visible to bots that fill every field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="pa-hp">Leave this field empty</label>
        <input id="pa-hp" name="hpField" type="text" tabIndex={-1} autoComplete="off" value={state.hpField} onChange={(e) => set("hpField", e.target.value)} />
      </div>

      <ConsentCheckbox id="pa-consent-accuracy" required checked={state.consentAccuracy} onChange={(v) => set("consentAccuracy", v)}>
        I confirm that the information submitted is accurate and that publisher opportunities I refer must comply with
        Click-Dudes eligibility and quality requirements.
      </ConsentCheckbox>

      <ConsentCheckbox id="pa-consent-privacy" required checked={state.consentPrivacy} onChange={(v) => set("consentPrivacy", v)}>
        I agree to the applicable{" "}
        <a href="/privacy" className="text-brand-purple underline underline-offset-2 hover:text-brand-violet">privacy policy</a>{" "}
        and understand that submitting this application does not guarantee approval or a specific commission rate.
      </ConsentCheckbox>

      <ConsentCheckbox id="pa-consent-marketing" checked={state.marketingConsent} onChange={(v) => set("marketingConsent", v)}>
        I&apos;m happy to receive occasional partner program updates from Click-Dudes. (optional)
      </ConsentCheckbox>
    </div>
  )
}
