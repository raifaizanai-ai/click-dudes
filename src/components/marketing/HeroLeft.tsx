"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { HeroBadge } from "@/components/marketing/HeroBadge"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

/* ── Animation Variants ───────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

/* ── Constants ────────────────────────────────────────────────── */

const TRUST_ITEMS = ["1,200+ Publishers", "1.5B+ Monthly Requests", "40+ Countries"]

const MINI_BADGES = [
  "Google AdX",
  "Header Bidding",
  "AI Optimization",
  "Premium Demand",
]

/* ── Component ────────────────────────────────────────────────── */

export function HeroLeft() {
  const prefersReducedMotion = useReducedMotion()
  const container = prefersReducedMotion ? {} : containerVariants
  const item = prefersReducedMotion ? {} : itemVariants

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 lg:gap-8"
    >
      {/* Badge */}
      <motion.div variants={item}>
        <HeroBadge
          showDot
          dotColor="green"
          prefix={<Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />}
        >
          AI-Powered Monetization Platform
        </HeroBadge>
      </motion.div>

      {/* Headline */}
      <motion.div variants={item}>
        <h1 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
            style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.5rem)" }}>
          <span className="block">Turning Clicks</span>
          <span className="block text-gradient-brand">Into Revenue</span>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.div variants={item}>
        <p className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-[500px]">
          AI-powered monetization solutions helping web, app, and CTV publishers
          maximize revenue through Google AdX, Header Bidding, and intelligent
          optimization.
        </p>
      </motion.div>

      {/* CTA Group */}
      <motion.div variants={item}>
        <CTAButtonGroup
          primary={{ label: "Apply For Monetization", href: "/about/contact-us" }}
          secondary={{ label: "Book Revenue Audit", href: "/about/contact-us" }}
          align="left"
          size="lg"
          stackOnMobile
        />
      </motion.div>

      {/* Trust proof */}
      <motion.div
        variants={item}
        className="flex flex-wrap items-center gap-x-3 gap-y-1"
      >
        {TRUST_ITEMS.map((label, i) => (
          <span key={label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-text-muted/40 select-none">·</span>
            )}
            <span className="text-sm text-text-muted">{label}</span>
          </span>
        ))}
      </motion.div>

      {/* Mini product badges */}
      <motion.div variants={item} className="flex flex-wrap gap-2">
        {MINI_BADGES.map((badge) => (
          <span
            key={badge}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-medium",
              "glass border border-brand-purple/[0.15]",
              "text-text-secondary"
            )}
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
