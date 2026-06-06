"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "How quickly does Click Dudes respond?",
    a: "We respond to all inquiries within 24 hours on business days (Mon–Fri, 9am–6pm GMT). For urgent publisher support, WhatsApp is typically the fastest channel for a same-day response.",
  },
  {
    q: "Do I need an existing AdSense account first?",
    a: "No. While many publishers come from AdSense, we onboard publishers directly onto Google AdX through our GCPP network, regardless of your current monetization setup.",
  },
  {
    q: "What monthly traffic is required?",
    a: "Websites with 50K+ monthly pageviews and original, brand-safe content are a strong fit. App and CTV publishers should contact us to discuss their specific inventory and audience.",
  },
  {
    q: "Do you support app publishers?",
    a: "Yes. We support iOS, Android, and web app publishers with cross-platform ad revenue solutions including rewarded ads, interstitials, anchor ads, and native formats.",
  },
  {
    q: "Do you support CTV publishers?",
    a: "Yes. We provide Connected TV monetization with access to premium programmatic demand and direct advertisers. Get in touch to discuss your CTV inventory.",
  },
  {
    q: "What is the revenue share model?",
    a: "Fully transparent, we retain a small management fee from incremental revenue we generate. You only pay us when you earn more. No flat fees, no monthly commitments.",
  },
  {
    q: "How long does onboarding take?",
    a: "After review, our publisher success team schedules a discovery call. Onboarding typically takes 5–10 business days, covering tag implementation, QA, and your first revenue report.",
  },
]

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section background="base" padding="xl" aria-label="Frequently asked questions">
      <Container>
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">Common Questions</span>
            <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
              Frequently Asked{" "}<GradientText gradient="brand">Questions</GradientText>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <div key={i}
                className={cn(
                  "glass-strong rounded-2xl border overflow-hidden transition-all duration-200",
                  open === i ? "border-brand-purple/20" : "border-brand-purple/[0.08]"
                )}
                style={open === i ? { boxShadow: "0 4px 24px rgba(139,92,246,0.08)" } : undefined}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-text-primary leading-snug">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown aria-hidden="true" className="w-4 h-4 text-text-muted" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  )
}
