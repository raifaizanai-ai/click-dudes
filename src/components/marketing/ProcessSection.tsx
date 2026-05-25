"use client"

import { motion } from "framer-motion"
import { Send, Search, Link, Sliders, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { ProcessPipeline } from "@/components/marketing/ProcessPipeline"
import { cn } from "@/lib/utils"

interface ProcessStep { number: string; icon: LucideIcon; title: string; description: string }

const STEPS: ProcessStep[] = [
  { number: "01", icon: Send,    title: "Apply",     description: "Submit your property details. Our team reviews your traffic and inventory quality within 48 hours." },
  { number: "02", icon: Search,  title: "Analyze",   description: "We audit your existing setup, identify revenue gaps, and build a custom monetization strategy." },
  { number: "03", icon: Link,    title: "Integrate", description: "Header bidding and AdX tags go live in 3–7 business days. Our engineers handle everything — you don't touch code." },
  { number: "04", icon: Sliders, title: "Optimize",  description: "AI recalibrates price floors, placement mix, and demand allocation daily. Weekly reports show exactly what's moving and why." },
  { number: "05", icon: Rocket,  title: "Scale",     description: "As your revenue grows, we bring in premium private marketplace deals and direct advertiser relationships." },
]

const NODE_X_PCT = [11.11, 30.56, 50, 69.44, 88.89] as const

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 + 0.3 },
  }),
}

const descVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.85 } },
}

const descItemVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
}

const mobileContainerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const mobileItemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function ProcessSection() {
  return (
    <Section background="base" padding="lg" aria-label="Getting Started Process" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-40 left-1/2 -translate-x-1/2" />

      <Container size="lg">
        <SectionHeader
          badge="How It Works"
          heading={<>From Application to{" "}<span className="text-gradient-brand">Revenue in Days</span></>}
          subtext="A streamlined onboarding process built for publishers who want results fast — not a months-long integration project."
          align="center"
          subtextWidth="md"
        />

        {/* ── Desktop: 2.5D pipeline ── */}
        <div className="mt-14 hidden lg:block mx-auto max-w-[920px]">
          <div className="relative overflow-visible" style={{ height: "320px" }}>
            <ProcessPipeline className="absolute inset-0 w-full h-full" />

            {STEPS.map((step, i) => {
              const isTop = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: isTop ? -5 : 5, transition: { duration: 0.2 } }}
                  className={cn(
                    "absolute w-[150px] glass-elevated rounded-2xl border border-brand-purple/[0.14] p-3 text-center",
                    "shadow-[0_8px_32px_rgba(7,17,47,0.07),0_0_16px_rgba(139,92,246,0.06)]",
                    "hover:border-brand-purple/[0.24] hover:shadow-[0_12px_40px_rgba(7,17,47,0.10),0_0_20px_rgba(139,92,246,0.12)]",
                    "transition-[border-color,box-shadow] duration-300 cursor-default"
                  )}
                  style={{
                    left:      `${NODE_X_PCT[i]}%`,
                    top:       isTop ? "calc(26.67% - 50px)" : "calc(73.33% - 50px)",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center mx-auto mb-2">
                    <step.icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                  </div>
                  <span className="block text-[9px] font-bold text-brand-purple/50 tracking-wider mb-0.5">{step.number}</span>
                  <p className="text-[13px] font-bold text-text-primary leading-snug">{step.title}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            variants={descVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-6 grid grid-cols-5 gap-4"
          >
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={descItemVariants} className="text-center">
                <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mobile: vertical pipeline ── */}
        <motion.div
          variants={mobileContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 lg:hidden flex flex-col gap-0"
        >
          {STEPS.map((step, i) => (
            <motion.div key={step.number} variants={mobileItemVariants} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl glass-elevated border border-brand-purple/[0.18] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(139,92,246,0.10)]">
                  <step.icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.4), transparent)" }} />
                )}
              </div>
              <div className={cn("pb-8", i === STEPS.length - 1 && "pb-0")}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-brand-purple/50 tracking-wider">{step.number}</span>
                  <p className="text-sm font-bold text-text-primary">{step.title}</p>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
