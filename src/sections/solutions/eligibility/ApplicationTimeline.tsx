"use client"

import { motion } from "framer-motion"
import { Send, Search, Target, Wrench, Activity } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { LiveDot } from "@/components/shared/LiveDot"
import { staggerContainer, fadeUp } from "@/lib/animations"

interface Step {
  number: number
  icon: React.ElementType
  title: string
  description: string
  isLive?: boolean
}

const STEPS: Step[] = [
  {
    number:      1,
    icon:        Send,
    title:       "Submit Your Property",
    description: "Publisher submits website, app, CTV platform, traffic details, and current monetization setup.",
  },
  {
    number:      2,
    icon:        Search,
    title:       "Initial Quality Review",
    description: "Click Dudes reviews traffic, content, policy safety, and monetization potential.",
  },
  {
    number:      3,
    icon:        Target,
    title:       "Monetization Fit Check",
    description: "We identify the best solution: Google AdX, Header Bidding, Web, App, CTV, or AI Ad Optimization.",
  },
  {
    number:      4,
    icon:        Wrench,
    title:       "Setup & Integration",
    description: "If approved, our team guides the publisher through technical setup, reporting access, and integration.",
  },
  {
    number:      5,
    icon:        Activity,
    title:       "Ongoing Monitoring",
    description: "We continuously monitor traffic quality, policy compliance, ad performance, and revenue health.",
    isLive:      true,
  },
]

export function ApplicationTimeline() {
  return (
    <Section background="section" padding="lg" aria-label="Application Process Timeline">
      <Container size="lg">
        <SectionHeader
          badge="Evaluation Process"
          heading={
            <>
              How the Evaluation{" "}
              <span className="text-gradient-brand">Works</span>
            </>
          }
          subtext="A structured, transparent review from submission to full activation."
          align="center"
          subtextWidth="md"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.number} variants={fadeUp} className="relative flex flex-col">
                <GlassCard variant="default" padding="md" rounded="2xl" className="flex-1">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-brand-purple">{step.number}</span>
                    </div>
                    {step.isLive && <LiveDot color="green" size="sm" label="" />}
                  </div>
                  <Icon className="w-5 h-5 text-brand-purple mb-3" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-text-primary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.description}</p>
                </GlassCard>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-5 -right-3 w-6 h-px bg-gradient-to-r from-brand-purple/30 to-brand-purple/10 z-10"
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
