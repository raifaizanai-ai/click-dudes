"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Handshake, LayoutDashboard, Network, ArrowRight } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { FooterLaptopMockup } from "@/components/layout/FooterLaptopMockup"

const panelVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.13 },
  }),
}

export function FooterPartnerCard() {
  return (
    <motion.div
      custom={2} variants={panelVariants} initial="hidden"
      whileInView="visible" viewport={{ once: true, margin: "-40px" }}
      className="glass-elevated rounded-3xl p-4 sm:p-5 flex flex-col gap-2 h-full"
      style={{ boxShadow: "0 32px 80px rgba(7,17,47,0.12), 0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.97)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
            <Network aria-hidden="true" className="w-4 h-4 text-brand-purple" />
          </div>
          <p className="text-[11px] font-bold tracking-widest uppercase text-brand-purple">Click-Dudes Partner Network</p>
        </div>
        <RobotImage variant="wave" size="xs" glowColor="purple" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-text-primary tracking-tight">Grow With Click-Dudes</h3>
        <p className="text-[12.5px] text-text-secondary leading-snug mt-1">
          Submit publishers, track opportunities and manage your partnership from one connected ecosystem.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Link
          href="/become-a-partner"
          className="flex items-center justify-center gap-2 text-[13px] font-bold py-2 rounded-xl bg-gradient-brand text-white hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_16px_rgba(139,92,246,0.30)]"
        >
          <Handshake aria-hidden="true" className="w-3.5 h-3.5" />
          Become a Partner
        </Link>
        <a
          href="https://partners.clickdudes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-[13px] font-semibold py-2 rounded-xl border border-brand-purple/25 text-brand-purple hover:bg-brand-purple/[0.06] hover:border-brand-purple/40 active:scale-[0.98] transition-all duration-150"
        >
          <LayoutDashboard aria-hidden="true" className="w-3.5 h-3.5" />
          Access Partner Dashboard
        </a>
      </div>

      <Link
        href="/partner-dashboard"
        className="flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-text-muted hover:text-brand-purple transition-colors duration-200"
      >
        Explore Partner Dashboard
        <ArrowRight aria-hidden="true" className="w-3 h-3" />
      </Link>

      <div className="flex-1 flex items-end min-h-0">
        <FooterLaptopMockup />
      </div>
    </motion.div>
  )
}
