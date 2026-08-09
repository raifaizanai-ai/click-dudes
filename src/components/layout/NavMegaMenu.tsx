"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { NavChild } from "@/types"
import { cn } from "@/lib/utils"

/* ── Motion variants ─────────────────────────────────────── */

const menuVariants = {
  hidden:  { opacity: 0, y: 10, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.04 } },
  exit:    { opacity: 0, y: 10, scale: 0.97,
    transition: { duration: 0.16 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const } },
}

/* ── Component ───────────────────────────────────────────── */

interface NavMegaMenuProps {
  items:            NavChild[]
  pathname:         string
  onClose?:         () => void
  menuTitle?:       string
  menuSubtitle?:    string
  footerText?:      string
  footerCTALabel?:  string
  footerCTAHref?:   string
}

export function NavMegaMenu({
  items,
  pathname,
  onClose,
  menuTitle      = "Publisher Solutions",
  menuSubtitle   = "AI-powered revenue tools for every publisher type",
  footerText     = "450+ Publishers trust Click Dudes",
  footerCTALabel = "Get Started",
  footerCTAHref  = "/about/contact-us",
}: NavMegaMenuProps) {
  return (
    <motion.div
      role="menu"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] z-[60] pointer-events-auto",
        "bg-white/94 backdrop-blur-[32px] rounded-2xl p-5",
        "border border-brand-purple/[0.13]",
        "shadow-[0_24px_64px_rgba(7,17,47,0.11),0_0_0_1px_rgba(139,92,246,0.09)]",
      )}
    >
      {/* Top shimmer */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 10%, rgba(139,92,246,0.20) 50%, transparent 90%)" }}
      />

      {/* Header */}
      <div className="mb-4 pb-3 border-b border-brand-purple/[0.08]">
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-purple/70">
          {menuTitle}
        </p>
        <p className="text-[12px] text-text-muted mt-0.5">
          {menuSubtitle}
        </p>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <motion.div key={`${item.label}-${item.href}`} variants={itemVariants}>
              <Link
                href={item.href}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                onClick={onClose}
                className={cn(
                  "group flex items-start gap-3 px-3.5 py-3 rounded-xl",
                  "transition-all duration-200 focus-ring",
                  isActive
                    ? "bg-brand-purple/[0.08] text-brand-purple"
                    : "hover:bg-brand-purple/[0.06]"
                )}
              >
                {Icon && (
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5",
                    "transition-colors duration-200",
                    isActive
                      ? "bg-brand-purple/15 text-brand-purple"
                      : "bg-brand-purple/[0.07] text-brand-purple/70 group-hover:bg-brand-purple/12 group-hover:text-brand-purple"
                  )}>
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className={cn(
                    "text-[13.5px] font-semibold leading-snug transition-colors duration-200",
                    isActive ? "text-brand-purple" : "text-text-primary group-hover:text-brand-purple"
                  )}>
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="text-[11.5px] text-text-muted leading-snug mt-0.5 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Footer CTA strip */}
      <div className="mt-4 pt-3 border-t border-brand-purple/[0.08] flex items-center justify-between">
        <p className="text-[11px] text-text-muted">
          {footerText}
        </p>
        <Link
          href={footerCTAHref}
          className="text-[12px] font-semibold text-brand-purple hover:text-brand-violet transition-colors duration-150 focus-ring rounded"
        >
          {footerCTALabel} →
        </Link>
      </div>
    </motion.div>
  )
}
