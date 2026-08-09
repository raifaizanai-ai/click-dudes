"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { NavChild } from "@/types"
import { cn } from "@/lib/utils"

const dropdownVariants = {
  hidden:  { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
             transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.04 } },
  exit:    { opacity: 0, y: 10, scale: 0.96,
             transition: { duration: 0.16 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const } },
}

interface NavDropdownProps {
  items:    NavChild[]
  pathname: string
  onClose?: () => void
  nested?:  boolean
}

export function NavDropdown({ items, pathname, onClose, nested = false }: NavDropdownProps) {
  const [openChild, setOpenChild] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openChildMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenChild(label)
  }

  const closeChildMenu = () => {
    closeTimer.current = setTimeout(() => setOpenChild(null), 150)
  }

  return (
    <motion.div
      role="menu"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        "absolute z-[60]",
        nested ? "top-0 right-full mr-2" : "top-full left-1/2 -translate-x-1/2 mt-3",
        "bg-white/92 backdrop-blur-[28px] rounded-2xl p-2",
        "border border-brand-purple/[0.12]",
        "shadow-[0_20px_56px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.08)]",
        items.length > 4 ? "w-72" : "w-60"
      )}
    >
      {/* Top shimmer */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 10%, rgba(139,92,246,0.18) 50%, transparent 90%)" }}
      />

      {items.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        if (item.children) {
          const isOpen = openChild === item.label
          return (
            <motion.div
              key={`${item.label}-${item.href}`}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => openChildMenu(item.label)}
              onMouseLeave={closeChildMenu}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onFocus={() => openChildMenu(item.label)}
                onBlur={closeChildMenu}
                className={cn(
                  "w-full group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left",
                  "transition-all duration-200 focus-ring",
                  isOpen ? "bg-brand-purple/[0.06]" : "hover:bg-brand-purple/[0.06]"
                )}
              >
                {Icon && (
                  <div className={cn(
                    "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",
                    "transition-colors duration-200",
                    "bg-brand-purple/[0.07] text-brand-purple/70 group-hover:bg-brand-purple/12 group-hover:text-brand-purple"
                  )}>
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                )}
                <span className="flex-1 text-[13.5px] font-medium leading-snug text-text-primary group-hover:text-brand-purple transition-colors duration-200">
                  {item.label}
                </span>
                <ChevronRight aria-hidden="true" className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <NavDropdown items={item.children} pathname={pathname} onClose={onClose} nested />
                )}
              </AnimatePresence>
            </motion.div>
          )
        }

        return (
          <motion.div key={`${item.label}-${item.href}`} variants={itemVariants}>
            <Link
              href={item.href}
              role="menuitem"
              aria-current={isActive ? "page" : undefined}
              onClick={onClose}
              className={cn(
                "group flex items-center gap-3 px-3.5 py-2.5 rounded-xl",
                "transition-all duration-200 focus-ring",
                isActive
                  ? "bg-brand-purple/[0.08] text-brand-purple"
                  : "hover:bg-brand-purple/[0.06]"
              )}
            >
              {Icon && (
                <div className={cn(
                  "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center",
                  "transition-colors duration-200",
                  isActive
                    ? "bg-brand-purple/15 text-brand-purple"
                    : "bg-brand-purple/[0.07] text-brand-purple/70 group-hover:bg-brand-purple/12 group-hover:text-brand-purple"
                )}>
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              )}
              <span className={cn(
                "text-[13.5px] font-medium leading-snug transition-colors duration-200",
                isActive ? "text-brand-purple" : "text-text-primary group-hover:text-brand-purple"
              )}>
                {item.label}
              </span>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
