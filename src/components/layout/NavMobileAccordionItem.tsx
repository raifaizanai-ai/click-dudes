"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import type { NavChild, NavLink } from "@/types"
import { cn } from "@/lib/utils"

const isExternalHref = (href: string) => href.startsWith("http")

const isDescendantActive = (item: NavLink | NavChild, pathname: string): boolean =>
  pathname === item.href || (item.children?.some((c) => isDescendantActive(c, pathname)) ?? false)

interface NavMobileAccordionItemProps {
  item:     NavLink | NavChild
  pathname: string
  onClose:  () => void
  depth?:   number
}

export function NavMobileAccordionItem({ item, pathname, onClose, depth = 0 }: NavMobileAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = "icon" in item ? item.icon : undefined
  const isActive = isDescendantActive(item, pathname)
  const isTopLevel = depth === 0

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className={cn(
            "w-full flex items-start transition-all duration-200 focus-ring rounded-xl text-left",
            isTopLevel
              ? "items-center justify-between px-4 py-2.5 text-sm font-medium"
              : "gap-2.5 px-3 py-2.5 text-[13px]",
            isActive
              ? "text-brand-purple bg-brand-purple/[0.09]"
              : cn(isTopLevel ? "text-text-secondary" : "text-text-muted", "hover:text-brand-purple hover:bg-brand-purple/[0.07]")
          )}
        >
          {!isTopLevel && Icon && (
            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-brand-purple/[0.07] flex items-center justify-center mt-0.5">
              <Icon className="w-3.5 h-3.5 text-brand-purple/70" aria-hidden="true" />
            </div>
          )}
          <span className={cn(isTopLevel ? "" : "min-w-0 flex-1 font-medium leading-snug mt-0.5")}>{item.label}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "flex-shrink-0 transition-transform duration-200",
              isTopLevel ? "w-4 h-4" : "w-3.5 h-3.5 mt-0.5",
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
                {item.children.map((child) => (
                  <NavMobileAccordionItem
                    key={child.label}
                    item={child}
                    pathname={pathname}
                    onClose={onClose}
                    depth={depth + 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const description = "description" in item ? item.description : undefined
  const external = isExternalHref(item.href)

  const linkClassName = cn(
    "transition-all duration-200 focus-ring rounded-xl",
    isTopLevel
      ? "px-4 py-2.5 text-sm font-medium"
      : "flex items-start gap-2.5 px-3 py-2.5 text-[13px]",
    isActive
      ? cn("text-brand-purple font-medium", isTopLevel ? "bg-brand-purple/[0.09]" : "bg-brand-purple/[0.07]")
      : cn(isTopLevel ? "text-text-secondary" : "text-text-muted", "hover:text-brand-purple hover:bg-brand-purple/[0.07]")
  )

  const content = (
    <>
      {!isTopLevel && Icon && (
        <div className="flex-shrink-0 w-6 h-6 rounded-md bg-brand-purple/[0.07] flex items-center justify-center mt-0.5">
          <Icon className="w-3.5 h-3.5 text-brand-purple/70" aria-hidden="true" />
        </div>
      )}
      {isTopLevel ? (
        item.label
      ) : (
        <div className="min-w-0">
          <p className="font-medium leading-snug">{item.label}</p>
          {description && (
            <p className="text-[11px] text-text-muted/80 mt-0.5 leading-snug line-clamp-1">
              {description}
            </p>
          )}
        </div>
      )}
    </>
  )

  if (external) {
    return (
      <a href={item.href} onClick={onClose} className={linkClassName}>
        {content}
      </a>
    )
  }

  return (
    <Link href={item.href} onClick={onClose} aria-current={pathname === item.href ? "page" : undefined} className={linkClassName}>
      {content}
    </Link>
  )
}
