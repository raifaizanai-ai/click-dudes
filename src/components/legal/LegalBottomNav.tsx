import Link from "next/link"
import { LEGAL_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface LegalBottomNavProps {
  currentHref: string
}

export function LegalBottomNav({ currentHref }: LegalBottomNavProps) {
  return (
    <nav aria-label="Legal pages" className="flex items-center justify-center gap-2 mt-10">
      {LEGAL_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-ring",
            link.href === currentHref
              ? "bg-brand-purple/10 text-brand-purple"
              : "text-text-muted hover:text-text-secondary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
