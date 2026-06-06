"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle2, Star } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { LiveDot } from "@/components/shared/LiveDot"
import { staggerContainer, fadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface StatusCard {
  icon: React.ElementType
  title: string
  description: string
  dotColor: "purple" | "green" | "cyan"
  accentBorder: string
  statusLabel: string
}

const STATUS_CARDS: StatusCard[] = [
  {
    icon:         Clock,
    title:        "Under Review",
    description:  "For new applicants or publishers needing additional verification. Our team is actively reviewing your property for quality, compliance, and monetization potential.",
    dotColor:     "purple",
    accentBorder: "border-t-brand-purple/30",
    statusLabel:  "In Review",
  },
  {
    icon:         CheckCircle2,
    title:        "Approved Publisher",
    description:  "For publishers who meet quality and compliance standards. Access to premium demand, Google AdX, Header Bidding, and AI optimization is unlocked.",
    dotColor:     "green",
    accentBorder: "border-t-brand-green/30",
    statusLabel:  "Active",
  },
  {
    icon:         Star,
    title:        "Premium Publisher",
    description:  "For high-quality publishers with stable traffic, strong revenue, clean compliance, and long-term growth potential. Preferred terms and dedicated support.",
    dotColor:     "cyan",
    accentBorder: "border-t-brand-cyan/30",
    statusLabel:  "Premium",
  },
]

export function PublisherStatusTypes() {
  return (
    <Section background="white" padding="lg" aria-label="Publisher Status Types">
      <Container size="lg">
        <SectionHeader
          badge="Publisher Status"
          heading={
            <>
              Publisher Status{" "}
              <span className="text-gradient-brand">Types</span>
            </>
          }
          subtext="Every publisher in the Click Dudes network carries one of three review statuses."
          align="center"
          subtextWidth="md"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STATUS_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <motion.div key={card.title} variants={fadeUp} className="h-full">
                <GlassCard
                  variant="strong"
                  padding="lg"
                  hover
                  rounded="2xl"
                  className={cn("h-full border-t-2", card.accentBorder)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <LiveDot color={card.dotColor} size="md" label={card.statusLabel} />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-3">{card.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
