"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RobotImage } from "@/components/shared/RobotImage"
import { ChannelMockup } from "@/sections/become-a-partner/shared/ChannelMockup"
import { CHANNELS } from "@/sections/become-a-partner/data"

const ZONES = ["web", "app", "ctv", "aligned"] as const

export function PublisherChannelsSection() {
  const [focusedKey, setFocusedKey] = useState<(typeof ZONES)[number]>("web")

  useEffect(() => {
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-channel-trigger]"))
    if (triggers.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-channel-trigger") as (typeof ZONES)[number] | null
            if (key) setFocusedKey(key)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )
    triggers.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Section background="base" padding="lg" aria-label="Web, app and CTV publisher channels">
      <Container size="lg">
        <SectionHeader
          badge="Every Publisher Channel"
          heading="One Partnership. Every Publisher Channel."
          subtext="If you own publishers yourself or work with publisher relationships, Click-Dudes can help evaluate qualified web, app and CTV monetization opportunities through its partner network."
          align="center"
          subtextWidth="lg"
        />

        {/* Desktop: scroll-linked focus shift */}
        <div className="hidden lg:block relative mt-12">
          <div className="sticky top-28 flex flex-col items-center gap-8">
            <div className="grid grid-cols-3 gap-8 w-full items-center">
              {CHANNELS.map((c) => (
                <ChannelMockup key={c.key} channel={c} focused={focusedKey === c.key} aligned={focusedKey === "aligned"} />
              ))}
            </div>
            {focusedKey === "aligned" && (
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-purple">
                <RobotImage variant="main" size="xs" glowColor="purple" />
                Aligned around Click-Dudes
              </div>
            )}
          </div>
          {ZONES.map((z) => (
            <div key={z} data-channel-trigger={z} className="h-[38vh]" aria-hidden="true" />
          ))}
        </div>

        {/* Mobile: stacked, no scroll-linking */}
        <div className="flex lg:hidden flex-col gap-10 mt-12">
          {CHANNELS.map((c) => (
            <ChannelMockup key={c.key} channel={c} focused aligned={false} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
