"use client"

import { useEffect, useState } from "react"
import type { LegalSectionData } from "@/lib/legal/types"
import { cn } from "@/lib/utils"

interface LegalTableOfContentsProps {
  sections: LegalSectionData[]
}

export function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      {/* Desktop: sticky section nav */}
      <nav aria-label="Table of contents" className="hidden lg:block sticky top-28 self-start max-h-[70vh] overflow-y-auto pr-2">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-text-muted mb-3">On This Page</p>
        <ul className="flex flex-col gap-0.5 border-l border-[rgba(7,17,47,0.08)]">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "block pl-3.5 py-1.5 -ml-px border-l-2 text-[13px] leading-snug transition-colors duration-150 focus-ring",
                  activeId === s.id
                    ? "border-brand-purple text-brand-purple font-semibold"
                    : "border-transparent text-text-muted hover:text-text-secondary"
                )}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: jump menu */}
      <div className="lg:hidden mb-6">
        <label htmlFor="legal-jump-menu" className="sr-only">Jump to section</label>
        <select
          id="legal-jump-menu"
          value={activeId}
          onChange={(e) => {
            const el = document.getElementById(e.target.value)
            el?.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
          className="w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-white border border-[rgba(7,17,47,0.10)] focus-ring"
        >
          {sections.map((s) => (
            <option key={s.id} value={s.id}>{String(s.number).padStart(2, "0")}. {s.title}</option>
          ))}
        </select>
      </div>
    </>
  )
}
