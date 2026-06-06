"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FooterAICard } from "@/components/layout/FooterAICard"
import { SiteLogo } from "@/components/shared/SiteLogo"
import { Divider } from "@/components/shared/Divider"
import { RobotImage } from "@/components/shared/RobotImage"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LiveDot } from "@/components/shared/LiveDot"
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/constants"
import { STATS } from "@/lib/stats"

/* ── Motion variants ─────────────────────────────────────── */

const panelVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.13 },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Site footer" className="relative overflow-hidden footer-premium-animated">

      {/* ── Atmospheric layers ──────────────────────────── */}
      <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.18} animate className="-top-32 -left-32" />
      <GradientOrb color="violet" size="lg"  blur="xl"  opacity={0.13}        className="top-1/2 -right-24 -translate-y-1/2" />
      <GradientOrb color="cyan"   size="md"  blur="xl"  opacity={0.11}        className="bottom-16 left-1/3" />
      <GradientOrb color="blue"   size="sm"  blur="xl"  opacity={0.09}        className="top-1/4 left-2/3" />
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.18]" />
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(139,92,246,0.10) 30%, rgba(103,232,249,0.08) 70%, transparent 100%)" }} />
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-56 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139,92,246,0.10) 0%, transparent 100%)" }} />

      <Container>
        {/* ══════════════════════════════════════════════
            Three-panel grid, 28 / 42 / 30 proportions
        ══════════════════════════════════════════════ */}
        <div className="pt-10 sm:pt-16 pb-8 sm:pb-10 grid grid-cols-1 lg:grid-cols-[1.35fr_2fr_1.45fr] gap-5 sm:gap-6 items-stretch">

          {/* ─── LEFT: Brand + Rocket hero ─────────────── */}
          <motion.div
            custom={0} variants={panelVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            className="glass-elevated rounded-3xl p-5 sm:p-7 flex flex-col items-start text-left overflow-hidden"
            style={{ boxShadow: "0 32px 80px rgba(7,17,47,0.12), 0 0 0 1px rgba(139,92,246,0.13), inset 0 1px 0 rgba(255,255,255,0.97)" }}
          >
            <div className="self-start mb-4"><SiteLogo context="footer" /></div>
            {/* Tagline */}
            <p className="text-sm font-bold text-text-primary tracking-tight leading-tight mb-2.5">
              Turning Clicks Into Revenue™
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-1.5 mb-3">
              {(["Google AdX", "Header Bidding", "Premium Demand", "AI Optimization"] as const).map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-purple flex-shrink-0" aria-hidden="true" />
                  <span className="text-[13px] text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing line */}
            <p className="text-[11px] text-text-muted mb-5 leading-snug">
              Built for publishers, apps, and CTV platforms.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <FooterSocialLink href="https://x.com/ClickDudes"                            label="X"        icon={<TwitterIcon />}   />
              <FooterSocialLink href="https://www.linkedin.com/company/clickdudes"          label="LinkedIn" icon={<LinkedInIcon />}  />
              <FooterSocialLink href="https://facebook.com/ClickDudesOfficial"             label="Facebook" icon={<FacebookIcon />}  />
            </div>
            {/* Rocket robot — primary hero visual */}
            <div className="flex-1 flex items-end justify-center w-full pt-2">
              <RobotImage variant="rocket" size="lg" floatDelay={0.3} glowColor="violet" />
            </div>
          </motion.div>

          {/* ─── CENTER: Navigation panel ──────────────── */}
          <motion.div
            custom={1} variants={panelVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            className="glass rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col"
            style={{ boxShadow: "0 20px 60px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.92)" }}
          >
            {/* Top header row */}
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-brand-purple/[0.10]">
              <p className="text-sm font-bold text-text-primary tracking-tight">Site Navigation</p>
              <LiveDot color="purple" size="sm" label="Always on" />
            </div>

            {/* 2×2 navigation grid — single column on very small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.heading} className="flex flex-col gap-3">
                  <p className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wide text-brand-purple">
                    {col.heading}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[13px] sm:text-[14px] text-text-secondary hover:text-brand-purple transition-colors duration-200 focus-ring rounded"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom trust badge row */}
            <div className="mt-auto pt-5 border-t border-brand-purple/[0.10] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-text-primary">{STATS.publishers}</span>
                <span className="text-xs text-text-muted">Publishers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-text-muted">GCPP Verified Partners Network</span>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: ClickBot™ AI Agent ─────────────── */}
          <FooterAICard />

        </div>

        <Divider />

        {/* Copyright row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted order-2 sm:order-1">
            © {year} Click Dudes, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors focus-ring rounded">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  )
}

/* ── Internal sub-components ─────────────────────────────── */

interface FooterSocialLinkProps { href: string; label: string; icon: React.ReactNode }

function FooterSocialLink({ href, label, icon }: FooterSocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      aria-label={`Follow Click Dudes on ${label}`}
      className="p-2.5 rounded-xl text-text-muted hover:text-brand-purple bg-transparent hover:bg-brand-purple/[0.08] border border-transparent hover:border-brand-purple/[0.18] hover:shadow-[0_4px_20px_rgba(139,92,246,0.18)] transition-all duration-200 focus-ring">
      {icon}
    </a>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}
