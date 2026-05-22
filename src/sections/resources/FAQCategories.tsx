"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const } },
}

interface FAQItem { question: string; answer: string }
interface FAQCategory { id: string; label: string; questions: FAQItem[] }

const CATEGORIES: FAQCategory[] = [
  {
    id: "general", label: "General",
    questions: [
      { question: "What is Click Dudes?", answer: "Click Dudes is a Google Certified Publishing Partner (GCPP) providing AI-powered ad monetization for web, app, and CTV publishers. We provide access to Google AdX, header bidding, premium demand partners, and managed AI optimization." },
      { question: "What traffic requirements do I need?", answer: "We work with publishers generating 500K+ monthly pageviews (web/app) or 250K+ monthly impressions (CTV). Traffic must originate from Tier-1 or Tier-2 geos and be brand-safe. Quality matters more than raw volume." },
      { question: "How long does onboarding take?", answer: "Most publishers are fully live within 3–7 business days after approval. This includes AdX tag integration, header bidding wrapper, and initial AI calibration. No developer required on your end." },
      { question: "Do I need to sign a long-term contract?", answer: "No long-term contracts. We operate on rolling agreements — give us 30 days notice and you can exit. We prefer publishers stay because of the results, not because they're locked in." },
    ],
  },
  {
    id: "web", label: "Web Publishers",
    questions: [
      { question: "How much more can I earn vs AdSense?", answer: "Most web publishers see 40–80% revenue lift in the first 90 days. The improvement comes from multiple sources: AdX access (higher floor CPMs), header bidding competition, and AI-optimized floor prices that capture more value on each impression." },
      { question: "Will adding more demand partners hurt page speed?", answer: "No. Our header bidding implementation uses asynchronous loading and timeout controls that prevent ad latency from impacting your Core Web Vitals. We run Lighthouse audits as part of every onboarding." },
      { question: "Can I keep some AdSense placements?", answer: "Yes. We can run AdX and AdSense in a unified auction, or migrate placements selectively. Our team recommends the optimal configuration based on your layout and traffic patterns." },
    ],
  },
  {
    id: "app", label: "App Publishers",
    questions: [
      { question: "Which platforms and SDKs do you support?", answer: "We support iOS, Android, and Unity. Our mediation stack is compatible with Google AdMob, MAX (AppLovin), Prebid Mobile, and all major mediation adapters. Integration typically takes 1–3 days with our SDK guides." },
      { question: "What's the average eCPM improvement for apps?", answer: "App publishers on our network see an average of 70–120% eCPM improvement within 60 days. Rewarded video and interstitial formats consistently outperform banner by 5–15x in eCPM, and our AI optimizes bid floors for each." },
      { question: "Do you support rewarded ads?", answer: "Yes — rewarded video is one of our highest-performing formats. We manage demand fill, creative quality, and reward timing to maximize both revenue and user experience metrics like retention and session length." },
    ],
  },
  {
    id: "adx", label: "Google AdX",
    questions: [
      { question: "What is Google AdX and why is it better than AdSense?", answer: "Google AdX is the enterprise programmatic exchange that powers Google's premium publisher marketplace. Unlike AdSense (which only uses GDN demand), AdX connects you to 500+ DSPs, private marketplace deals, and preferred deal buyers. Average web CPMs are 2–4x higher than AdSense." },
      { question: "How do I get Google AdX as a publisher?", answer: "AdX requires a Google Certified Publishing Partner — which Click Dudes is. We review your property, submit for approval through our managed partner account, and handle the technical integration. AdX approval typically takes 5–10 business days." },
      { question: "Are there AdX-specific policy requirements?", answer: "Yes. AdX has stricter content policies than AdSense, particularly around adult content, copyright, and user-generated content. Our compliance team reviews your property before submission and guides you through any required changes." },
    ],
  },
  {
    id: "payments", label: "Payments",
    questions: [
      { question: "When do I receive my first payment?", answer: "Payments are issued on a NET-30 basis after each calendar month closes. January revenue is paid in late February. We support bank wire, ACH (US), and PayPal. Minimum payout threshold is $100." },
      { question: "What percentage does Click Dudes take?", answer: "We charge a revenue share on managed yield — this covers AdX partner fees, header bidding infrastructure, and managed service. Our rate is disclosed clearly during onboarding. Publishers consistently net more even after our fee versus managing AdSense alone." },
      { question: "Can I get accelerated payments?", answer: "High-volume publishers (earning $5,000+ monthly) can arrange bi-weekly payment schedules at no extra cost. Enterprise partners with $25,000+ monthly revenue can discuss NET-15 terms." },
    ],
  },
]

export function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0]

  const handleCategory = (id: string) => {
    setActiveCategory(id)
    setOpenIndex(null)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {CATEGORIES.map((cat) => (
          <button key={cat.id} role="tab" aria-selected={activeCategory === cat.id}
            onClick={() => handleCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40",
              activeCategory === cat.id
                ? "bg-brand-purple text-white shadow-sm"
                : "glass border border-brand-purple/[0.12] text-text-secondary hover:border-brand-purple/30"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <AnimatePresence mode="wait">
        <motion.div key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          {currentCat.questions.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}
                className={cn(
                  "glass-strong rounded-2xl border overflow-hidden transition-[border-color] duration-300",
                  isOpen ? "border-brand-purple/[0.22]" : "border-brand-purple/[0.10]"
                )}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
                >
                  <span className="text-sm font-semibold text-text-primary leading-snug">{faq.question}</span>
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
                    <motion.div key="answer" variants={answerVariants}
                      initial="hidden" animate="visible" exit="exit" className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
