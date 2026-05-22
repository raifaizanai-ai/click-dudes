"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { cn } from "@/lib/utils"

export interface FAQItem {
  question: string
  answer:   string
}

export interface SolutionFAQProps {
  badge?:  string
  heading: React.ReactNode
  subtext: string
  faqs:    FAQItem[]
}

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const } },
}

export function SolutionFAQ({ badge, heading, subtext, faqs }: SolutionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="base" padding="lg" aria-label="Frequently asked questions" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-32 right-0" />

      <Container size="md">
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="sm" className="mb-12" />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}
                className={cn(
                  "glass-strong rounded-2xl border overflow-hidden transition-[border-color] duration-300",
                  isOpen ? "border-brand-purple/[0.22]" : "border-brand-purple/[0.10]"
                )}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
                  aria-expanded={isOpen}>
                  <span className="text-sm font-semibold text-text-primary leading-snug">{faq.question}</span>
                  <span className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                    isOpen ? "bg-brand-purple/15 text-brand-purple" : "bg-brand-purple/[0.07] text-text-muted"
                  )}>
                    {isOpen
                      ? <Minus aria-hidden="true" className="w-3.5 h-3.5" />
                      : <Plus  aria-hidden="true" className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer" variants={answerVariants}
                      initial="hidden" animate="visible" exit="exit" className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
