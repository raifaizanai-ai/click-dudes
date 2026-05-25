"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { SiteLogo } from "@/components/shared/SiteLogo"
import { NavMobile } from "@/components/layout/NavMobile"
import { NavMegaMenu } from "@/components/layout/NavMegaMenu"
import { NavDropdown } from "@/components/layout/NavDropdown"
import { buttonVariants } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

/* ── Animation Variants ─────────────────────────────────── */

const entranceVariants = {
  hidden:  { opacity: 0, y: -20, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 },
  },
}

/* ── Nav link style tokens ──────────────────────────────── */

const NAV_BASE    = "px-3.5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 focus-ring"
const NAV_ACTIVE  = "text-brand-purple bg-brand-purple/[0.06] shadow-[inset_0_0_0_1px_rgba(139,92,246,0.09)]"
const NAV_DEFAULT = "text-text-secondary hover:text-brand-purple hover:bg-brand-purple/[0.05]"

/* ── Component ──────────────────────────────────────────── */

export function Navbar() {
  const pathname                         = usePathname()
  const [scrolled,        setScrolled]       = useState(false)
  const [mobileOpen,      setMobileOpen]     = useState(false)
  const [activeDropdown,  setActiveDropdown] = useState<string | null>(null)
  const closeTimer                           = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }, [])

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (activeDropdown) setActiveDropdown(null)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [activeDropdown])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <>
      {/* ── Fixed shell — transparent, full-width ───────────── */}
      <header
        role="banner"
        className="fixed top-0 inset-x-0 z-50 pt-5 pointer-events-none"
      >
        {/* Ambient atmosphere above pill */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 85% at 50% -5%, rgba(139,92,246,0.08), transparent 70%), " +
              "radial-gradient(ellipse 40% 55% at 28% -8%, rgba(96,165,250,0.05), transparent 62%)",
          }}
        />

        {/* ── Floating glass pill ─────────────────────────── */}
        <motion.div
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            "relative pointer-events-auto",
            "mx-auto w-[92%] max-w-[1220px]",
            "flex items-center h-[68px] sm:h-[76px] md:h-[80px] px-4 sm:px-5 md:px-6 gap-3 sm:gap-4",
            "rounded-full transition-all duration-500",
            scrolled
              ? "bg-white/62 backdrop-blur-[48px] border border-white/48 shadow-[0_20px_56px_rgba(7,17,47,0.09),0_4px_12px_rgba(7,17,47,0.05),0_0_0_1px_rgba(139,92,246,0.09),inset_0_1px_0_rgba(255,255,255,0.92)]"
              : "bg-white/50 backdrop-blur-[36px] border border-white/40 shadow-[0_4px_24px_rgba(7,17,47,0.06),0_1px_4px_rgba(7,17,47,0.03),0_0_0_1px_rgba(255,255,255,0.26),inset_0_1px_0_rgba(255,255,255,0.80)]"
          )}
        >
          {/* Top-edge light catch — simulates 3D glass surface */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 4%, rgba(255,255,255,0.90) 26%, rgba(139,92,246,0.15) 64%, transparent 96%)",
            }}
          />

          {/* ── Logo ── */}
          <div className="flex-shrink-0">
            <SiteLogo context="navbar" priority />
          </div>

          {/* ── Desktop navigation ── */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((c) => pathname === c.href)

              if (item.children) {
                const isOpen = activeDropdown === item.label
                return (
                  <div
                    key={item.label}
                    className="relative pb-3 -mb-3"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      className={cn(
                        "flex items-center gap-1",
                        NAV_BASE,
                        isActive ? NAV_ACTIVE : NAV_DEFAULT,
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "w-3 h-3 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        item.megaMenu
                          ? <NavMegaMenu
                              items={item.children}
                              pathname={pathname}
                              onClose={() => setActiveDropdown(null)}
                              menuTitle={item.megaMenuTitle}
                              menuSubtitle={item.megaMenuSub}
                              footerText={item.megaMenuFooterText}
                              footerCTALabel={item.megaMenuCTALabel}
                              footerCTAHref={item.megaMenuCTAHref}
                            />
                          : <NavDropdown items={item.children} pathname={pathname} onClose={() => setActiveDropdown(null)} />
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(NAV_BASE, isActive ? NAV_ACTIVE : NAV_DEFAULT)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA — glow pill with shine sweep ── */}
          <Link
            href="/apply"
            className={cn(
              buttonVariants({ variant: "glow", size: "sm" }),
              "hidden lg:inline-flex ml-auto shrink-0",
              "relative overflow-hidden group rounded-full text-[14px] px-5",
              "hover:-translate-y-px"
            )}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%)" }}
            />
            Apply For Monetization
          </Link>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className={cn(
              "lg:hidden ml-auto p-2.5 rounded-full transition-all duration-300 focus-ring",
              "text-text-primary hover:text-brand-purple hover:bg-brand-purple/[0.06]"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -80 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 80 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {mobileOpen
                  ? <X    className="w-5 h-5" aria-hidden="true" />
                  : <Menu className="w-5 h-5" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>

        </motion.div>

        {/* Below-pill bloom — purple + cyan layer */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[14%] top-[100px] h-5 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.13), transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-[30%] top-[102px] h-3 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(103,232,249,0.08), transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </header>

      {/* Spacer — 20px top gap + pill height + 6px breathing */}
      <div className="h-[96px] sm:h-[102px] md:h-[106px]" aria-hidden="true" />

      {/* Mobile nav panel */}
      <NavMobile
        id="mobile-nav"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
