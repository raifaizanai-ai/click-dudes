"use client"

import { ChipMultiSelect } from "@/sections/become-a-partner/form/ChipMultiSelect"
import { ChipSingleSelect } from "@/sections/become-a-partner/form/ChipSingleSelect"
import {
  PUBLISHER_TYPE_FORM_OPTIONS, PUBLISHER_COUNT_OPTIONS, OWNERSHIP_OPTIONS, MONTHLY_CAPACITY_OPTIONS,
} from "@/sections/become-a-partner/data"
import type { PartnerApplicationState } from "@/sections/become-a-partner/form/formState"

interface Props {
  state: PartnerApplicationState
  set: <K extends keyof PartnerApplicationState>(key: K, value: PartnerApplicationState[K]) => void
}

export function FormStep2Network({ state, set }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-bold text-text-primary">Your Publisher Network</h3>

      <ChipMultiSelect label="Publisher Types" required options={PUBLISHER_TYPE_FORM_OPTIONS} values={state.publisherTypes} onChange={(v) => set("publisherTypes", v)} />

      <ChipSingleSelect
        label="How many publishers do you currently work with?"
        required
        options={PUBLISHER_COUNT_OPTIONS}
        value={state.publisherCount}
        onChange={(v) => set("publisherCount", v)}
      />

      <ChipSingleSelect
        label="Do you own the properties or refer third-party publishers?"
        required
        options={OWNERSHIP_OPTIONS}
        value={state.ownership}
        onChange={(v) => set("ownership", v)}
      />

      <ChipSingleSelect
        label="How many publisher opportunities can you realistically refer per month?"
        required
        options={MONTHLY_CAPACITY_OPTIONS}
        value={state.monthlyCapacity}
        onChange={(v) => set("monthlyCapacity", v)}
      />
    </div>
  )
}
