"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: "What traffic requirements do I need to apply?",
    answer: "We work with publishers generating a minimum of 500K monthly pageviews (web/app) or 250K monthly impressions (CTV). Traffic must originate from Tier-1 or Tier-2 geographies, be brand-safe, and comply with Google policies. We review each application individually — quality matters more than raw volume.",
  },
  {
    question: "How does the Google AdX approval process work?",
    answer: "Google AdX access requires approval through a certified publishing partner — which Click Dudes is. We review your property, ensure policy compliance, and submit your site through our managed partner account. Approval typically takes 5–10 business days once your property meets the requirements. We guide you through every step.",
  },
  {
    question: "When do I receive my first payment?",
    answer: "Payments are issued on a NET-30 basis following each calendar month. For example, revenue earned in January is paid in late February. We support bank wire, ACH (US), and PayPal. Minimum payment threshold is $100. Publishers with high-volume accounts can arrange bi-weekly payment schedules.",
  },
  {
    question: "What RPM can I realistically expect on my inventory?",
    answer: "RPM varies significantly by traffic geography, content vertical, device mix, and time of year. Web publishers in Tier-1 geos typically see $2–$15 RPM; gaming apps often achieve $4–$20 eCPM; CTV inventory regularly commands $10–$35 CPM. These are ranges — not guarantees. Our AI optimization is designed to push your inventory toward the upper end of its potential.",
  },
  {
    question: "How long does the full setup and integration take?",
    answer: "Most publishers are live within 3–7 business days after approval. This includes header bidding wrapper setup, AdX tag integration, and initial AI calibration. We provide a dedicated onboarding specialist who manages the technical setup end to end. You don't need a developer on your team — we handle it all.",
  },
]

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const } },
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="base" padding="lg" aria-label="Frequently Asked Questions" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-32 right-0" />

      <Container size="md">
        <SectionHeader
          badge="FAQ"
          heading={<>Common Questions,<br /><span className="text-gradient-brand">Straight Answers</span></>}
          subtext="Everything you need to know before applying to the Click Dudes publisher network."
          align="center"
          subtextWidth="sm"
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={cn(
                  "glass-strong rounded-2xl border overflow-hidden",
                  "transition-[border-color] duration-300",
                  isOpen ? "border-brand-purple/[0.22]" : "border-brand-purple/[0.10]"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
                  )}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-text-primary leading-snug">
                    {faq.question}
                  </span>
                  <span className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                    isOpen ? "bg-brand-purple/15 text-brand-purple" : "bg-brand-purple/[0.07] text-text-muted"
                  )}>
                    {isOpen
                      ? <Minus aria-hidden="true" className="w-3.5 h-3.5" />
                      : <Plus  aria-hidden="true" className="w-3.5 h-3.5" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
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
