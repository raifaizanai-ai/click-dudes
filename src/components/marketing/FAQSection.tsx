"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, ChevronRight, Brain } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

interface FAQItem { question: string; answer: string; tag: string }

const FAQS: FAQItem[] = [
  {
    tag: "traffic",
    question: "What traffic requirements do I need to apply?",
    answer: "We work with publishers generating a minimum of 500K monthly pageviews (web/app) or 250K monthly impressions (CTV). Traffic must originate from Tier-1 or Tier-2 geographies, be brand-safe, and comply with Google policies. Quality matters more than raw volume. We review each application individually.",
  },
  {
    tag: "adx",
    question: "How does the Google AdX approval process work?",
    answer: "Google AdX access requires approval through a certified publishing partner, which Click Dudes is. We review your property, ensure policy compliance, and submit your site through our managed partner account. Approval typically takes 5–10 business days once your property meets requirements. We guide you through every step.",
  },
  {
    tag: "payments",
    question: "When do I receive my first payment?",
    answer: "Payments are issued on a NET-30 basis following each calendar month. January revenue is paid in late February. We support bank wire, ACH (US), and PayPal. Minimum payment threshold is $100. Publishers with high-volume accounts can arrange bi-weekly payment schedules.",
  },
  {
    tag: "rpm",
    question: "What RPM can I realistically expect on my inventory?",
    answer: "RPM varies by geography, content vertical, device mix, and time of year. Web publishers in Tier-1 geos typically see $2–$15 RPM; gaming apps often achieve $4–$20 eCPM; CTV regularly commands $10–$35 CPM. Our AI optimization pushes your inventory toward the upper end of its potential.",
  },
  {
    tag: "setup",
    question: "How long does the full setup and integration take?",
    answer: "Most publishers go live within 2–7 days after approval. This includes header bidding wrapper setup, AdX tag integration, and initial AI calibration. We provide a dedicated onboarding specialist who manages all technical setup. You don't need a developer on your team.",
  },
]

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.22, ease: [0.4, 0, 1, 1] as const } },
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section background="navy" padding="lg" aria-label="AI Knowledge Terminal">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[400px] h-[350px] rounded-full bg-brand-purple/[0.10] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[250px] rounded-full bg-brand-cyan/[0.05] blur-3xl" />
      </div>

      <Container size="md" className="relative z-10">
        <SectionHeader
          badge="Knowledge Base"
          heading={<>Common Questions,<br /><span className="text-gradient-brand">Straight Answers</span></>}
          subtext="The questions publishers ask before applying. Straight answers, no fluff."
          align="center"
          subtextWidth="sm"
        />

        {/* Terminal interface */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 glass-dark rounded-3xl overflow-hidden border border-brand-purple/[0.10]"
          style={{ boxShadow: "0 32px 80px rgba(7,17,47,0.08), 0 0 40px rgba(139,92,246,0.08)" }}
        >
          {/* Terminal header bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10] bg-brand-purple/[0.03]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {["bg-red-400/40", "bg-yellow-400/40", "bg-green-400/40"].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Brain className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">AI Knowledge Base</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LiveDot color="green" size="sm" label="" />
              <span className="text-[10px] text-text-muted">{FAQS.length} topics</span>
            </div>
          </div>

          {/* FAQ items as terminal entries */}
          <div className="divide-y divide-brand-purple/[0.07]">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className={cn("transition-colors duration-200", isOpen ? "bg-brand-purple/[0.04]" : "hover:bg-brand-purple/[0.02]")}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
                    aria-expanded={isOpen}
                  >
                    {/* Terminal prompt */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                      <Terminal className="w-3 h-3 text-brand-purple/60" aria-hidden="true" />
                      <span className="text-[11px] font-bold text-brand-purple/50 font-mono uppercase">{faq.tag}</span>
                    </div>
                    <span className="flex-1 text-[13px] font-semibold text-text-primary leading-snug">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 pt-0.5"
                    >
                      <ChevronRight className={cn("w-4 h-4 transition-colors duration-200", isOpen ? "text-brand-purple" : "text-text-muted")} aria-hidden="true" />
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
                        {/* Answer block with AI response styling */}
                        <div className="mx-5 mb-4 pl-4 border-l-2 border-brand-purple/[0.30]">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="w-3 h-3 text-brand-purple/60" aria-hidden="true" />
                            <span className="text-[10px] font-bold text-brand-purple/50 uppercase tracking-wider">AI Response</span>
                          </div>
                          <p className="text-[13px] text-text-secondary leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Terminal footer */}
          <div className="flex items-center gap-3 px-5 py-3.5 border-t border-brand-purple/[0.08] bg-brand-purple/[0.02]">
            <span className="text-brand-green text-[12px] font-mono">$</span>
            <span className="text-[12px] text-text-muted font-mono">ask anything about monetization...</span>
            <motion.span
              className="w-[7px] h-[14px] bg-brand-purple/60 rounded-sm ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
