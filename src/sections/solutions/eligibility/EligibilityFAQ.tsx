"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: "Can new websites apply?",
    answer:   "Yes. New websites can apply as long as the site is live, has original content, and does not violate Google Publisher Policies. Revenue or traffic history is helpful but not always required for initial evaluation.",
  },
  {
    question: "Do I need an existing Google Ad Manager account?",
    answer:   "No. You do not need an existing Google Ad Manager account to apply. Click Dudes can onboard qualifying publishers through our managed account infrastructure.",
  },
  {
    question: "Can app publishers apply?",
    answer:   "Yes. Mobile app publishers on iOS and Android can apply for App Monetization. We review the app for content compliance, user experience, and traffic quality before onboarding.",
  },
  {
    question: "Can CTV/OTT publishers apply?",
    answer:   "Yes. CTV and OTT platform publishers can apply for our dedicated CTV Monetization solution, which connects to premium programmatic CTV demand.",
  },
  {
    question: "What happens if my traffic quality is poor?",
    answer:   "If your traffic does not meet our minimum quality standards, we will notify you and may suggest steps to improve before reapplying. Properties with sustained invalid traffic cannot be onboarded.",
  },
  {
    question: "How long does review take?",
    answer:   "Initial review typically takes 2–7 days. Properties requiring additional verification may take longer. We communicate status updates throughout the process.",
  },
  {
    question: "Do you accept all publishers?",
    answer:   "No. We are selective. We prioritize publishers who meet our quality, compliance, and monetization readiness criteria. Not every application is approved.",
  },
  {
    question: "Can rejected publishers apply again?",
    answer:   "Yes. If your application is not approved, you may reapply after addressing the issues identified during review. We provide actionable feedback to help you qualify.",
  },
  {
    question: "Is revenue share fixed?",
    answer:   "Revenue share tiers are guidelines. Final commercial terms are determined after review based on traffic quality, compliance, content quality, account history, and monetization fit.",
  },
  {
    question: "What does Click Dudes monitor after approval?",
    answer:   "After approval, we continuously monitor traffic quality, policy compliance, ad performance, viewability metrics, and revenue health to protect both publishers and our demand partners.",
  },
]

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
}

export function EligibilityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="section" padding="lg" aria-label="Frequently Asked Questions">
      <Container size="md">
        <SectionHeader
          badge="FAQs"
          heading={
            <>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </>
          }
          subtext="Answers to the questions publishers most commonly ask before applying."
          align="center"
          subtextWidth="md"
        />

        <GlassCard variant="strong" padding="none" rounded="2xl" className="mt-12 overflow-hidden">
          <div className="divide-y divide-brand-purple/[0.07]">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={cn(
                    "transition-colors duration-200",
                    isOpen ? "bg-brand-purple/[0.03]" : "hover:bg-brand-purple/[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <HelpCircle
                      className="w-4 h-4 text-brand-purple/60 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="flex-1 text-sm font-semibold text-text-primary leading-snug">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="shrink-0 pt-0.5"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-colors duration-200",
                          isOpen ? "text-brand-purple" : "text-text-muted"
                        )}
                        aria-hidden="true"
                      />
                    </motion.div>
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
                        <p className="px-6 pb-5 pl-14 text-sm text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </GlassCard>
      </Container>
    </Section>
  )
}
