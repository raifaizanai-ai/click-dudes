"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"

export interface FlowStep {
  icon:     LucideIcon
  title:    string
  body:     string
  duration: string
}

export interface SolutionFlowProps {
  badge?:   string
  heading:  React.ReactNode
  subtext:  string
  steps:    FlowStep[]
}

const stepVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionFlow({ badge, heading, subtext, steps }: SolutionFlowProps) {
  return (
    <Section background="base" padding="lg" aria-label="Onboarding process" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-32 left-0" />

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-14" />

        {/* Desktop */}
        <div className="hidden md:grid gap-6 relative" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          <div aria-hidden="true" className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-purple/20 via-brand-purple/30 to-brand-purple/20 pointer-events-none" />
          {steps.map((step, i) => (
            <motion.div key={step.title} custom={i} variants={stepVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col items-center text-center gap-4">
              <div className="relative z-10 w-20 h-20 rounded-full glass-strong border border-brand-purple/[0.18] flex flex-col items-center justify-center"
                style={{ boxShadow: "0 8px 32px rgba(139,92,246,0.12)" }}>
                <step.icon aria-hidden="true" className="w-6 h-6 text-brand-purple" />
                <span className="text-[9px] font-bold tracking-wider text-brand-purple/60 mt-0.5">STEP {i + 1}</span>
              </div>
              <span className="text-[10px] font-semibold tracking-wide text-text-muted bg-brand-purple/[0.07] px-2.5 py-1 rounded-full border border-brand-purple/[0.10]">
                {step.duration}
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6 relative">
          <div aria-hidden="true" className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-purple/20 via-brand-purple/30 to-brand-purple/20 pointer-events-none" />
          {steps.map((step, i) => (
            <motion.div key={step.title} custom={i} variants={stepVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              className="flex items-start gap-5 pl-1">
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-strong border border-brand-purple/[0.18] flex flex-col items-center justify-center"
                style={{ boxShadow: "0 8px 24px rgba(139,92,246,0.10)" }}>
                <step.icon aria-hidden="true" className="w-5 h-5 text-brand-purple" />
                <span className="text-[8px] font-bold tracking-wider text-brand-purple/60 mt-0.5">{i + 1}</span>
              </div>
              <div className="pt-2 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-bold text-text-primary">{step.title}</h3>
                  <span className="text-[10px] text-text-muted bg-brand-purple/[0.07] px-2 py-0.5 rounded-full border border-brand-purple/[0.10]">{step.duration}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
