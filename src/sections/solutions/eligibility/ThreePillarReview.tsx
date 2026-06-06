"use client"

import { motion } from "framer-motion"
import { Shield, Users2, LayoutDashboard } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { staggerContainer, fadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface PillarItem {
  icon: React.ElementType
  title: string
  items: string[]
  iconColor: string
  iconBg: string
  dotColor: string
}

const PILLARS: PillarItem[] = [
  {
    icon:      Shield,
    title:     "Account & Ownership Health",
    items:     ["Domain/app ownership", "Contact verification", "Business legitimacy", "Ad Manager status if available", "Account history"],
    iconColor: "text-brand-purple",
    iconBg:    "bg-brand-purple/10",
    dotColor:  "bg-brand-purple",
  },
  {
    icon:      Users2,
    title:     "Traffic & Audience Quality",
    items:     ["Traffic sources", "GEO mix", "Engagement quality", "Invalid traffic risk", "Bot/fraud signals", "Repeat user behavior"],
    iconColor: "text-brand-blue",
    iconBg:    "bg-brand-blue/10",
    dotColor:  "bg-brand-blue",
  },
  {
    icon:      LayoutDashboard,
    title:     "Content & Monetization Readiness",
    items:     ["Content quality", "Brand safety", "Ad placement potential", "Viewability potential", "User experience", "Policy compliance"],
    iconColor: "text-brand-cyan",
    iconBg:    "bg-brand-cyan/10",
    dotColor:  "bg-brand-cyan",
  },
]

export function ThreePillarReview() {
  return (
    <Section background="white" padding="lg" aria-label="Three Pillar Review System">
      <Container size="lg">
        <SectionHeader
          badge="Review System"
          heading={
            <>
              What Click Dudes{" "}
              <span className="text-gradient-brand">Reviews</span>
            </>
          }
          subtext="Every publisher property is evaluated across three core quality dimensions before activation."
          align="center"
          subtextWidth="md"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div key={pillar.title} variants={fadeUp} className="h-full">
                <GlassCard variant="strong" padding="lg" hover rounded="2xl" className="h-full">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-5",
                      pillar.iconBg
                    )}
                  >
                    <Icon className={cn("w-6 h-6", pillar.iconColor)} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-4">{pillar.title}</h3>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            pillar.dotColor
                          )}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
