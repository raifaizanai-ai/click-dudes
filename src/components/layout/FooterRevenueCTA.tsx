"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

/* ── Data ───────────────────────────────────────────── */

const CTA_STATS = [
  { value: "450+", label: "Publishers"      },
  { value: "50+",  label: "Demand Partners" },
  { value: "+40%", label: "Avg RPM Lift"    },
] as const

const QUALIFIES = ["Google AdX", "Header Bidding", "Premium Demand"] as const

const STATUS_MESSAGES = [
  "Scanning Requirements...",
  "Checking Traffic Quality...",
  "Evaluating Content Policy...",
  "Ready For Assessment",
] as const

/* ── Motion ─────────────────────────────────────────── */

const statusSlide = {
  enter:  { opacity: 0, y: 5 },
  center: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const } },
  exit:   { opacity: 0, y: -5, transition: { duration: 0.18 } },
}

/* ── Component ──────────────────────────────────────── */

export function FooterRevenueCTA() {
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStatusIdx(n => (n + 1) % STATUS_MESSAGES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-3 mb-2.5 flex flex-col gap-2">

      {/* Trust stats */}
      <div className="grid grid-cols-3 gap-1.5">
        {CTA_STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center py-2 rounded-xl bg-white/70 border border-brand-purple/[0.10]">
            <span className="text-[11px] font-bold text-gradient-brand leading-none">{s.value}</span>
            <span className="text-[8px] text-text-muted mt-0.5 text-center leading-tight">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Headline + body */}
      <div className="px-0.5 pt-0.5">
        <p className="text-[12px] font-bold text-text-primary leading-snug">Ready To Grow Revenue?</p>
        <p className="text-[10px] text-text-secondary leading-relaxed mt-0.5">
          See how much more your website, app, or CTV platform could earn with Click Dudes.
        </p>
      </div>

      {/* Primary button */}
      <Link
        href="/about/contact-us"
        className="block text-center text-[11px] font-bold py-2.5 rounded-xl bg-gradient-brand text-white hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_16px_rgba(139,92,246,0.30)]"
      >
        Apply For Monetization
      </Link>

      {/* Secondary button */}
      <Link
        href="/about/contact-us"
        className="block text-center text-[11px] font-semibold py-2 rounded-xl border border-brand-purple/25 text-brand-purple hover:bg-brand-purple/[0.06] hover:border-brand-purple/40 active:scale-[0.98] transition-all duration-150"
      >
        Talk To Our Team
      </Link>

      {/* ── ClickBot™ Eligibility Recommendation ── */}
      <div className="rounded-2xl border border-brand-purple/[0.22] bg-brand-purple/[0.05] overflow-hidden">

        {/* Card header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-brand-purple/[0.12] bg-brand-purple/[0.04]">
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px]" aria-hidden="true">🤖</span>
            <span className="text-[9.5px] font-bold text-brand-purple">ClickBot™</span>
            <span className="text-[8.5px] text-text-muted">Recommendation</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 animate-[ping-slow_1.5s_ease-out_infinite]"
              aria-hidden="true"
            />
            <span className="text-[7.5px] font-bold text-brand-green tracking-wider">AI READY</span>
          </div>
        </div>

        {/* Card body */}
        <div className="px-3 pt-2.5 pb-3">
          <p className="text-[9.5px] text-text-secondary mb-2">
            Your website may qualify for:
          </p>

          <ul className="flex flex-col gap-1.5 mb-2.5">
            {QUALIFIES.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 aria-hidden="true" className="w-2.5 h-2.5 text-brand-green flex-shrink-0" />
                <span className="text-[9.5px] font-semibold text-text-primary">{item}</span>
              </li>
            ))}
          </ul>

          {/* Rotating status message */}
          <div className="h-4 overflow-hidden mb-2.5">
            <AnimatePresence mode="wait">
              <motion.p
                key={statusIdx}
                variants={statusSlide}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-[8.5px] font-medium text-brand-purple"
              >
                {STATUS_MESSAGES[statusIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Primary eligibility CTA */}
          <Link
            href="/publisher-solutions/monetization-eligibility-criteria"
            className="flex items-center justify-center gap-1.5 text-[11px] font-bold py-2.5 rounded-xl bg-gradient-brand text-white hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_16px_rgba(139,92,246,0.28)] focus-ring"
          >
            Run Eligibility Check
            <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  )
}
