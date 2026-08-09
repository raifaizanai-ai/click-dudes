"use client"

import { useState } from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { PartnerTypeSelector } from "@/sections/become-a-partner/shared/PartnerTypeSelector"
import { IdentityVisualStage } from "@/sections/become-a-partner/shared/IdentityVisualStage"
import { PARTNER_TYPES } from "@/sections/become-a-partner/data"

export function WhoCanPartnerSection() {
  const [activeKey, setActiveKey] = useState<string>(PARTNER_TYPES[0].key)
  const active = PARTNER_TYPES.find((p) => p.key === activeKey) ?? PARTNER_TYPES[0]

  return (
    <Section background="section" padding="lg" aria-label="Who can become a partner">
      <Container size="lg">
        <SectionHeader
          badge="Who Can Partner"
          heading="Whoever You Are, If You Know Publishers — Let's Talk."
          subtext="You do not need to be a large media company to apply. Click-Dudes works with organizations and qualified individuals who can introduce genuine publisher opportunities."
          align="center"
          subtextWidth="lg"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <PartnerTypeSelector options={PARTNER_TYPES} activeKey={activeKey} onSelect={setActiveKey} />
          </div>

          <div className="lg:col-span-3 flex flex-col gap-5">
            <IdentityVisualStage typeKey={active.key} label={active.label} />
            <div className="glass rounded-2xl p-5 border border-brand-purple/[0.08]">
              <p className="text-sm font-semibold text-brand-purple mb-1.5">{active.tagline}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{active.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
