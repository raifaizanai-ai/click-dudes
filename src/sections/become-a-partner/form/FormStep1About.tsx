"use client"

import { TextField } from "@/sections/become-a-partner/form/TextField"
import { ChipSingleSelect } from "@/sections/become-a-partner/form/ChipSingleSelect"
import { PARTNER_TYPE_FORM_OPTIONS } from "@/sections/become-a-partner/data"
import type { PartnerApplicationState } from "@/sections/become-a-partner/form/formState"

interface Props {
  state: PartnerApplicationState
  set: <K extends keyof PartnerApplicationState>(key: K, value: PartnerApplicationState[K]) => void
}

export function FormStep1About({ state, set }: Props) {
  const showCompanyName = state.partnerType === "Agency" || state.partnerType === "Company"

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-base font-bold text-text-primary">About You</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField id="pa-first-name" label="First Name" required autoComplete="given-name" value={state.firstName} onChange={(v) => set("firstName", v)} />
        <TextField id="pa-last-name" label="Last Name" required autoComplete="family-name" value={state.lastName} onChange={(v) => set("lastName", v)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField id="pa-primary-email" label="Primary Email" type="email" required autoComplete="email" value={state.primaryEmail} onChange={(v) => set("primaryEmail", v)} />
        <TextField id="pa-secondary-email" label="Secondary Email" type="email" optional autoComplete="email" value={state.secondaryEmail} onChange={(v) => set("secondaryEmail", v)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField id="pa-whatsapp" label="WhatsApp Number" type="tel" required autoComplete="tel" placeholder="+1 234 567 8900" value={state.whatsapp} onChange={(v) => set("whatsapp", v)} />
        <TextField id="pa-country" label="Country" required autoComplete="country-name" value={state.country} onChange={(v) => set("country", v)} />
      </div>

      <ChipSingleSelect label="Partner Type" required options={PARTNER_TYPE_FORM_OPTIONS} value={state.partnerType} onChange={(v) => set("partnerType", v)} />

      {showCompanyName && (
        <TextField id="pa-company-name" label="Company Name" value={state.companyName} onChange={(v) => set("companyName", v)} />
      )}

      <TextField id="pa-linkedin" label="LinkedIn URL" type="url" optional autoComplete="url" placeholder="https://linkedin.com/in/you" value={state.linkedinUrl} onChange={(v) => set("linkedinUrl", v)} />
    </div>
  )
}
