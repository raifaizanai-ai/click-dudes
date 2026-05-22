"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQ {
  q: string
  a: string
}

interface ArticleFAQsProps {
  faqs: FAQ[]
}

export function ArticleFAQs({ faqs }: ArticleFAQsProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="my-10 not-prose">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center border border-brand-purple/[0.15]">
          <HelpCircle className="w-4 h-4 text-brand-purple" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl border overflow-hidden transition-all duration-300",
              open === i
                ? "glass-strong border-brand-purple/[0.18] shadow-[0_4px_20px_rgba(139,92,246,0.08)]"
                : "glass border-brand-purple/[0.08]"
            )}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus-ring rounded-2xl"
            >
              <span className="font-semibold text-text-primary text-[15px] leading-snug">
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex-shrink-0 text-brand-purple"
              >
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed text-pretty">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
