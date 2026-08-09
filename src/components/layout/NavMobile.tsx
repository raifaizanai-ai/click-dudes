"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { NAV_LINKS } from "@/lib/constants"
import { NavMobileAccordionItem } from "@/components/layout/NavMobileAccordionItem"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavMobileProps {
  id: string
  open: boolean
  onClose: () => void
}

export function NavMobile({ id, open, onClose }: NavMobileProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ─────────────────────────────── */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-brand-navy/12 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* ── Floating menu card ──────────────────── */}
          <motion.nav
            id={id}
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,   scale: 1 }}
            exit={{ opacity: 0,   y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "fixed top-[92px] sm:top-[100px] md:top-[102px] inset-x-3 sm:inset-x-4 z-40 lg:hidden",
              "bg-white/94 backdrop-blur-[28px]",
              "rounded-2xl border border-brand-purple/[0.14]",
              "shadow-[0_20px_60px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.10)]",
              "overflow-hidden overflow-y-auto max-h-[calc(100dvh-96px)] sm:max-h-[calc(100dvh-104px)]"
            )}
          >
            {/* Top shimmer line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.90) 40%, rgba(139,92,246,0.18) 70%, transparent 90%)",
              }}
            />

            <div className="flex flex-col px-3 py-3 gap-0.5">
              {NAV_LINKS.map((item) => (
                <NavMobileAccordionItem key={item.label} item={item} pathname={pathname} onClose={onClose} />
              ))}

              {/* ── CTA ── */}
              <div className="mt-2 pt-3 border-t border-brand-purple/[0.08]">
                <a
                  href="https://partners.clickdudes.com/partner/login"
                  onClick={onClose}
                  className={cn(
                    buttonVariants({ variant: "glow", size: "md" }),
                    "w-full justify-center"
                  )}
                >
                  Access Partners Dashboard
                </a>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
