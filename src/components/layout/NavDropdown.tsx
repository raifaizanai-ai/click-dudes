"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
}

export function NavDropdown({ items, pathname, onClose }: NavDropdownProps) {
  return (
    <motion.div
      role="menu"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[60]",
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

        return (
          <motion.div key={item.href} variants={itemVariants}>
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
