"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { NAV_LINKS } from "@/lib/constants"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavMobileProps {
  id: string
  open: boolean
  onClose: () => void
}

export function NavMobile({ id, open, onClose }: NavMobileProps) {
  const pathname = usePathname()
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const toggleAccordion = (label: string) =>
    setActiveAccordion((prev) => (prev === label ? null : label))

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
              "fixed top-[102px] inset-x-4 z-40 lg:hidden",
              "bg-white/94 backdrop-blur-[28px]",
              "rounded-2xl border border-brand-purple/[0.14]",
              "shadow-[0_20px_60px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.10)]",
              "overflow-hidden overflow-y-auto max-h-[calc(100dvh-100px)]"
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
              {NAV_LINKS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  item.children?.some((c) => pathname === c.href)

                /* ── Item with children ── */
                if (item.children) {
                  const isOpen = activeAccordion === item.label
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleAccordion(item.label)}
                        aria-expanded={isOpen}
                        className={cn(
                          "w-full flex items-center justify-between",
                          "px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                          isActive
                            ? "text-brand-purple bg-brand-purple/[0.09]"
                            : "text-text-secondary hover:text-brand-purple hover:bg-brand-purple/[0.07]"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 py-1 flex flex-col gap-0.5">
                              {item.children.map((child) => {
                                const Icon = child.icon
                                const isChildActive = pathname === child.href
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    aria-current={isChildActive ? "page" : undefined}
                                    className={cn(
                                      "flex items-start gap-2.5 px-3 py-2.5 rounded-xl",
                                      "text-[13px] transition-all duration-200 focus-ring",
                                      isChildActive
                                        ? "text-brand-purple font-medium bg-brand-purple/[0.07]"
                                        : "text-text-muted hover:text-brand-purple hover:bg-brand-purple/[0.07]"
                                    )}
                                  >
                                    {Icon && (
                                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-brand-purple/[0.07] flex items-center justify-center mt-0.5">
                                        <Icon className="w-3.5 h-3.5 text-brand-purple/70" aria-hidden="true" />
                                      </div>
                                    )}
                                    <div className="min-w-0">
                                      <p className="font-medium leading-snug">{child.label}</p>
                                      {child.description && (
                                        <p className="text-[11px] text-text-muted/80 mt-0.5 leading-snug line-clamp-1">
                                          {child.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                /* ── Regular link ── */
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                      isActive
                        ? "text-brand-purple bg-brand-purple/[0.09]"
                        : "text-text-secondary hover:text-brand-purple hover:bg-brand-purple/[0.07]"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {/* ── CTA ── */}
              <div className="mt-2 pt-3 border-t border-brand-purple/[0.08]">
                <Link
                  href="/apply"
                  onClick={onClose}
                  className={cn(
                    buttonVariants({ variant: "glow", size: "md" }),
                    "w-full justify-center"
                  )}
                >
                  Apply For Monetization
                </Link>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
