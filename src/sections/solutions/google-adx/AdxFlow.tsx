"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Code2, BrainCircuit, Rocket, type LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"

/* ── Data ─────────────────────────────────────────────────── */

interface Step {
  step:     number
  icon:     LucideIcon
  title:    string
  body:     string
  duration: string
}

const STEPS: Step[] = [
  {
    step:     1,
    icon:     ClipboardCheck,
    title:    "Apply & Qualify",
    body:     "Submit your property for review. We verify traffic quality, content compliance, and AdX eligibility. Most approvals complete within 5–10 business days.",
    duration: "7–14 Days",
  },
  {
    step:     2,
    icon:     Code2,
    title:    "Technical Integration",
    body:     "Our team handles the full setup — header bidding wrapper, AdX tag deployment, and GAM configuration. No developer required on your end.",
    duration: "3–7 Days",
  },
  {
    step:     3,
    icon:     BrainCircuit,
    title:    "AI Calibration",
    body:     "The AI analyzes your historical data and sets intelligent baseline price floors for every ad position. Continuous learning begins immediately.",
    duration: "48 hours",
  },
  {
    step:     4,
    icon:     Rocket,
    title:    "Go Live & Scale",
    body:     "Your inventory goes live with full AdX access and 50+ demand partners. Revenue lifts are typically visible within the first 72 hours.",
    duration: "Ongoing",
  },
]

/* ── Motion ───────────────────────────────────────────────── */

const stepVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function AdxFlow() {
  return (
    <Section background="base" padding="lg" aria-label="AdX onboarding process" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-32 left-0" />

      <Container>
        <SectionHeader
          badge="Onboarding Process"
          heading={<>Live in{" "}<GradientText gradient="brand">Under 2 Weeks.</GradientText><br />We Handle Everything.</>}
          subtext="A fully managed integration from application to first revenue. Our team runs the technical side end-to-end — you just approve and watch the RPMs climb."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div aria-hidden="true" className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-purple/20 via-brand-purple/30 to-brand-purple/20 pointer-events-none" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 rounded-full glass-strong border border-brand-purple/[0.18] flex flex-col items-center justify-center"
                style={{ boxShadow: "0 8px 32px rgba(139,92,246,0.12)" }}>
                <step.icon aria-hidden="true" className="w-6 h-6 text-brand-purple" />
                <span className="text-[9px] font-bold tracking-wider text-brand-purple/60 mt-0.5">STEP {step.step}</span>
              </div>

              {/* Duration badge */}
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

        {/* Mobile: vertical steps */}
        <div className="md:hidden flex flex-col gap-6 relative">
          <div aria-hidden="true" className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-purple/20 via-brand-purple/30 to-brand-purple/20 pointer-events-none" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex items-start gap-5 pl-1"
            >
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-strong border border-brand-purple/[0.18] flex flex-col items-center justify-center"
                style={{ boxShadow: "0 8px 24px rgba(139,92,246,0.10)" }}>
                <step.icon aria-hidden="true" className="w-5 h-5 text-brand-purple" />
                <span className="text-[8px] font-bold tracking-wider text-brand-purple/60 mt-0.5">{step.step}</span>
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
