"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"
import { cn } from "@/lib/utils"

/* ── Data ─────────────────────────────────────────────────── */

const FAQS = [
  {
    question: "Do I need 100,000 daily visitors to access Google AdX?",
    answer:   "Direct Google AdX signup requires 5+ million monthly uniques. However, as a certified MCM partner, Click Dudes can sponsor access for publishers with significantly lower traffic — typically 500K+ monthly pageviews. Traffic quality, content compliance, and audience geography matter more than raw volume in our review process.",
  },
  {
    question: "Can I run AdX alongside my existing AdSense account?",
    answer:   "Yes — AdX can run alongside AdSense through proper GAM (Google Ad Manager) configuration. During the transition period we recommend a gradual rollout: starting with your highest-value ad positions under AdX while maintaining AdSense elsewhere. Our team manages this migration to protect revenue continuity throughout.",
  },
  {
    question: "How long does Google AdX approval take?",
    answer:   "The review process typically takes 5–10 business days once your property passes our initial screening. We submit on your behalf through our MCM account, which significantly reduces rejection risk compared to applying directly. We guide you through any policy adjustments needed before submission.",
  },
  {
    question: "What CPM uplift can I realistically expect?",
    answer:   "Our publishers see an average 30–38% RPM increase over their previous AdSense baseline in the first 30 days. Finance, tech, and business verticals in Tier-1 geographies consistently achieve $6–$15 CPMs. Lifestyle and entertainment content typically ranges $3–$9. These are observed ranges — not guarantees — and results depend heavily on traffic geography and content quality.",
  },
  {
    question: "What does Click Dudes charge for AdX management?",
    answer:   "We operate on a transparent revenue share model — no upfront setup fees, no monthly retainers. Our compensation is a percentage of the incremental revenue we generate for you, meaning we only earn when you earn more. The specific rate depends on your traffic volume and content vertical. We discuss this during the initial consultation.",
  },
  {
    question: "What content categories are prohibited from AdX access?",
    answer:   "Google AdX prohibits adult content, illegal content, hate speech, gambling (without proper licensing), pharmaceutical drug advertising, and hacking tools. Sites in gray-area verticals like political content or controversial news may face additional review. We assess your specific content before applying to avoid wasted time.",
  },
] as const

/* ── Motion ───────────────────────────────────────────────── */

const answerVariants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as const } },
}

/* ── Component ───────────────────────────────────────────── */

export function AdxFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section background="base" padding="lg" aria-label="Google AdX frequently asked questions" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-32 right-0" />

      <Container size="md">
        <SectionHeader
          badge="FAQ"
          heading={<>AdX Questions,<br /><GradientText gradient="brand">Honest Answers</GradientText></>}
          subtext="Publisher questions about AdX access, approval timelines, and what to expect. Straight answers."
          align="center"
          subtextWidth="sm"
          className="mb-12"
        />

        <div className="flex flex-col gap-3">
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
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
                  aria-expanded={isOpen}
                >
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
                    <motion.div
                      key="answer"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
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
